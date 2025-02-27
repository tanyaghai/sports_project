const upcomingGames = [
  {
    date: "2024-03-20",
    opponent: "Utah Jazz",
    location: "Paycom Center",
    time: "7:00 PM CT",
    isHome: true
  },
  {
    date: "2024-03-22",
    opponent: "Milwaukee Bucks",
    location: "Fiserv Forum",
    time: "7:00 PM CT",
    isHome: false
  },
  {
    date: "2024-03-24",
    opponent: "Toronto Raptors",
    location: "Paycom Center",
    time: "6:00 PM CT",
    isHome: true
  },
  // Add more games as needed
]

export default function SchedulePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Thunder Schedule</h1>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Opponent</th>
                <th className="px-6 py-3 text-left">Location</th>
                <th className="px-6 py-3 text-left">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {upcomingGames.map((game) => (
                <tr key={game.date + game.opponent} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {new Date(game.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <span className={game.isHome ? 'text-blue-600 font-semibold' : ''}>
                      {game.isHome ? 'vs' : '@'} {game.opponent}
                    </span>
                  </td>
                  <td className="px-6 py-4">{game.location}</td>
                  <td className="px-6 py-4">{game.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 