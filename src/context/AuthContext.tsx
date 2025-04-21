import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  email: string;
  id: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      // Here you would typically validate against your backend
      // For now, we'll simulate a successful login
      const user = { email, id: Date.now().toString() };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      // Here you would typically create a new user in your backend
      // For now, we'll simulate a successful registration
      const user = { email, id: Date.now().toString() };
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const signOut = async () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};