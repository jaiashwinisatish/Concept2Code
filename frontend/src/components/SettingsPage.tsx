import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, User, Mail, Phone, CreditCard, Lock, Bell, Trash2, Save, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SettingsPageProps {
  onNavigate: (page: string) => void;
}

export default function SettingsPage({ onNavigate }: SettingsPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    bloodType: 'O+',
    govtId: 'SSN-123-45-6789'
  });

  const [notifications, setNotifications] = useState({
    smsAlerts: true,
    emailAlerts: true,
    pushNotifications: true,
    emergencyAlerts: true,
    weeklyUpdates: false
  });

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleProfileSave = () => {
    console.log('Saving profile...', profile);
    // Here you would normally save to backend
  };

  const handlePasswordChange = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    console.log('Changing password...');
    setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
    // Here you would normally update password in backend
  };

  const handleNotificationSave = () => {
    console.log('Saving notification preferences...', notifications);
    // Here you would normally save to backend
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Deleting account...');
      onNavigate('home');
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
              <h1 className="text-3xl font-bold text-white font-[Poppins]">Settings</h1>
              <p className="text-white/60 font-[Inter]">Manage your account and preferences</p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Settings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card-dark p-6 rounded-xl mb-6">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold text-white font-[Poppins]">Profile Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bloodType" className="text-white">Blood Type</Label>
                  <Select value={profile.bloodType} onValueChange={(value) => setProfile({ ...profile, bloodType: value })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-purple-400">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-white/10">
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                        <SelectItem key={type} value={type} className="text-white hover:bg-white/10">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="govtId" className="text-white">Government ID</Label>
                  <Input
                    id="govtId"
                    value={profile.govtId}
                    onChange={(e) => setProfile({ ...profile, govtId: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-purple-400"
                  />
                </div>
              </div>

              <Button
                onClick={handleProfileSave}
                className="mt-6 bg-purple-500/20 border border-purple-500/30 text-purple-400 
                         hover:bg-purple-500/30 transition-all duration-300 font-[Inter]"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </div>

            {/* Password Change */}
            <div className="glass-card-dark p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-green-400" />
                <h2 className="text-xl font-semibold text-white font-[Poppins]">Change Password</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-white">Current Password</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={passwords.currentPassword}
                      onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-green-400 pr-10"
                      placeholder="Enter current password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-white">New Password</Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? 'text' : 'password'}
                        value={passwords.newPassword}
                        onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-green-400 pr-10"
                        placeholder="Enter new password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white">Confirm New Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={passwords.confirmPassword}
                        onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-green-400 pr-10"
                        placeholder="Confirm new password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handlePasswordChange}
                  className="bg-green-500/20 border border-green-500/30 text-green-400 
                           hover:bg-green-500/30 transition-all duration-300 font-[Inter]"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Update Password
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Notification Settings & Danger Zone */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Notification Preferences */}
            <div className="glass-card-dark p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-yellow-400" />
                <h2 className="text-lg font-semibold text-white font-[Poppins]">Notifications</h2>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'smsAlerts', label: 'SMS Alerts', description: 'Receive urgent donation requests via SMS' },
                  { key: 'emailAlerts', label: 'Email Alerts', description: 'Get donation opportunities in your inbox' },
                  { key: 'pushNotifications', label: 'Push Notifications', description: 'Real-time app notifications' },
                  { key: 'emergencyAlerts', label: 'Emergency Alerts', description: 'Critical blood shortage notifications' },
                  { key: 'weeklyUpdates', label: 'Weekly Updates', description: 'Summary of donation activities' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex-1">
                      <p className="text-white font-medium font-[Inter]">{item.label}</p>
                      <p className="text-white/60 text-sm font-[Inter]">{item.description}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, [item.key]: checked })
                      }
                    />
                  </div>
                ))}
              </div>

              <Button
                onClick={handleNotificationSave}
                className="w-full mt-6 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 
                         hover:bg-yellow-500/30 transition-all duration-300 font-[Inter]"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Preferences
              </Button>
            </div>

            {/* Account Actions */}
            <div className="glass-card-dark p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-4 font-[Poppins]">Account Actions</h3>
              
              <div className="space-y-3">
                <Button
                  onClick={() => onNavigate('register-donor')}
                  className="w-full bg-blue-500/20 border border-blue-500/30 text-blue-400 
                           hover:bg-blue-500/30 transition-all duration-300 font-[Inter]"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Update Donor Registration
                </Button>

                <Button
                  onClick={() => window.print()}
                  className="w-full bg-green-500/20 border border-green-500/30 text-green-400 
                           hover:bg-green-500/30 transition-all duration-300 font-[Inter]"
                >
                  <User className="w-4 h-4 mr-2" />
                  Download Donor Card
                </Button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="glass-card-dark p-6 rounded-xl border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-4 font-[Poppins]">Danger Zone</h3>
              
              <p className="text-white/70 text-sm mb-4 font-[Inter]">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              
              <Button
                onClick={handleDeleteAccount}
                className="bg-red-500/20 border border-red-500/30 text-red-400 
                         hover:bg-red-500/30 hover:glow-red transition-all duration-300 font-[Inter]"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}