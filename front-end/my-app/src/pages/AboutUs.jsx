export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="w-full h-full text-white bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/BG Dashboard.png")',
        }}
      >
        <main className="pt-20 w-full px-16 mx-auto py-8">
          {/* Title */}
          <div className="px-5 pt-10 flex items-center justify-center mb-8">
            <p className="text-4xl font-mono tracking-wide">About Us</p>
          </div>
          
          {/* About Section */}
          <div className="bg-[#111] rounded-xl mx-14 p-8 border border-gray-800/30 shadow-lg space-y-7">
            <div className="text-2xl font-bold flex justify-center items-center text-center">
                <img src="/Logo.png" alt="KESEDZ" className="w-72" />
            </div>

            <section className="mb-6">
              <h3 className="text-lg font-mono mb-1">Our Vision</h3>
              <p className="text-sm text-justify">
                To become Indonesia's premier platform for technological innovation and talent discovery, creating opportunities for the next generation of digital leaders.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-mono mb-1">Our Story</h3>
              <p className="text-sm text-justify mb-3">
                KESEDZ was born in 2022 from a simple yet powerful idea: Indonesia's tech potential remains largely untapped. Founded by a group of tech enthusiasts and industry professionals, we set out to create more than just another competition – we wanted to build a movement that celebrates innovation, rewards excellence, and bridges the gap between talented individuals and industry opportunities.
              </p>
              <p className="text-sm text-justify">
                What started as a small coding competition with just 150 participants has rapidly evolved into a national-scale technology festival that spans multiple disciplines and attracts thousands of innovators annually.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-mono mb-1">What We Do</h3>
              <ul className="list-disc list-inside text-sm text-justify space-y-1 pl-3">
                <li><strong>Competitive Programming:</strong> Testing algorithmic thinking and problem-solving efficiency</li>
                <li><strong>Web Development:</strong> Challenging participants to create innovative, responsive web solutions</li>
                <li><strong>UI/UX Design:</strong> Fostering intuitive and visually appealing digital experiences</li>
                <li><strong>Mobile App Development:</strong> Encouraging practical and impactful mobile applications</li>
                <li><strong>Data Science:</strong> Exploring the power of data analytics and predictive modeling</li>
              </ul>
              <p className="text-sm text-justify mt-2">
                Each competition is carefully designed to reflect current industry standards and future trends, ensuring participants gain relevant skills while pushing boundaries.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-mono mb-1">Our Impact</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h4 className="font-mono mb-1 text-sm">For Participants</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 pl-3">
                    <li>Showcase your skills on a national platform</li>
                    <li>Receive recognition and certification</li>
                    <li>Gain exposure to leading tech companies</li>
                    <li>Access mentorship and learning resources</li>
                    <li>Build your professional network</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h4 className="font-mono mb-1 text-sm">For The Industry</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 pl-3">
                    <li>Connect with Indonesia's brightest tech talents</li>
                    <li>Support innovation and technological advancement</li>
                    <li>Contribute to strengthening the national tech ecosystem</li>
                    <li>Discover solutions to real-world challenges</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-mono mb-1">Our Team</h3>
              <p className="text-sm text-justify">
                KESEDZ is powered by a dedicated team of technology professionals, educators, and event specialists who share a passion for innovation and talent development. Our competition judges and mentors include respected figures from leading tech companies, universities, and startups.
              </p>
            </section>

            <section className="mb-2">
              <h3 className="text-lg font-mono mb-1">Join The Movement</h3>
              <p className="text-sm text-justify">
                Whether you're a coding prodigy, design visionary, or tech enthusiast, KESEDZ welcomes you to be part of Indonesia's growing technology community. Together, we're not just hosting competitions – we're crafting the future of technology in Indonesia.
              </p>
            </section>

            <div className="text-center mt-4 text-base font-mono font tracking-wide">
              Crafting the Stage for Future Winners
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}