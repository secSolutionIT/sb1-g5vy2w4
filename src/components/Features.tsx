import React from 'react';
import { Fingerprint, Code, Lock } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Advanced Security',
    description: 'State-of-the-art encryption and security measures to protect your data'
  },
  {
    icon: Code,
    title: 'Smart Analytics',
    description: 'Real-time insights and powerful analytics to optimize your campaigns'
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Complete control over your data with industry-leading privacy features'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}