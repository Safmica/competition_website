import React from "react";

export default function CompetitionUIUX() {
  return (
    <div className="bg-black text-white font-sans">
      <main className="px-6 md:px-20 lg:px-40 py-12 mt-10">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-2 rounded-full mb-4">
          Competition Details
        </button>
        <h2 className="text-4xl font-bold mb-5">UI/UX Design </h2>
        <img
          src="\UIUX IMG.jpg"
          alt="Hackathon"
          className="rounded-xl w-screen mb-7 -mt-4"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="bg-[#111] p-6 rounded-xl ">
              <h3 className="text-xl font-semibold mb-4 ">Overview</h3>
              <p className="text-gray-300 mb-7 ">
                Are you ready to transform user experiences through intuitive
                and engaging design? The UI/UX Design Challenge is your canvas
                to showcase creativity, user-centered thinking, and innovative
                design solutions. Whether you're an experienced designer or a
                creative newcomer, this competition challenges you to create
                visually stunning, accessible, and functional digital interfaces
                that solve real user problems.
              </p>

              <p className="text-gray-300">
                Join hundreds of aspiring designers in a competition where
                aesthetics meets functionality. Express your unique design
                perspective, receive industry recognition, and compete for
                exclusive opportunities and prizes!
              </p>

              <h4 className="text-xl font-semibold mb-4">Rules & Guidelines</h4>
              <ul className="text-gray-300 space-y-2 list-decimal">
                <li>
                  <strong>Eligibility:</strong>
                  <ul className="list-disc">
                    <li>Open to participants aged 17–30.</li>
                    <li>Teams of 2–3 members.</li>
                  </ul>
                </li>
                <li>
                  <strong>Competition Phases:</strong>
                  <ul className="list-disc">
                    <li>
                      Problem statement analysis → Design concept submission →
                      Final presentation.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Design Requirements:</strong>
                  <ul className="list-disc">
                    <li>
                      {" "}
                      Create designs for web, mobile, or cross-platform
                      applications.
                    </li>
                    <li>
                      {" "}
                      Use industry-standard design tools (e.g., Figma, Adobe XD,
                      Sketch).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Deliverables</strong>
                  <ul className="list-disc">
                    <li> User research and persona development.</li>
                    <li> Information architecture and user flows.</li>
                    <li> Wireframes and prototypes</li>
                    <li> Final UI design with interactive elements</li>
                    <li> Design system documentation</li>
                  </ul>
                </li>
                <li>
                  <strong> Original Work:</strong>
                  <ul className="list-disc">
                    <li>
                      No plagiarism. All designs must be your original creation.
                    </li>
                    <li>Stock resources permitted with proper attribution.</li>
                  </ul>
                </li>
                <li>
                  <strong>Judging Criteria:</strong>
                  <ul className="list-disc">
                    <li>User-Centered Design (25%)</li>
                    <li> Visual Appeal (20%)</li>
                    <li> Usability (20%)</li>
                    <li> Innovation (20%)</li>
                    <li> Presentation (15%)</li>
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
              <a href="/payment">
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
                <li>June 1-15: Registration & Brief Submission</li>
                <li>June 20: Selected Teams Announced</li>
                <li>June 21–August 10: Design Phase</li>
                <li>August 12: Prototype Submission</li>
                <li>August 16: Finalists Announced</li>
                <li>August 22: Final Pitching</li>
                <li>August 24: Winners Announced</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
