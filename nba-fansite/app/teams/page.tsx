'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const teams = [
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

export default function TeamsPage() {
  const [filter, setFilter] = useState('all');
  
  const filteredTeams = filter === 'all' 
    ? teams 
    : teams.filter(team => team.conference.toLowerCase() === filter);

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
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold">{team.name}</h2>
            <p className="text-gray-600">{team.conference} Conference</p>
            <p className="text-gray-500">{team.division} Division</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
