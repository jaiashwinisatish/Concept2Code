import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, MapPin, Calendar, Activity, Save, AlertCircle } from 'lucide-react';
import { Switch } from './ui/switch';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface AvailabilityPageProps {
  onNavigate: (page: string) => void;
}

export default function AvailabilityPage({ onNavigate }: AvailabilityPageProps) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [location, setLocation] = useState('New York, NY');
  const [healthCondition, setHealthCondition] = useState('No major health issues');
  const [lastDonationDate] = useState('2024-10-15');
  const [nextEligibleDate] = useState('2024-12-15');

  const handleSave = () => {
    // Here you would normally save to backend
    console.log('Saving availability settings...');
    onNavigate('dashboard');
  };

  const handleAutoLocation = () => {
    // Simulate getting current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Got location:', position);
        setLocation('Current Location - Auto-detected');
      },
      (error) => {
        console.error('Location error:', error);
        setLocation('Location access denied');
      }
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-red-400/20 to-purple-400/20 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onNavigate('dashboard')}
            className="text-white hover:bg-white/10 hover:text-red-400 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-400 animate-heartbeat" fill="currentColor" />
            <h1 className="text-3xl font-bold text-white font-[Poppins]">Availability Settings</h1>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Settings Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card-dark p-8 rounded-xl">
              <h2 className="text-xl font-semibold text-white mb-6 font-[Poppins]">Donation Availability</h2>
              
              {/* Availability Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-between p-6 bg-white/5 rounded-lg border border-white/10 mb-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    isAvailable ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium font-[Inter]">
                      {isAvailable ? 'Available for Donation' : 'Not Available'}
                    </h3>
                    <p className="text-white/60 text-sm font-[Inter]">
                      {isAvailable ? 'You can receive donation requests' : 'You won\'t receive donation requests'}
                    </p>
                  </div>
                </div>
                <Switch
                  checked={isAvailable}
                  onCheckedChange={setIsAvailable}
                  className="scale-125"
                />
              </motion.div>

              {/* Location Settings */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-6"
              >
                <Label htmlFor="location" className="text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  Current Location
                </Label>
                <div className="flex gap-3">
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="flex-1 bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-purple-400"
                    placeholder="Enter your location"
                  />
                  <Button
                    onClick={handleAutoLocation}
                    className="bg-purple-500/20 border border-purple-500/30 text-purple-400 hover:bg-purple-500/30"
                  >
                    Auto-detect
                  </Button>
                </div>
              </motion.div>

              {/* Health Condition */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 mb-6"
              >
                <Label htmlFor="health" className="text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-green-400" />
                  Health Condition
                </Label>
                <Textarea
                  id="health"
                  value={healthCondition}
                  onChange={(e) => setHealthCondition(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-green-400 min-h-[100px]"
                  placeholder="Describe your current health condition"
                />
                <p className="text-white/60 text-sm font-[Inter]">
                  Please mention any recent illnesses, medications, or health concerns
                </p>
              </motion.div>

              {/* Save Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-end"
              >
                <Button
                  onClick={handleSave}
                  className="bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 
                           hover:glow-red transition-all duration-300 px-8 py-2 font-[Inter]"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Donation History Card */}
            <div className="glass-card-dark p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 font-[Poppins]">Donation Timeline</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white text-sm font-[Inter]">Last Donation</p>
                    <p className="text-blue-400 font-medium font-[Inter]">{lastDonationDate}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <Calendar className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white text-sm font-[Inter]">Next Eligible</p>
                    <p className="text-green-400 font-medium font-[Inter]">{nextEligibleDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips Card */}
            <div className="glass-card-dark p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 font-[Poppins]">Quick Tips</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <p className="text-white/80 text-sm font-[Inter]">
                    Wait at least 56 days between whole blood donations
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-white/80 text-sm font-[Inter]">
                    Stay hydrated and eat iron-rich foods before donating
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p className="text-white/80 text-sm font-[Inter]">
                    Update your availability status regularly
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="glass-card-dark p-6 rounded-xl border border-red-400/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-red-400 animate-heartbeat" fill="currentColor" />
                <h4 className="text-red-400 font-medium font-[Poppins]">Emergency Priority</h4>
              </div>
              <p className="text-white/80 text-sm font-[Inter]">
                Even if marked unavailable, you may receive critical emergency requests in your area.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}