"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import { MessageCircle, Warehouse, Cloud, Microsoft, Mail, Phone, Users, Globe, MailCheck } from "lucide-react";

export default function EntegrasyonlarPage() {
  const navItems = [
    { name: "Home", id: "/#home" },
    { name: "AI Copilot", id: "/#ai-copilot" },
    { name: "Özellikler", id: "/ozellikler" },
    { name: "Analytics", id: "/#analytics" },
    { name: "Entegrasyonlar", id: "/entegrasyonlar" },
    { name: "Testimonials", id: "/#testimonials" },    { name: "Contact", id: "/#contact" },
  ];

  const footerColumns = [
    {
      title: "Ürün",      items: [
        { label: "AI Copilot", href: "/#ai-copilot" },
        { label: "Özellikler", href: "/ozellikler" },
        { label: "Analitik", href: "/#analytics" },
        { label: "Entegrasyonlar", href: "/entegrasyonlar" },
      ],
    },
    {
      title: "Şirket",      items: [
        { label: "Hakkımızda", href: "/#about" },
        { label: "Kariyer", href: "/#careers" },
        { label: "Basın", href: "/#press" },
      ],
    },
    {
      title: "Destek",      items: [
        { label: "Yardım Merkezi", href: "/#help" },
        { label: "API Belgeleri", href: "/#api-docs" },
        { label: "İletişim", href: "/#contact" },
      ],
    },
    {
      title: "Yasal",      items: [
        { label: "Gizlilik Politikası", href: "/#privacy" },
        { label: "Hizmet Şartları", href: "/#terms" },
      ],
    },
  ];

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
            navItems={navItems}
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            brandName="Weem Flow"
            button={{
              text: "Giriş Yap",              href: "#login"}}
          />
        </div>

        <div id="entegrasyonlar" data-section="entegrasyonlar">
          <FeatureBento
            title="Kusursuz Entegrasyonlarla İş Akışınızı Güçlendirin"
            description="Weem Flow, mevcut tüm sistemlerinizle sorunsuz bir şekilde entegre olarak operasyonlarınızı merkezileştirir."
            animationType="depth-3d"
            useInvertedBackground={false}
            features={[
              {
                title: "Popüler Entegrasyonlar",                description: "En çok kullandığınız uygulamalarla anında bağlantı kurun.",                bentoComponent: "orbiting-icons",                centerIcon: Globe,
                items: [
                  { icon: MessageCircle, ring: 1, duration: 15 }, // WhatsApp
                  { icon: Warehouse, ring: 2, duration: 20 }, // Logo ERP
                  { icon: Cloud, ring: 3, duration: 25 }, // Google Workspace
                  { icon: Microsoft, ring: 1, duration: 18 }, // Microsoft 365
                  { icon: Mail, ring: 2, duration: 22 }, // Outlook
                  { icon: MailCheck, ring: 3, duration: 27 }, // SMTP
                  { icon: Phone, ring: 1, duration: 16 }, // VoIP
                  { icon: Users, ring: 2, duration: 24 } // CRM
                ]
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            videoSrc="http://img.b2bpic.net/free-photo/glowing-smoke-made-particles-black_1048-11996.jpg"
            videoAriaLabel="Futuristic data stream animation loop"
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            logoText="Weem Flow"
            columns={footerColumns}
            copyrightText="© 2035 Weem Flow. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
