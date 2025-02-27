const playerStats = [
  {
    name: "Shai Gilgeous-Alexander",
    ppg: 31.2,
    rpg: 5.5,
    apg: 6.4,
    spg: 2.1,
    fg: 54.5
  },
  {
    name: "Chet Holmgren",
    ppg: 16.8,
    rpg: 7.9,
    apg: 2.6,
    spg: 1.0,
    fg: 53.2
  },
  {
    name: "Jalen Williams",
    ppg: 18.5,
    rpg: 4.0,
    apg: 4.3,
    spg: 1.1,
    fg: 54.1
  },
  // Add more players as needed
]

const teamStats = {
  record: "41-17",
  conference: "1st in Western Conference",
  lastTenGames: "8-2",
  homeRecord: "22-7",
  awayRecord: "19-10",
  pointsPerGame: 120.5,
  pointsAllowed: 112.8
}

export default function StatsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">Thunder Statistics</h1>
      
      {/* Team Stats */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Team Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Record</p>
            <p className="text-2xl font-bold">{teamStats.record}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Last 10</p>
            <p className="text-2xl font-bold">{teamStats.lastTenGames}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">PPG</p>
            <p className="text-2xl font-bold">{teamStats.pointsPerGame}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Opp PPG</p>
            <p className="text-2xl font-bold">{teamStats.pointsAllowed}</p>
          </div>
        </div>
      </div>

      {/* Player Stats */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <h2 className="text-2xl font-bold p-6">Player Statistics</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Player</th>
                <th className="px-6 py-3 text-right">PPG</th>
                <th className="px-6 py-3 text-right">RPG</th>
                <th className="px-6 py-3 text-right">APG</th>
                <th className="px-6 py-3 text-right">SPG</th>
                <th className="px-6 py-3 text-right">FG%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {playerStats.map((player) => (
                <tr key={player.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{player.name}</td>
                  <td className="px-6 py-4 text-right">{player.ppg}</td>
                  <td className="px-6 py-4 text-right">{player.rpg}</td>
                  <td className="px-6 py-4 text-right">{player.apg}</td>
                  <td className="px-6 py-4 text-right">{player.spg}</td>
                  <td className="px-6 py-4 text-right">{player.fg}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 