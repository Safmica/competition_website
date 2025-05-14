import React, { useState } from "react";

function HomePage () {
  const [hoverJoin, setHoverJoin] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  return (
    <div style={{ backgroundImage: 'url("bg crot.png")' }} className=" text-white font-sans w-100% h-screen bg-cover bg-center bg-no-repeat bg-black" >
      {/* Hero Section */}
      <section className="relative text-center py-12 "> 
        <h1 className="text-4xl font-bold text-white mb-4 pt-11">
          Crafting the Stage for
        </h1>
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Future Winners</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto mb-5 pb-3 text-xs">
          Step into the ultimate battleground for digital innovation - where aspiring developers, creative designers, and problem-solvers from across the nation unite. From building responsive websites to crafting world-class UI/UX experiences, this is your chance to showcase your skills, challenge your limits, and shine in front of industry pros.
        </p>

        <div className="grid grid-cols-3 mx-[100px]">
          <div className="text-left">
            <p className="text-2xl mb-1">SHOWCASE YOUR SKILLS</p>
            <p className="text-2xl font-bold ">GET RECOGNIZED</p>
            <p className="text-gray-400">Stand out from the crowd! Win prizes, earn certificates, and boost your portfolio with every competition you join</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">500+</p>
            <p className="text-2xl m-1">PARTICIPANTS HAVE</p>
            <p className="text-2xl font-bold ">JOINED</p>
          </div>
          <div className="text-right"> 
            <p className="text-2xl mb-1">NATIONAL-SCALE PLATFORM</p>
            <p className="text-2xl font-bold">OPEN FOR ALL</p>
            <p className="text-gray-400">Compete, connect, and grow with Indonesia's brightest talents through a dynamic, all-in-one competition platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column with Gradient Bar */}
          <div className="relative ml-8">
            {/* Gradient Bar */}
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-red-500 via-pink-500 to-purple-500 rounded-full"></div>
            
            <div className="pl-10">
              {/* Main Heading */}
              <p className="text-4xl font-bold leading-tight mb-8 pb-5">
                Empowering Innovators Through Technology Challenges
              </p>
              
              {/* Description */}
              <p className="text-gray-300 mb-12 pt-5 pb-5">
                <span className="font-bold">KESEDZ FEST</span> is a national-scale technology competition platform that brings 
                together aspiring developers, designers, analysts, and innovators to showcase their 
                talents, solve real-world problems, and elevate their skills through various tech-based challenges.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-4">
                <a href="/">
                <button 
                  className={`px-6 py-3 rounded ${hoverJoin ? 'bg-gradient-to-r from-red-500 to-pink-500' : 'bg-red-500'} text-white font-medium transition-all duration-300`}
                  onMouseEnter={() => setHoverJoin(true)}
                  onMouseLeave={() => setHoverJoin(false)}
                >
                  Join Competition
                </button>
                </a>
                <a href="/contact">
                <button 
                  className={`px-6 py-3 rounded ${hoverContact ? 'bg-gradient-to-r from-red-500 to-pink-500' : 'bg-red-500'} text-white font-medium transition-all duration-300`}
                  onMouseEnter={() => setHoverContact(true)}
                  onMouseLeave={() => setHoverContact(false)}
                >
                  Contact Us
                </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-20 ml-8">
            {/* Section 1 */}
            <div className="flex">
              <div className="mr-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">01</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  TRANSFORMING<br />TECH INNOVATION
                </h2>
                <p className="text-gray-400">
                  Our curated challenges are designed to push the boundaries of technological innovation, 
                  providing a launchpad for emerging talent to create meaningful solutions.
                </p>
              </div>
            </div>
            
            {/* Section 2 */}
            <div className="flex">
              <div className="mr-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">02</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  ACCELERATING DIGITAL<br />SKILL MASTERY
                </h2>
                <p className="text-gray-400">
                  We provide comprehensive learning paths and expert mentorship to transform 
                  promising individuals into industry-leading tech professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-black py-20 px-8">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-white mb-6">
        Discover the Categories &<br />
        Challenges We Offer
      </h2>

      <div className="mb-3">
        <span className="text-pink-500 font-medium">Let's get started!</span>
      </div>

      <p className="text-gray-400 max-w-3xl mx-auto">
        Select the competition that aligns with your expertise, register immediately, and demonstrate your capability to earn accolades.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1: Competitive Programming */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 p-0.5 -z-10"></div>
        
        <div className="bg-black rounded-3xl h-full p-8 flex flex-col">
          <div className="mb-6">
            <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-pink-400 rounded flex items-center justify-center overflow-hidden">
              <img src="/images/code.png" alt="Code Icon" className="h-8 w-8 object-contain" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">Competitive Programming</h3>
          <p className="text-gray-400 mb-8">
            Test your algorithmic thinking and problem-solving skills in a fast-paced coding battle against the clock.
          </p>

          <div className="mt-auto">
            <p className="text-2xl font-bold text-white mb-6">Rp100.000,00</p>
            <button className="px-6 py-3 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Card 2: Web Development */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 p-0.5 -z-10"></div>
        
        <div className="bg-black rounded-3xl h-full p-8 flex flex-col">
          <div className="mb-6">
            <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded flex items-center justify-center overflow-hidden">
              <img src="/images/web.png" alt="Web Icon" className="h-8 w-8 object-contain" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">Web Development</h3>
          <p className="text-gray-400 mb-8">
            Showcase your coding expertise by creating innovative, responsive, and functional websites applications.
          </p>

          <div className="mt-auto">
            <p className="text-2xl font-bold text-white mb-6">Rp80.000,00</p>
            <button className="px-6 py-3 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Card 3: UI/UX Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 p-0.5 -z-10"></div>
        
        <div className="bg-black rounded-3xl h-full p-8 flex flex-col">
          <div className="mb-6">
            <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-400 rounded flex items-center justify-center overflow-hidden">
              <img src="/images/design.png" alt="Design Icon" className="h-8 w-8 object-contain" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">UI/UX Design</h3>
          <p className="text-gray-400 mb-8">
            Design exceptional digital experiences by creating intuitive and visually appealing interfaces.
          </p>

          <div className="mt-auto">
            <p className="text-2xl font-bold text-white mb-6">Rp80.000,00</p>
            <button className="px-6 py-3 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-500 mb-2">01. Who is eligible to participate in the competition?</h3>
              <p className="text-gray-400">
                Anyone with a passion for technology and innovation is welcome to join.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-500 mb-2">02. What is the step-by-step process to register?</h3>
              <p className="text-gray-400">
                Sign up, choose your category, complete the payment, and you're good to go.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-500 mb-2">03. Is there a registration fee to join the competition?</h3>
              <p className="text-gray-400">
                Yes, the fee varies depending on the category you choose.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-500 mb-2">04. What do participants and winners receive upon finishing the competition?</h3>
              <p className="text-gray-400">
                Participants receive certificates, and winners get exclusive rewards and recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center">
        <p className="text-gray-400">Contact: techchallenges@example.com | © 2025 Tech Challenges</p>
      </footer>
    </div>
  );
};

export default HomePage;
