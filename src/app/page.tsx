"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesBorderGlow from '@/components/sections/features/FeaturesBorderGlow';
import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import AboutText from '@/components/sections/about/AboutText';
import { Award, Clock, Users } from "lucide-react";

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
      <NavbarFloatingLogo
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
      <HeroSplitKpi
        tag="Expert Plumbing"
        title="Plumbing Done Perfectly — The First Time"
        description="Fast, reliable, and spotless service trusted by homeowners. Contact us at (347) 433-4018."
        primaryButton={{ text: "Get Estimate", href: "#contact" }}
        secondaryButton={{ text: "Call Now", href: "tel:+13474334018" }}
        kpis={[
          { value: "50+", label: "Years Exp" },
          { value: "5k+", label: "Customers" },
          { value: "99%", label: "On-Time" }
        ]}
        imageSrc="http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?_wi=1"
      />
  </div>

  <div id="about" data-section="about">
      <AboutText
        title="Unrivaled Professionalism in Yuma Plumbing"
        primaryButton={{ text: "Learn More", href: "#features" }}
      />
  </div>

  <div id="features" data-section="features">
      <FeaturesBorderGlow
        tag="Solutions"
        title="Our Specialized Plumbing Services"
        description="Premium solutions to keep your home running smoothly."
        features={[
          { icon: Award, title: "Emergency Repairs", description: "Rapid response for urgent needs, 24/7." },
          { icon: Users, title: "Fixture Installation", description: "Professional kitchen and bathroom upgrades." },
          { icon: Clock, title: "System Upgrades", description: "High-efficiency pipe replacements and hardware." },
        ]}
      />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsSimpleCards
        tag="Track Record"
        title="Excellence in Every Job"
        metrics={[
          { value: "50+", description: "Years of Experience" },
          { value: "5,000+", description: "Happy Customers" },
          { value: "99%", description: "Same-Day Projects" },
        ]}
      />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialRatingCards
        tag="Testimonials"
        title="Trusted by Your Neighbors"
        description="See why homeowners choose Freeman Yuma."
        testimonials={[
          { name: "Sarah Miller", role: "Homeowner", quote: "The cleanest and most efficient service ever.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?_wi=2" },
          { name: "James Wilson", role: "Homeowner", quote: "They arrived within an hour of my call.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721527.jpg" },
        ]}
      />
  </div>

  <div id="faq" data-section="faq">
      <FaqSimple
        tag="Support"
        title="Common Plumbing Questions"
        items={[
          { question: "Are you licensed?", answer: "Yes, we are fully licensed and insured." },
          { question: "Do you offer emergency service?", answer: "Yes, we provide 24/7 support." },
          { question: "Is work guaranteed?", answer: "Yes, we offer a Clean Work Guarantee and warranty." },
        ]}
      />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
        tag="Get in touch"
        title="Ready for Plumbing Done Right?"
        description="Send us your request for a free estimate, or call us at (347) 433-4018."
        buttonText="Send Request"
        inputs={[
          { name: "name", type: "text", placeholder: "Full Name", required: true },
          { name: "email", type: "email", placeholder: "Email Address", required: true },
        ]}
        textarea={{ name: "message", placeholder: "Tell us about your project" }}
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimpleMedia
        brand="Freeman Yuma"
        columns={[
          { title: "Links", items: [{ label: "Home", href: "#hero" }, { label: "About", href: "#about" }] },
          { title: "Services", items: [{ label: "Emergency", href: "#features" }, { label: "Contact", href: "#contact" }] },
        ]}
        copyright="© 2024 Freeman Yuma. All rights reserved."
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}