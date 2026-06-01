"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';

export default function DemoTalepPage() {
  const commonNavItems = [
    { name: "Home", id: "/" },
    { name: "AI Copilot", id: "#ai-copilot" },
    { name: "Features", id: "#features" },
    { name: "Analytics", id: "#analytics" },
    { name: "Integrations", id: "#integrations" },
    { name: "Testimonials", id: "#testimonials" },
    { name: "Demo Talep", id: "/demo-talep" },
  ];

  const commonFooterColumns = [
    {
      title: "Ürün",      items: [
        { label: "AI Copilot", href: "#ai-copilot" },
        { label: "Özellikler", href: "#features" },
        { label: "Analitik", href: "#analytics" },
        { label: "Entegrasyonlar", href: "#integrations" },
      ],
    },
    {
      title: "Şirket",      items: [
        { label: "Hakkımızda", href: "#about" },
        { label: "Kariyer", href: "#careers" },
        { label: "Basın", href: "#press" },
      ],
    },
    {
      title: "Destek",      items: [
        { label: "Yardım Merkezi", href: "#help" },
        { label: "API Belgeleri", href: "#api-docs" },
        { label: "İletişim", href: "/demo-talep" },
        { label: "Demo Talep", href: "/demo-talep" },
      ],
    },
    {
      title: "Yasal",      items: [
        { label: "Gizlilik Politikası", href: "#privacy" },
        { label: "Hizmet Şartları", href: "#terms" },
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
            navItems={commonNavItems}
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            brandName="Weem Flow"
            button={{ text: "Giriş Yap", href: "#login" }}
          />
        </div>

        <div id="demo-talep" data-section="demo-talep">
          <ContactSplitForm
            title="Demo Talebi Gönderin"
            description="Weem Flow'un operasyonel mükemmellik yeteneklerini keşfetmek için ücretsiz bir demo talep edin. Ekibimiz sizinle en kısa sürede iletişime geçecektir."
            inputs={[
              { name: "fullName", type: "text", placeholder: "Ad Soyad", required: true },
              { name: "email", type: "email", placeholder: "Kurum E-postası", required: true },
              { name: "companyName", type: "text", placeholder: "Şirket Adı", required: true },
              { name: "phoneNumber", type: "tel", placeholder: "Telefon Numarası", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Mesajınız (isteğe bağlı)", rows: 5 }}
            buttonText="Demo Talep Et"
            mediaPosition="left"
            imageSrc="http://img.b2bpic.net/free-photo/side-view-man-office-wearing-virtual-reality-headset_23-2148766107.jpg"
            imageAlt="Man wearing VR headset in a futuristic office"
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            videoSrc="http://img.b2bpic.net/free-photo/glowing-smoke-made-particles-black_1048-11996.jpg"
            videoAriaLabel="Futuristic data stream animation loop"
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            logoText="Weem Flow"
            columns={commonFooterColumns}
            copyrightText="© 2035 Weem Flow. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
