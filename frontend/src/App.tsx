import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import DonorDashboard from './components/DonorDashboard';
import DonorRegistration from './components/DonorRegistration';
import BloodRequest from './components/BloodRequest';
import SearchDonors from './components/SearchDonors';
import OTPVerification from './components/OTPVerification';
import MapDashboard from './components/MapDashboard';
import AvailabilityPage from './components/AvailabilityPage';
import RequestsPage from './components/RequestsPage';
import HistoryPage from './components/HistoryPage';
import SettingsPage from './components/SettingsPage';

type Page = 'home' | 'login' | 'register' | 'dashboard' | 'register-donor' | 'request' | 'search' | 'otp' | 'map' | 'availability' | 'requests' | 'history' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center bg-slate-900 relative overflow-hidden">
        {/* Loading Animation Background */}
        <div className="absolute inset-0 gradient-bg opacity-50"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Loading Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-400 to-pink-400 
                     rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 0.8, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-8 h-8 bg-white rounded-full"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-white mb-4 font-[Poppins]"
          >
            BloodConnect
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/80 text-lg font-[Inter]"
          >
            Connecting lives, saving futures...
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <div className="flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-3 h-3 bg-red-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="size-full relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className="size-full"
        >
          {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
          {(currentPage === 'login' || currentPage === 'register') && (
            <AuthPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'dashboard' && <DonorDashboard onNavigate={handleNavigate} />}
          {currentPage === 'register-donor' && <DonorRegistration onNavigate={handleNavigate} />}
          {currentPage === 'request' && <BloodRequest onNavigate={handleNavigate} />}
          {currentPage === 'search' && <SearchDonors onNavigate={handleNavigate} />}
          {currentPage === 'otp' && <OTPVerification onNavigate={handleNavigate} />}
          {currentPage === 'map' && <MapDashboard onNavigate={handleNavigate} />}
          {currentPage === 'availability' && <AvailabilityPage onNavigate={handleNavigate} />}
          {currentPage === 'requests' && <RequestsPage onNavigate={handleNavigate} />}
          {currentPage === 'history' && <HistoryPage onNavigate={handleNavigate} />}
          {currentPage === 'settings' && <SettingsPage onNavigate={handleNavigate} />}
        </motion.div>
      </AnimatePresence>

      {/* Global Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`global-${i}`}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </div>
  );
}