
import React from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <main className="bg-[#0D1117] min-h-screen">
      {/* First Hero Section */}
      <section id="home" className="relative pt-20 pb-1"> {/* Reduced bottom padding */}
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-gray-400 uppercase tracking-[0.75em] text-sm ">One metric at a time</p>
            <h1 className="text-5xl font-bold text-white tracking-[0.1em] leading-tight">
              Elevate your<br />
              <p className="text-[#3FB950] text-6xl">SOCIAL MEDIA</p>
              Presence.
            </h1>
            <p className="text-gray-400 text-lg">
              An AI powered social media analytics tool.
            </p>
            <div className="flex gap-4">
              <a href="/chat"><button className="bg-[#409E0F] text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2" onClick={() => Navigate("/chat")}>
                ANALYZE <ArrowRight size={20} />
              </button></a>
            
              <a href="https://github.com/teja-pola/Level-Supermind.git"><button className="border border-[#30363D] bg-transparent text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                <Github size={20} /> GITHUB
              </button></a>
            </div>
          </div>

          {/* Right Content - Robot Image with Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/Final robot.png"
                alt="AI Robot"
                className="w-full"
              />
              
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 text-white">✨</div>
            <div className="absolute bottom-10 left-10 text-white">✨</div>
          </div>
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="bg-[#0D1117] py-24"> {/* Reduced top and bottom padding */}
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Video */}
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/-ZE11Jqduhc?si=7d9yWjAR4iQGCrFz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Right Content */}
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-white">
              Get Started with <span className="text-[#409E0F]">Groow</span>
            </h2>
            <div className="space-y-8">
              <p className="text-white">IN <span className="text-[#409E0F]">3</span> EASY STEPS</p>
              <div className="w-80 h-1 bg-[#409E0F]"></div> {/* Added underline */}
              <div className="space-y-4">
                <div className="text-white">
                  <span className="font-bold">Step 1:</span> Click on the '<span className="text-[#3FB950]">Analyze</span>' Button to Get Started
                </div>
                <div className="text-white">
                  <span className="font-bold">Step 2:</span> Ask <span className="text-[#3FB950]">Groow</span> Bot Any Questions Related to Your Account
                </div>
                <div className="text-white">
                  <span className="font-bold">Step 3:</span> Implement the Suggestions Provided by the Bot to<br />
                  <span className="text-[#3FB950]">Boost</span> Audience Engagement
                </div>
              </div>

              <a href ="https://youtu.be/-ZE11Jqduhc?feature=shared"><button className="bg-[#409E0F] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
                Watch on YouTube <ArrowRight size={20} />
              </button></a>>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
