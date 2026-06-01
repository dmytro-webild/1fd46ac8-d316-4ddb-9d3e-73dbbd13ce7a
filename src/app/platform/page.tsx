"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function PlatformPage() {
  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Platform", href: "/platform" },
    { name: "Çözümler", href: "/cozumler" },
    { name: "WeemDesk", href: "/weemdesk" },
    { name: "AI Copilot", href: "/ai-copilot" },
    { name: "Entegrasyonlar", href: "/integrasyonlar" },
    { name: "Fiyatlandırma", href: "/fiyatlandirma" },
    { name: "Demo Talep Et", href: "/demo-talep-et" }
  ];

  const footerColumns = [
    {
      title: "Ürün",      items: [
        { label: "AI Copilot", href: "/ai-copilot" },
        { label: "Özellikler", href: "#features" },
        { label: "Analitik", href: "#analytics" },
        { label: "Entegrasyonlar", href: "/integrasyonlar" }
      ]
    },
    {
      title: "Şirket",      items: [
        { label: "Hakkımızda", href: "/hakkimizda" },
        { label: "Kariyer", href: "/kariyer" },
        { label: "Basın", href: "/basin" }
      ]
    },
    {
      title: "Destek",      items: [
        { label: "Yardım Merkezi", href: "/yardim-merkezi" },
        { label: "API Belgeleri", href: "/api-belgeleri" },
        { label: "İletişim", href: "#contact" }
      ]
    },
    {
      title: "Yasal",      items: [
        { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
        { label: "Hizmet Şartları", href: "/hizmet-sartlari" }
      ]
    }
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
            button={{ text: "Giriş Yap", href: "#login" }}
          />
        </div>

        <main className="min-h-screen py-20 px-4 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-foreground">Platform Sayfası İçeriği</h1>
        </main>

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
