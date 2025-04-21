import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface ProductFilterProps {
  categories: FilterOption[];
  sizes: FilterOption[];
  selectedCategory: string;
  selectedSizes: string[];
  priceRange: [number, number];
  maxPrice: number;
  onCategoryChange: (category: string) => void;
  onSizeChange: (size: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onResetFilters: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  sizes,
  selectedCategory,
  selectedSizes,
  priceRange,
  maxPrice,
  onCategoryChange,
  onSizeChange,
  onPriceChange,
  onResetFilters,
}) => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    size: true,
    price: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const value = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    
    // Ensure min <= max
    if (index === 0 && value > newRange[1]) {
      newRange[1] = value;
    } else if (index === 1 && value < newRange[0]) {
      newRange[0] = value;
    }
    
    onPriceChange(newRange);
  };

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-4">
        <button
          className="w-full bg-noir-800 text-white py-2 px-4 rounded-md flex justify-between items-center"
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
        >
          <span>Filters</span>
          {isMobileFilterOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Filter Sidebar */}
      <div
        className={`${
          isMobileFilterOpen ? 'block' : 'hidden'
        } md:block bg-noir-900 rounded-lg p-6`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-medium text-white">Filters</h3>
          <button
            onClick={onResetFilters}
            className="text-sm text-gold-400 hover:text-gold-500 transition-colors duration-200"
          >
            Reset All
          </button>
        </div>

        {/* Category Filter */}
        <div className="mb-6 border-b border-noir-800 pb-6">
          <button
            className="flex justify-between items-center w-full text-white font-medium mb-3"
            onClick={() => toggleSection('category')}
          >
            <span>Category</span>
            {expandedSections.category ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.category && (
            <div className="space-y-2">
              {categories.map(category => (
                <label key={category.value} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category.value}
                    onChange={() => onCategoryChange(category.value)}
                    className="hidden"
                  />
                  <span
                    className={`inline-block w-4 h-4 mr-2 rounded-full border ${
                      selectedCategory === category.value
                        ? 'border-gold-500 bg-gold-500'
                        : 'border-gray-500'
                    }`}
                  />
                  <span className="text-gray-300">{category.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Size Filter */}
        <div className="mb-6 border-b border-noir-800 pb-6">
          <button
            className="flex justify-between items-center w-full text-white font-medium mb-3"
            onClick={() => toggleSection('size')}
          >
            <span>Size</span>
            {expandedSections.size ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.size && (
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size.value}
                  className={`py-1 px-3 text-sm rounded ${
                    selectedSizes.includes(size.value)
                      ? 'bg-gold-500 text-noir-950'
                      : 'bg-noir-800 text-gray-300 hover:bg-noir-700'
                  } transition-colors duration-200`}
                  onClick={() => onSizeChange(size.value)}
                >
                  {size.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Filter */}
        <div className="mb-4">
          <button
            className="flex justify-between items-center w-full text-white font-medium mb-3"
            onClick={() => toggleSection('price')}
          >
            <span>Price Range</span>
            {expandedSections.price ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {expandedSections.price && (
            <>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">₹{priceRange[0]}</span>
                <span className="text-gray-400">₹{priceRange[1]}</span>
              </div>
              
              <div className="relative mb-6 pt-1">
                <div className="absolute h-1 w-full bg-noir-800 rounded"></div>
                <div
                  className="absolute h-1 bg-gold-500 rounded"
                  style={{
                    left: `${(priceRange[0] / maxPrice) * 100}%`,
                    width: `${((priceRange[1] - priceRange[0]) / maxPrice) * 100}%`,
                  }}
                ></div>
                
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="absolute w-full cursor-pointer appearance-none bg-transparent pointer-events-auto"
                  style={{ height: '1rem', opacity: 0 }}
                />
                
                <input
                  type="range"
                  min="0"
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="absolute w-full cursor-pointer appearance-none bg-transparent pointer-events-auto"
                  style={{ height: '1rem', opacity: 0 }}
                />
              </div>
              
              <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    min="0"
                    max={priceRange[1]}
                  />
                  <span className="absolute left-3 top-2 text-gray-400">₹</span>
                </div>
                <span className="text-gray-500">-</span>
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full bg-noir-800 text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    min={priceRange[0]}
                    max={maxPrice}
                  />
                  <span className="absolute left-3 top-2 text-gray-400">₹</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductFilter;