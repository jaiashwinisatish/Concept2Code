import MinimalStatsGrid from './MinimalStatsGrid';
import { ArrowLeft } from 'lucide-react';

interface MinimalStatsDemoProps {
  onNavigate: (page: string) => void;
}

export default function MinimalStatsDemo({ onNavigate }: MinimalStatsDemoProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <button
        onClick={() => onNavigate('dashboard')}
        className="fixed top-6 left-6 z-20 bg-white border border-gray-300 p-3 rounded-lg text-gray-600 
                 hover:bg-gray-50 transition-all duration-300 shadow-sm"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className="text-3xl font-bold mb-4"
            style={{ color: '#212121', fontFamily: 'Poppins, sans-serif' }}
          >
            Minimal Stats Grid
          </h1>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#555555', fontFamily: 'Inter, sans-serif' }}
          >
            Clean, professional statistics cards with minimal design. 
            White background, thin gray borders, and simple line icons.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-2xl mx-auto">
          <MinimalStatsGrid />
        </div>

        {/* Design Specifications */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 
            className="text-xl font-semibold mb-6"
            style={{ color: '#212121', fontFamily: 'Poppins, sans-serif' }}
          >
            Design Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 
                className="font-semibold mb-3"
                style={{ color: '#212121', fontFamily: 'Inter, sans-serif' }}
              >
                Colors
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: '#555555', fontFamily: 'Inter, sans-serif' }}>
                <li>Background: White (#FFFFFF)</li>
                <li>Cards: White (#FFFFFF)</li>
                <li>Borders: Gray (#E0E0E0)</li>
                <li>Numbers: Black (#212121)</li>
                <li>Labels: Dark Gray (#555555)</li>
                <li>Icons: Gray (#888888)</li>
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 
                className="font-semibold mb-3"
                style={{ color: '#212121', fontFamily: 'Inter, sans-serif' }}
              >
                Style Features
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: '#555555', fontFamily: 'Inter, sans-serif' }}>
                <li>No shadows or gradients</li>
                <li>No animations or effects</li>
                <li>Thin gray borders only</li>
                <li>Simple line icons</li>
                <li>2x2 responsive grid</li>
                <li>Equal spacing throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}