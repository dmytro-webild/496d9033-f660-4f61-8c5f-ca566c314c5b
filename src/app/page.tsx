"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';
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
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Freeman Yuma"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="Plumbing Done Perfectly — The First Time"
      description="Fast, reliable, and spotless service trusted by homeowners across the area We dont just fix problems—we upgrade your space"
      buttons={[
        {
          text: "Get a Free Estimate",
          href: "#contact",
        },
        {
          text: "Call Now",
          href: "tel:+1234567890",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Unrivaled Professionalism in Yuma Plumbing"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Emergency Repairs",
          author: "Freeman Yuma",
          description: "Rapid response for all urgent plumbing needs, 24/7.",
          tags: [
            "Emergency",
            "24/7",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-fixing-kitchen-sink_53876-139620.jpg?_wi=1",
        },
        {
          id: "f2",
          title: "Fixture Installation",
          author: "Freeman Yuma",
          description: "Professional installation for kitchens, bathrooms, and utility areas.",
          tags: [
            "Installations",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-rinsing-glass-with-pull-out-sprayer-quick-kitchen-cleanup_169016-69562.jpg?_wi=1",
        },
        {
          id: "f3",
          title: "System Upgrades",
          author: "Freeman Yuma",
          description: "High-efficiency pipe replacements and hardware upgrades.",
          tags: [
            "Upgrades",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/engineer-writing-condenser-values_482257-90848.jpg?_wi=1",
        },
      ]}
      title="Our Specialized Plumbing Solutions"
      description="We offer a wide range of premium services to keep your home running smoothly and efficiently."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Years of Experience",
          value: "15+",
          icon: Award,
        },
        {
          id: "m2",
          title: "Happy Customers",
          value: "5,000+",
          icon: Users,
        },
        {
          id: "m3",
          title: "Same-Day Projects",
          value: "99%",
          icon: Clock,
        },
      ]}
      title="Proven Track Record"
      description="Numbers that highlight our dedication to excellence."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Miller",
          date: "Oct 2023",
          title: "Professionalism",
          quote: "The cleanest and most efficient service I've ever had.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/person-paying-bill-restaurant-using-nfc-technology_23-2150039415.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/asian-plumber-blue-overalls-clearing-blockage-drain_1098-17773.jpg?_wi=2",
          imageAlt: "happy homeowner smiling home",
        },
        {
          id: "t2",
          name: "James Wilson",
          date: "Nov 2023",
          title: "Fast Response",
          quote: "They arrived within an hour of my call. Exceptional.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-customer-service-representative_23-2151933142.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721527.jpg",
          imageAlt: "happy homeowner smiling home",
        },
        {
          id: "t3",
          name: "Alice Johnson",
          date: "Dec 2023",
          title: "Great Work",
          quote: "Fixed the leak and installed a new faucet flawlessly.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/happy-young-modern-woman-dancing-sitting-floor-moving-hands-rhythm-music-listening_1258-201749.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-fixing-kitchen-sink_53876-139620.jpg?_wi=2",
          imageAlt: "happy homeowner smiling home",
        },
        {
          id: "t4",
          name: "Mark Evans",
          date: "Jan 2024",
          title: "Reliable",
          quote: "Dependable and professional work on my remodel.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/father-kid-taking-selfies_23-2148947322.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/man-rinsing-glass-with-pull-out-sprayer-quick-kitchen-cleanup_169016-69562.jpg?_wi=2",
          imageAlt: "happy homeowner smiling home",
        },
        {
          id: "t5",
          name: "Lisa Brown",
          date: "Feb 2024",
          title: "Best Service",
          quote: "Clean, fast, and very polite crew. Very happy.",
          tag: "5 stars",
          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-pretty-woman-showing-ok-sign_1262-2368.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/engineer-writing-condenser-values_482257-90848.jpg?_wi=2",
          imageAlt: "happy homeowner smiling home",
        },
      ]}
      title="Trusted by Your Neighbors"
      description="See why homeowners choose Freeman Yuma for their plumbing needs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Are you licensed?",
          content: "Yes, we are fully licensed and insured for your peace of mind.",
        },
        {
          id: "q2",
          title: "Do you offer emergency service?",
          content: "Absolutely, we provide 24/7 emergency support.",
        },
        {
          id: "q3",
          title: "Is work guaranteed?",
          content: "We offer a Clean Work Guarantee and back our installations with a warranty.",
        },
      ]}
      sideTitle="Common Plumbing Questions"
      sideDescription="Get quick answers to common questions about our professional plumbing services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      tag="Get in touch"
      title="Ready for Plumbing Done Right?"
      description="Send us your request for a free estimate or book a service today."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Freeman Yuma"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
