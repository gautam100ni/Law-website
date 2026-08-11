import React from 'react';
import aboutImage from '../assets/about-legal-4k.jpg';

const About = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif text-black mb-8">About Us</h2>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img 
                            src={aboutImage} 
                            alt="Legal office environment with scales and law books" 
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <h3 className="text-2xl font-serif text-black mb-4">Our Purpose</h3>
                        <p className="text-lg text-black mb-6">
                            Akhawat Law Firm is founded upon the enduring belief that access to justice and an understanding of the law should not be determined by a person’s economic circumstances, social background, or any other form of disadvantage.
                        </p>
                        <h3 className="text-2xl font-serif text-black mb-4">Our Vision</h3>
                        <p className="text-lg text-black mb-6">
                            Our vision is to contribute towards a society that is legally aware, informed, equitable, and committed to the rule of law, where individuals have a better understanding of their constitutional and legal rights and are able to approach the justice system with greater awareness and understanding.
                        </p>
                        <h3 className="text-2xl font-serif text-black mb-4">Core Values</h3>
                        <p className="text-lg text-black">
                            Our approach is founded upon the principles of integrity, objectivity, legal awareness, confidentiality, constitutional values, and respect for the rule of law. We endeavour to uphold the dignity of the legal profession while contributing to a better-informed understanding of law and the justice system.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;