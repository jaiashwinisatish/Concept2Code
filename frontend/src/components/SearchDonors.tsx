import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, MapPin, Heart, Phone, Mail, User, Filter, 
  ArrowLeft, Clock, Star, Navigation, MessageCircle
} from 'lucide-react';

interface SearchDonorsProps {
  onNavigate: (page: string) => void;
}

interface Donor {
  id: number;
  name: string;
  bloodGroup: string;
  distance: string;
  lastDonation: string;
  donations: number;
  rating: number;
  available: boolean;
  phone: string;
  email: string;
  location: string;
}

export default function SearchDonors({ onNavigate }: SearchDonorsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const [selectedDistance, setSelectedDistance] = useState('');
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const distanceOptions = ['1km', '5km', '10km', '25km', '50km'];

  const donors: Donor[] = [
    {
      id: 1,
      name: 'John Smith',
      bloodGroup: 'O+',
      distance: '2.5km',
      lastDonation: '3 months ago',
      donations: 12,
      rating: 4.8,
      available: true,
      phone: '+1 234-567-8901',
      email: 'john.smith@email.com',
      location: 'Downtown Medical Center Area',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      bloodGroup: 'A+',
      distance: '3.2km',
      lastDonation: '2 months ago',
      donations: 8,
      rating: 4.9,
      available: true,
      phone: '+1 234-567-8902',
      email: 'sarah.j@email.com',
      location: 'City Hospital District',
    },
    {
      id: 3,
      name: 'Mike Davis',
      bloodGroup: 'B-',
      distance: '4.1km',
      lastDonation: '1 month ago',
      donations: 15,
      rating: 4.7,
      available: false,
      phone: '+1 234-567-8903',
      email: 'mike.davis@email.com',
      location: 'University Campus Area',
    },
    {
      id: 4,
      name: 'Emily Chen',
      bloodGroup: 'AB+',
      distance: '1.8km',
      lastDonation: '4 months ago',
      donations: 6,
      rating: 4.6,
      available: true,
      phone: '+1 234-567-8904',
      email: 'emily.chen@email.com',
      location: 'Central Business District',
    },
    {
      id: 5,
      name: 'David Wilson',
      bloodGroup: 'O-',
      distance: '5.2km',
      lastDonation: '2 months ago',
      donations: 20,
      rating: 5.0,
      available: true,
      phone: '+1 234-567-8905',
      email: 'david.wilson@email.com',
      location: 'Suburban Medical Complex',
    },
    {
      id: 6,
      name: 'Lisa Brown',
      bloodGroup: 'A-',
      distance: '3.8km',
      lastDonation: '5 months ago',
      donations: 9,
      rating: 4.4,
      available: true,
      phone: '+1 234-567-8906',
      email: 'lisa.brown@email.com',
      location: 'Healthcare District',
    },
  ];

  const handleCardFlip = (donorId: number) => {
    setFlippedCards(prev => 
      prev.includes(donorId) 
        ? prev.filter(id => id !== donorId)
        : [...prev, donorId]
    );
  };

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         donor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBloodGroup = !selectedBloodGroup || donor.bloodGroup === selectedBloodGroup;
    const matchesDistance = !selectedDistance || parseFloat(donor.distance) <= parseFloat(selectedDistance);
    
    return matchesSearch && matchesBloodGroup && matchesDistance;
  });

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Search className="w-10 h-10 text-purple-400 animate-pulse" />
              <h1 className="text-3xl font-bold text-white font-[Poppins]">Find Blood Donors</h1>
            </div>
            <p className="text-white/70 max-w-2xl mx-auto font-[Inter]">
              Search for verified blood donors in your area. Connect instantly and save lives together.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card-dark p-6 rounded-xl mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Bar */}
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                           text-white placeholder-white/60 focus:outline-none focus:ring-2 
                           focus:ring-purple-400 focus:border-transparent transition-all duration-300
                           font-[Inter]"
                />
                <motion.div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Search className="w-5 h-5 text-purple-400" />
                </motion.div>
              </div>

              {/* Blood Group Filter */}
              <div className="relative">
                <Heart className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <select
                  value={selectedBloodGroup}
                  onChange={(e) => setSelectedBloodGroup(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                           text-white focus:outline-none focus:ring-2 
                           focus:ring-purple-400 focus:border-transparent transition-all duration-300
                           font-[Inter]"
                >
                  <option value="" className="bg-slate-800">All Blood Groups</option>
                  {bloodGroups.map(group => (
                    <option key={group} value={group} className="bg-slate-800">{group}</option>
                  ))}
                </select>
              </div>

              {/* Distance Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <select
                  value={selectedDistance}
                  onChange={(e) => setSelectedDistance(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                           text-white focus:outline-none focus:ring-2 
                           focus:ring-purple-400 focus:border-transparent transition-all duration-300
                           font-[Inter]"
                >
                  <option value="" className="bg-slate-800">Any Distance</option>
                  {distanceOptions.map(distance => (
                    <option key={distance} value={distance} className="bg-slate-800">Within {distance}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-white/70 font-[Inter]">
              Found {filteredDonors.length} donor{filteredDonors.length !== 1 ? 's' : ''} matching your criteria
            </p>
          </motion.div>

          {/* Donor Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDonors.map((donor, index) => (
              <motion.div
                key={donor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="h-80 perspective-1000"
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer preserve-3d transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: flippedCards.includes(donor.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                  onClick={() => handleCardFlip(donor.id)}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 glass-card-dark p-6 rounded-xl backface-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        donor.available ? 'bg-green-400' : 'bg-red-400'
                      }`}>
                        <span className="text-white font-bold font-[Poppins]">{donor.bloodGroup}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        donor.available 
                          ? 'bg-green-400/20 text-green-400 glow-green' 
                          : 'bg-red-400/20 text-red-400'
                      } font-[Inter]`}>
                        {donor.available ? 'Available' : 'Not Available'}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-white mb-1 font-[Poppins]">{donor.name}</h3>
                      <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-[Inter]">{donor.distance} away</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Clock className="w-4 h-4" />
                        <span className="font-[Inter]">Last donation: {donor.lastDonation}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="text-white/80 font-[Inter]">
                          <span className="text-purple-400 font-semibold">{donor.donations}</span> donations
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white/80 font-[Inter]">{donor.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-white/60 text-sm font-[Inter]">
                      Click to view contact details
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 glass-card-dark p-6 rounded-xl backface-hidden rotate-y-180">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full 
                                    flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white font-[Poppins]">{donor.name}</h3>
                        <p className="text-white/60 text-sm font-[Inter]">{donor.location}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 text-white/80">
                        <Phone className="w-5 h-5 text-purple-400" />
                        <span className="font-[Inter]">{donor.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <Mail className="w-5 h-5 text-purple-400" />
                        <span className="font-[Inter]">{donor.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <MapPin className="w-5 h-5 text-purple-400" />
                        <span className="font-[Inter]">{donor.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle request donor
                        }}
                        className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 font-[Inter] ${
                          donor.available
                            ? 'bg-purple-400 text-white hover:bg-purple-500 hover:scale-105 animate-pulse'
                            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!donor.available}
                      >
                        {donor.available ? 'Request Donor' : 'Not Available'}
                      </button>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('map');
                          }}
                          className="flex items-center justify-center gap-2 py-2 px-3 bg-white/10 
                                   border border-white/20 rounded-lg text-white hover:bg-white/20 
                                   transition-all duration-300 font-[Inter]"
                        >
                          <Navigation className="w-4 h-4" />
                          Directions
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle message
                          }}
                          className="flex items-center justify-center gap-2 py-2 px-3 bg-white/10 
                                   border border-white/20 rounded-lg text-white hover:bg-white/20 
                                   transition-all duration-300 font-[Inter]"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredDonors.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Heart className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2 font-[Poppins]">No donors found</h3>
              <p className="text-white/60 font-[Inter]">
                Try adjusting your search criteria or contact us for assistance.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .glow-green {
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
      `}</style>
    </div>
  );
}