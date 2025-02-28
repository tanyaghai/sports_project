const topPlayers = [
  {
    name: "Joel Embiid",
    team: "PHI",
    ppg: 35.3,
    rpg: 11.3,
    apg: 5.7,
    spg: 1.1,
    fg: 53.7
  },
  {
    name: "Shai Gilgeous-Alexander",
    team: "OKC",
    ppg: 31.2,
    rpg: 5.5,
    apg: 6.4,
    spg: 2.1,
    fg: 54.5
  },
  {
    name: "Giannis Antetokounmpo",
    team: "MIL",
    ppg: 30.8,
    rpg: 11.2,
    apg: 6.3,
    spg: 1.2,
    fg: 61.1
  },
  // Add more players as needed
]

const leagueStats = {
  averagePoints: 115.7,
  averageRebounds: 44.2,
  averageAssists: 26.3,
  paceOfPlay: 99.2,
  threePtPercentage: 36.8,
  fgPercentage: 47.5
}

export default function StatsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">NBA Statistics</h1>
      
      {/* League Stats */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">League Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Points Per Game</p>
            <p className="text-2xl font-bold">{leagueStats.averagePoints}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">FG%</p>
            <p className="text-2xl font-bold">{leagueStats.fgPercentage}%</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">3PT%</p>
            <p className="text-2xl font-bold">{leagueStats.threePtPercentage}%</p>
          </div>
        </div>
      </div>

      {/* Top Players */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <h2 className="text-2xl font-bold p-6">League Leaders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Player</th>
                <th className="px-6 py-3 text-left">Team</th>
                <th className="px-6 py-3 text-right">PPG</th>
                <th className="px-6 py-3 text-right">RPG</th>
                <th className="px-6 py-3 text-right">APG</th>
                <th className="px-6 py-3 text-right">SPG</th>
                <th className="px-6 py-3 text-right">FG%</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topPlayers.map((player) => (
                <tr key={player.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{player.name}</td>
                  <td className="px-6 py-4">{player.team}</td>
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