import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

export function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('success');
    setTimeout(() => {
      setFormState('idle');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="animate-fade-slide-in pt-4 md:pt-0">
      {/* Header Section */}
      <section className="section pb-0 md:pb-4">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Let's Discuss Your Cooling Needs</h2>
        <p className="section-subtitle">
          Tell us about your space – we'll recommend the perfect fan configuration.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="section pt-0 md:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-border rounded-sm font-sans text-sm transition-all duration-350 focus:outline-none focus:border-primary focus:ring-[4px] focus:ring-primary/[0.08] bg-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-border rounded-sm font-sans text-sm transition-all duration-350 focus:outline-none focus:border-primary focus:ring-[4px] focus:ring-primary/[0.08] bg-white"
            />
            <input
              type="text"
              name="company"
              placeholder="Company / Facility"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-border rounded-sm font-sans text-sm transition-all duration-350 focus:outline-none focus:border-primary focus:ring-[4px] focus:ring-primary/[0.08] bg-white"
            />
            <textarea
              name="message"
              placeholder="Tell us about your space (size, ceiling height, purpose)..."
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3.5 border border-border rounded-sm font-sans text-sm transition-all duration-350 focus:outline-none focus:border-primary focus:ring-[4px] focus:ring-primary/[0.08] bg-white resize-none"
            />
            <button
              type="submit"
              className={`btn w-full ${
                formState === 'success' ? 'bg-primary-deep' : 'btn-primary'
              }`}
              disabled={formState === 'success'}
            >
              {formState === 'success' ? 'Message Sent!' : 'Send Inquiry'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="bg-black-soft text-white rounded-lg p-6 md:p-9">
            <h3 className="font-display text-lg md:text-xl mb-5 text-white">Head Office</h3>

            <div className="space-y-3.5 text-white/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">23 Sprint Way, Ikeja, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">+234 800 555 0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">info@sprintgs.com</span>
              </div>
            </div>

            <hr className="border-white/20 my-6" />

            <h3 className="font-display text-lg md:text-xl mb-4 text-white">Service Centres</h3>

            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <Building className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">Abuja · Port Harcourt · Kano</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
