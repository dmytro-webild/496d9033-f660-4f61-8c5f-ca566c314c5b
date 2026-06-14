"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitFormSharp from '@/components/sections/contact/ContactSplitFormSharp';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesAttributeCards from '@/components/sections/features/FeaturesAttributeCards';
import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import NavbarInline from '@/components/ui/NavbarInline';
import TestimonialAvatarCard from '@/components/sections/testimonial/TestimonialAvatarCard';
import AboutTestimonialParallax from '@/components/sections/about/AboutTestimonialParallax';
import { Award, Clock, Users, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarInline
        logo="Freeman Yuma"
        navItems={[
          { name: "Home", href: "#hero" },
          { name: "About", href: "#about" },
          { name: "Services", href: "#features" },
          { name: "Contact", href: "#contact" },
        ]}
        ctaButton={{ text: "Get Estimate", href: "#contact" }}
      />
  </div>

  <div id="hero" data-section="hero">
      <HeroTiltedCards
        tag="Expert Plumbing"
        title="Plumbing Done Perfectly — The First Time"
        description="Fast, reliable, and spotless service trusted by homeowners in Yuma. Contact us at (347) 433-4018."
        primaryButton={{ text: "Get Estimate", href: "#contact" }}
        secondaryButton={{ text: "Call Now", href: "tel:+13474334018" }}
        items={[{ imageSrc: "http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?_wi=1" }, { imageSrc: "http://img.b2bpic.net/plumbing-professional-doing-his-job_23-2150721527.jpg?_wi=1" }, { imageSrc: "http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?_wi=1" }, { imageSrc: "http://img.b2bpic.net/plumbing-professional-doing-his-job_23-2150721527.jpg?_wi=2" }, { imageSrc: "http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?_wi=1" }]}
      />
  </div>

  <div id="about" data-section="about">
      <AboutTestimonialParallax
        tag="About Us"
        quote="We treat your home as if it were our own, ensuring meticulous care and plumbing precision."
        author="Freeman Yuma"
        role="Lead Master Plumber"
        imageSrc="http://img.b2bpic.net/plumbing-professional-doing-his-job_23-2150721527.jpg?_wi=3"
      />
  </div>

  <div id="features" data-section="features">
      <FeaturesAttributeCards
        tag="Solutions"
        title="Our Specialized Services"
        description="High-performance plumbing upgrades and rapid emergency support."
        items={[
          { title: "Emergency Repairs", tags: "24/7", details: [{ icon: Wrench, label: "Status", value: "Available" }] },
          { title: "Fixture Installation", tags: "Kitchen/Bath", details: [{ icon: Users, label: "Status", value: "Pro" }] },
          { title: "Pipe Upgrades", tags: "System", details: [{ icon: Clock, label: "Status", value: "Fast" }] },
        ]}
      />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsIconCards
        tag="Track Record"
        title="Excellence in Every Job"
        metrics={[
          { icon: "Award", title: "Years Experience", value: "50+" },
          { icon: "Users", title: "Happy Customers", value: "5k+" },
          { icon: "Clock", title: "On-Time Delivery", value: "99%" },
        ]}
      />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialAvatarCard
        tag="Testimonials"
        title="Join our satisfied local community"
        primaryButton={{ text: "Call Us", href: "tel:+13474334018" }}
        avatars={[{ name: "Sarah M." }, { name: "James W." }, { name: "Bob T." }, { name: "Alice P." }]}
      />
  </div>

  <div id="faq" data-section="faq">
      <FaqTabbedAccordion
        tag="Support"
        title="Common Plumbing Questions"
        categories={[
          { name: "General", items: [{ question: "Are you licensed?", answer: "Yes, we are fully licensed and insured." }] },
          { name: "Emergency", items: [{ question: "Do you offer emergency service?", answer: "Yes, we provide 24/7 support." }] },
          { name: "Guarantee", items: [{ question: "Is work guaranteed?", answer: "Yes, we offer a Clean Work Guarantee and warranty." }] },
        ]}
      />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitFormSharp
        tag="Get in touch"
        title="Ready for Plumbing Done Right?"
        description="Send us your request for a free estimate, or call us at (347) 433-4018."
        buttonText="Send Request"
        inputs={[
          { name: "name", type: "text", placeholder: "Full Name", required: true },
          { name: "email", type: "email", placeholder: "Email Address", required: true },
        ]}
        textarea={{ name: "message", placeholder: "Tell us about your project" }}
        imageSrc="http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?_wi=1"
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimpleCard
        brand="Freeman Yuma"
        copyright="© 2024 Freeman Yuma. All rights reserved."
        columns={[
          { title: "Links", items: [{ label: "Home", href: "#hero" }, { label: "About", href: "#about" }] },
          { title: "Services", items: [{ label: "Emergency", href: "#features" }, { label: "Contact", href: "#contact" }] },
        ]}
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
