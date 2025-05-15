import React, { useState } from "react";

function HomePage() {
  const [hoverJoin, setHoverJoin] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  return (
    <div className=" text-white font-arial w-full h-full z-50 bg-full bg-fixed bg-center bg-no-repeat bg-[url(bgcrop.png)]">
      {/* Hero Section */}
      <section className="relative text-center py-12 ">
        <h1 className="text-4xl font-bold text-white mb-4 pt-40">
          Crafting the Stage for
        </h1>
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Future Winners
          </span>
        </h1>
        <p className="text-gray-200 max-w-3xl mx-auto mb-5 pb-3 text-xs">
          Step into the ultimate battleground for digital innovation - where
          aspiring developers, creative designers, and problem-solvers from
          across the nation unite. From building responsive websites to crafting
          world-class UI/UX experiences, this is your chance to showcase your
          skills, challenge your limits, and shine in front of industry pros.
        </p>

        <div className="grid grid-cols-3 mx-[100px]">
          <div className="text-left">
            <p className="text-2xl mb-1">SHOWCASE YOUR SKILLS</p>
            <p className="text-2xl font-bold ">GET RECOGNIZED</p>
            <p className="text-gray-400">
              Stand out from the crowd! Win prizes, earn certificates, and boost
              your portfolio with every competition you join
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              500+
            </p>
            <p className="text-2xl m-1">PARTICIPANTS HAVE</p>
            <p className="text-2xl font-bold ">JOINED</p>
          </div>
          <div className="text-right">
            <p className="text-2xl mb-1">NATIONAL-SCALE PLATFORM</p>
            <p className="text-2xl font-bold">OPEN FOR ALL</p>
            <p className="text-gray-400">
              Compete, connect, and grow with Indonesia's brightest talents
              through a dynamic, all-in-one competition platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black py-16">
        <div className="grid grid-cols-2 mx-[100px]">
          {/* Left Column */}
          <div className="relative ml-8">
            <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-red-500 via-pink-500 to-purple-500 rounded-full"></div>
            <div className="pl-10">
              <p className="text-4xl font-bold text-white mb-6">
                Empowering Innovators Through Technology Challenges
              </p>
              <p className="text-gray-300 mb-10">
                <span className="font-bold">KESEDZ FEST</span> is a
                national-scale technology competition platform that brings
                together aspiring developers, designers, analysts, and
                innovators to showcase their talents, solve real-world problems,
                and elevate their skills through various tech-based challenges.
              </p>
              <div className="flex gap-4">
                <a href="/">
                  <button
                    className={`px-6 py-3 rounded ${
                      hoverJoin
                        ? "bg-gradient-to-r from-red-500 to-pink-500"
                        : "bg-red-500"
                    } text-white font-medium transition-all duration-300`}
                    onMouseEnter={() => setHoverJoin(true)}
                    onMouseLeave={() => setHoverJoin(false)}
                  >
                    Join Competition
                  </button>
                </a>
                <a href="/contact">
                  <button
                    className={`px-6 py-3 rounded ${
                      hoverContact
                        ? "bg-gradient-to-r from-red-500 to-pink-500"
                        : "bg-red-500"
                    } text-white font-medium transition-all duration-300`}
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
          <div className="relative space-y-8 ml-8">
            <div className="flex">
              <div className="mr-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  01
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  TRANSFORMING
                  <br />
                  TECH INNOVATION
                </h2>
                <p className="text-gray-400">
                  Our curated challenges are designed to push the boundaries of
                  technological innovation, providing a launchpad for emerging
                  talent to create meaningful solutions.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  02
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  ACCELERATING DIGITAL
                  <br />
                  SKILL MASTERY
                </h2>
                <p className="text-gray-400">
                  We provide comprehensive learning paths and expert mentorship
                  to transform promising individuals into industry-leading tech
                  professionals.
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
            <h2 className="text-6xl font-bold text-white mb-6">
              Discover the Categories &<br />
              Challenges We Offer
            </h2>

            <div className="mb-3">
              <span className="text-pink-500 font-medium">
                Let's get started!
              </span>
            </div>

            <p className="text-gray-400 max-w-3xl mx-auto">
              Select the competition that aligns with your expertise, register
              immediately, and demonstrate your capability to earn accolades.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Card 1: Competitive Programming */}
            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 p-0.5 rounded-3xl">
              <div className="bg-black rounded-[22px] h-full p-8 flex flex-col">
                <div className="mb-6">
                  <div className="h-12 w-12 flex items-center justify-center">
                    <img
                      src="low_density.png"
                      alt="Code Icon"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Competitive Programming
                </h3>
                <p className="text-gray-400 mb-8">
                  Test your algorithmic thinking and problem-solving skills in a
                  fast-paced coding battle against the clock.
                </p>

                <div className="mt-auto">
                  <p className="text-2xl font-bold text-white mb-6">
                    Rp80.000,00
                  </p>
                  <a href="/competition1">
                    <button className="px-6 py-3 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium text-white">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Web Development */}
            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 p-0.5 rounded-3xl">
              <div className="bg-black rounded-[22px] h-full p-8 flex flex-col">
                <div className="mb-6">
                  <div className="h-12 w-12 flex items-center justify-center">
                    <img
                      src="manufacturing.png"
                      alt="Web Icon"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-5">
                  Web Development
                </h3>
                <p className="text-gray-400 mb-8">
                  Showcase your coding expertise by creating innovative,
                  responsive, and functional website applications.
                </p>

                <div className="mt-auto">
                  <p className="text-2xl font-bold text-white mb-6">
                    Rp80.000,00
                  </p>
                  <a href="/competition2">
                    <button className="px-6 py-3 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium text-white">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: UI/UX Design */}
            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 p-0.5 rounded-3xl">
              <div className="bg-black rounded-[22px] h-full p-8 flex flex-col">
                <div className="mb-6">
                  <div className="h-12 w-12 flex items-center justify-center_">
                    <img
                      src="linked_services.png"
                      alt="Design Icon"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-5">
                  UI/UX Design
                </h3>
                <p className="text-gray-400 mb-8">
                  Design exceptional digital experiences by creating intuitive
                  and visually appealing interfaces.
                </p>

                <div className="mt-auto">
                  <p className="text-2xl font-bold text-white mb-6">
                    Rp80.000,00
                  </p>
                  <a href="/competition3">
                    <button className="px-6 py-3 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium text-white">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="bg-black text-white min-h-screen flex items-center">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Text Content */}
              <div className="lg:w-1/2 space-y-8">
                {/* Headline */}
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-6xl font-bold">
                    Compete. Create.
                    <br />
                    Change the Future.
                  </h1>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg max-w-xl">
                  Join us in celebrating the spirit of innovation and creativity
                  as we bring together bright minds to tackle real-world
                  challenges. Our competitions are designed to inspire, empower,
                  and reward the tech leaders of tomorrow.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-16 py-6">
                  <div className="space-y-1">
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      500+
                    </p>
                    <p className="text-gray-300">Participants Engaged</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      120+
                    </p>
                    <p className="text-gray-300">Projects Submitted</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      10+
                    </p>
                    <p className="text-gray-300">Winners Rewarded</p>
                  </div>
                </div>

                {/* Bottom Description */}
                <p className="text-gray-300 text-lg max-w-xl">
                  Step into the future of technology with cutting-edge
                  challenges in programming, design, data science,
                  cybersecurity, and more. Compete, collaborate, and make your
                  mark in the tech community!
                </p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="Hackathon.png"
                    alt="Tech competition with participants working at tables with a yellow TNW stage in the background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black text-white min-h-screen py-16 px-4">
        <div className="bg-black text-white py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h1>

            <p className="text-center text-gray-300 mb-20 max-w-3xl mx-auto">
              Find quick answers to common questions about the event, including
              how to join, important dates, and general rules. For anything not
              listed here, feel free to contact us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {/* FAQ Item 1 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    01.
                  </p>
                  <h3 className="text-2xl font-bold">
                    Who is eligible to participate in the competitions?
                  </h3>
                </div>
                <div className="relative pl-16 pb-6">
                  <p className="text-gray-300">
                    University students, graduates, and tech enthusiasts across
                    Indonesia are welcome. Check each category for specific
                    rules.
                  </p>
                  <div className="absolute bottom-0 left-16 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    02.
                  </p>
                  <h3 className="text-2xl font-bold">
                    What is the step-by-step process to register?
                  </h3>
                </div>
                <div className="relative pl-16 pb-6">
                  <p className="text-gray-300">
                    To register, select your preferred competition, review the
                    requirements, create an account, and complete the
                    registration form.
                  </p>
                  <div className="absolute bottom-0 left-16 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    03.
                  </p>
                  <h3 className="text-2xl font-bold">
                    Is there a registration fee to join the competitions?
                  </h3>
                </div>
                <div className="relative pl-16 pb-6">
                  <p className="text-gray-300">
                    Yes, the exact fee varies depending on the competition
                    category and will be listed clearly on each competition
                    page.
                  </p>
                  <div className="absolute bottom-0 left-16 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 -mb-9"></div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    04.
                  </p>
                  <h3 className="text-2xl font-bold">
                    What do participants and winners receive from joining these
                    competitions?
                  </h3>
                </div>
                <div className="relative pl-16 pb-6">
                  <p className="text-gray-300">
                    All participants will receive e-certificates, while winners
                    can expect cash prizes, trophies, and recognition across our
                    media platforms.
                  </p>
                  <div className="absolute bottom-0 left-16 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
