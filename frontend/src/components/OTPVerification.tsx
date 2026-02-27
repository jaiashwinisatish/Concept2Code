import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Heart, RefreshCw } from 'lucide-react';

interface OTPVerificationProps {
  onNavigate: (page: string) => void;
}

export default function OTPVerification({ onNavigate }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every(digit => digit !== '') && !isVerified) {
      handleVerify(newOtp);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (otpToVerify = otp) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsVerified(true);
    
    // Navigate to dashboard after success animation
    setTimeout(() => {
      onNavigate('dashboard');
    }, 2000);
  };

  const handleResend = () => {
    setTimer(30);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Success Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-green-900/30"></div>
        
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-green-400 mx-auto" />
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-24 h-24 mx-auto bg-green-400/20 rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-bold text-white mb-4 font-[Poppins]"
          >
            Verification Successful!
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-white/70 font-[Inter]"
          >
            Welcome to BloodConnect. Redirecting to your dashboard...
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6"
          >
            <Heart className="w-8 h-8 text-red-400 mx-auto animate-heartbeat" fill="currentColor" />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
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
        onClick={() => onNavigate('register-donor')}
        className="fixed top-6 left-6 z-20 glass-card-dark p-3 rounded-lg text-white 
                 hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6" />
      </motion.button>

      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="glass-card-dark p-8 rounded-2xl text-center relative overflow-hidden">
            {/* Glowing Border Animation */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-20 blur-xl animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-purple-400 
                              rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white animate-heartbeat" fill="currentColor" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 font-[Poppins]">Enter Verification Code</h2>
                <p className="text-white/70 font-[Inter]">
                  We've sent a 6-digit code to your phone number
                </p>
              </motion.div>

              {/* OTP Input Fields */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-3 mb-8"
              >
                {otp.map((digit, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <input
                      ref={el => inputRefs.current[index] = el}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center text-xl font-bold bg-white/10 border-2 
                               border-white/20 rounded-lg text-white focus:outline-none 
                               focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 
                               transition-all duration-300 font-[Poppins]"
                      autoFocus={index === 0}
                    />
                    {digit && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-12 h-1 bg-blue-400 rounded-full mt-2 mx-auto"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Verify Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                onClick={() => handleVerify()}
                disabled={otp.some(digit => digit === '') || isLoading}
                className="w-full bg-gradient-to-r from-blue-400 to-purple-400 py-3 rounded-lg 
                         text-white font-semibold text-lg disabled:opacity-50 
                         disabled:cursor-not-allowed hover:from-blue-500 hover:to-purple-500
                         transition-all duration-300 btn-ripple font-[Inter]
                         disabled:hover:from-blue-400 disabled:hover:to-purple-400"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Verifying...
                  </div>
                ) : (
                  'Verify OTP'
                )}
              </motion.button>

              {/* Resend Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-6 text-center"
              >
                <p className="text-white/60 text-sm mb-3 font-[Inter]">
                  Didn't receive the code?
                </p>
                {canResend ? (
                  <button
                    onClick={handleResend}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-semibold font-[Inter]"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <div className="text-white/60 font-[Inter]">
                    Resend in {timer}s
                  </div>
                )}
              </motion.div>

              {/* Help Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-6 text-xs text-white/50 font-[Inter]"
              >
                Having trouble? Contact our support team for assistance.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}