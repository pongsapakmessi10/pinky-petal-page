import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const loveMessages = [
  "ถ้าเธอเป็นกาแฟ ฉันก็คงเป็นน้ำตาล เพราะอยู่ด้วยกันแล้วหวานขึ้นทันตา 💕",
  "รู้ไหมทำไมผมถึงไม่กลัวความมืด... เพราะมีแสงจากดวงตาของคุณอยู่แล้ว ✨",
  "โลกนี้มีแค่สองสิ่งที่ผมไม่อยากเสียไป คือ ‘ลมหายใจ’ กับ ‘คุณ’ 💖",
  "เห็นยิ้มคุณทีไร หัวใจก็แทบหยุดเต้นทุกที 😍",
  "ถ้าให้ผมเลือกดาวสักดวง ผมคงเลือกคุณ เพราะคุณคือดวงที่สว่างที่สุดในใจผม 🌙",
  "คุณเชื่อไหมว่าแค่คิดถึงคุณ หัวใจก็เต้นแรงกว่าตอนวิ่งอีก 🏃‍♂️❤️",
  "คุณเป็นคนเดียวที่ทำให้โลกทั้งใบของผมมีค่า 🌍💘",
  "ทุกข้อความที่ผมส่งไป ไม่ใช่เพราะว่าง แต่เพราะคิดถึงคุณจริงๆ 📩💕",
  "ผมไม่ต้องการคนทั้งโลกหรอก แค่ได้คุณคนเดียวก็พอแล้ว 💑"
];

function Love() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate(); // ✅ useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % loveMessages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-pink-100">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="/romantic-song.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl w-11/12 animate-scale-in">
        <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center animate-float">
          💖 Love Blog 💖
        </h1>
        <p
          key={currentIndex}
          className="text-lg text-gray-700 min-h-[60px] text-center animate-fade-in"
        >
          {loveMessages[currentIndex]}
        </p>

        {/* Play / Pause Button */}
        <button
          onClick={togglePlay}
          className="mt-6 px-6 py-2 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition"
        >
          {isPlaying ? "⏸️ Pause Music" : "▶️ Play Music"}
        </button>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}  // ✅ go back to home
          className="mt-6 px-10 py-2 ml-40 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Love;
