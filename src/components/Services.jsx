import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    "Civil Law",
    "Criminal Law",
    "Constitutional Law",
    "Cyber Law & Cyber Crime",
    "Family / Matrimonial Law",
    "Property & Land Disputes",
    "Commercial & Recovery Matters",
    "Consumer Disputes",
    "MACT Claims",
    "Civil & Criminal Writs",
    "Civil Revisions",
    "Bail & Anticipatory Bail",
    "FIR Quashing",
    "Criminal Appeals & Revisions",
    "Custodial Death Matters",
    "Habeas Corpus & Protection Petitions",
    "Technology-related matters",
    "Other Civil & Criminal Litigation"
];

const Services = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif text-black mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h3 className="text-xl font-serif text-black mb-4">{service}</h3>
                            <Link to="/services" className="text-gold font-semibold hover:underline">Learn More</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;