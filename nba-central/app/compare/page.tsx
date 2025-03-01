'use client';

import { useState, useEffect } from 'react';

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
  TOV: number;
}

export default function CompareTeams() {
  const [allTeams, setAllTeams] = useState<TeamStats[]>([]);
  const [team1, setTeam1] = useState<TeamStats | null>(null);
  const [team2, setTeam2] = useState<TeamStats | null>(null);

  useEffect(() => {
    const fetchTeamStats = async () => {
      const response = await fetch('/api/teamstats');
      const data = await response.json();
      setAllTeams(data);
    };
    fetchTeamStats();
  }, []);

  const handleTeamSelect = (team: string, setter: (team: TeamStats | null) => void) => {
    const selectedTeam = allTeams.find(t => t.Team === team);
    setter(selectedTeam || null);
  };

  const getComparisonColor = (val1: number, val2: number) => {
    if (val1 > val2) return 'text-green-600';
    if (val1 < val2) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Compare Teams</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Team 1 Selector */}
        <div>
          <label className="block text-lg font-semibold mb-2">Select First Team</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => handleTeamSelect(e.target.value, setTeam1)}
            value={team1?.Team || ''}
          >
            <option value="">Select a team</option>
            {allTeams.map((team) => (
              <option key={team.Team} value={team.Team}>
                {team.Team}
              </option>
            ))}
          </select>
        </div>

        {/* Team 2 Selector */}
        <div>
          <label className="block text-lg font-semibold mb-2">Select Second Team</label>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => handleTeamSelect(e.target.value, setTeam2)}
            value={team2?.Team || ''}
          >
            <option value="">Select a team</option>
            {allTeams.map((team) => (
              <option key={team.Team} value={team.Team}>
                {team.Team}
              </option>
            ))}
          </select>
        </div>
      </div>

      {team1 && team2 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Team Comparison</h2>
          
          <div className="grid grid-cols-3 gap-4">
            {/* Team 1 Stats */}
            <div className="text-right">
              <h3 className="font-bold text-xl mb-4">{team1.Team}</h3>
              <p className={`mb-2 ${getComparisonColor(team1.PTS, team2.PTS)}`}>
                {team1.PTS.toFixed(1)} PPG
              </p>
              <p className={`mb-2 ${getComparisonColor(team1['FG%'], team2['FG%'])}`}>
                {(team1['FG%'] * 100).toFixed(1)}% FG
              </p>
              <p className={`mb-2 ${getComparisonColor(team1['3P%'], team2['3P%'])}`}>
                {(team1['3P%'] * 100).toFixed(1)}% 3P
              </p>
              <p className={`mb-2 ${getComparisonColor(team1.AST, team2.AST)}`}>
                {team1.AST.toFixed(1)} AST
              </p>
              <p className={`mb-2 ${getComparisonColor(team1.TRB, team2.TRB)}`}>
                {team1.TRB.toFixed(1)} REB
              </p>
              <p className={`mb-2 ${getComparisonColor(team1.STL, team2.STL)}`}>
                {team1.STL.toFixed(1)} STL
              </p>
              <p className={`mb-2 ${getComparisonColor(team1.BLK, team2.BLK)}`}>
                {team1.BLK.toFixed(1)} BLK
              </p>
              <p className={`mb-2 ${getComparisonColor(-team1.TOV, -team2.TOV)}`}>
                {team1.TOV.toFixed(1)} TOV
              </p>
            </div>

            {/* Stat Labels */}
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4">Statistics</h3>
              <p className="mb-2">Points Per Game</p>
              <p className="mb-2">Field Goal %</p>
              <p className="mb-2">3-Point %</p>
              <p className="mb-2">Assists</p>
              <p className="mb-2">Rebounds</p>
              <p className="mb-2">Steals</p>
              <p className="mb-2">Blocks</p>
              <p className="mb-2">Turnovers</p>
            </div>

            {/* Team 2 Stats */}
            <div className="text-left">
              <h3 className="font-bold text-xl mb-4">{team2.Team}</h3>
              <p className={`mb-2 ${getComparisonColor(team2.PTS, team1.PTS)}`}>
                {team2.PTS.toFixed(1)} PPG
              </p>
              <p className={`mb-2 ${getComparisonColor(team2['FG%'], team1['FG%'])}`}>
                {(team2['FG%'] * 100).toFixed(1)}% FG
              </p>
              <p className={`mb-2 ${getComparisonColor(team2['3P%'], team1['3P%'])}`}>
                {(team2['3P%'] * 100).toFixed(1)}% 3P
              </p>
              <p className={`mb-2 ${getComparisonColor(team2.AST, team1.AST)}`}>
                {team2.AST.toFixed(1)} AST
              </p>
              <p className={`mb-2 ${getComparisonColor(team2.TRB, team1.TRB)}`}>
                {team2.TRB.toFixed(1)} REB
              </p>
              <p className={`mb-2 ${getComparisonColor(team2.STL, team1.STL)}`}>
                {team2.STL.toFixed(1)} STL
              </p>
              <p className={`mb-2 ${getComparisonColor(team2.BLK, team1.BLK)}`}>
                {team2.BLK.toFixed(1)} BLK
              </p>
              <p className={`mb-2 ${getComparisonColor(-team2.TOV, -team1.TOV)}`}>
                {team2.TOV.toFixed(1)} TOV
              </p>
            </div>
          </div>

          {/* Analysis Section */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Quick Analysis</h3>
            <ul className="list-disc list-inside space-y-2">
              {team1.PTS > team2.PTS && (
                <li>{team1.Team} scores {(team1.PTS - team2.PTS).toFixed(1)} more points per game</li>
              )}
              {team2.PTS > team1.PTS && (
                <li>{team2.Team} scores {(team2.PTS - team1.PTS).toFixed(1)} more points per game</li>
              )}
              {team1['FG%'] > team2['FG%'] && (
                <li>{team1.Team} shoots {((team1['FG%'] - team2['FG%']) * 100).toFixed(1)}% better from the field</li>
              )}
              {team2['FG%'] > team1['FG%'] && (
                <li>{team2.Team} shoots {((team2['FG%'] - team1['FG%']) * 100).toFixed(1)}% better from the field</li>
              )}
              {Math.abs(team1.AST - team2.AST) > 2 && (
                <li>
                  {team1.AST > team2.AST ? team1.Team : team2.Team} averages {Math.abs(team1.AST - team2.AST).toFixed(1)} more assists per game
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 