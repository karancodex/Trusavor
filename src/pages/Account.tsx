import React from 'react';
import { useStore } from '../context/store';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, MapPin, User, Settings } from 'lucide-react';

const Account = () => {
    const user = useStore((state) => state.user);
    const logout = useStore((state) => state.logout);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-32 pb-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full lg:w-72 bg-white rounded-2xl p-6 h-fit">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {user?.name?.[0] || 'D'}
                            </div>
                            <div>
                                <div className="font-bold text-dark">{user?.name || 'Demo User'}</div>
                                <div className="text-xs text-gray-500">Member since 2023</div>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-accent/20 text-primary font-medium"><User className="w-5 h-5" /> Profile</button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50"><Package className="w-5 h-5" /> Orders</button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50"><MapPin className="w-5 h-5" /> Addresses</button>
                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50"><Settings className="w-5 h-5" /> Settings</button>
                            <div className="h-px bg-gray-100 my-4" />
                            <button onClick={() => { logout(); navigate('/login'); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-50"><LogOut className="w-5 h-5" /> Logout</button>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl p-8 mb-8">
                            <h2 className="text-2xl font-bold text-dark mb-6">Recent Orders</h2>
                            <div className="space-y-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="border border-gray-100 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                                        <div>
                                            <div className="font-bold text-dark">Order #TRU-882{i}</div>
                                            <div className="text-sm text-gray-400">Placed on Jan {20 - i}, 2026</div>
                                        </div>
                                        <div>
                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Delivered</span>
                                        </div>
                                        <div className="font-bold text-lg text-dark">$45.00</div>
                                        <button className="text-primary font-medium text-sm hover:underline">View Details</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
