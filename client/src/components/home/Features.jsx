
import React from 'react';
import { Github, ArrowRight, Brain, Globe2, LineChart, Users, Gauge, Sparkles } from 'lucide-react';

function App() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-[#3FB950]" />,
      title: "GPT-Powered Insights",
      description: "Groow uses GPT-powered insights to uncover trends and patterns in social media data. It transforms complex analytics into clear, actionable strategies."
    },
    {
      icon: <Users className="w-8 h-8 text-[#3FB950]" />,
      title: "Audience Insights",
      description: "Groow's Audience Insights delve into your followers' behavior and preferences. Understand your audience better to create content that truly resonates."
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#3FB950]" />,
      title: "Global Reach Analysis",
      description: "Groow's Global Reach Analysis evaluates your social media impact across regions. Gain insights into audience engagement worldwide to expand your reach effectively."
    },
    {
      icon: <Gauge className="w-8 h-8 text-[#3FB950]" />,
      title: "Real-Time Analytics",
      description: "Groow's Real-Time Analytics keeps you updated with live performance metrics. Make data-driven decisions instantly to stay ahead in the game."
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#3FB950]" />,
      title: "Growth Tracking",
      description: "Groow's Growth Tracking monitors your social media performance over time. Stay informed with detailed analytics to measure progress and refine strategies."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#3FB950]" />,
      title: "Smart Automation",
      description: "Groow's Smart Automation streamlines your social media analysis with AI-driven processes. Save time and focus on strategies that matter most"
    }
  ];

  return (
    <main className="bg-[#0D1117] ">

      {/* Features Section */}
      <section id="features" className="bg-[#0D1117] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-[#3FB950] font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;