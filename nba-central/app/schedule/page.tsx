import { promises as fs } from 'fs';
import path from 'path';

async function getGames() {
  const filePath = path.join(process.cwd(), 'app/schedule/data/october.csv');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const lines = fileContent.split('\n').filter(line => line.trim());
  
  const games = [];
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const [date, time, awayTeam, awayScore, homeTeam, homeScore, , , , , arena] = line.split(',').map(item => item.trim());
    
    if (date && time && awayTeam && homeTeam && arena) {
      games.push({
        date,
        time,
        awayTeam,
        homeTeam,
        location: arena,
        score: `${awayScore || '-'} - ${homeScore || '-'}`
      });
    }
  }
  return games;
}

export default async function SchedulePage() {
  const allGames = await getGames();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingGames = allGames.filter(game => {
    const gameDate = new Date(game.date);
    return gameDate >= today;
  });

  const pastGames = allGames.filter(game => {
    const gameDate = new Date(game.date);
    return gameDate < today;
  });

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">NBA Schedule</h1>
      
      <div className="flex flex-col gap-8">
        {/* Upcoming Games Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Upcoming Games</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Time</th>
                    <th className="px-6 py-3 text-left">Matchup</th>
                    <th className="px-6 py-3 text-left">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {upcomingGames.map((game, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{game.date}</td>
                      <td className="px-6 py-4">{game.time}</td>
                      <td className="px-6 py-4">
                        <span className="font-semibold">{game.awayTeam}</span>
                        <span className="mx-2">@</span>
                        <span className="font-semibold">{game.homeTeam}</span>
                      </td>
                      <td className="px-6 py-4">{game.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Past Games Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-600">Past Games</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-600 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-left">Time</th>
                    <th className="px-6 py-3 text-left">Matchup</th>
                    <th className="px-6 py-3 text-left">Score</th>
                    <th className="px-6 py-3 text-left">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pastGames.map((game, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">{game.date}</td>
                      <td className="px-6 py-4">{game.time}</td>
                      <td className="px-6 py-4">
                        <span className="font-semibold">{game.awayTeam}</span>
                        <span className="mx-2">@</span>
                        <span className="font-semibold">{game.homeTeam}</span>
                      </td>
                      <td className="px-6 py-4">{game.score}</td>
                      <td className="px-6 py-4">{game.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 