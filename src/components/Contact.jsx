import React from 'react';

const Contact = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif text-black mb-8">Contact Us</h2>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="w-full md:w-1/2 mb-8">
                        <h3 className="text-xl font-serif text-black mb-4">Get in Touch</h3>
                        <p className="text-black mb-4">House No - 109, Khasra No-31, Defence Colony, Nandri Road, Jodhpur, Rajasthan</p>
                        <p className="text-black mb-4">Phone: <a href="tel:9024806815" className="text-gold">9024806815</a></p>
                        <p className="text-black mb-4">Email: <a href="mailto:akhawatlawfirm@gmail.com" className="text-gold">akhawatlawfirm@gmail.com</a></p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-serif text-black mb-4">Find Us on Google Maps</h3>
                        <div className="aspect-w-16 aspect-h-9 mb-4">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509999!2d144.9537353153163!3d-37.81627997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0f0f0f%3A0x0!2sYour%20Location!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;