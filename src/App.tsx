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


const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="grain" />
            <SmoothScroll>
                <div className="bg-black min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/v2" element={<Home />} />
                            <Route path="/" element={<RefinedLanding />} />

                            {/* Specialized Ritual Categories */}
                            <Route path="/wellness" element={<CategoryListing category="wellness" />} />
                            <Route path="/cosmetics" element={<CategoryListing category="cosmetics" />} />
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
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </SmoothScroll>
        </Router>
    );
}

export default App;
