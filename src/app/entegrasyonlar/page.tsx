"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function EntegrasyonlarPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="aurora"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "/#home" },
              { name: "AI Copilot", id: "/#ai-copilot" },
              { name: "Özellikler", id: "/ozellikler" },
              { name: "Analytics", id: "/#analytics" },
              { name: "Entegrasyonlar", id: "/entegrasyonlar" },
              { name: "Testimonials", id: "/#testimonials" },
              { name: "Fiyatlandırma", id: "/fiyatlandirma" },
              { name: "Contact", id: "/#contact" },
            ]}
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            brandName="Weem Flow"
            button={{
              text: "Giriş Yap",              href: "/#login"
            }}
          />
        </div>

        <div id="entegrasyonlar" data-section="entegrasyonlar">
          <SocialProofOne
            textboxLayout="default"
            useInvertedBackground={false}
            showCard={true}
            speed={50} // Provides a subtle floating/scrolling effect
            title="Tüm Uygulamalarınızla Kusursuz Entegrasyonlar"
            description="Weem Flow, mevcut sistemlerinizle kolayca entegre olur ve iş süreçlerinizi birleştirir."
            names={[
              "Salesforce CRM",              "Jira Project Management",              "Zendesk Support",              "Google Workspace",              "Microsoft 365",              "Slack Communication",              "SAP ERP",              "Zoom Video Conferencing"
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
