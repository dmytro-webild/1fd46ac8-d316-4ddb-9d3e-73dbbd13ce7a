"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import React, { useState } from "react";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import Input from '@/components/form/Input';
import ButtonTextShift from '@/components/button/ButtonTextShift/ButtonTextShift';
import ContactCTA from '@/components/sections/contact/ContactCTA';

export default function DemoPage() {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [userCount, setUserCount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fullName, company, phone, email, userCount, message
    });
    alert('Demo talebiniz alındı!');
    // Implement actual form submission logic here
  };

  const navItems = [
    { name: "Home", id: "#home" },
    { name: "AI Copilot", id: "#ai-copilot" },
    { name: "Features", id: "#features" },
    { name: "Analytics", id: "#analytics" },
    { name: "Integrations", id: "#integrations" },
    { name: "Testimonials", id: "#testimonials" },
    { name: "Contact", id: "#contact" },
    { name: "Blog", id: "/blog" },
    { name: "Demo", id: "/demo" }
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

        <div id="demo-request" data-section="demo-request" className="py-16 md:py-24 lg:py-32">
          <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "sparkles-gradient" }}
            tag="Canlı Demo Talep Edin"
            title="Weem Flow'u Deneyimleyin"
            description="Operasyonlarınızı nasıl dönüştürebileceğimizi görmek için bir demo planlayın."
            buttons={[]}
            className="max-w-4xl mx-auto"
            contentClassName="bg-card p-8 md:p-12 rounded-lg shadow-lg space-y-8"
            textBoxClassName="text-center"
            titleClassName="text-3xl md:text-4xl font-extrabold mb-4"
            descriptionClassName="text-lg md:text-xl text-foreground/80 mb-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                value={fullName}
                onChange={setFullName}
                placeholder="Ad Soyad"
                required
                ariaLabel="Ad Soyad"
              />
              <Input
                value={company}
                onChange={setCompany}
                placeholder="Firma Adı"
                required
                ariaLabel="Firma Adı"
              />
              <Input
                value={phone}
                onChange={setPhone}
                type="tel"
                placeholder="Telefon Numarası"
                required
                ariaLabel="Telefon Numarası"
              />
              <Input
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="E-Posta Adresi"
                required
                ariaLabel="E-Posta Adresi"
              />
              <Input
                value={userCount}
                onChange={setUserCount}
                type="number"
                placeholder="Kullanıcı Sayısı"
                ariaLabel="Kullanıcı Sayısı"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mesajınız (opsiyonel)"
                className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-cta"
                rows={4}
                aria-label="Mesajınız"
              />
              <ButtonTextShift
                text="Demo Talep Et"
                type="submit"
                className="w-full py-3"
              />
            </form>
          </ContactCTA>
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            videoSrc="http://img.b2bpic.net/free-photo/glowing-smoke-made-particles-black_1048-11996.jpg"
            videoAriaLabel="Futuristic data stream animation loop"
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            logoText="Weem Flow"
            columns={[
              { title: "Ürün", items: [{ label: "AI Copilot", href: "#ai-copilot" }, { label: "Özellikler", href: "#features" }, { label: "Analitik", href: "#analytics" }, { label: "Entegrasyonlar", href: "#integrations" }] },
              { title: "Şirket", items: [{ label: "Hakkımızda", href: "#about" }, { label: "Kariyer", href: "#careers" }, { label: "Basın", href: "#press" }] },
              { title: "Destek", items: [{ label: "Yardım Merkezi", href: "#help" }, { label: "API Belgeleri", href: "#api-docs" }, { label: "İletişim", href: "#contact" }] },
              { title: "Yasal", items: [{ label: "Gizlilik Politikası", href: "#privacy" }, { label: "Hizmet Şartları", href: "#terms" }] },
            ]}
            copyrightText="© 2035 Weem Flow. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
