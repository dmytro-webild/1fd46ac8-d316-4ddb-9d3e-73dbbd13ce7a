"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import { Activity, Rocket, Settings, Shield, PieChart, Zap, Cloud, Database, Lock, Bell, Monitor } from "lucide-react";

export default function OzelliklerPage() {
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

        <div id="ozellikler" data-section="ozellikler">
          <FeatureBorderGlow
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            title="Geleceğin Özellikleri Parmaklarınızın Ucunda"
            description="Weem Flow'un güçlü ve yenilikçi özellikleri ile iş akışınızı baştan tanımlayın."
            features={[
              { icon: Activity, title: "Gerçek Zamanlı Takip", description: "Tüm operasyonel süreçleri anlık olarak izleyin." },
              { icon: Rocket, title: "Hızlı Dağıtım", description: "Kolay kurulum ve hızlı entegrasyon ile anında kullanmaya başlayın." },
              { icon: Settings, title: "Özelleştirilebilir İş Akışları", description: "İşletmenize özel süreçleri kolayca tasarlayın." },
              { icon: Shield, title: "Gelişmiş Siber Güvenlik", description: "Verilerinizi en yüksek güvenlik standartlarıyla koruyun." },
              { icon: PieChart, title: "Detaylı Analitik Raporlama", description: "Performansınızı artıracak derinlemesine içgörüler edinin." },
              { icon: Zap, title: "Yapay Zeka Destekli Otomasyon", description: "Tekrarlayan görevleri otomatikleştirerek verimliliği artırın." },
              { icon: Cloud, title: "Bulut Tabanlı Esneklik", description: "Her yerden erişim ve sınırsız ölçeklenebilirlik." },
              { icon: Database, title: "Merkezi Veri Yönetimi", description: "Tüm verilerinizi tek bir güvenli havuzda toplayın." },
              { icon: Lock, title: "Erişim Kontrolü", description: "Kullanıcı bazında detaylı yetkilendirme ve izin yönetimi." },
              { icon: Bell, title: "Anlık Bildirimler", description: "Kritik olaylar ve görev güncellemeleri hakkında bilgi alın." },
              { icon: Monitor, title: "Uzaktan Erişim Desteği", description: "Cihazlarınıza uzaktan güvenli ve hızlı bir şekilde bağlanın." }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
