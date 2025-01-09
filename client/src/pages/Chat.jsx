import React, { useState, useEffect, useCallback } from "react";
import { MessageCircle, Send, Loader2, Moon, Sun } from "lucide-react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const ChatClient = () => {
  // Your existing state and hooks
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ws, setWs] = useState(null);
  const [requestId, setRequestId] = useState(null);
  const [error, setError] = useState(null);

  // Pie Chart Data
  const pieData = {
    labels: ["Static ", "Reels", "Carousels"],
    datasets: [
      {
        label: "Post Types",
        data: [4, 6, 8],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Bar Chart Data
  const barData = {
    labels: ["Facebook", "Instagram", "Twitter"],
    datasets: [
      {
        label: "Engagements",
        data: [3208, 3198, 2882],
        backgroundColor: ["#409E0F", "#1A2439", "#AA0404"],
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Daily Impressions",
        data: [1200, 1900, 3000, 5000, 2000],
        fill: false,
        borderColor: "#409E0F",
      },
    ],
  };

  useEffect(() => {
    const wsConnection = new WebSocket(
      "wss://8f07-13-51-196-191.ngrok-free.app"
    );
    wsConnection.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "requestId") {
        setRequestId(data.requestId);
      } else if (data.type === "response") {
        setMessages((prev) => [
          ...prev,
          { text: data.message, type: "response" },
        ]);
        setIsLoading(false);
      } else if (data.type === "error") {
        setError(data.message);
        setIsLoading(false);
      }
    };

    wsConnection.onerror = () => {
      setError("WebSocket connection error");
      setIsLoading(false);
    };

    setWs(wsConnection);
    return () => wsConnection.close();
  }, []);

  const sendMessage = useCallback(async () => {
    if (!inputMessage.trim() || !requestId || isLoading) return;

    try {
      setIsLoading(true);
      setError(null);
      setMessages((prev) => [...prev, { text: inputMessage, type: "user" }]);

      const response = await fetch(
        "https://8f07-13-51-196-191.ngrok-free.app/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input_value: inputMessage, requestId }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");
      setInputMessage("");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, [inputMessage, requestId, isLoading]);

  return (
    <div className="min-h-screen bg-[#0D121C]">
      {/* Navbar */}
      <header className="w-full bg-[#040507] py-4 px-6 flex justify-between items-center">
        <a href="/"><img src="/LOGO.png" alt="" /></a>
        <nav className="flex gap-6 text-white">
          <a href="/" className="hover:text-[#409E0F]">
            Home
          </a>
          <a href="/" className="hover:text-[#409E0F]">
            Features
          </a>
          <a href="/" className="hover:text-[#409E0F]">
            Team
          </a>
          <a href="/" className="hover:text-[#409E0F]">
            Contact
          </a>
        </nav>
        <a href="https://github.com/teja-pola/Level-Supermind"><button className="bg-[#409E0F] text-white px-4 py-2 rounded-md hover:opacity-90 flex items-center gap-2" onClick={("")} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            className="icon"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.996.108-.774.418-1.304.762-1.605-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.467-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.515 11.515 0 013.003-.403c1.018.004 2.044.137 3.003.403 2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.472 5.922.43.372.815 1.106.815 2.23v3.312c0 .32.19.694.8.576C20.566 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </button></a>
      </header>

      {/* Main Section */}
      <main className="p-6">
        <div className="flex gap-6 ">
          {/* Left Section */}
          <div className="w-1/4 bg-[#0D1117] rounded-lg p-4 flex flex-col gap-6 h-[88vh] ">
            <div className="bg-[#0D121C] h-1/3 rounded-lg shadow-lg p-4">
              <p className="text-white text-sm ">Post Types</p>
              <Pie
                data={pieData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: "bottom", // Adjust legend position
                      labels: {
                        color: "#ffffff", // Legend text color
                      },
                    },
                  },
                }}
                style={{ height: "50px", width: "50px" }} // Set custom size for the chart
              />
              {/* Add Chart.js or any graphical content here */}
            </div>
            <div className="bg-[#0D121C] h-1/3 rounded-lg shadow-lg p-4">
              <p className="text-white text-sm mb-4">Engagements</p>
              <Bar data={barData} />
              {/* Add Chart.js or any graphical content here */}
            </div>
            <div className="bg-[#0D121C] h-1/3 rounded-lg shadow-lg p-4">
              <p className="text-white text-sm mb-4">Daily Impressions</p>
              <Line data={lineData} />
              {/* Add Chart.js or any graphical content here */}
            </div>
          </div>

          {/* Chat Section */}
          <div className="w-3/4 flex flex-col ">
            <h2 className="text-white text-2xl font-bold p-2">
              Social Media Analyzer
            </h2>
            <div className="bg-[#0D121C] rounded-lg p-4 shadow-lg ">
              <div className="h-[70vh] overflow-y-auto mb-4 rounded-lg bg-[#040507] p-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 p-3 rounded-lg max-w-[80%] ${
                      message.type === "user"
                        ? "ml-auto bg-[#409E0F] text-white"
                        : "mr-auto bg-[#1A2439] text-white"
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Loader2 className="animate-spin w-4 h-4" />
                    <span className="text-sm">Processing...</span>
                  </div>
                )}
              </div>
              {error && (
                <div className="mb-4 p-3 bg-red-500 text-white rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-3 bg-[#1A2439] text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#409E0F] transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="p-3 bg-[#409E0F] text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatClient;
