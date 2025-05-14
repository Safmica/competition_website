import React from "react";

export default function CompetitionMobile() {
  return (
    <div className="bg-black text-white font-sans">
      <main className="px-6 md:px-20 lg:px-40 py-12 mt-10">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full mb-4">
          Competition Details
        </button>
        <h2 className="text-4xl font-bold mb-5">Mobile Apps Development</h2>
        <img
          src="\MobDevImg.jpeg"
          alt="Hackathon"
          className="rounded-xl w-screen mb-10"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="bg-gray-900 p-6 rounded-xl ">
              <h3 className="text-xl font-semibold mb-4 ">Overview</h3>
              <p className="text-gray-300 mb-6 ">
                Are you ready to bring your app idea to life? The Mobile Apps
                Development Competition is your stage to showcase creativity,
                coding skills, and problem-solving in building impactful mobile
                applications. Whether you're an experienced developer or a
                passionate beginner, this competition challenges you to design
                innovative, user-friendly, and practical mobile apps that solve
                real-world problems.
              </p>

              <p>
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
                    <li> Android or iOS (cross-platform allowed).</li>
                    <li>
                      {" "}
                      Use any modern fremwork (e.g., Flutter, React Native).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Original Work:</strong>
                  <ul className="list-disc">
                    <li> No plagiarism. Must be your own creation.</li>
                  </ul>
                </li>
                <li>
                  <strong>Judging Criteria:</strong>
                  <ul className="list-disc">
                    <li>
                      Innovation, Functionality, Design, Impact, and
                      Presentation.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900 text-white rounded-xl p-6 border-[3px] border-purple-400 w-90 ">
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
              <a href="/payment">
                <button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white w-full py-2 rounded-full font-semibold text-center">
                  Regist
                </button>
              </a>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-sm w-90">
              <h5 className="font-semibold text-white mb-2">
                More Information
              </h5>
              <p className="text-gray-400 mb-2">For Mobile Apps Development</p>
              <ul className="text-gray-300 space-y-1 list-disc -ml-4">
                <li>June 1-15: Registration & Proposal Submission</li>
                <li>June 20: Selected Teams Announced</li>
                <li>June 21–July 20: App Development Phase</li>
                <li>July 25: Prototype Submission</li>
                <li>July 30: Finalists Announced</li>
                <li>August 5: Final Pitching</li>
                <li>August 7: Winners Announced</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
}
