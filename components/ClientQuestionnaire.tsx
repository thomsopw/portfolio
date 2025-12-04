'use client';

import React, { useState } from 'react';
import {
  Palette,
  Globe,
  Layout,
  Settings,
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { AnimatedSection } from './ui/AnimatedSection';

const ClientQuestionnaire: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeSection, setActiveSection] = useState<string | null>('basics');

  const [formData, setFormData] = useState({
    // Basics
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    currentWebsite: '',

    // Branding
    brandColors: '',
    adjectives: '',
    competitors: '',
    inspiration: '',

    // Content & Audience
    targetAudience: '',
    keyMessage: '',
    contentReady: 'no', // yes, no, partial

    // Functionality
    features: [] as string[],
    otherFeatures: '',

    // Logistics
    deadline: '',
    budget: '',
    hostingAccess: 'no',
  });

  const toggleFeature = (feature: string) => {
    setFormData((prev) => {
      const exists = prev.features.includes(feature);
      if (exists) {
        return { ...prev, features: prev.features.filter((f) => f !== feature) };
      } else {
        return { ...prev, features: [...prev.features, feature] };
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.businessName || !formData.contactName || !formData.email) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Format the data for submission
      const submissionData = {
        businessName: formData.businessName,
        contactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        currentWebsite: formData.currentWebsite,
        brandColors: formData.brandColors,
        adjectives: formData.adjectives,
        competitors: formData.competitors,
        inspiration: formData.inspiration,
        targetAudience: formData.targetAudience,
        keyMessage: formData.keyMessage,
        contentReady: formData.contentReady,
        features: formData.features,
        otherFeatures: formData.otherFeatures,
        deadline: formData.deadline,
        budget: formData.budget,
        hostingAccess: formData.hostingAccess,
        submittedAt: new Date().toISOString(),
      };

      // Send to API endpoint (you'll need to create this)
      const response = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          currentWebsite: '',
          brandColors: '',
          adjectives: '',
          competitors: '',
          inspiration: '',
          targetAudience: '',
          keyMessage: '',
          contentReady: 'no',
          features: [],
          otherFeatures: '',
          deadline: '',
          budget: '',
          hostingAccess: 'no',
        });
        setActiveSection(null);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 10000);
    }
  };

  const sections = [
    {
      id: 'basics',
      title: 'The Basics',
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Business Name *</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
                placeholder="e.g. Acme Corp"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Contact Name *</label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
                placeholder="e.g. Jane Doe"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">Current Website (if applicable)</label>
            <input
              type="url"
              name="currentWebsite"
              value={formData.currentWebsite}
              onChange={handleChange}
              className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
              placeholder="https://..."
            />
          </div>
        </div>
      ),
    },
    {
      id: 'branding',
      title: 'Look & Feel',
      icon: <Palette className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Do you have existing brand colors or a logo?
            </label>
            <textarea
              name="brandColors"
              value={formData.brandColors}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all resize-none"
              placeholder="e.g. We use Navy Blue (#000080) and Gold. We have a logo ready."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Describe the desired vibe in 3 adjectives
            </label>
            <input
              type="text"
              name="adjectives"
              value={formData.adjectives}
              onChange={handleChange}
              className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
              placeholder="e.g. Modern, Playful, Trustworthy"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Competitor Websites</label>
              <textarea
                name="competitors"
                value={formData.competitors}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all resize-none"
                placeholder="Who are we up against?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Websites you love (Inspiration)</label>
              <textarea
                name="inspiration"
                value={formData.inspiration}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all resize-none"
                placeholder="Links to sites with design elements you like."
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'content',
      title: 'Content & Strategy',
      icon: <Layout className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">Who is your target audience?</label>
            <input
              type="text"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
              placeholder="e.g. Homeowners in the local area, age 30-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              What is the #1 thing you want visitors to do?
            </label>
            <input
              type="text"
              name="keyMessage"
              value={formData.keyMessage}
              onChange={handleChange}
              className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
              placeholder="e.g. Book a consultation, Buy a product, Sign up for newsletter"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-3">Do you have text/photos ready?</label>
            <div className="flex flex-wrap gap-4">
              {['Yes, completely', 'Partial / In Progress', 'No, I need help'].map((opt) => (
                <label key={opt} className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="contentReady"
                    value={opt}
                    checked={formData.contentReady === opt}
                    onChange={handleChange}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'functionality',
      title: 'Functionality',
      icon: <Settings className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-3">Which features do you need?</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Contact Form',
                'Booking System',
                'E-commerce/Shop',
                'Blog/News Section',
                'Photo Gallery',
                'Newsletter Signup',
                'Social Media Feeds',
                'Member Login Area',
                'Multilingual Support',
              ].map((feature) => (
                <div
                  key={feature}
                  onClick={() => toggleFeature(feature)}
                  className={`p-3 rounded-lg border cursor-pointer flex items-center justify-between transition-all ${
                    formData.features.includes(feature)
                      ? 'glass-strong backdrop-blur-xl border-purple-500/50 text-purple-300'
                      : 'glass backdrop-blur-md border-white/20 hover:border-purple-400/50 hover:glass-strong'
                  }`}
                >
                  <span className="text-sm font-medium text-white/90">{feature}</span>
                  {formData.features.includes(feature) && <CheckCircle className="w-4 h-4 text-purple-400" />}
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">Any other specific requirements?</label>
            <textarea
              name="otherFeatures"
              value={formData.otherFeatures}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all resize-none"
              placeholder="e.g. Integration with my CRM, Pop-ups, etc."
            />
          </div>
        </div>
      ),
    },
    {
      id: 'logistics',
      title: 'Timeline & Budget',
      icon: <Clock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Ideal Launch Date</label>
              <input
                type="text"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
                placeholder="e.g. Early November"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 glass backdrop-blur-md rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:glass-strong transition-all"
              >
                <option value="" className="bg-gray-900">Select a range...</option>
                <option value="<$1k" className="bg-gray-900">Under $1,000</option>
                <option value="$1k-$3k" className="bg-gray-900">$1,000 - $3,000</option>
                <option value="$3k-$5k" className="bg-gray-900">$3,000 - $5,000</option>
                <option value="$5k-$10k" className="bg-gray-900">$5,000 - $10,000</option>
                <option value="$10k+" className="bg-gray-900">$10,000+</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/90 mb-3">Do you already have a domain & hosting?</label>
            <div className="flex flex-wrap gap-4">
              {['Yes, I have both', 'I have a domain only', 'No, I need help setting up'].map((opt) => (
                <label key={opt} className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="hostingAccess"
                    value={opt}
                    checked={formData.hostingAccess === opt}
                    onChange={handleChange}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="glass-nav border-b border-white/10 sticky top-0 z-10 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="glass-strong backdrop-blur-xl p-2 rounded-lg border border-white/20">
                <Layout className="w-6 h-6 text-purple-400" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold gradient-text">Client Questionnaire</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <Card className="p-6 border-blue-500/30">
              <div className="flex items-start gap-3">
                <div className="p-2 glass-strong backdrop-blur-xl rounded-lg border border-blue-500/30">
                  <Send className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">Instructions</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Fill out all sections below to help us understand your vision. Required fields are marked with an
                    asterisk (*). When finished, click &quot;Submit Questionnaire&quot; at the bottom.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {sections.map((section, index) => (
            <AnimatedSection key={section.id} delay={index * 0.1} direction="up">
              <Card
                className={`transition-all duration-300 ${
                  activeSection === section.id ? 'border-purple-500/50 ring-2 ring-purple-500/20' : ''
                }`}
              >
                <button
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-all ${
                        activeSection === section.id
                          ? 'glass-strong backdrop-blur-xl border border-purple-500/50 text-purple-400'
                          : 'glass backdrop-blur-md border border-white/20 text-white/60'
                      }`}
                    >
                      {section.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                  </div>
                  {activeSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </button>

                {activeSection === section.id && (
                  <div className="px-5 pb-6 border-t border-white/10 pt-6 animate-in fade-in slide-in-from-top-2 duration-200">
                    {section.content}
                  </div>
                )}
              </Card>
            </AnimatedSection>
          ))}

          {/* Submit Button and Status */}
          <AnimatedSection>
            <Card className="p-6">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 glass-strong backdrop-blur-xl rounded-lg border border-green-500/50">
                  <div className="flex items-center gap-3 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Thank you!</h3>
                      <p className="text-sm text-white/80">
                        Your questionnaire has been submitted successfully. We&apos;ll get back to you soon!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 glass-strong backdrop-blur-xl rounded-lg border border-red-500/50">
                  <div className="flex items-center gap-3 text-red-400">
                    <Send className="w-5 h-5" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Submission Error</h3>
                      <p className="text-sm text-white/80">
                        Please make sure all required fields are filled out and try again.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="flex items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Questionnaire
                    </>
                  )}
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </form>
      </div>
    </div>
  );
};

export default ClientQuestionnaire;
