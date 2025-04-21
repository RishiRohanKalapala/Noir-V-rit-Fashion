import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Midnight Silk Blazer',
    category: 'mens',
    price: 8999,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    description: 'A luxurious silk blazer with a modern fit, perfect for evening events or upscale casual wear. Features a subtle sheen and expert tailoring.',
    images: [
      'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg',
      'https://images.pexels.com/photos/6626967/pexels-photo-6626967.jpeg'
    ],
    featured: true
  },
  {
    id: 2,
    name: 'Obsidian Tailored Shirt',
    category: 'mens',
    price: 3499,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Charcoal'],
    description: 'A perfectly tailored shirt made from premium Egyptian cotton. Features a modern slim fit with subtle Noir Vérité monogram on the cuff.',
    images: [
      'https://images.pexels.com/photos/6626959/pexels-photo-6626959.jpeg',
      'https://images.pexels.com/photos/6626863/pexels-photo-6626863.jpeg'
    ]
  },
  {
    id: 3,
    name: 'Shadow Slim Trousers',
    category: 'mens',
    price: 5299,
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Black', 'Charcoal', 'Navy'],
    description: 'Elegant slim-fit trousers with a subtle texture and premium Italian fabric. Perfect for both formal and smart casual looks.',
    images: [
      'https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg',
      'https://images.pexels.com/photos/6626936/pexels-photo-6626936.jpeg'
    ]
  },
  {
    id: 4,
    name: 'Enigma Evening Gown',
    category: 'womens',
    price: 12999,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Burgundy', 'Emerald'],
    description: 'A stunning floor-length evening gown with subtle beading and an elegant silhouette. Features a dramatic back design and premium silk fabric.',
    images: [
      'https://images.pexels.com/photos/9771809/pexels-photo-9771809.jpeg',
      'https://images.pexels.com/photos/6952065/pexels-photo-6952065.jpeg'
    ],
    featured: true
  },
  {
    id: 5,
    name: 'Noir Statement Blouse',
    category: 'womens',
    price: 4299,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Ivory'],
    description: 'A sophisticated blouse with architectural detailing and premium fabric. Perfect for making a statement at work or special occasions.',
    images: [
      'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg',
      'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg'
    ],
    new: true
  },
  {
    id: 6,
    name: 'Silhouette Pencil Skirt',
    category: 'womens',
    price: 5999,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Charcoal', 'Navy'],
    description: 'A perfectly tailored pencil skirt with a hint of stretch for comfort. Features a high waist and subtle back slit for ease of movement.',
    images: [
      'https://images.pexels.com/photos/6068960/pexels-photo-6068960.jpeg',
      'https://images.pexels.com/photos/7691168/pexels-photo-7691168.jpeg'
    ]
  },
  {
    id: 7,
    name: 'Mystique Leather Jacket',
    category: 'womens',
    price: 15999,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Burgundy'],
    description: 'A luxurious leather jacket with subtle hardware and expert tailoring. Made from premium lamb leather with a silky lining.',
    images: [
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
      'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg'
    ],
    new: true
  },
  {
    id: 8,
    name: 'Velvet Noir Bow Tie',
    category: 'accessories',
    price: 1999,
    sizes: ['One Size'],
    colors: ['Black', 'Burgundy', 'Navy'],
    description: 'A handcrafted velvet bow tie with adjustable strap. Perfect for formal occasions and adding a touch of luxury to any outfit.',
    images: [
      'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg',
      'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg'
    ]
  },
  {
    id: 9,
    name: 'Geometric Gold Cufflinks',
    category: 'accessories',
    price: 3999,
    sizes: ['One Size'],
    colors: ['Gold', 'Rose Gold', 'Silver'],
    description: 'Elegantly designed cufflinks with a modern geometric pattern. Crafted from 18k gold-plated brass with an engraved Noir Vérité logo.',
    images: [
      'https://images.pexels.com/photos/9771988/pexels-photo-9771988.jpeg',
      'https://images.pexels.com/photos/9775009/pexels-photo-9775009.jpeg'
    ]
  },
  {
    id: 10,
    name: 'Onyx Leather Belt',
    category: 'accessories',
    price: 2999,
    sizes: ['85cm', '90cm', '95cm', '100cm'],
    colors: ['Black', 'Brown', 'Navy'],
    description: 'A premium leather belt with subtle matte finishing and minimalist buckle design. Handcrafted from full-grain Italian leather.',
    images: [
      'https://images.pexels.com/photos/45924/pexels-photo-45924.jpeg',
      'https://images.pexels.com/photos/2682792/pexels-photo-2682792.jpeg'
    ]
  },
  {
    id: 11,
    name: 'Eclipse Cashmere Scarf',
    category: 'accessories',
    price: 4599,
    sizes: ['One Size'],
    colors: ['Black', 'Charcoal', 'Navy', 'Burgundy'],
    description: 'An ultra-soft cashmere scarf with subtle fringing. Lightweight yet warm, perfect for adding an elegant layer to any outfit.',
    images: [
      'https://images.pexels.com/photos/45873/pexels-photo-45873.jpeg',
      'https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg'
    ],
    featured: true
  },
  {
    id: 12,
    name: 'Structured Wool Coat',
    category: 'mens',
    price: 18999,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal', 'Camel'],
    description: 'A timeless wool coat with modern structured silhouette. Features a luxurious cashmere blend and signature minimalist styling.',
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      'https://images.pexels.com/photos/1620865/pexels-photo-1620865.jpeg'
    ],
    featured: true
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};