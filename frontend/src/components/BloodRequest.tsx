import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, Phone, Mail, Heart, MapPin, Calendar, Clock, 
  ArrowLeft, AlertTriangle, Hospital, Plus
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BloodRequestProps {
  onNavigate: (page: string) => void;
}

export default function BloodRequest({ onNavigate }: BloodRequestProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    contactPerson: '',
    phone: '',
    email: '',
    bloodGroup: '',
    unitsRequired: '',
    hospital: '',
    hospitalAddress: '',
    requiredDate: '',
    urgencyLevel: '',
    medicalCondition: '',
    additionalNotes: '',
  });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const urgencyLevels = ['Critical', 'High', 'Medium', 'Low'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate request submission
    onNavigate('search');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900/20 to-slate-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
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
        className="fixed top-6 left-6 z-20 glass-card-dark p-3 rounded-lg text-white 
                 hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6" />
      </motion.button>

      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-10 h-10 text-red-400 animate-pulse" />
              <h1 className="text-3xl font-bold text-white font-[Poppins]">Request Blood</h1>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto font-[Inter]">
              Every second counts in saving a life. Fill out this form to connect with nearby donors 
              and get the blood you need quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card-dark p-8 rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Patient Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 font-[Poppins]">
                      <User className="w-6 h-6 text-teal-400" />
                      Patient Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Patient Name"
                          value={formData.patientName}
                          onChange={(e) => handleInputChange('patientName', e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                   text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                   focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                   font-[Inter]"
                          required
                        />
                      </div>
                      <input
                        type="number"
                        placeholder="Patient Age"
                        value={formData.patientAge}
                        onChange={(e) => handleInputChange('patientAge', e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 
                                 text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                 focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                 font-[Inter]"
                        required
                      />
                      <div className="relative">
                        <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                        <select
                          value={formData.bloodGroup}
                          onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                   text-white focus:outline-none focus:ring-2 
                                   focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                   font-[Inter]"
                          required
                        >
                          <option value="" className="bg-slate-800">Select Blood Group</option>
                          {bloodGroups.map(group => (
                            <option key={group} value={group} className="bg-slate-800">{group}</option>
                          ))}
                        </select>
                      </div>
                      <div className="relative">
                        <Plus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                        <input
                          type="number"
                          placeholder="Units Required"
                          value={formData.unitsRequired}
                          onChange={(e) => handleInputChange('unitsRequired', e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                   text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                   focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                   font-[Inter]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 font-[Poppins]">
                      <Phone className="w-6 h-6 text-teal-400" />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Contact Person Name"
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                   text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                   focus:ring-teal-400 focus:border-transparent transition-all duration-300
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
                                   focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                   font-[Inter]"
                          required
                        />
                      </div>
                      <div className="md:col-span-2 relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                   text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                   focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                   font-[Inter]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hospital & Urgency */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2 font-[Poppins]">
                      <Hospital className="w-6 h-6 text-teal-400" />
                      Hospital & Urgency Details
                    </h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <Hospital className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                          <input
                            type="text"
                            placeholder="Hospital Name"
                            value={formData.hospital}
                            onChange={(e) => handleInputChange('hospital', e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                     text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                     focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                     font-[Inter]"
                            required
                          />
                        </div>
                        <div className="relative">
                          <AlertTriangle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                          <select
                            value={formData.urgencyLevel}
                            onChange={(e) => handleInputChange('urgencyLevel', e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                     text-white focus:outline-none focus:ring-2 
                                     focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                     font-[Inter]"
                            required
                          >
                            <option value="" className="bg-slate-800">Select Urgency Level</option>
                            {urgencyLevels.map(level => (
                              <option key={level} value={level} className="bg-slate-800">{level}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 text-white/60 w-5 h-5" />
                          <textarea
                            placeholder="Hospital Address"
                            value={formData.hospitalAddress}
                            onChange={(e) => handleInputChange('hospitalAddress', e.target.value)}
                            rows={3}
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                     text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                     focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                     resize-none font-[Inter]"
                            required
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                            <input
                              type="datetime-local"
                              placeholder="Required Date & Time"
                              value={formData.requiredDate}
                              onChange={(e) => handleInputChange('requiredDate', e.target.value)}
                              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                                       text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                       focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                       font-[Inter]"
                              required
                            />
                          </div>
                          <input
                            type="text"
                            placeholder="Medical Condition"
                            value={formData.medicalCondition}
                            onChange={(e) => handleInputChange('medicalCondition', e.target.value)}
                            className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 
                                     text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                     focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                     font-[Inter]"
                          />
                        </div>
                      </div>
                      <textarea
                        placeholder="Additional Notes (Optional)"
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                        rows={3}
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 
                                 text-white placeholder-white/60 focus:outline-none focus:ring-2 
                                 focus:ring-teal-400 focus:border-transparent transition-all duration-300
                                 resize-none font-[Inter]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full gradient-teal py-4 rounded-lg text-white font-semibold text-lg
                             hover:shadow-lg transition-all duration-300 btn-ripple
                             glow-teal font-[Inter]"
                  >
                    Submit Blood Request
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Side Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="glass-card-dark p-8 rounded-2xl text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-teal-400 to-blue-500 rounded-full 
                                flex items-center justify-center animate-float">
                    <Heart className="w-16 h-16 text-white animate-heartbeat" fill="currentColor" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-[Poppins]">Every Second Counts</h3>
                <p className="text-white/70 mb-6 font-[Inter]">
                  Your request will be instantly shared with verified donors in your area. 
                  Emergency notifications are sent to ensure rapid response.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <Clock className="w-5 h-5 text-teal-400" />
                    <span className="font-[Inter]">Average response: 15 minutes</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="w-5 h-5 text-teal-400" />
                    <span className="font-[Inter]">Find donors within 5km radius</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Heart className="w-5 h-5 text-teal-400" />
                    <span className="font-[Inter]">24/7 emergency support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}