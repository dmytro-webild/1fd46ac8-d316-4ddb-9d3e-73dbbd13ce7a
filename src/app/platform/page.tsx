"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";

import FooterMedia from "@/components/sections/footer/FooterMedia";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";

export default function PlatformPage() {
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
              { name: "Ana Sayfa", id: "/" },
              { name: "Platform", id: "/platform" },
              { name: "Çözümler", id: "/solutions" },
              { name: "WeemDesk", id: "/weemdesk" },
              { name: "AI Copilot", id: "/ai-copilot" },
              { name: "Entegrasyonlar", id: "/integrations" },              { name: "Fiyatlandırma", id: "/pricing" },
              { name: "Demo Talep Et", id: "/demo" }
            ]}
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            brandName="Weem Flow"
            button={{
              text: "Giriş Yap",              href: "#login"
            }}
          />
        </div>

        <div id="platform" data-section="platform">
          <HeroSplitDualMedia
            background={{
              variant: "sparkles-gradient"
            }}
            title="Platformumuz ile İş Akışınızı Yeniden Tanımlayın"
            description="Weem Flow'un güçlü çözümleriyle operasyonlarınızı optimize edin ve geleceğe hazırlanın."
            tag="Geleceğin Teknolojisi"
            buttons={[
              {
                text: "Daha Fazla Bilgi",                href: "/platform#info"
              }
            ]}
            mediaItems={[
              {
                imageSrc: "http://img.b2bpic.net/free-photo/interior-nuclear-power-plant_23-2150957660.jpg",                imageAlt: "Placeholder image 1"
              },
              {
                imageSrc: "http://img.b2bpic.net/free-photo/futuristic-representation-city-built-water_23-2151048127.jpg",                imageAlt: "Placeholder image 2"
              }
            ]}
            mediaAnimation="opacity"
            rating={5}
            ratingText="5 Yıldız Müşteri Memnuniyeti"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            videoSrc="http://img.b2bpic.net/free-photo/glowing-smoke-made-particles-black_1048-11996.jpg"
            videoAriaLabel="Futuristic data stream animation loop"
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            logoText="Weem Flow"
            columns={[
              {
                title: "Ana Sayfa",                items: [
                  { label: "Ana Sayfa", href: "/" },
                  { label: "Platform", href: "/platform" },
                  { label: "Çözümler", href: "/solutions" },
                  { label: "WeemDesk", href: "/weemdesk" },
                  { label: "AI Copilot", href: "/ai-copilot" },
                  { label: "Entegrasyonlar", href: "/integrations" },
                  { label: "Fiyatlandırma", href: "/pricing" },
                  { label: "Demo Talep Et", href: "/demo" }
                ]
              },
              {
                title: "Şirket",                items: [
                  { label: "Hakkımızda", href: "#about" },
                  { label: "Kariyer", href: "#careers" },
                  { label: "Basın", href: "#press" }
                ]
              },
              {
                title: "Destek",                items: [
                  { label: "Yardım Merkezi", href: "#help" },
                  { label: "API Belgeleri", href: "#api-docs" },
                  { label: "İletişim", href: "/contact" }
                ]
              },
              {
                title: "Yasal",                items: [
                  { label: "Gizlilik Politikası", href: "#privacy" },
                  { label: "Hizmet Şartları", href: "#terms" }
                ]
              }
            ]}
            copyrightText="© 2035 Weem Flow. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
