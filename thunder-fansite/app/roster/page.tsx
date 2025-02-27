import Image from 'next/image'

const players = [
  {
    name: "Shai Gilgeous-Alexander",
    number: "2",
    position: "Guard",
    height: "6'6\"",
    weight: "195 lbs",
    image: "/sga.jpg"
  },
  {
    name: "Chet Holmgren",
    number: "7",
    position: "Center",
    height: "7'1\"",
    weight: "208 lbs",
    image: "/chet.jpg"
  },
  {
    name: "Jalen Williams",
    number: "8",
    position: "Guard/Forward",
    height: "6'6\"",
    weight: "195 lbs",
    image: "/jwill.jpg"
  },
  // Add more players as needed
]

export default function RosterPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">OKC Thunder Roster</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <div key={player.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 relative">
              <div className="absolute inset-0 bg-blue-600 opacity-10" />
              <div className="h-full flex items-center justify-center">
                <span className="text-6xl font-bold text-blue-600">#{player.number}</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
              <div className="space-y-1 text-gray-600">
                <p>Position: {player.position}</p>
                <p>Height: {player.height}</p>
                <p>Weight: {player.weight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 