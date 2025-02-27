import Image from "next/image";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-900 opacity-90 z-10" />
        <Image
          src="/thunder-arena.jpg"
          alt="Paycom Center - Home of the Thunder"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Thunder Territory</h1>
          <p className="text-xl max-w-2xl">
            Your ultimate destination for everything Oklahoma City Thunder - 
            following the exciting journey of one of the NBA's most dynamic teams.
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
              <h3 className="font-semibold">Shai Gilgeous-Alexander's MVP Campaign</h3>
              <p className="text-gray-600">Leading the Thunder's charge with exceptional performances...</p>
            </div>
            <div className="border-b pb-2">
              <h3 className="font-semibold">Chet Holmgren's Rookie Season</h3>
              <p className="text-gray-600">Making waves in his debut NBA season...</p>
            </div>
          </div>
        </div>

        {/* Next Game */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Next Game</h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <Image
                src="/thunder-logo.png"
                alt="Thunder Logo"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="font-bold">OKC</p>
            </div>
            <div className="text-2xl font-bold">VS</div>
            <div className="text-center">
              <Image
                src="/opponent-logo.png"
                alt="Opponent Logo"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="font-bold">TBD</p>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Team Stats</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Points Per Game</span>
              <span className="font-bold">120.5</span>
            </div>
            <div className="flex justify-between">
              <span>Rebounds Per Game</span>
              <span className="font-bold">43.2</span>
            </div>
            <div className="flex justify-between">
              <span>Assists Per Game</span>
              <span className="font-bold">27.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
