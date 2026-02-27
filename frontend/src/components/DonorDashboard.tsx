import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Heart, User, Bell, Settings, LogOut, Calendar, MapPin, 
  Activity, Award, Plus, Clock, Users, TrendingUp 
} from 'lucide-react';

interface DonorDashboardProps {
  onNavigate: (page: string) => void;
}

export default function DonorDashboard({ onNavigate }: DonorDashboardProps) {
  const [activeMenu, setActiveMenu] = useState('profile');

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'availability', label: 'Availability', icon: Calendar },
    { id: 'requests', label: 'Requests', icon: Bell },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'rewards', label: 'Rewards', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Total Donations', value: '12', icon: Heart },
    { label: 'Lives Saved', value: '36', icon: Users },
    { label: 'Reward Points', value: '2,450', icon: Award },
    { label: 'Next Eligible', value: '45 days', icon: Clock },
  ];

  const recentRequests = [
    { id: 1, type: 'O+', hospital: 'City Hospital', urgency: 'High', time: '2 hours ago' },
    { id: 2, type: 'A-', hospital: 'Metro Medical', urgency: 'Medium', time: '5 hours ago' },
    { id: 3, type: 'B+', hospital: 'General Hospital', urgency: 'Low', time: '1 day ago' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Blood Drive at University', date: 'Jan 15', location: 'Campus Center' },
    { id: 2, title: 'Community Health Fair', date: 'Jan 20', location: 'City Park' },
    { id: 3, title: 'Mobile Blood Unit', date: 'Jan 25', location: 'Downtown Mall' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-red-400/20 to-purple-400/20 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
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

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-64 bg-slate-800/50 backdrop-blur-lg border-r border-white/10 p-6 relative z-10"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <Heart className="w-8 h-8 text-red-400 animate-heartbeat" fill="currentColor" />
          <h1 className="text-xl font-bold text-white font-[Poppins]">BloodConnect</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => {
                  setActiveMenu(item.id);
                  if (item.id !== 'profile') {
                    onNavigate(item.id);
                  }
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-[Inter] ${
                  activeMenu === item.id
                    ? 'bg-red-400/20 text-red-400 border border-red-400/30 glow-red'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </motion.button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button 
              onClick={() => onNavigate('request')}
              className="w-full flex items-center gap-3 px-4 py-3 bg-red-500/20 border border-red-500/30 
                       rounded-lg text-red-400 hover:bg-red-500/30 transition-all duration-300 font-[Inter]"
            >
              <Plus className="w-5 h-5" />
              Request Blood
            </button>
            
            <div className="mt-3">
              <button 
                onClick={() => onNavigate('search')}
                className="w-full flex items-center gap-3 px-4 py-3 bg-purple-400/20 border border-purple-400/30 
                         rounded-lg text-purple-400 hover:bg-purple-400/30 transition-all duration-300 font-[Inter]"
              >
                <Users className="w-5 h-5" />
                Find Donors
              </button>
            </div>

            <div className="mt-3">
              <button 
                onClick={() => onNavigate('map')}
                className="w-full flex items-center gap-3 px-4 py-3 bg-green-400/20 border border-green-400/30 
                         rounded-lg text-green-400 hover:bg-green-400/30 transition-all duration-300 font-[Inter]"
              >
                <MapPin className="w-5 h-5" />
                View Map
              </button>
            </div>
          </motion.div>
        </div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => onNavigate('home')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 
                   hover:text-white hover:bg-white/10 transition-all duration-300 mt-8 font-[Inter]"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="glass-card-dark p-6 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full 
                            flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white font-[Poppins]">Welcome back, John!</h2>
                <p className="text-white/60 font-[Inter]">Ready to save lives today?</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-400 animate-heartbeat" fill="currentColor" />
              <span className="text-white/80 font-[Inter]">Available to Donate</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: '0 20px 40px rgba(77, 208, 225, 0.3), 0 0 20px rgba(108, 123, 255, 0.2)'
                }}
                className="relative p-6 rounded-xl overflow-hidden group cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #0A1A3F 0%, #112B5C 100%)',
                  border: '1px solid rgba(77, 208, 225, 0.2)',
                  boxShadow: '0 8px 32px rgba(10, 26, 63, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
              >
                {/* Glassmorphism Glow Edge */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(77, 208, 225, 0.15) 0%, rgba(108, 123, 255, 0.15) 100%)',
                    boxShadow: 'inset 0 0 20px rgba(77, 208, 225, 0.3), inset 0 0 40px rgba(108, 123, 255, 0.2)'
                  }}
                />
                
                {/* Subtle Light Cyan Border Glow */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: '0 0 15px rgba(77, 208, 225, 0.4), inset 0 0 15px rgba(108, 123, 255, 0.2)'
                  }}
                />

                {/* Icon Container */}
                <div className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(77, 208, 225, 0.15) 0%, rgba(108, 123, 255, 0.15) 100%)',
                    border: '1px solid rgba(77, 208, 225, 0.3)',
                    boxShadow: '0 4px 12px rgba(77, 208, 225, 0.2)'
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Value */}
                <div className="relative text-3xl font-bold text-white mb-1 font-[Poppins] group-hover:text-cyan-100 transition-colors duration-300">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="relative text-white/70 font-[Inter] group-hover:text-white/90 transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Animated Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(77, 208, 225, 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Requests */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card-dark p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white font-[Poppins]">Recent Blood Requests</h3>
                <button 
                  onClick={() => onNavigate('request')}
                  className="text-red-400 hover:text-red-300 transition-colors font-[Inter]"
                >
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentRequests.map((request, index) => (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-[Poppins] ${
                        request.urgency === 'High' ? 'bg-red-500/20 text-red-400' :
                        request.urgency === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {request.type}
                      </div>
                      <div>
                        <p className="text-white font-medium font-[Inter]">{request.hospital}</p>
                        <p className="text-white/60 text-sm font-[Inter]">{request.time}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium font-[Inter] ${
                      request.urgency === 'High' ? 'bg-red-500/20 text-red-400' :
                      request.urgency === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {request.urgency}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card-dark p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-6 font-[Poppins]">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm font-[Inter]">{event.title}</p>
                        <p className="text-purple-400 text-xs font-[Inter]">{event.date}</p>
                        <p className="text-white/60 text-xs font-[Inter]">{event.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <button 
                onClick={() => setActiveMenu('requests')}
                className="w-full mt-4 py-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-[Inter]"
              >
                View All Events
              </button>
            </div>
          </motion.div>
        </div>

        {/* Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <div className="glass-card-dark p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-6 font-[Poppins]">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                <Activity className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white text-sm font-[Inter]">You donated blood at City Hospital</p>
                  <p className="text-white/60 text-xs font-[Inter]">2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-white text-sm font-[Inter]">Earned "Life Saver" badge</p>
                  <p className="text-white/60 text-xs font-[Inter]">1 week ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                <Heart className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-white text-sm font-[Inter]">Registered as a new donor</p>
                  <p className="text-white/60 text-xs font-[Inter]">2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}