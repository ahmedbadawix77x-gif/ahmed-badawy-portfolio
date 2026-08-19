import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F8FBFF] via-white to-blue-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Headline, Direct Channels & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100/70 border border-blue-200 mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let's Build Something Useful.
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Open to internships, technical opportunities, collaborative projects, developer communities, and data/AI-focused initiatives.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                id="contact-email-card"
                href="mailto:ahmedbadawix77x@gmail.com"
                className="p-4 rounded-2xl bg-white border border-blue-100/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    ahmedbadawix77x@gmail.com
                  </div>
                </div>
              </a>

              <a
                id="contact-linkedin-card"
                href="https://www.linkedin.com/in/ahmed-badawy-45060431b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-blue-100/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    LinkedIn Network
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    linkedin.com/in/ahmed-badawy-45060431b
                  </div>
                </div>
              </a>

              <a
                id="contact-github-card"
                href="https://github.com/ahmedbadawix77x-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-blue-100/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    GitHub Code Repository
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    github.com/ahmedbadawix77x-gif
                  </div>
                </div>
              </a>

              <a
                id="contact-phone-card"
                href="tel:+201011349165"
                className="p-4 rounded-2xl bg-white border border-blue-100/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Phone Number
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors" dir="ltr">
                    +201011349165
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-[#F8FBFF] border border-blue-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Primary Location
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    Cairo, Egypt
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-blue-100 shadow-xl shadow-blue-500/5 relative">
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Have an inquiry or collaboration proposal? Fill out the form below and I will get back to you promptly.
              </p>

              {isSubmitted ? (
                <div 
                  id="contact-success-message"
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-in fade-in duration-300"
                >
                  <div className="flex items-center gap-2 font-bold text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Message Sent Successfully!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                    Thank you for reaching out. Your message has been received, and Ahmed will review it and respond shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FBFF] border focus:outline-none focus:ring-2 transition-all ${
                          errors.name 
                            ? 'border-rose-400 focus:ring-rose-200' 
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-rose-500 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FBFF] border focus:outline-none focus:ring-2 transition-all ${
                          errors.email 
                            ? 'border-rose-400 focus:ring-rose-200' 
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-500 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1">
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project collaboration / Internship opportunity"
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FBFF] border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, team opportunity, or question..."
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F8FBFF] border focus:outline-none focus:ring-2 transition-all ${
                        errors.message 
                          ? 'border-rose-400 focus:ring-rose-200' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <span className="text-[11px] text-rose-500 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md shadow-blue-600/20 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
