import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!values.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!values.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!values.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage('Your message has been sent successfully!');
        setValues({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      }, 1500);
    }
  };
  
  const contactInfo = [
    {
      icon: <MapPin className="text-silver" size={24} />,
      title: 'Location',
      detail: 'New York, NY, USA'
    },
    {
      icon: <Mail className="text-silver" size={24} />,
      title: 'Email',
      detail: 'contact@example.com'
    },
    {
      icon: <Phone className="text-silver" size={24} />,
      title: 'Phone',
      detail: '+1 (555) 123-4567'
    }
  ];

  return (
    <section id="contact" className="section-container opacity-0">
      <SectionTitle 
        title="Contact Me" 
        subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life"
        align="center"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 opacity-0 animate-on-scroll">
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-medium-gray rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                  <p className="text-white/70">{item.detail}</p>
                </div>
              </div>
            ))}
            
            <div className="flex gap-4 pt-4">
              {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-medium-gray flex items-center justify-center hover:bg-silver transition-colors duration-300 hover:text-black"
                  aria-label={social}
                >
                  {/* Social icons would go here */}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 opacity-0 animate-on-scroll">
          <form onSubmit={handleSubmit} className="bg-dark-gray p-8 rounded-lg">
            {submitMessage && (
              <div className="mb-6 p-4 bg-silver/10 border border-silver/20 rounded-lg text-white">
                {submitMessage}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-white/80">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  className={`w-full bg-medium-gray text-white border-0 rounded-lg p-3 focus:ring-2 focus:ring-silver/50 transition-all duration-300 ${
                    errors.name ? 'ring-2 ring-red-500/70' : ''
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-white/80">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`w-full bg-medium-gray text-white border-0 rounded-lg p-3 focus:ring-2 focus:ring-silver/50 transition-all duration-300 ${
                    errors.email ? 'ring-2 ring-red-500/70' : ''
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 text-white/80">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                className={`w-full bg-medium-gray text-white border-0 rounded-lg p-3 focus:ring-2 focus:ring-silver/50 transition-all duration-300 ${
                  errors.subject ? 'ring-2 ring-red-500/70' : ''
                }`}
              />
              {errors.subject && (
                <p className="mt-1 text-red-400 text-sm">{errors.subject}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-white/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={values.message}
                onChange={handleChange}
                className={`w-full bg-medium-gray text-white border-0 rounded-lg p-3 focus:ring-2 focus:ring-silver/50 transition-all duration-300 ${
                  errors.message ? 'ring-2 ring-red-500/70' : ''
                }`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;