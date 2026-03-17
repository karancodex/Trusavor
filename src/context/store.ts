import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import i18n from '../i18n';

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
    availableCountries?: CountryCode[];
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

export type CountryCode = 'US' | 'IN' | 'AE' | 'SA';
export type CurrencyCode = 'USD' | 'AED' | 'SAR' | 'INR';
export type LanguageCode = 'EN' | 'AR' | 'HI';

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

    // Globalization
    country: CountryCode;
    language: LanguageCode;
    currency: CurrencyCode;
    currencyRates: Record<string, number>;
    setCountry: (country: CountryCode) => void;
    setLanguage: (lang: LanguageCode) => void;
    setCurrency: (curr: CurrencyCode) => void;
    fetchRates: () => Promise<void>;

    user: any | null; // Placeholder for user
    login: (email: string) => void;
    logout: () => void;
}

const DEFAULT_RATES = {
    USD: 1,
    AED: 3.67,
    SAR: 3.75,
    INR: 84.0 // Approximate
};

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            products: productsData as Product[],
            categories: categoriesData as Category[],
            cart: [],
            wishlist: [],

            country: 'US',
            language: 'EN',
            currency: 'USD',
            currencyRates: DEFAULT_RATES,
            user: null,

            setCountry: (country) => {
                let currency: CurrencyCode = 'USD';
                let language: LanguageCode = 'EN';

                switch (country) {
                    case 'IN':
                        currency = 'INR';
                        language = 'EN'; // Default to English for India, user can switch to HI
                        break;
                    case 'AE':
                        currency = 'AED';
                        language = 'AR';
                        break;
                    case 'SA':
                        currency = 'SAR';
                        language = 'AR';
                        break;
                    case 'US':
                    default:
                        currency = 'USD';
                        language = 'EN';
                        break;
                }

                i18n.changeLanguage(language);
                set({ country, currency, language });

                // HTML dir attribute for RTL
                document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
                document.documentElement.lang = language.toLowerCase();
            },

            setLanguage: (language) => {
                i18n.changeLanguage(language);
                set({ language });
                document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
                document.documentElement.lang = language.toLowerCase();
            },

            setCurrency: (currency) => set({ currency }),

            fetchRates: async () => {
                try {
                    // Simulating API call or use a real free API if available
                    // For now, we update with default rates to ensure they are present
                    // In a real app, strict fetch logic would go here
                    // const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                    // const data = await res.json();
                    // set({ currencyRates: data.rates });
                    set({ currencyRates: DEFAULT_RATES });
                } catch (error) {
                    console.error("Failed to fetch rates, using defaults");
                    set({ currencyRates: DEFAULT_RATES });
                }
            },

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
        }),
        {
            name: 'trusavor-storage', // unique name
            partialize: (state) => ({
                cart: state.cart,
                wishlist: state.wishlist,
                country: state.country,
                language: state.language,
                currency: state.currency,
                user: state.user
            }),
        }
    )
);
