require('dotenv').config();
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

const connections = new Map();

wss.on('connection', (ws) => {
    const requestId = Math.random().toString(36).substring(7);
    connections.set(requestId, ws);

    ws.on('close', () => {
        connections.delete(requestId);
    });
    ws.send(JSON.stringify({ type: 'requestId', requestId }));
});

app.get('/', (req, res) => {
    res.send('Hello World');    
});

app.post('/chat', async (req, res) => {
    const { input_value, requestId } = req.body;
    const ws = connections.get(requestId);

    if (!ws) {
        return res.status(400).json({ error: 'WebSocket connection not found' });
    }

    try {
        
        const response = await fetch(
            "http://127.0.0.1:7860/api/v1/run/bcbaec80-37b9-4130-8440-540b43b0a2ec?stream=false",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${process.env.APPLICATION_TOKEN}`,
                    "Content-Type": "application/json",
                    "x-api-key": process.env.API_KEY 
                },
                body: JSON.stringify({
                    input_value,
                    output_type: "chat",
                    input_type: "chat",
                    tweaks: {
                        "GoogleGenerativeAIModel-R2Wqq": {},
                        "Google Generative AI Embeddings-qhMot": {},
                        "AstraDB-kQsI2": {},
                        "File-A0uFm": {},
                        "ChatInput-iZVAl": {},
                        "Prompt-i9ist": {},
                        "ParseData-H0qC4": {},
                        "Memory-EkmSz": {},
                        "TextInput-Dxb47": {},
                        "ChatOutput-rWCTQ": {},
                        "SplitText-qH7ZI": {}
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error(`LangFlow API error: ${response.statusText}`);
        }

        const data = await response.json();
        const message = data.outputs?.[0]?.outputs?.[0]?.results?.message?.text || "No message received";

        // Send the response back to the WebSocket client
        ws.send(JSON.stringify({ type: 'response', message }));
        res.json({ status: 'Processing' });
    } catch (error) {
        ws.send(JSON.stringify({ type: 'error', message: error.message }));
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});