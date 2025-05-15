import React, { useEffect, useState } from "react";
import api from "../api/axioos";

const PaymentPage = () => {
  const [teamName, setTeamName] = useState("");
  const [competitions, setCompetitions] = useState([]);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [user, setUser] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [loading, setLoading] = useState(true);
  const [member1Options, setMember1Options] = useState([]);
  const [member1Search, setMember1Search] = useState("");
  const [member1ID, setMember1ID] = useState("");
  const [member2Options, setMember2Options] = useState([]);
  const [member2Search, setMember2Search] = useState("");
  const [member2ID, setMember2ID] = useState("");

  useEffect(() => {
    if (member1Search.length > 1) {
      api.get(`/users?name=${member1Search}`).then((res) => {
        setMember1Options(res.data.items || []);
      });
    } else {
      setMember1Options([]);
    }
  }, [member1Search]);

  useEffect(() => {
    if (member2Search.length > 1) {
      api.get(`/users?name=${member2Search}`).then((res) => {
        setMember2Options(res.data.items || []);
      });
    } else {
      setMember2Options([]);
    }
  }, [member2Search]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (member1Search.length > 1) {
        api.get(`/users?name=${member1Search}`).then((res) => {
          setMember1Options(res.data.items || []);
        });
      } else {
        setMember1Options([]);
      }
    }, 500); // 500ms setelah user berhenti ngetik

    return () => clearTimeout(delayDebounce); // clear timeout kalau user masih ngetik
  }, [member1Search]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (member2Search.length > 1) {
        api.get(`/users?name=${member2Search}`).then((res) => {
          setMember2Options(res.data.items || []);
        });
      } else {
        setMember2Options([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [member2Search]);

  useEffect(() => {
    api
      .get("/competition")
      .then((res) => {
        const data = res.data.items || [];
        setCompetitions(data);
        if (data.length > 0) {
          setSelectedCompetition(data[0]);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .get("/me")
      .then((res) => {
        setUser(res.data.user); 
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !selectedCompetition) {
      alert("User atau kompetisi tidak ditemukan.");
      return;
    }

    const formData = new FormData();
    formData.append("competition_id", selectedCompetition.id);
    formData.append("team_name", teamName);
    formData.append("leader_id", user.id);
    formData.append("member1_id", member1ID);
    formData.append("member2_id", member2ID);
    formData.append("payment_prove", paymentProof);

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
  if (!selectedCompetition)
    return <div className="text-white mt-10">No competitions found.</div>;

  return (
    <div className="min-h-screen text-white bg-black font-sans mt-10 px-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row w-full"
      >
        {/* Kiri: Informasi Kompetisi */}
        <div className="w-full lg:w-1/2 p-6">
          <p className="text-4xl font-bold mb-6">Pilih Kompetisi</p>
          <select
            className="mb-6 p-2 rounded text-white font-extrabold bg-black"
            onChange={(e) => {
              const selected = competitions.find(
                (c) => c.id === e.target.value
              );
              setSelectedCompetition(selected);
            }}
            value={selectedCompetition.id}
          >
            {competitions.map((comp) => (
              <option key={comp.id} value={comp.id}>
                {comp.title}
              </option>
            ))}
          </select>

          <img
            src="/MobDevImg.jpeg"
            alt="Competition"
            className="rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-2xl font-semibold">
            {selectedCompetition.title}
          </h2>
          <div className="bg-gray-900 p-4 rounded mb-2">
            {selectedCompetition.description}
          </div>
          <p className="text-xl mb-1">
            Deadline:{" "}
            {new Date(selectedCompetition.deadline).toLocaleDateString()}
          </p>
          <p className="text-3xl font-bold text-pink-500">
            Rp {selectedCompetition.htm.toLocaleString("id-ID")}
          </p>
        </div>

        {/* Kanan: Form Pendaftaran */}
        <div className="w-full lg:w-1/2 p-6 bg-gray-900 rounded-lg ml-4">
          <h3 className="text-2xl font-bold mb-4">Formulir Pendaftaran</h3>

          <div className="mb-4">
            <label className="block text-sm mb-1">Nama Tim</label>
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-800 text-white"
            />
          </div>

          {/* Member 1 Autocomplete */}
          <div className="mb-4 relative">
            <label className="block text-sm mb-1">Pilih Member 1</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Cari nama..."
              value={member1Search}
              onChange={(e) => setMember1Search(e.target.value)}
            />
            {member1Options.length > 0 && (
              <ul className="absolute z-10 w-full bg-white text-black mt-1 border rounded shadow max-h-40 overflow-y-auto">
                {member1Options.map((user) => (
                  <li
                    key={user.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setMember1ID(user.id);
                      setMember1Search(`${user.name} (${user.email})`);
                      setMember1Options([]);
                    }}
                  >
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mb-4 relative">
            <label className="block text-sm mb-1">Pilih Member 2</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Cari nama..."
              value={member2Search}
              onChange={(e) => setMember2Search(e.target.value)}
            />
            {member2Options.length > 0 && (
              <ul className="absolute z-10 w-full bg-white text-black mt-1 border rounded shadow max-h-40 overflow-y-auto">
                {member2Options.map((user) => (
                  <li
                    key={user.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setMember2ID(user.id);
                      setMember2Search(`${user.name} (${user.email})`);
                      setMember2Options([]);
                    }}
                  >
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-white">
              Upload Bukti Pembayaran
            </label>
            <div className="flex items-center justify-between p-2 bg-gray-800 rounded border border-gray-600 hover:border-purple-500 transition duration-200">
              <input
                type="file"
                onChange={(e) => setPaymentProof(e.target.files[0])}
                required
                className="text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-purple-600 file:text-white
                 hover:file:bg-purple-700"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded bg-gradient-to-r from-purple-600 to-pink-500 font-semibold"
          >
            Submit Pendaftaran
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;
