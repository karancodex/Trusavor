import { create } from 'zustand';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

export interface Product {
    id: string;
    name: string;
    slug: string;
    categoryId: string;
    price: number;
    description: string;
    images: string[];
    rating: number;
    reviews: number;
    stock: number;
    isBestSeller?: boolean;
    isTrending?: boolean;
    oldPrice?: number;
    discount?: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    image: string;
    theme: 'wellness' | 'cosmetics';
    accent: string;
}

interface CartItem extends Product {
    quantity: number;
}

interface StoreState {
    products: Product[];
    categories: Category[];
    cart: CartItem[];
    wishlist: string[]; // Product IDs
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    updateCartQuantity: (productId: string, quantity: number) => void;
    toggleWishlist: (productId: string) => void;
    clearCart: () => void;
    language: 'EN' | 'AR' | 'HI';
    currency: 'USD' | 'AED' | 'SAR' | 'INR';
    setLanguage: (lang: 'EN' | 'AR' | 'HI') => void;
    setCurrency: (curr: 'USD' | 'AED' | 'SAR' | 'INR') => void;
    user: any | null; // Placeholder for user
    login: (email: string) => void;
    logout: () => void;
}

export const useStore = create<StoreState>((set) => ({
    products: productsData as Product[],
    categories: categoriesData as Category[],
    cart: [],
    wishlist: [],
    language: 'EN',
    currency: 'USD',
    user: null,

    setLanguage: (language) => set({ language }),
    setCurrency: (currency) => set({ currency }),

    addToCart: (product, quantity = 1) =>
        set((state) => {
            const existingItem = state.cart.find((item) => item.id === product.id);
            if (existingItem) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                };
            }
            return { cart: [...state.cart, { ...product, quantity }] };
        }),

    removeFromCart: (productId) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== productId),
        })),

    updateCartQuantity: (productId, quantity) =>
        set((state) => ({
            cart: state.cart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            ),
        })),

    toggleWishlist: (productId) =>
        set((state) => {
            const inWishlist = state.wishlist.includes(productId);
            return {
                wishlist: inWishlist
                    ? state.wishlist.filter((id) => id !== productId)
                    : [...state.wishlist, productId],
            };
        }),

    clearCart: () => set({ cart: [] }),

    login: (email) => set({ user: { email, name: 'Demo User' } }),
    logout: () => set({ user: null }),
}));
