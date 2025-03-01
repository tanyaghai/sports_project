import Image from "next/image";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/wallpaper.jpg"
          alt="NBA Arena"
          fill
          className="object-cover absolute"
          priority
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center bg-black/30">
          <h1 className="text-5xl font-bold mb-4">Welcome to NBA Central</h1>
          <p className="text-xl max-w-2xl">
            Your ultimate destination for everything NBA - 
            following the exciting journey of the world's premier basketball league.
          </p>
        </div>
      </section>
    </div>
  );
}
