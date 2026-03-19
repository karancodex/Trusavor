import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="pt-32 pb-20 bg-[#fafaf9] min-h-screen">
            <div className="max-w-[1800px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    {/* Perspective Side */}
                    <div className="w-full lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-[#7FB844] block mb-6"
                        >
                            Open Channels
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-9xl font-serif text-stone-900 leading-[0.8] italic mb-12 tracking-tighter"
                        >
                            Connect <br /> <span className="text-stone-400">With Us.</span>
                        </motion.h1>
                        <p className="text-xl text-stone-500 font-light leading-relaxed max-w-md italic mb-16 border-l border-stone-200 pl-8">
                            Whether you seek guidance on a specific ritual or have a molecular inquiry, our stewards are ready to assist.
                        </p>

                        <div className="space-y-12">
                            {[
                                { icon: Mail, title: "Electronic Mail", detail: "steward@trusavor.com" },
                                { icon: Phone, title: "Voice Relay", detail: "+1 (888) TRU-RITL" },
                                { icon: MapPin, title: "Origin Hub", detail: "123 Altitude Way, High Peaks" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <div className="w-14 h-14 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900 group-hover:bg-[#7FB844] group-hover:text-white transition-all shadow-sm">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">{item.title}</h4>
                                        <p className="text-xl font-serif text-stone-900">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Transmittance Form */}
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-12 lg:p-16 rounded-[60px] border border-stone-200 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                                <Send className="w-40 h-40 text-[#7FB844]" />
                            </div>

                            <h2 className="text-3xl font-serif text-stone-900 mb-10 italic">Initiate <br /> Correspondence</h2>

                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Identity</label>
                                        <input type="text" placeholder="Your Name" className="w-full px-8 py-5 bg-stone-50 border border-stone-100 rounded-full focus:outline-none focus:border-[#7FB844]/50 transition-all font-light text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Coordinates</label>
                                        <input type="email" placeholder="Email Address" className="w-full px-8 py-5 bg-stone-50 border border-stone-100 rounded-full focus:outline-none focus:border-[#7FB844]/50 transition-all font-light text-sm" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">Inquiry Nature</label>
                                    <input type="text" placeholder="Subject" className="w-full px-8 py-5 bg-stone-50 border border-stone-100 rounded-full focus:outline-none focus:border-[#7FB844]/50 transition-all font-light text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-4">The Narrative</label>
                                    <textarea rows={6} placeholder="How can we assist your ritual?" className="w-full px-8 py-5 bg-stone-50 border border-stone-100 rounded-[30px] focus:outline-none focus:border-[#7FB844]/50 transition-all font-light text-sm resize-none" />
                                </div>
                                <button className="w-full bg-[#7FB844] text-white py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-stone-900 transition-all shadow-xl shadow-[#7FB844]/20 mt-4 flex items-center justify-center gap-3 group">
                                    Dispatch Message <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
