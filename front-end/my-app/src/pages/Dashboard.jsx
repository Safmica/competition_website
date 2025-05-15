export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className=" pt-20 w-full px-6 mx-auto py-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-purple-300/30"></div>
          </div>
          <h1 className="text-2xl font-semibold tracking-wide">Dashboard</h1>
        </div>

        {/* Registration Table */}
        <div className="bg-[#111] rounded-xl p-6 border border-gray-800/30">
          <div className="bg-purple-500 inline-block px-4 py-2 rounded-md mb-6">
            <h5 className="text-white font-medium text-sm">Registration Table Data</h5>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Show</span>
              <select className="bg-transparent border border-gray-700/50 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>Entries</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Search:</span>
              <input 
                type="search"
                className="bg-transparent border border-gray-700/50 w-[250px] text-sm px-2 py-1 focus:outline-none focus:ring-1 focus:ring-purple-500"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800/30">
                  <th className="text-left p-4 text-sm font-medium text-gray-400">ID Regist</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Team Name</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Leader</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Member1</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Member2</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Competition</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Payment Proof</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Verify</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800/30">
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4"></td>
                  <td className="p-4">
                    <button className="text-xs px-4 py-1 rounded bg-white/5 hover:bg-white/10">
                      View
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="px-4 py-1 rounded bg-red-500/20 hover:bg-red-500/30 text-red-500 text-sm">✕</button>
                      <button className="px-4 py-1 rounded bg-green-500/20 hover:bg-green-500/30 text-green-500 text-sm">✓</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
