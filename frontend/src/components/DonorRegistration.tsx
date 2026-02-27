import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, Mail, Phone, MapPin, Calendar, Heart, FileText, 
  ArrowLeft, Upload, Shield 
} from 'lucide-react';

interface DonorRegistrationProps {
  onNavigate: (page: string) => void;
}

export default function DonorRegistration({ onNavigate }: DonorRegistrationProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bloodGroup: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    lastDonation: '',
    govtId: '',
    healthIssues: '',
    available: true,
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration success
    onNavigate('otp');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-red-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
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
        onClick={() => onNavigate('dashboard')}
        className="fixed top-6 left-6 z-20 glass-card-dark p-3 rounded-lg text-white 
                 hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6" />
      </motion.button>

      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-10 h-10 text-red-400 animate-heartbeat" fill="currentColor" />
              <h1 className="text-3xl font-bold text-white font-[Poppins]">Become a Life Saver</h1>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto font-[Inter]">
              Join our community of heroes. Your donation can save up to 3 lives. 
              Complete your registration to start making a difference.
            </p>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card-dark p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 font-[Poppins]">
                  <User className="w-6 h-6 text-red-400" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-red-400 focus:border-transparent transition-all duration-300
                               font-[Inter]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-red-400 focus:border-transparent transition-all duration-300
                               font-[Inter]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-red-400 focus:border-transparent transition-all duration-300
                               font-[Inter]"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <select
                      value={formData.bloodGroup}
                      onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white focus:outline-none focus:ring-2 
                               focus:ring-red-400 focus:border-transparent transition-all duration-300
                               font-[Inter]"
                      required
                    >
                      <option value="" className="bg-slate-800">Select Blood Group</option>
                      {bloodGroups.map(group => (
                        <option key={group} value={group} className="bg-slate-800">{group}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 font-[Poppins]">
                  <MapPin className="w-6 h-6 text-red-400" />
                  Location Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2 relative">
                    <MapPin className="absolute left-3 top-3 text-white/60 w-5 h-5" />
                    <textarea
                      placeholder="Complete Address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-red-400 focus:border-transparent transition-all duration-300
                               resize-none font-[Inter]"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 
                             text-white placeholder-white/60 focus:outline-none focus:ring-2 
                             focus:ring-red-400 focus:border-transparent transition-all duration-300
                             font-[Inter]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 
                             text-white placeholder-white/60 focus:outline-none focus:ring-2 
                             focus:ring-red-400 focus:border-transparent transition-all duration-300
                             font-[Inter]"
                    required
                  />
                </div>
              </div>

              {/* Medical Information */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 font-[Poppins]">
                  <Shield className="w-6 h-6 text-red-400" />
                  Medical Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="date"
                      placeholder="Last Donation Date"
                      value={formData.lastDonation}
                      onChange={(e) => handleInputChange('lastDonation', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-red-400 focus:border-transparent transition-all duration-300
                               font-[Inter]"
                    />
                  </div>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Government ID Number"
                      value={formData.govtId}
                      onChange={(e) => handleInputChange('govtId', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-red-400 focus:border-transparent transition-all duration-300
                               font-[Inter]"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 relative">
                    <FileText className="absolute left-3 top-3 text-white/60 w-5 h-5" />
                    <textarea
                      placeholder="Any Health Issues or Medications (Optional)"
                      value={formData.healthIssues}
                      onChange={(e) => handleInputChange('healthIssues', e.target.value)}
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                               text-white placeholder-white/60 focus:outline-none focus:ring-2 
                               focus:ring-red-400 focus:border-transparent transition-all duration-300
                               resize-none font-[Inter]"
                    />
                  </div>
                </div>
              </div>

              {/* Availability Toggle */}
              <div className="flex items-center justify-between p-6 bg-white/5 rounded-lg border border-white/10">
                <div>
                  <h4 className="text-white font-semibold mb-1 font-[Poppins]">Available for Emergency Donations</h4>
                  <p className="text-white/60 text-sm font-[Inter]">
                    Allow us to contact you for urgent blood requests in your area
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleInputChange('available', !formData.available)}
                  className={`w-12 h-6 rounded-full transition-all duration-300 ${
                    formData.available ? 'bg-green-400' : 'bg-gray-400'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300 ${
                    formData.available ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-bg py-4 rounded-lg text-white font-semibold text-lg
                         hover:shadow-lg transition-all duration-300 btn-ripple
                         glow-red font-[Inter]"
              >
                Complete Registration
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}