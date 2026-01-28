import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function OnboardingForm({ onClose }) {
  const [formData, setFormData] = useState({
    healthCenterName: '',
    address: '',
    whatsappNumber: '',
    email: '',
    websiteOrLinkedIn: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'whatsappNumber') {
      let cleanValue = value.replace(/\D/g, ''); // Remove all non-digit characters
      let formattedValue = cleanValue;

      // If it starts with '0', replace with '234'
      if (cleanValue.startsWith('0')) {
        formattedValue = '234' + cleanValue.substring(1);
      }
      // If it doesn't start with '234' and is not empty, prepend '234'
      else if (cleanValue.length > 0 && !cleanValue.startsWith('234')) {
        formattedValue = '234' + cleanValue;
      }

      // Ensure the length does not exceed 13 digits (234 + 10 digits)
      if (formattedValue.length > 13) {
        formattedValue = formattedValue.substring(0, 13);
      }
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://hook.eu2.make.com/kjnoq2r0fe08yoninaqyk1d9pat0ti5v', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
            healthCenterName: '',
            address: '',
            whatsappNumber: '',
            email: '',
            websiteOrLinkedIn: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Webhook submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="p-8">
            {submitStatus === 'success' ? (
                <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Onboarding Request Sent!</h2>
                    <p className="text-gray-600">Thank you. We have received your details and will be in touch shortly.</p>
                </div>
            ) : (
                <>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Start Your Free Trial</h2>
                    <p className="text-center text-gray-600 mb-6">Provide your details to begin your journey with PharmOpera.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="healthCenterName"
                            value={formData.healthCenterName}
                            onChange={handleChange}
                            placeholder="Name of Health Center"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address or Location"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                        <input
                            type="tel"
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleChange}
                            placeholder="WhatsApp Phone Number"
                            required
                            title="This is the number patients will reach out to for any questions about their medication reminder."
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        />
                        <input
                            type="url"
                            name="websiteOrLinkedIn"
                            value={formData.websiteOrLinkedIn}
                            onChange={handleChange}
                            placeholder="Website or LinkedIn (Optional)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border--blue-500 transition"
                        />

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6 text-sm">
                            <h4 className="font-bold text-gray-800 mb-2">What you receive after onboarding:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="font-semibold mr-2">1)</span>
                                    <span>You will receive a PharmOpera link and sample prescriptions set by other health centers as a guide.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-semibold mr-2">2)</span>
                                    <span>You will receive your login details for your dashboard.</span>
                                </li>
                            </ul>
                        </div>
                        
                        {submitStatus === 'error' && (
                            <p className="text-red-500 text-sm text-center">There was an error submitting the form. Please try again.</p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition disabled:opacity-50"
                        >
                            {isSubmitting ? 'Submitting...' : 'Onboard Me'}
                        </button>
                    </form>
                </>
            )}
        </div>
      </div>
    </div>
  );
}
