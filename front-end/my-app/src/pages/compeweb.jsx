import React from "react";

export default function CompetitionWeb() {
  return (
    <div className="bg-black text-white font-sans">
      <main className="px-6 md:px-20 lg:px-40 py-12 mt-10">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full mb-4">
          Competition Details
        </button>
        <h2 className="text-4xl font-bold mb-5">Website Development</h2>
        <img
          src="\WebDev img.png"
          alt="Hackathon"
          className="rounded-xl w-screen mb-10"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="bg-[#111] p-6 rounded-xl ">
              <h3 className="text-xl font-semibold mb-4 ">Overview</h3>
              <p className="text-gray-300 mb-6 ">
                Are you ready to turn your ideas into impactful web solutions?
                The Web Development Competition offers a platform for you to
                demonstrate creativity, coding excellence, and innovative
                thinking in building web applications that solve real-world
                challenges. Whether you’re a seasoned developer or an
                enthusiastic newcomer, this competition dares you to craft
                engaging, user-friendly, and practical websites or web apps that
                make a difference. Join a community of aspiring web talents in a
                contest where technology, design, and purpose converge. Test
                your skills, gain recognition, and compete for exciting prizes!
              </p>

              <p className="text-gray-300">
                Join hundreds of driven and talented individuals from diverse
                backgrounds, all coming together with one goal: to build the
                next great mobile application. Seize this chance to innovate,
                gain recognition, and win exclusive prizes that could propel
                your tech journey to new heights.
              </p>

              <h4 className="text-xl font-semibold mb-4">Rules & Guidelines</h4>
              <ul className="text-gray-300 space-y-2 list-decimal">
                <li>
                  <strong>Eligibility:</strong>
                  <ul className="list-disc">
                    <li>Open to participants aged 17–30.</li>
                    <li>Teams of 2–4 members.</li>
                  </ul>
                </li>
                <li>
                  <strong>Phases:</strong>
                  <ul className="list-disc">
                    <li>
                      Proposal submission → Prototype development → Final
                      pitching.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Platform:</strong>
                  <ul className="list-disc">
                    <li> Web applications (desktop and/or mobile friendly).</li>
                    <li>
                      {" "}
                      Use any modern tech stack (e.g., React, Vue, Angular,
                      Laravel, Next.js).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Original Work:</strong>
                  <ul className="list-disc">
                    <li>
                      {" "}
                      No plagiarism. Your work must be original and created
                      exclusively for this competition.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Judging Criteria:</strong>
                  <ul className="list-disc">
                    <li>Innovation</li>
                    <li> Functionality</li>
                    <li> Design & User Experience</li>
                    <li> Impact</li>
                    <li> Presentation</li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111] text-white rounded-xl p-6 border-[3px] border-purple-400 w-90 ">
              <h2 className="text-2xl font-bold text-pink-300 mb-4">
                Rp 80.000,00
              </h2>
              <ul className="text-sm space-y-3 -ml-8">
                <li>✅ Total Prizes Worth Rp 50.000,00</li>
                <li>✅ E-Certificate for all participants</li>
                <li>✅ Mentorship from IT professionals</li>
                <li>✅ Networking opportunities</li>
                <li>✅ Top teams featured on web</li>
                <li>✅ Exposure to tech companies</li>
              </ul>
              <a href="/paymentWeb">
                <button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white w-full py-2 rounded-full font-semibold text-center">
                  Regist
                </button>
              </a>
            </div>

            <div className="bg-[#111] p-6 rounded-xl text-sm w-90">
              <h5 className="font-semibold text-white mb-2">
                More Information
              </h5>
              <p className="text-gray-400 mb-2">For Mobile Apps Development</p>
              <ul className="text-gray-300 space-y-1 list-disc -ml-4">
                <li>June 1-10: Registration</li>
                <li>June 12: Preliminary Round</li>
                <li>June 14: Announcement of Semi-Finalists</li>
                <li>July 16: Online Technical Workshop</li>
                <li>July 20: Semi-Final Round</li>
                <li>July 28: Final Round</li>
                <li>August 1: Winners Announced</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
