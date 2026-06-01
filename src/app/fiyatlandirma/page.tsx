"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import { CheckCircle } from "lucide-react";

export default function FiyatlandirmaPage() {
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

        <div id="fiyatlandirma" data-section="fiyatlandirma">
          <PricingCardTwo
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="İşletmenize Uygun Esnek Fiyatlandırma Planları"
            description="İhtiyaçlarınıza özel olarak tasarlanmış, şeffaf ve uygun maliyetli çözümler."
            plans={[
              {
                id: "basic-plan",                badge: "Başlangıç",                price: "Ücretsiz",                subtitle: "Temel Özellikler",                buttons: [{ text: "Şimdi Başlayın", href: "#signup" }],
                features: [
                  "5 Kullanıcı Desteği",                  "Temel Destek Sistemi",                  "Uzaktan Erişim (Sınırlı)",                  "Standart Raporlama"
                ]
              },
              {
                id: "pro-plan",                badge: "Popüler",                badgeIcon: CheckCircle,
                price: "₺49 / ay",                subtitle: "Gelişmiş Özellikler",                buttons: [{ text: "Denemeye Başlayın", href: "#pro-signup" }],
                features: [
                  "Sınırsız Kullanıcı",                  "AI Copilot Erişimi",                  "Video Meeting Center",                  "Tüm Entegrasyonlar",                  "Özelleştirilebilir İş Akışları",                  "Öncelikli Destek"
                ]
              },
              {
                id: "enterprise-plan",                badge: "Kurumsal",                price: "Özel Teklif",                subtitle: "Tam Kapsamlı Çözüm",                buttons: [{ text: "Teklif Alın", href: "#contact-sales" }],
                features: [
                  "Kurumsal Düzeyde Ölçeklendirme",                  "7/24 Özel Destek Yöneticisi",                  "Gelişmiş Güvenlik ve Uyumluluk",                  "API Erişimi ve Özel Entegrasyonlar",                  "Eğitim ve Danışmanlık Hizmetleri",                  "Yerinde Kurulum Desteği"
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
