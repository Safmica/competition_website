import React, { useEffect, useState } from "react";
import api from "../api/axioos";

const PaymentPage = () => {
  const [competition, setCompetition] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  api
    .get("/competition")
    .then((res) => {
      console.log("Competition:", res.data.items);
      setCompetition(res.data.items[0]); 
    })
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("competition_id", competition.id);
    formData.append("payment_proof", paymentProof);

    try {
      await api.post("/registration", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Registration successful!");
    } catch {
      alert("Failed to register.");
    }
  };
if (loading) return <div className="text-white mt-10">Loading...</div>;
if (!competition) return <div className="text-white mt-10">No competition found.</div>;

  return (
    <div className="min-h-screen text-white bg-black font-sans mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row w-full h-full"
      >
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center mb-14 ml-5">
          <p className="text-4xl font-bold mb-10">Payment</p>
          <img
            src="/MobDevImg.jpeg"
            alt="Hackathon"
            className="rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-2xl font-semibold mb-2">{competition.title}</h2>
          <div className="bg-gray-900 p-4 rounded mb-4">
            {competition.description}
          </div>
          <p className="text-xl mb-2">
            Deadline: {new Date(competition.deadline).toLocaleDateString()}
          </p>
          <p className="bg-gradient-to-r from-[#A951FF] to-[#FD4F53] bg-clip-text text-transparent font-bold text-4xl">
            Rp {competition.htm.toLocaleString("id-ID")}
          </p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 p-5 ml-28 mr-4 mt-9">
          <div className="bg-gray-900 border border-pink-500 rounded-lg p-6">
            <h4 className="text-md font-semibold mb-2">
              Upload Bukti Pembayaran
            </h4>
            <p className="text-sm text-blue-400 mb-3">
              Silakan upload bukti pembayaran Anda.
            </p>
            <input
              type="file"
              className="form-control mb-4"
              onChange={(e) => setPaymentProof(e.target.files[0])}
              required
            />
            <button
              type="submit"
              className="w-full text-white py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 font-semibold"
            >
              Submit Payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
