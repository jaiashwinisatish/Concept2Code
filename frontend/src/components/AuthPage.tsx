import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Phone, ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface AuthPageProps {
  onNavigate: (page: string) => void;
}

export default function AuthPage({ onNavigate }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth success
    onNavigate('dashboard');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => onNavigate('home')}
        className="fixed top-6 left-6 z-20 glass-card p-3 rounded-lg text-white 
                 hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6" />
      </motion.button>

      {/* Auth Card */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
            {/* Glowing Border Animation */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blood-red via-neon-purple to-teal-accent opacity-20 blur-xl animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Tab Switcher */}
              <div className="flex mb-8 bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 px-4 rounded-md transition-all duration-300 font-[Inter] ${
                    isLogin 
                      ? 'bg-white text-slate-900 shadow-lg' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 px-4 rounded-md transition-all duration-300 font-[Inter] ${
                    !isLogin 
                      ? 'bg-white text-slate-900 shadow-lg' 
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="relative"
                  >
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-blood-red focus:border-transparent transition-all duration-300
                               font-[Inter]"
                    />
                  </motion.div>
                )}

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                             text-white placeholder-white/60 focus:outline-none focus:ring-2 
                             focus:ring-blood-red focus:border-transparent transition-all duration-300
                             font-[Inter]"
                  />
                </div>

                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="relative"
                  >
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-blood-red focus:border-transparent transition-all duration-300
                               font-[Inter]"
                    />
                  </motion.div>
                )}

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-12 
                             text-white placeholder-white/60 focus:outline-none focus:ring-2 
                             focus:ring-blood-red focus:border-transparent transition-all duration-300
                             font-[Inter]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full gradient-bg py-3 rounded-lg text-white font-semibold
                           hover:shadow-lg transition-all duration-300 btn-ripple
                           glow-red font-[Inter]"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                </motion.button>
              </form>

              {/* Footer Links */}
              <div className="mt-6 text-center">
                <button className="text-white/60 hover:text-white transition-colors font-[Inter]">
                  Forgot your password?
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}