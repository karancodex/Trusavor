import React, { useState } from 'react';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState<any>(null);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({
            id: orderId,
            status: 'shipping',
            steps: [
                { label: 'Order Placed', date: 'Jan 25', completed: true, icon: Clock },
                { label: 'Processing', date: 'Jan 26', completed: true, icon: Package },
                { label: 'Out for Delivery', date: 'Jan 27', completed: true, icon: Truck },
                { label: 'Delivered', date: 'Expected Jan 28', completed: false, icon: CheckCircle },
            ]
        });
    };

    return (
        <div className="min-h-screen pt-40 pb-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-3xl">
                <h1 className="text-4xl font-serif font-bold text-dark text-center mb-8">Track Your Order</h1>

                <div className="bg-white p-8 rounded-2xl shadow-sm mb-12">
                    <form onSubmit={handleTrack} className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Enter Order ID (e.g. TRU-8821)"
                            className="flex-1 px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            required
                        />
                        <button type="submit" className="bg-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-primary transition-colors flex items-center gap-2">
                            <Search className="w-5 h-5" /> Track
                        </button>
                    </form>
                </div>

                {status && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-8 rounded-2xl shadow-sm"
                    >
                        <div className="border-b border-gray-100 pb-6 mb-8 flex justify-between items-center">
                            <div>
                                <div className="text-sm text-gray-500">Order ID</div>
                                <div className="font-bold text-xl text-dark">#{status.id}</div>
                            </div>
                            <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-bold uppercase">
                                In Transit
                            </div>
                        </div>

                        <div className="space-y-8 relative">
                            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-100 z-0" />
                            {status.steps.map((step: any, index: number) => (
                                <div key={index} className="relative z-10 flex gap-6">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white ${step.completed ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <div className="pt-2">
                                        <div className={`font-bold ${step.completed ? 'text-dark' : 'text-gray-400'}`}>{step.label}</div>
                                        <div className="text-sm text-gray-400">{step.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default TrackOrder;
