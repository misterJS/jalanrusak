"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [daysElapsed, setDaysElapsed] = useState(0);

  useEffect(() => {
    const startDate = new Date("2025-02-05").getTime();
    const today = new Date().getTime();
    const timeDiff = today - startDate;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setDaysElapsed(days);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold place-self-center text-red-600">
          PROTES JALAN RUSAK
        </h1>
        <div className="w-full max-w-3xl p-4 relative">
          <h2 className="text-xl font-bold text-gray-800 text-center">
            Timeline Perkembangan
          </h2>
          <div className="relative w-full border-l-4 border-blue-500 mt-4">
            {[
              { date: "05 Feb 2024", event: "Protes dimulai" },
              { date: "08 Feb 2024", event: "Pengukuran jalan" },
              {
                date: "TBC",
                event: "Pengerjaan jalan",
              },
              {
                date: "TBC",
                event: "Proses Finishing",
              },
              {
                date: "TBC",
                event: "Jalan Jadi, warga hepi",
              },
            ].map((item, index) => (
              <div key={index} className="mb-6 ml-4">
                <div
                  className="absolute w-4 h-4 bg-blue-500 rounded-full top-24"
                  style={{ left: "-0.6rem" }}
                ></div>
                <p className="text-gray-600 font-semibold">{item.date}</p>
                <p className="text-gray-800">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="place-self-center">
          <motion.p
            className="mt-6 text-lg font-bold text-red-600"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {daysElapsed} Hari Menunggu!
          </motion.p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-500 text-sm">
        KAPAN JALANKU BENER
      </footer>
    </div>
  );
}
