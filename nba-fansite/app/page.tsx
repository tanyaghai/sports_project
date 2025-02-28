import Image from "next/image";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 opacity-90 z-10" />
        <Image
          src="/nba-arena.jpg"
          alt="NBA Arena"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to NBA Central</h1>
          <p className="text-xl max-w-2xl">
            Your ultimate destination for everything NBA - 
            following the exciting journey of the world's premier basketball league.
          </p>
        </div>
      </section>

      {/* Featured Sections */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Latest News */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <div className="space-y-4">
            <div className="border-b pb-2">
              <h3 className="font-semibold">MVP Race Heats Up</h3>
              <p className="text-gray-600">Top contenders making their case for the league's highest individual honor...</p>
            </div>
            <div className="border-b pb-2">
              <h3 className="font-semibold">Playoff Picture</h3>
              <p className="text-gray-600">Breaking down the current standings and potential matchups...</p>
            </div>
          </div>
        </div>

        {/* Featured Games */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Featured Games</h2>
          <div className="space-y-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="flex items-center justify-center space-x-4">
                <p className="font-bold">BOS</p>
                <span className="text-xl">vs</span>
                <p className="font-bold">LAL</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">Classic Rivalry Matchup</p>
            </div>
          </div>
        </div>

        {/* League Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">League Leaders</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Points</span>
              <span className="font-bold">30.5 PPG</span>
            </div>
            <div className="flex justify-between">
              <span>Rebounds</span>
              <span className="font-bold">12.8 RPG</span>
            </div>
            <div className="flex justify-between">
              <span>Assists</span>
              <span className="font-bold">10.2 APG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
