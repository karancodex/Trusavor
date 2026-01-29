import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-40 pb-20 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-secondary font-medium tracking-widest uppercase mb-2 block text-sm font-bold">Get in Touch</span>
                    <h1 className="text-5xl font-serif font-bold text-dark italic">Contact Us</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-dark mb-6">We'd love to hear from you</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Have a question about our products, shipping, or just want to say hello?
                            Fill out the form below and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-dark">Email</div>
                                    <div className="text-gray-500">hello@trusavor.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-dark">Phone</div>
                                    <div className="text-gray-500">+1 (555) 123-4567</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-dark">Office</div>
                                    <div className="text-gray-500">123 Wellness Ave, Beverly Hills, CA</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-primary" />
                                <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-primary" />
                            </div>
                            <input type="text" placeholder="Subject" className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-primary" />
                            <textarea rows={5} placeholder="Message" className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-primary" />
                            <button className="w-full bg-dark text-white py-4 rounded-full font-bold hover:bg-primary transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
