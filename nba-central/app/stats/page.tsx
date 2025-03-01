import { promises as fs } from 'fs';
import path from 'path';

interface TeamStats {
  Rk: number;
  Team: string;
  G: number;
  PTS: number;
  FG: number;
  'FG%': number;
  '3P': number;
  '3P%': number;
  AST: number;
  TRB: number;
  STL: number;
  BLK: number;
}

async function getTeamStats(): Promise<TeamStats[]> {
  const filePath = path.join(process.cwd(), 'app/stats/teamstats.csv');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const lines = fileContent.split('\n').filter(line => line.trim());
  
  const headers = lines[0].split(',');
  const teams = lines.slice(1, -1).map(line => {
    const values = line.split(',');
    const stats: any = {};
    headers.forEach((header, index) => {
      stats[header] = isNaN(Number(values[index])) ? values[index] : Number(values[index]);
    });
    return stats;
  });
  
  return teams;
}

export default async function StatsPage() {
  const teamStats = await getTeamStats();

  // Calculate league averages
  const leagueAverages = {
    points: teamStats.reduce((sum, team) => sum + team.PTS, 0) / teamStats.length,
    fieldGoal: teamStats.reduce((sum, team) => sum + team['FG%'], 0) / teamStats.length,
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">NBA Team Statistics</h1>
      
      {/* League Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">League Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">League Average Points</p>
            <p className="text-2xl font-bold">{leagueAverages.points.toFixed(1)} PPG</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">League Average FG%</p>
            <p className="text-2xl font-bold">{(leagueAverages.fieldGoal * 100).toFixed(1)}%</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Team</th>
                <th className="px-6 py-3 text-right">Games</th>
                <th className="px-6 py-3 text-right">PPG</th>
                <th className="px-6 py-3 text-right">FG%</th>
                <th className="px-6 py-3 text-right">3P%</th>
                <th className="px-6 py-3 text-right">AST</th>
                <th className="px-6 py-3 text-right">REB</th>
                <th className="px-6 py-3 text-right">STL</th>
                <th className="px-6 py-3 text-right">BLK</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {teamStats.map((team) => (
                <tr key={team.Team} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{team.Team}</td>
                  <td className="px-6 py-4 text-right">{team.G}</td>
                  <td className="px-6 py-4 text-right">{team.PTS.toFixed(1)}</td>
                  <td className="px-6 py-4 text-right">{(team['FG%'] * 100).toFixed(1)}%</td>
                  <td className="px-6 py-4 text-right">{(team['3P%'] * 100).toFixed(1)}%</td>
                  <td className="px-6 py-4 text-right">{team.AST.toFixed(1)}</td>
                  <td className="px-6 py-4 text-right">{team.TRB.toFixed(1)}</td>
                  <td className="px-6 py-4 text-right">{team.STL.toFixed(1)}</td>
                  <td className="px-6 py-4 text-right">{team.BLK.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 