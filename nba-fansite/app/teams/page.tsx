'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Team {
  id: number;
  name: string;
  conference: string;
  division: string;
}

interface Game {
  date: string;
  time: string;
  awayTeam: string;
  homeTeam: string;
  location: string;
  score: string;
}

const teams: Team[] = [
  { id: 1, name: 'Atlanta Hawks', conference: 'Eastern', division: 'Southeast' },
  { id: 2, name: 'Boston Celtics', conference: 'Eastern', division: 'Atlantic' },
  { id: 3, name: 'Brooklyn Nets', conference: 'Eastern', division: 'Atlantic' },
  { id: 4, name: 'Charlotte Hornets', conference: 'Eastern', division: 'Southeast' },
  { id: 5, name: 'Chicago Bulls', conference: 'Eastern', division: 'Central' },
  { id: 6, name: 'Cleveland Cavaliers', conference: 'Eastern', division: 'Central' },
  { id: 7, name: 'Dallas Mavericks', conference: 'Western', division: 'Southwest' },
  { id: 8, name: 'Denver Nuggets', conference: 'Western', division: 'Northwest' },
  { id: 9, name: 'Detroit Pistons', conference: 'Eastern', division: 'Central' },
  { id: 10, name: 'Golden State Warriors', conference: 'Western', division: 'Pacific' },
  { id: 11, name: 'Houston Rockets', conference: 'Western', division: 'Southwest' },
  { id: 12, name: 'Indiana Pacers', conference: 'Eastern', division: 'Central' },
  { id: 13, name: 'LA Clippers', conference: 'Western', division: 'Pacific' },
  { id: 14, name: 'Los Angeles Lakers', conference: 'Western', division: 'Pacific' },
  { id: 15, name: 'Memphis Grizzlies', conference: 'Western', division: 'Southwest' },
  { id: 16, name: 'Miami Heat', conference: 'Eastern', division: 'Southeast' },
  { id: 17, name: 'Milwaukee Bucks', conference: 'Eastern', division: 'Central' },
  { id: 18, name: 'Minnesota Timberwolves', conference: 'Western', division: 'Northwest' },
  { id: 19, name: 'New Orleans Pelicans', conference: 'Western', division: 'Southwest' },
  { id: 20, name: 'New York Knicks', conference: 'Eastern', division: 'Atlantic' },
  { id: 21, name: 'Oklahoma City Thunder', conference: 'Western', division: 'Northwest' },
  { id: 22, name: 'Orlando Magic', conference: 'Eastern', division: 'Southeast' },
  { id: 23, name: 'Philadelphia 76ers', conference: 'Eastern', division: 'Atlantic' },
  { id: 24, name: 'Phoenix Suns', conference: 'Western', division: 'Pacific' },
  { id: 25, name: 'Portland Trail Blazers', conference: 'Western', division: 'Northwest' },
  { id: 26, name: 'Sacramento Kings', conference: 'Western', division: 'Pacific' },
  { id: 27, name: 'San Antonio Spurs', conference: 'Western', division: 'Southwest' },
  { id: 28, name: 'Toronto Raptors', conference: 'Eastern', division: 'Atlantic' },
  { id: 29, name: 'Utah Jazz', conference: 'Western', division: 'Northwest' },
  { id: 30, name: 'Washington Wizards', conference: 'Eastern', division: 'Southeast' }
];

async function getTeamSchedule(teamName: string): Promise<Game[]> {
  const games: Game[] = [];
  const response = await fetch('/api/schedule');
  const csvData = await response.text();
  const lines = csvData.split('\n').filter((line: string) => line.trim());
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const [date, time, awayTeam, awayScore, homeTeam, homeScore, , , , , arena] = line.split(',').map((item: string) => item.trim());
    
    if ((homeTeam === teamName || awayTeam === teamName) && date && time && arena) {
      games.push({
        date,
        time: time.replace('p', ' PM').replace('a', ' AM'),
        awayTeam,
        homeTeam,
        location: arena,
        score: `${awayScore || '-'} - ${homeScore || '-'}`
      });
    }
  }
  
  return games;
}

export default function TeamsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [teamSchedule, setTeamSchedule] = useState<Game[]>([]);
  
  const filteredTeams = filter === 'all' 
    ? teams 
    : teams.filter(team => team.conference.toLowerCase() === filter);

  const handleTeamClick = async (team: Team) => {
    const schedule = await getTeamSchedule(team.name);
    setTeamSchedule(schedule);
    setSelectedTeam(team);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">NBA Teams</h1>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          All Teams
        </button>
        <button
          onClick={() => setFilter('eastern')}
          className={`px-4 py-2 rounded ${filter === 'eastern' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Eastern Conference
        </button>
        <button
          onClick={() => setFilter('western')}
          className={`px-4 py-2 rounded ${filter === 'western' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Western Conference
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTeams.map((team) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleTeamClick(team)}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p className="text-gray-600">{team.conference} Conference</p>
            <p className="text-gray-500">{team.division} Division</p>
          </motion.div>
        ))}
      </div>

      {/* Team Schedule Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedTeam.name} Schedule</h2>
              <button
                onClick={() => setSelectedTeam(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Matchup</th>
                  <th className="px-4 py-2 text-left">Location</th>
                  <th className="px-4 py-2 text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {teamSchedule.map((game, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{game.date}</td>
                    <td className="px-4 py-2">{game.time}</td>
                    <td className="px-4 py-2">
                      <span className="font-semibold">{game.awayTeam}</span>
                      <span className="mx-2">@</span>
                      <span className="font-semibold">{game.homeTeam}</span>
                    </td>
                    <td className="px-4 py-2">{game.location}</td>
                    <td className="px-4 py-2">{game.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
