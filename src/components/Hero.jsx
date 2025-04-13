import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-white to-gray-100 px-4">
      
      <motion.h1
        className="text-5xl font-bold text-center text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I'm Ania Niedzialek
      </motion.h1>

      <motion.p
        className="mt-4 text-xl text-center text-gray-600 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.2 }}
      >
        Welcome to my website!
      </motion.p>

    </section>
  )
}

export default Hero;
