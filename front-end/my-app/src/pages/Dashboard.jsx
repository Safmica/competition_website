import React, { useEffect, useState } from "react";
import api from "../api/axioos";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const backendBaseURL = "http://localhost:8080";

  function getFullAssetUrl(path) {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const fixedPath = path.startsWith("./") ? path.slice(1) : path;
    return backendBaseURL + fixedPath;
  }

  useEffect(() => {
    api
      .get("/registration/registered")
      .then((res) => {
        setRegistrations(res.data.items);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setError("Access denied. Admin only.");
          navigate("/login");
        } else {
          setError("Failed to load data.");
        }
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  // Handler untuk update status pembayaran
  const updatePaymentStatus = async (id, status) => {
    try {
      await api.patch(`/registration/payment/${id}`, {
        payment_status: status,
      });
      // update local state biar UI langsung update
      setRegistrations((prev) =>
        prev.map((reg) =>
          reg.id === id ? { ...reg, payment_status: status } : reg
        )
      );
    } catch (error) {
      console.error("Failed to update payment status", error);
      alert("Failed to update payment status");
    }
  };

  if (loading) return <div className="text-white p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="w-full h-full text-white bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/BG Dashboard.png")',
        }}
      >
        <main className="pt-20 w-full px-6 mx-auto py-8">
          <div className="px-5 pt-4 flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-md flex items-center justify-center">
              <img src="/manufacturing.png" className="w-10 h-8 mb-3" alt="" />
            </div>
            <p className="text-4xl font-semibold tracking-wide">Dashboard</p>
          </div>

          <div className="bg-[#111] rounded-xl mx-10 p-6 border border-gray-800/30">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 inline-block px-4 py-2 rounded-md mb-6">
              <h5 className="text-white font-medium text-center text-sm">
                Registration Table Data
              </h5>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800/30">
                    <th className="text-left p-4 font-medium">ID Regist</th>
                    <th className="text-left p-4 font-medium">Team Name</th>
                    <th className="text-left p-4 font-medium">Leader</th>
                    <th className="text-left p-4 font-medium">Member1</th>
                    <th className="text-left p-4 font-medium">Member2</th>
                    <th className="text-left p-4 font-medium">Competition</th>
                    <th className="text-left p-4 font-medium">Payment Proof</th>
                    <th className="text-left p-4 font-medium">Payment Status</th>
                    <th className="text-left p-4 font-medium">Verify</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="text-center p-4 text-gray-500">
                        No registrations found.
                      </td>
                    </tr>
                  ) : (
                    registrations.map((regist, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-800/30 hover:bg-white/5"
                      >
                        <td className="p-4">{regist.id}</td>
                        <td className="p-4">{regist.team_name}</td>
                        <td className="p-4">{regist.leader.name}</td>
                        <td className="p-4">{regist.member_1.name}</td>
                        <td className="p-4">{regist.member_2.name}</td>
                        <td className="p-4">{regist.competition.title}</td>
                        <td className="p-4">
                          <a
                            href={getFullAssetUrl(regist.payment_proof)}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs px-4 py-1 rounded bg-white/5 hover:bg-white/10"
                          >
                            View
                          </a>
                        </td>
                        <td className="p-4">{regist.payment_status}</td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                updatePaymentStatus(regist.id, "rejected")
                              }
                              className="px-4 py-1 rounded bg-red-500/20 hover:bg-red-500/30 text-red-500 text-sm"
                            >
                              ✕
                            </button>
                            <button
                              onClick={() =>
                                updatePaymentStatus(regist.id, "approved")
                              }
                              className="px-4 py-1 rounded bg-green-500/20 hover:bg-green-500/30 text-green-500 text-sm"
                            >
                              ✓
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
