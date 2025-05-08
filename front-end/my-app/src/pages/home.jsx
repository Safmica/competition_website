import React from "react";

function HomePage () {
  return (
    <div style={{ backgroundImage: 'url("/bg crot.png")' }} className=" text-white font-sans w-screen h-screen" >
      {/* Hero Section */}
      <section className="relative text-center py-16 "> 
        <h1 className="text-4xl font-bold text-white mb-4">
          Crafting the Stage for <span className="text-purple-500">Future Winners</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto mb-8">
          Showcase your skills and get recognized on a national scale. Join the platform open for all innovators and creators.
        </p>
        <div className="flex justify-center gap-10 text-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-purple-500">500+</h2>
            <p className="text-gray-400">Participants have joined</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">National Scale Platform</h2>
            <p className="text-gray-400">Open for all</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Empowering Innovators Through Technology Challenges
            </h2>
            <p className="text-gray-400 mb-6">
              We believe in transforming tech innovation and accelerating digital skill mastery through competitive challenges.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-500 px-6 py-2 rounded-md hover:bg-purple-700">Learn More</button>
              <button className="border border-purple-500 px-6 py-2 rounded-md hover:bg-purple-500">Join Now</button>
            </div>
          </div>
          <div className="grid gap-6">
            <div>
              <h3 className="text-xl font-bold text-purple-500 mb-2">01 Transforming Tech Innovation</h3>
              <p className="text-gray-400">
                Explore challenges designed to push the boundaries of what technology can achieve.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple-500 mb-2">02 Accelerating Digital Skill Mastery</h3>
              <p className="text-gray-400">
                Develop your skills through hands-on problem-solving and learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Discover the Categories & Challenges We Offer
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From programming to web development and UI/UX design, we have something for everyone to showcase their skills.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-md text-center">
            <h3 className="text-xl font-bold text-purple-500 mb-2">Competitive Programming</h3>
            <p className="text-gray-400 mb-4">Rp100,000.00</p>
            <button className="bg-purple-500 px-6 py-2 rounded-md hover:bg-purple-700">Register</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-md text-center">
            <h3 className="text-xl font-bold text-purple-500 mb-2">Web Development</h3>
            <p className="text-gray-400 mb-4">Rp800,000.00</p>
            <button className="bg-purple-500 px-6 py-2 rounded-md hover:bg-purple-700">Register</button>
          </div>
          <div className="bg-gray-800 p-6 rounded-md text-center">
            <h3 className="text-xl font-bold text-purple-500 mb-2">UI/UX Design</h3>
            <p className="text-gray-400 mb-4">Rp500,000.00</p>
            <button className="bg-purple-500 px-6 py-2 rounded-md hover:bg-purple-700">Register</button>
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
