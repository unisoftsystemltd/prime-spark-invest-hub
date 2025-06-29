
import React, { useState } from 'react';
import { Search, TrendingUp, Clock, Star, Filter } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const recentSearches = [
    'Mutual Funds',
    'Fixed Deposit',
    'SIP Calculator',
    'Portfolio Analysis'
  ];

  const popularSearches = [
    { title: 'High Yield Bonds', category: 'Bonds', trending: true },
    { title: 'Tech Sector Funds', category: 'Mutual Funds', trending: true },
    { title: 'Monthly Income Plan', category: 'SIP', trending: false },
    { title: 'Tax Saving Funds', category: 'ELSS', trending: false },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'funds', label: 'Funds' },
    { id: 'bonds', label: 'Bonds' },
    { id: 'sip', label: 'SIP' },
    { id: 'calculator', label: 'Tools' }
  ];

  return (
    <div className="bg-prime-bg min-h-screen">
      {/* Search Bar */}
      <div className="px-4 pt-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search investments, tools, or help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-white rounded-2xl shadow-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-prime-purple"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Filter className="text-gray-400 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 mt-4">
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-prime-purple text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Searches */}
      {!searchQuery && (
        <div className="px-4 mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-lg font-semibold text-black">Recent Searches</h3>
            </div>
            <div className="space-y-3">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  className="flex items-center w-full text-left p-3 rounded-xl hover:bg-prime-bg transition-colors"
                >
                  <Search className="w-4 h-4 text-gray-400 mr-3" />
                  <span className="text-black">{search}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Popular Searches */}
      {!searchQuery && (
        <div className="px-4 mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-prime-purple mr-2" />
              <h3 className="text-lg font-semibold text-black">Popular Searches</h3>
            </div>
            <div className="space-y-3">
              {popularSearches.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between w-full text-left p-3 rounded-xl hover:bg-prime-bg transition-colors"
                >
                  <div>
                    <p className="font-medium text-black">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  {item.trending && (
                    <div className="flex items-center text-prime-green">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">Trending</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Results */}
      {searchQuery && (
        <div className="px-4 mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">Search Results</h3>
            <div className="text-center py-8">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Search for "{searchQuery}"</p>
              <p className="text-sm text-gray-400 mt-2">Try searching for investments, tools, or help topics</p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Padding */}
      <div className="h-24"></div>
    </div>
  );
};

export default SearchPage;
