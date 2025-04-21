export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  sizes: string[];
  colors: string[];
  description: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
}

export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: string;
  cardNumber?: string;
  cardName?: string;
  expiration?: string;
  cvv?: string;
  upiId?: string;
}