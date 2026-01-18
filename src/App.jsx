import React, { useState } from 'react';
import { Pill, MessageSquare, BarChart3, Users, Clock, CheckCircle, ArrowRight, Menu, X, Zap, Shield, TrendingUp, Phone } from 'lucide-react';
import OnboardingForm from './OnboardingForm';

export default function PharmoperaWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('adherence');
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const openOnboarding = () => setIsOnboardingOpen(true);
  const closeOnboarding = () => setIsOnboardingOpen(false);

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Natural Conversation",
      description: "Report prescriptions, naturally via WhatsApp. Just type as you would speak to a colleague."
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WellLink Patient App",
      description: "Automated reminders keep patients on track with direct access to pharmacists and doctors."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Visual insights on adherence trends, top medications, and patients needing attention."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Onboarding",
      description: "Get started in minutes. No complex training or technical setup required."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Compliant",
      description: "HIPAA-compliant infrastructure ensuring patient data privacy and security."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Better Outcomes",
      description: "Track and improve medication adherence with actionable patient insights."
    }
  ];

  const dashboardMetrics = {
    adherence: [
      { day: 'Mon', rate: 85 },
      { day: 'Tue', rate: 88 },
      { day: 'Wed', rate: 92 },
      { day: 'Thu', rate: 87 },
      { day: 'Fri', rate: 90 },
      { day: 'Sat', rate: 78 },
      { day: 'Sun', rate: 75 }
    ],
    medications: [
      { name: 'artemether lumefantrine', count: 45 },
      { name: 'Amoxicillin', count: 38 },
      { name: 'Metformin', count: 32 },
      { name: 'Lisinopril', count: 28 }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {isOnboardingOpen && <OnboardingForm onClose={closeOnboarding} />}

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PharmOpera
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition">How It Works</a>
              <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition">Analytics</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
            </div>

            <div className="hidden md:block">
              <button onClick={openOnboarding} className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              <a href="#features" className="block text-gray-700">Features</a>
              <a href="#how-it-works" className="block text-gray-700">How It Works</a>
              <a href="#analytics" className="block text-gray-700">Analytics</a>
              <a href="#pricing" className="block text-gray-700">Pricing</a>
              <button onClick={openOnboarding} className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Healthcare Management, <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              WhatsApp-powered prescription management that connects pharmacies, healthcare providers, and patients for better medication adherence and outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openOnboarding} className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition flex items-center justify-center">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                5-minute onboarding
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 mb-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp - PharmOpera</div>
                  <div className="text-xs text-gray-500">Online</div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mb-3 shadow-sm">
                <p className="text-sm text-gray-700">
                  "Melinda whose phone number is 2348012345890 diagnosed of malaria is going to be on artemether lumefantrine for 3 days and will take the medicine one tablet three times a day; after completion, there will be a follow-up to know how she is doing"
                </p>
              </div>
              <div className="bg-blue-600 text-white rounded-lg p-4 ml-8 shadow-sm">
                <p className="text-sm">
                  ✓ Prescription recorded for Melinda<br/>
                  ✓ WellLink reminders activated<br/>
                  ✓ Follow-up scheduled on completion of medication
                </p>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500">
              Natural conversation. Instant processing.
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600">Comprehensive tools for modern healthcare management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How PharmOpera Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to better patient care</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Report via WhatsApp</h3>
              <p className="text-gray-600">Healthcare providers send prescriptions through natural conversation on WhatsApp using PharmOpera</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Patients Get Reminders</h3>
              <p className="text-gray-600">WellLink automatically sends medication reminders to patients with options to connect with their pharmacist or doctor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Track & Improve</h3>
              <p className="text-gray-600">Monitor adherence through visual analytics and intervene when patients need support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview */}
      <section id="analytics" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Analytics Dashboard</h2>
            <p className="text-xl text-gray-600">Data-driven insights to improve patient outcomes</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-3xl shadow-xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-6xl font-bold mb-2">4</div>
              <div className="text-purple-100 text-sm font-medium uppercase tracking-wide">Total Patients</div>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-8 rounded-3xl shadow-xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div className="text-6xl font-bold mb-2">100.0%</div>
              <div className="text-pink-100 text-sm font-medium uppercase tracking-wide">Adherence Rate</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-8 rounded-3xl shadow-xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7" />
              </div>
              <div className="text-6xl font-bold mb-2">17</div>
              <div className="text-cyan-100 text-sm font-medium uppercase tracking-wide">Reminders Sent</div>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-8 rounded-3xl shadow-xl text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <div className="text-6xl font-bold mb-2">0</div>
              <div className="text-orange-100 text-sm font-medium uppercase tracking-wide">Pending Reminders</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Most Prescribed Medications</h3>
            <div className="space-y-4">
              {dashboardMetrics.medications.map((med, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-32 font-semibold text-gray-700">{med.name}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-10 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-green-600 h-full rounded-full flex items-center justify-end pr-4 text-white text-sm font-semibold transition-all"
                      style={{width: `${(med.count / 45) * 100}%`}}
                    >
                      {med.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start improving patient outcomes today</p>
          </div>

          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-600">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-8">
              <h3 className="text-2xl font-bold mb-2">Professional Plan</h3>
              <div className="text-5xl font-bold mb-2">$20<span className="text-2xl font-normal">/month</span></div>
              <p className="text-blue-100">Per pharmacist or healthcare provider</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited prescription reporting via WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">WellLink patient reminder system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full analytics dashboard access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Patient-to-provider communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Doctor consultation integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">5-minute quick onboarding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 customer support</span>
                </li>
              </ul>
              <button onClick={openOnboarding} className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition">
                Start Your Free Trial
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">No credit card required • Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Patient Care?</h2>
          <p className="text-xl text-blue-100 mb-8">Join healthcare providers improving medication adherence and patient outcomes with PharmOpera</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={openOnboarding} className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl transition">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Pill className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">PharmOpera</span>
              </div>
              <p className="text-sm text-gray-400">Revolutionizing healthcare through conversational technology</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Analytics</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
            © 2026 PharmOpera. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}