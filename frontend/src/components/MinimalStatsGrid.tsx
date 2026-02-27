import { Users, Heart, Award, Clock } from 'lucide-react';

interface StatCard {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MinimalStatsGridProps {
  className?: string;
}

export default function MinimalStatsGrid({ className = '' }: MinimalStatsGridProps) {
  const stats: StatCard[] = [
    { label: 'Total Donations', value: '12', icon: Heart },
    { label: 'Lives Saved', value: '36', icon: Users },
    { label: 'Reward Points', value: '2,450', icon: Award },
    { label: 'Next Eligible', value: '45 days', icon: Clock },
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center text-center"
          style={{ borderColor: '#E0E0E0' }}
        >
          <div className="mb-4">
            <stat.icon 
              className="w-6 h-6"
              style={{ color: '#888888' }}
              strokeWidth={1.5}
            />
          </div>
          <div 
            className="text-2xl font-bold mb-2"
            style={{ color: '#212121', fontFamily: 'Inter, sans-serif' }}
          >
            {stat.value}
          </div>
          <div 
            className="text-sm"
            style={{ color: '#555555', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}