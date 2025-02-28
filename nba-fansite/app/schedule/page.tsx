const upcomingGames = [
  {
    date: "2024-03-20",
    homeTeam: "BOS",
    awayTeam: "MIL",
    location: "TD Garden",
    time: "7:30 PM ET",
    broadcast: "ESPN"
  },
  {
    date: "2024-03-20",
    homeTeam: "LAL",
    awayTeam: "GSW",
    location: "Crypto.com Arena",
    time: "10:00 PM ET",
    broadcast: "ESPN"
  },
  {
    date: "2024-03-21",
    homeTeam: "PHX",
    awayTeam: "ATL",
    location: "Footprint Center",
    time: "10:00 PM ET",
    broadcast: "NBA TV"
  },
  // Add more games as needed
]

export default function SchedulePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">NBA Schedule</h1>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Matchup</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Time</th>
                <th className="px-6 py-3 text-left">Broadcast</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {upcomingGames.map((game) => (
                <tr key={`${game.date}-${game.homeTeam}-${game.awayTeam}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {new Date(game.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold">{game.awayTeam}</span>
                    <span className="mx-2">@</span>
                    <span className="font-semibold">{game.homeTeam}</span>
                  </td>
                  <td className="px-6 py-4">{game.location}</td>
                  <td className="px-6 py-4">{game.time}</td>
                  <td className="px-6 py-4">{game.broadcast}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 