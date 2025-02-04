import React, { createContext, useContext, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [error, setError] = useState<string | null>(null);


  const login = async (email: string, password: string) => {
    try {
      setError(null);
      
      // Basic validation
      if (!email || !password) {
        throw new Error('Por favor, complete todos los campos');
      }

      // Check if user exists in localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = storedUsers.find((u: any) => u.email === email);

      if (!foundUser) {
        throw new Error('Usuario no encontrado');
      }

      if (foundUser.password !== password) {
        throw new Error('Contraseña incorrecta');
      }

      const loggedInUser = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role
      };

      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error al iniciar sesión');
      throw error;
    }
  };
  
  const register = async (name: string, email: string, password: string) => {
    try {
      setError(null);

      // Basic validation
      if (!name || !email || !password) {
        throw new Error('Por favor, complete todos los campos');
      }

      if (password.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres');
      }

      // Get existing users
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      if (storedUsers.some((u: any) => u.email === email)) {
        throw new Error('El email ya está registrado');
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        role: 'user' as const
      };

      // Add to stored users
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));

      // Log in the new user
      const loggedInUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      };

      setUser(loggedInUser);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error al registrar');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };console.log(register)

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};