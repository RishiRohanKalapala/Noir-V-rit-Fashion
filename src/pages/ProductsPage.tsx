import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';
import { products, getProductsByCategory } from '../data/products';
import { Product } from '../types/product';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  
  // Get all unique sizes from products
  const allSizes = Array.from(
    new Set(products.flatMap(product => product.sizes))
  ).map(size => ({ label: size, value: size }));
  
  // Get max price
  const maxPrice = Math.max(...products.map(product => product.price));
  
  // Categories for filter
  const categories = [
    { label: 'All Products', value: 'all' },
    { label: 'Men', value: 'mens' },
    { label: 'Women', value: 'womens' },
    { label: 'Accessories', value: 'accessories' },
  ];
  
  // Filter products based on selected filters
  useEffect(() => {
    let result = category ? getProductsByCategory(category) : products;
    
    // Filter by category if selected
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by sizes if any selected
    if (selectedSizes.length > 0) {
      result = result.filter(product => 
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [category, selectedCategory, selectedSizes, priceRange]);
  
  // Update selected category when URL parameter changes
  useEffect(() => {
    setSelectedCategory(category || 'all');
  }, [category]);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handleSizeChange = (size: string) => {
    setSelectedSizes(prev => {
      if (prev.includes(size)) {
        return prev.filter(s => s !== size);
      } else {
        return [...prev, size];
      }
    });
  };
  
  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };
  
  const resetFilters = () => {
    setSelectedCategory(category || 'all');
    setSelectedSizes([]);
    setPriceRange([0, maxPrice]);
  };
  
  // Get page title based on category
  const getPageTitle = () => {
    if (category === 'mens') return "Men's Collection";
    if (category === 'womens') return "Women's Collection";
    if (category === 'accessories') return "Accessories";
    return "All Products";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-semibold text-white mb-8">
        {getPageTitle()}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="md:w-1/4">
          <ProductFilter
            categories={categories}
            sizes={allSizes}
            selectedCategory={selectedCategory}
            selectedSizes={selectedSizes}
            priceRange={priceRange}
            maxPrice={maxPrice}
            onCategoryChange={handleCategoryChange}
            onSizeChange={handleSizeChange}
            onPriceChange={handlePriceChange}
            onResetFilters={resetFilters}
          />
        </div>
        
        {/* Products Grid */}
        <div className="md:w-3/4">
          <div className="mb-4 text-right text-gray-400">
            {filteredProducts.length} products found
          </div>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;