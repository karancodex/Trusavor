import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { SmoothScroll } from './components/layout/SmoothScroll';

// Pages
import Home from './pages/Home';
import CategoryListing from './pages/CategoryListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import TrackOrder from './pages/TrackOrder';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import ForgotPassword from './pages/ForgotPassword';
import RefinedLanding from './pages/RefinedLanding';
import HomeV3 from './pages/HomeV3';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';


const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const isV3 = location.pathname === '/v3' || location.pathname === '/v3/' || location.pathname === '/'; // Check for V3 route

    return (
        <div className="bg-premium-light text-premium-text-primary min-h-screen flex flex-col font-sans">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};


function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="grain" />
            <SmoothScroll>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomeV3 />} />
                        <Route path="/v1" element={<Home />} />
                        <Route path="/v2" element={<RefinedLanding />} />

                        {/* Specialized Ritual Categories */}
                        <Route path="/wellness" element={<CategoryListing category="wellness" />} />
                        <Route path="/personal-care" element={<CategoryListing category="personal-care" />} />
                        <Route path="/cosmetics" element={<CategoryListing category="personal-care" />} />
                        <Route path="/category/:category" element={<CategoryListing />} />
                        <Route path="/all-collections" element={<CategoryListing category="all" />} />

                        <Route path="/product/:slug" element={<ProductDetails />} />

                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/wishlist" element={<Wishlist />} />

                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/account" element={<Account />} />

                        <Route path="/track-order" element={<TrackOrder />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/journal" element={<Blog />} />
                        <Route path="/journal/:slug" element={<BlogDetail />} />
                    </Routes>
                </Layout>
            </SmoothScroll>
        </Router>
    );
}

export default App;
