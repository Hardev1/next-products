"use client";

import { useState, useEffect } from 'react';
import ProductGrid from '@/components/ProductGrid';
import SortingDropdown from '@/components/SortingDropdown';
import CategoryFilter from '@/components/CategoryFilter';
import { Product } from '@/types/product';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    setCategories(data);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    let sortedProducts = [...products];
    switch (option) {
      case 'price-low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'title':
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }
    setProducts(sortedProducts);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="flex justify-between mb-4">
        <SortingDropdown onSortChange={handleSortChange} />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <ProductGrid products={filteredProducts} />
    </div>
  );
}