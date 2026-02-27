import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, MapPin, Clock, AlertTriangle, User, Phone, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface RequestsPageProps {
  onNavigate: (page: string) => void;
}

interface BloodRequest {
  id: string;
  recipientName: string;
  bloodType: string;
  location: string;
  hospital: string;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  timeRequested: string;
  distance: string;
  contactNumber: string;
  unitsNeeded: number;
  description: string;
}

export default function RequestsPage({ onNavigate }: RequestsPageProps) {
  const [requests, setRequests] = useState<BloodRequest[]>([
    {
      id: '1',
      recipientName: 'Sarah Johnson',
      bloodType: 'O+',
      location: 'Manhattan, NY',
      hospital: 'Mount Sinai Hospital',
      urgency: 'Critical',
      timeRequested: '45 minutes ago',
      distance: '2.3 km',
      contactNumber: '+1 (555) 123-4567',
      unitsNeeded: 3,
      description: 'Emergency surgery required due to accident. Patient needs immediate blood transfusion.'
    },
    {
      id: '2',
      recipientName: 'Michael Chen',
      bloodType: 'O+',
      location: 'Brooklyn, NY',
      hospital: 'Brooklyn Methodist Hospital',
      urgency: 'High',
      timeRequested: '2 hours ago',
      distance: '5.1 km',
      contactNumber: '+1 (555) 987-6543',
      unitsNeeded: 2,
      description: 'Scheduled surgery postponed due to blood shortage. Patient waiting.'
    },
    {
      id: '3',
      recipientName: 'Emma Rodriguez',
      bloodType: 'O+',
      location: 'Queens, NY',
      hospital: 'Queens General Hospital',
      urgency: 'Medium',
      timeRequested: '4 hours ago',
      distance: '8.7 km',
      contactNumber: '+1 (555) 456-7890',
      unitsNeeded: 1,
      description: 'Chronic condition requiring regular blood transfusions.'
    },
    {
      id: '4',
      recipientName: 'James Wilson',
      bloodType: 'O+',
      location: 'Bronx, NY',
      hospital: 'Bronx Community Hospital',
      urgency: 'Low',
      timeRequested: '6 hours ago',
      distance: '12.4 km',
      contactNumber: '+1 (555) 321-0987',
      unitsNeeded: 1,
      description: 'Upcoming elective surgery scheduled for next week.'
    }
  ]);

  const [acceptedRequests, setAcceptedRequests] = useState<string[]>([]);

  const handleAcceptRequest = (requestId: string) => {
    // Trigger OTP verification flow
    setAcceptedRequests([...acceptedRequests, requestId]);
    // Navigate to OTP verification
    onNavigate('otp');
  };

  const handleDeclineRequest = (requestId: string) => {
    setRequests(requests.filter(request => request.id !== requestId));
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Critical': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'High': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Low': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    if (urgency === 'Critical' || urgency === 'High') {
      return <AlertTriangle className="w-4 h-4" />;
    }
    return <Clock className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
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
              <h1 className="text-3xl font-bold text-white font-[Poppins]">Blood Requests</h1>
              <p className="text-white/60 font-[Inter]">{requests.length} requests matching your blood type</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: 'Critical', count: requests.filter(r => r.urgency === 'Critical').length, color: 'text-red-400 bg-red-400/20' },
            { label: 'High Priority', count: requests.filter(r => r.urgency === 'High').length, color: 'text-orange-400 bg-orange-400/20' },
            { label: 'Medium', count: requests.filter(r => r.urgency === 'Medium').length, color: 'text-yellow-400 bg-yellow-400/20' },
            { label: 'Low Priority', count: requests.filter(r => r.urgency === 'Low').length, color: 'text-green-400 bg-green-400/20' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass-card-dark p-4 rounded-lg text-center"
            >
              <div className={`w-8 h-8 ${stat.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                <span className="font-bold font-[Poppins]">{stat.count}</span>
              </div>
              <p className="text-white/80 text-sm font-[Inter]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Requests List */}
        <div className="space-y-6">
          {requests.map((request, index) => (
            <motion.div
              key={request.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-card-dark p-6 rounded-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Request Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-400 rounded-full 
                                    flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white font-[Poppins]">{request.recipientName}</h3>
                        <p className="text-white/60 font-[Inter]">{request.hospital}</p>
                      </div>
                    </div>
                    <Badge className={`${getUrgencyColor(request.urgency)} border`}>
                      {getUrgencyIcon(request.urgency)}
                      <span className="ml-1">{request.urgency}</span>
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-red-400 font-bold font-[Poppins] text-sm">{request.bloodType}</span>
                      </div>
                      <span className="text-white/80 font-[Inter]">{request.unitsNeeded} units needed</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span className="text-white/80 font-[Inter]">{request.distance} away</span>
                    </div>
                  </div>

                  <p className="text-white/70 font-[Inter] text-sm mb-4">{request.description}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-white/60">
                      <Clock className="w-4 h-4" />
                      <span className="font-[Inter]">{request.timeRequested}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Phone className="w-4 h-4" />
                      <span className="font-[Inter]">{request.contactNumber}</span>
                    </div>
                  </div>
                </div>

                {/* Location & Actions */}
                <div className="lg:col-span-2">
                  <div className="h-full flex flex-col justify-between">
                    {/* Location Info */}
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-green-400" />
                        <span className="text-white font-medium font-[Inter]">Location</span>
                      </div>
                      <p className="text-white/80 font-[Inter]">{request.location}</p>
                      <p className="text-green-400 text-sm font-[Inter]">{request.hospital}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleAcceptRequest(request.id)}
                        disabled={acceptedRequests.includes(request.id)}
                        className="flex-1 bg-green-500/20 border border-green-500/30 text-green-400 
                                 hover:bg-green-500/30 hover:glow-teal transition-all duration-300 font-[Inter]"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        {acceptedRequests.includes(request.id) ? 'Accepted' : 'Accept Request'}
                      </Button>
                      
                      <Button
                        onClick={() => handleDeclineRequest(request.id)}
                        variant="outline"
                        className="border-white/20 text-white/60 hover:bg-white/10 hover:text-white 
                                 transition-all duration-300 font-[Inter]"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {requests.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <Heart className="w-16 h-16 text-red-400 mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-white mb-2 font-[Poppins]">No Active Requests</h3>
            <p className="text-white/60 font-[Inter]">There are currently no blood requests matching your type.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}