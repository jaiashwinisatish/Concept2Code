import { motion } from 'motion/react';
import { Heart, Users, MapPin, TrendingUp } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Floating Blood Drops */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3">
              <div className="relative">
                <Heart className="w-12 h-12 text-white animate-heartbeat" fill="currentColor" />
                <div className="absolute inset-0 animate-pulse-glow rounded-full"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-[Poppins]">
                BloodConnect
              </h1>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[Poppins] animate-pulse-glow">
              Save Lives. Connect Faster.
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-[Inter]">
              The future of blood donation is here. Connect donors with those in need instantly, 
              save lives with technology, and build a healthier tomorrow.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <button
              onClick={() => onNavigate('register')}
              className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg
                       hover:scale-105 transition-all duration-300 btn-ripple glow-red
                       shadow-lg hover:shadow-xl"
            >
              Become a Donor
            </button>
            <button
              onClick={() => onNavigate('request')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl 
                       font-semibold text-lg hover:bg-white hover:text-red-600
                       hover:scale-105 transition-all duration-300 btn-ripple
                       shadow-lg hover:shadow-xl"
            >
              Request Blood
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 bg-white/10 backdrop-blur-lg border-t border-white/20"
      >
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Total Donors', value: '12,450+', color: 'text-teal-accent' },
              { icon: Heart, label: 'Lives Saved', value: '8,230+', color: 'text-red-400' },
              { icon: MapPin, label: 'Cities Covered', value: '150+', color: 'text-neon-purple' },
              { icon: TrendingUp, label: 'Success Rate', value: '96.8%', color: 'text-green-400' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                <div className={`text-2xl font-bold mb-2 ${stat.color} font-[Poppins]`}>
                  {stat.value}
                </div>
                <div className="text-white/80 font-[Inter]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Navigation hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="fixed top-6 right-6 z-20"
      >
        <button
          onClick={() => onNavigate('login')}
          className="glass-card px-4 py-2 rounded-lg text-white hover:bg-white/20 
                   transition-all duration-300 font-[Inter]"
        >
          Sign In
        </button>
      </motion.div>
    </div>
  );
}