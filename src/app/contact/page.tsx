import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Cloverbelt Construction',
  description: 'Contact Cloverbelt Construction LLC for a free estimate on your construction project. Serving Cadott, Wisconsin and the Chippewa Valley region.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <PageHeader
        badge="Get in Touch"
        title="Let's Build"
        highlight="Together"
        description="Ready to start your project? Contact us for a free consultation and estimate."
        backgroundImage="/spaeth-construction/images/gallery/construction-site-3.jpg"
      />

      {/* Contact Section - Uses shared component */}
      <Contact />
    </div>
  );
}
