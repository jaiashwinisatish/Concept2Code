import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Calendar, MapPin, User, Award, TrendingUp, Download, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface HistoryPageProps {
  onNavigate: (page: string) => void;
}

interface DonationRecord {
  id: string;
  date: string;
  recipientName: string;
  recipientId: string;
  location: string;
  hospital: string;
  bloodType: string;
  unitsdonated: number;
  status: 'Completed' | 'Pending' | 'Cancelled';
  certificateUrl?: string;
}

export default function HistoryPage({ onNavigate }: HistoryPageProps) {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
  const donationHistory: DonationRecord[] = [
    {
      id: 'DON-2024-001',
      date: '2024-10-15',
      recipientName: 'Sarah Johnson',
      recipientId: 'PAT-2024-456',
      location: 'Manhattan, NY',
      hospital: 'Mount Sinai Hospital',
      bloodType: 'O+',
      unitsdonated: 1,
      status: 'Completed',
      certificateUrl: '#'
    },
    {
      id: 'DON-2024-002',
      date: '2024-08-22',
      recipientName: 'Michael Chen',
      recipientId: 'PAT-2024-123',
      location: 'Brooklyn, NY',
      hospital: 'Brooklyn Methodist Hospital',
      bloodType: 'O+',
      unitsdonated: 1,
      status: 'Completed',
      certificateUrl: '#'
    },
    {
      id: 'DON-2024-003',
      date: '2024-06-10',
      recipientName: 'Emma Rodriguez',
      recipientId: 'PAT-2024-789',
      location: 'Queens, NY',
      hospital: 'Queens General Hospital',
      bloodType: 'O+',
      unitsdonated: 2,
      status: 'Completed',
      certificateUrl: '#'
    },
    {
      id: 'DON-2024-004',
      date: '2024-04-18',
      recipientName: 'James Wilson',
      recipientId: 'PAT-2024-321',
      location: 'Bronx, NY',
      hospital: 'Bronx Community Hospital',
      bloodType: 'O+',
      unitsdonated: 1,
      status: 'Completed',
      certificateUrl: '#'
    },
    {
      id: 'DON-2024-005',
      date: '2024-02-14',
      recipientName: 'Lisa Davis',
      recipientId: 'PAT-2024-654',
      location: 'Manhattan, NY',
      hospital: 'NYU Langone Health',
      bloodType: 'O+',
      unitsdonated: 1,
      status: 'Completed',
      certificateUrl: '#'
    },
    {
      id: 'DON-2024-006',
      date: '2024-12-25',
      recipientName: 'Robert Kim',
      recipientId: 'PAT-2024-987',
      location: 'Manhattan, NY',
      hospital: 'Presbyterian Hospital',
      bloodType: 'O+',
      unitsdonated: 1,
      status: 'Pending'
    }
  ];

  const filteredHistory = filterStatus === 'all' 
    ? donationHistory 
    : donationHistory.filter(record => record.status.toLowerCase() === filterStatus);

  const stats = {
    totalDonations: donationHistory.filter(d => d.status === 'Completed').length,
    totalUnits: donationHistory.filter(d => d.status === 'Completed').reduce((acc, d) => acc + d.unitsdonated, 0),
    livesSaved: donationHistory.filter(d => d.status === 'Completed').reduce((acc, d) => acc + d.unitsdonated, 0) * 3, // 1 unit can save up to 3 lives
    longestStreak: 6 // months
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
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
            <div>
              <h1 className="text-3xl font-bold text-white font-[Poppins]">Donation History</h1>
              <p className="text-white/60 font-[Inter]">Your complete donation journey</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: 'Total Donations', value: stats.totalDonations, icon: Heart, color: 'text-red-400 bg-red-400/20' },
            { label: 'Units Donated', value: stats.totalUnits, icon: TrendingUp, color: 'text-blue-400 bg-blue-400/20' },
            { label: 'Lives Saved', value: stats.livesSaved, icon: Award, color: 'text-green-400 bg-green-400/20' },
            { label: 'Donation Streak', value: `${stats.longestStreak} months`, icon: Calendar, color: 'text-purple-400 bg-purple-400/20' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card-dark p-6 rounded-xl"
              >
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`text-2xl font-bold mb-1 font-[Poppins] ${stat.color.split(' ')[0]}`}>
                  {stat.value}
                </div>
                <div className="text-white/60 font-[Inter]">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6"
        >
          <div className="flex gap-2">
            {['all', 'completed', 'pending', 'cancelled'].map((status) => (
              <Button
                key={status}
                onClick={() => setFilterStatus(status)}
                variant={filterStatus === status ? 'default' : 'outline'}
                className={`${
                  filterStatus === status
                    ? 'bg-red-500/20 border-red-500/30 text-red-400'
                    : 'border-white/20 text-white/60 hover:bg-white/10'
                } transition-all duration-300 font-[Inter]`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Button>
            ))}
          </div>
          
          <Button
            className="bg-purple-500/20 border border-purple-500/30 text-purple-400 
                     hover:bg-purple-500/30 transition-all duration-300 font-[Inter]"
          >
            <Download className="w-4 h-4 mr-2" />
            Export History
          </Button>
        </motion.div>

        {/* History Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card-dark rounded-xl overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-white/10">
                <TableHead className="text-white font-[Poppins]">Date</TableHead>
                <TableHead className="text-white font-[Poppins]">Recipient</TableHead>
                <TableHead className="text-white font-[Poppins]">Location</TableHead>
                <TableHead className="text-white font-[Poppins]">Blood Type</TableHead>
                <TableHead className="text-white font-[Poppins]">Units</TableHead>
                <TableHead className="text-white font-[Poppins]">Status</TableHead>
                <TableHead className="text-white font-[Poppins]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredHistory.map((record, index) => (
                <motion.tr
                  key={record.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="border-white/10 hover:bg-white/5 transition-colors"
                >
                  <TableCell className="text-white/80 font-[Inter]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      {new Date(record.date).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="text-white/80 font-[Inter]">
                    <div>
                      <p className="font-medium">{record.recipientName}</p>
                      <p className="text-sm text-white/60">{record.recipientId}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-white/80 font-[Inter]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-400" />
                      <div>
                        <p className="text-sm">{record.location}</p>
                        <p className="text-xs text-white/60">{record.hospital}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-white/80 font-[Inter]">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-400 font-bold text-sm">{record.bloodType}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-white/80 font-[Inter] font-medium">
                    {record.unitsdonated}
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(record.status)} border`}>
                      {record.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {record.status === 'Completed' && record.certificateUrl && (
                        <Button
                          size="sm"
                          className="bg-green-500/20 border border-green-500/30 text-green-400 
                                   hover:bg-green-500/30 transition-all duration-300 font-[Inter]"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Certificate
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white/60 hover:bg-white/10 
                                 hover:text-white transition-all duration-300 font-[Inter]"
                      >
                        <User className="w-3 h-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 glass-card-dark p-6 rounded-xl"
        >
          <h2 className="text-xl font-semibold text-white mb-4 font-[Poppins]">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full 
                            flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white animate-heartbeat" fill="currentColor" />
              </div>
              <p className="text-2xl font-bold text-red-400 mb-1 font-[Poppins]">{stats.livesSaved}</p>
              <p className="text-white/60 font-[Inter]">Lives potentially saved</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full 
                            flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl font-bold text-purple-400 mb-1 font-[Poppins]">Hero</p>
              <p className="text-white/60 font-[Inter]">Donor status level</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full 
                            flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <p className="text-2xl font-bold text-green-400 mb-1 font-[Poppins]">Top 10%</p>
              <p className="text-white/60 font-[Inter]">Among donors in your area</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}