import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Heart, Navigation, Settings, Users, Phone, 
  ArrowLeft, Zap, Clock, Filter, Search, Home
} from 'lucide-react';

interface MapDashboardProps {
  onNavigate: (page: string) => void;
}

interface MapMarker {
  id: number;
  type: 'donor' | 'hospital';
  name: string;
  bloodGroup?: string;
  distance: string;
  lat: number;
  lng: number;
  available?: boolean;
  emergency?: boolean;
}

export default function MapDashboard({ onNavigate }: MapDashboardProps) {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [mapKey, setMapKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [nearbyDonors, setNearbyDonors] = useState(true);

  const markers: MapMarker[] = [
    { id: 1, type: 'donor', name: 'John Smith', bloodGroup: 'O+', distance: '0.8km', lat: 40.7128, lng: -74.0060, available: true },
    { id: 2, type: 'donor', name: 'Sarah Johnson', bloodGroup: 'A+', distance: '1.2km', lat: 40.7150, lng: -74.0080, available: true },
    { id: 3, type: 'hospital', name: 'City General Hospital', distance: '2.1km', lat: 40.7100, lng: -74.0100, emergency: true },
    { id: 4, type: 'donor', name: 'Mike Davis', bloodGroup: 'B-', distance: '1.5km', lat: 40.7160, lng: -74.0040, available: false },
    { id: 5, type: 'hospital', name: 'Metro Medical Center', distance: '3.2km', lat: 40.7080, lng: -74.0120, emergency: false },
    { id: 6, type: 'donor', name: 'Emily Chen', bloodGroup: 'AB+', distance: '0.5km', lat: 40.7140, lng: -74.0070, available: true },
  ];

  const availableDonors = markers.filter(m => m.type === 'donor' && m.available).length;
  const nearbyHospitals = markers.filter(m => m.type === 'hospital').length;

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => onNavigate('dashboard')}
        className="fixed top-6 left-6 z-30 glass-card-dark p-3 rounded-lg text-white 
                 hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6" />
      </motion.button>

      {/* Settings Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setShowSettings(!showSettings)}
        className="fixed top-6 right-6 z-30 glass-card-dark p-3 rounded-lg text-white 
                 hover:bg-white/20 transition-all duration-300"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Settings Panel */}
      {showSettings && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-20 right-6 z-30 glass-card-dark p-6 rounded-xl w-80"
        >
          <h3 className="text-lg font-semibold text-white mb-4 font-[Poppins]">Map Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-white/80 mb-2 font-[Inter]">Mapbox API Key</label>
              <input
                type="password"
                placeholder="Enter your Mapbox API key"
                value={mapKey}
                onChange={(e) => setMapKey(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 
                         text-white placeholder-white/60 focus:outline-none focus:ring-2 
                         focus:ring-purple-400 focus:border-transparent transition-all duration-300
                         font-[Inter]"
              />
              <p className="text-white/50 text-xs mt-1 font-[Inter]">
                Required for full map functionality
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80 font-[Inter]">Show Nearby Donors</span>
              <button
                onClick={() => setNearbyDonors(!nearbyDonors)}
                className={`w-12 h-6 rounded-full transition-all duration-300 ${
                  nearbyDonors ? 'bg-purple-400' : 'bg-gray-400'
                }`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300 ${
                  nearbyDonors ? 'translate-x-6' : 'translate-x-0.5'
                }`}></div>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="flex h-screen">
        {/* Map Area */}
        <div className="flex-1 relative">
          {/* Mock 3D Map */}
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative">
            {/* Map placeholder with 3D effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
              {/* Grid lines for 3D effect */}
              <div className="absolute inset-0" 
                   style={{ 
                     backgroundImage: `
                       linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                     `,
                     backgroundSize: '50px 50px'
                   }}>
              </div>
            </div>

            {/* 3D Buildings Effect */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-t from-slate-600 to-slate-400 opacity-60"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  width: `${30 + Math.random() * 40}px`,
                  height: `${40 + Math.random() * 80}px`,
                  transform: 'perspective(1000px) rotateX(60deg) rotateZ(45deg)',
                }}
                animate={{
                  boxShadow: [
                    '0 10px 20px rgba(0,0,0,0.3)',
                    '0 20px 40px rgba(0,0,0,0.5)',
                    '0 10px 20px rgba(0,0,0,0.3)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}

            {/* Map Markers */}
            {markers.map((marker, index) => (
              <motion.div
                key={marker.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="absolute cursor-pointer"
                style={{
                  left: `${30 + (marker.lng + 74.0060) * 1000}%`,
                  top: `${40 + (marker.lat - 40.7128) * 1000}%`,
                }}
                onClick={() => setSelectedMarker(marker)}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative ${
                    marker.type === 'donor' ? 'text-red-400' : 'text-teal-400'
                  }`}
                >
                  {marker.type === 'donor' ? (
                    <div className="relative">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        marker.available ? 'bg-red-400 glow-red' : 'bg-gray-400'
                      }`}>
                        {marker.bloodGroup?.charAt(0)}
                      </div>
                      {marker.available && (
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 w-6 h-6 bg-red-400 rounded-full"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="relative">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        marker.emergency ? 'bg-red-500 glow-red' : 'bg-teal-400 glow-teal'
                      }`}>
                        <Home className="w-4 h-4 text-white" />
                      </div>
                      {marker.emergency && (
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                        />
                      )}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}

            {/* Current Location */}
            <motion.div
              className="absolute"
              style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg">
                <div className="w-full h-full bg-blue-400 rounded-full animate-ping"></div>
              </div>
            </motion.div>

            {/* Map Controls */}
            <div className="absolute bottom-6 right-6 space-y-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card-dark p-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card-dark p-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              >
                <Navigation className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          className="w-80 glass-card-dark border-l border-white/10 p-6 overflow-y-auto"
        >
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-2 font-[Poppins]">Live Blood Map</h2>
            <p className="text-white/70 text-sm font-[Inter]">
              Real-time view of donors and hospitals in your area
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-red-400/20 border border-red-400/30 rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-red-400 mb-1 font-[Poppins]">{availableDonors}</div>
              <div className="text-white/80 text-sm font-[Inter]">Available Donors</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-teal-400/20 border border-teal-400/30 rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-teal-400 mb-1 font-[Poppins]">{nearbyHospitals}</div>
              <div className="text-white/80 text-sm font-[Inter]">Nearby Hospitals</div>
            </motion.div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            <input
              type="text"
              placeholder="Search location..."
              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-12 pr-4 
                       text-white placeholder-white/60 focus:outline-none focus:ring-2 
                       focus:ring-purple-400 focus:border-transparent transition-all duration-300
                       font-[Inter]"
            />
          </div>

          {/* Nearest Donors List */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4 font-[Poppins]">Nearest Donors</h3>
            <div className="space-y-3">
              {markers.filter(m => m.type === 'donor' && m.available).slice(0, 3).map((donor) => (
                <motion.div
                  key={donor.id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedMarker(donor)}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 cursor-pointer 
                           hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold font-[Poppins]">{donor.bloodGroup}</span>
                      </div>
                      <div>
                        <div className="text-white font-medium font-[Inter]">{donor.name}</div>
                        <div className="text-white/60 text-sm font-[Inter]">{donor.distance} away</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-green-400/20 rounded-lg text-green-400 hover:bg-green-400/30">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-blue-400/20 rounded-lg text-blue-400 hover:bg-blue-400/30">
                        <Navigation className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Marker Info */}
          {selectedMarker && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 border border-white/20 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-semibold font-[Poppins]">{selectedMarker.name}</h4>
                <button
                  onClick={() => setSelectedMarker(null)}
                  className="text-white/60 hover:text-white"
                >
                  ×
                </button>
              </div>
              <div className="space-y-2 text-sm">
                {selectedMarker.type === 'donor' && (
                  <>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-white/80 font-[Inter]">Blood Group: {selectedMarker.bloodGroup}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 font-[Inter]">
                        Status: {selectedMarker.available ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </>
                )}
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-white/80 font-[Inter]">Distance: {selectedMarker.distance}</span>
                </div>
              </div>
              {selectedMarker.type === 'donor' && selectedMarker.available && (
                <button className="w-full mt-4 bg-red-400 text-white py-2 rounded-lg hover:bg-red-500 
                               transition-colors font-[Inter]">
                  Request Donation
                </button>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}