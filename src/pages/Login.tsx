import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/store';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const login = useStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email);
        navigate('/account');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-accent/30 pt-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl w-full max-w-md"
            >
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-serif font-bold text-dark mb-2">Welcome Back</h1>
                    <p className="text-gray-500">Enter your details to access your account</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="email"
                                required
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="password"
                                required
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-colors"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="text-right mt-2">
                            <a href="#" className="text-sm text-primary font-medium hover:underline">Forgot password?</a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-dark text-white py-4 rounded-xl font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2"
                    >
                        Sign In <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <p className="text-gray-500 text-sm">
                        Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Create an account</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
