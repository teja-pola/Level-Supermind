import React from 'react';
import { Github, ArrowRight, GraduationCap, Linkedin } from 'lucide-react';

function App() {
  const team = [
    {
      name: "Appala Vaishnav Reddy",
      role: "Frontend Developer",
      roleColor: "#3FB950",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHeFGjar94wVw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725271784901?e=1741824000&v=beta&t=BGiPtT_oAhhSY7SywdxfFFQ0NLyPetdD0rbNDNC9xZU",
      university: "Parul University(2027)",
      linkedin: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit",
      github: "https://github.com/vaishnav-reddy"
    },
    {
      name: "Soham Vaghela",
      role: "ML Developer",
      roleColor: "#3FB950",
      image: "https://avatars.githubusercontent.com/u/153496896?v=4",
      university: "Parul University(2027)",
      linkedin: "https://www.linkedin.com/in/sohamvaghela1712",
      github: "https://github.com/sohum1712"
    },
    {
      name: "Dharma Teja Pola",
      role: "UI/UX Designer & Developer",
      roleColor: "#3FB950",
      image: "https://avatars.githubusercontent.com/u/147713875?s=400&u=0b32691211404b89d9c5df77a20825542cd88e95&v=4",
      university: "Parul University(2027)",
      linkedin: "https://www.linkedin.com/in/dharmatejapola",
      github: "https://github.com/teja-pola"
    }
  ];

  return (
    <main >
      <section id= "team"className="bg-[#0D1117] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">
              Who We Are
            </h2>
            <p className="text-[#3FB950] text-sm tracking-wider">
              - team gencoders
            </p>
            <p className="text-white text-lg max-w-2xl mx-auto">
              A powerhouse team blending the art of design,
              the precision of data science, and the magic of
              development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-[#161B22] rounded-lg p-8 text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-[#FFFFFF]"
                    />
                  </div>
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-[#3FB950] mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm mb-4 flex items-center justify-center gap-2">
                  <GraduationCap size={16} className="text-gray-400" />
                  {member.university}
                </p>
                <div className="flex justify-center gap-4 text-gray-400">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#3FB950] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#3FB950] transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
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