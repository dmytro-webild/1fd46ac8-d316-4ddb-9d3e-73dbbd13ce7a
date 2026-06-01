"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { Ticket, Workflow, MonitorPlay, Bot, Store, Users, Smartphone, BarChart, Plug } from "lucide-react";

export default function PlatformPage() {
  const navItems = [
    { name: "Home", id: "#home" },
    { name: "Platform", id: "/platform" },
    { name: "AI Copilot", id: "#ai-copilot" },
    { name: "Features", id: "#features" },
    { name: "Analytics", id: "#analytics" },
    { name: "Integrations", id: "#integrations" },
    { name: "Testimonials", id: "#testimonials" },
    { name: "Contact", id: "#contact" },
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
              text: "Giriş Yap",              href: "#login"
            }}
          />
        </div>

        <div id="platform-capabilities" data-section="platform-capabilities">
          <MetricCardOne
            animationType="depth-3d"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={true}
            metrics={[
              {
                id: "capability-1",                value: "Yönetim",                title: "Talep Yönetimi",                description: "Müşteri ve iç talepleri merkezi bir sistem üzerinden etkin bir şekilde takip edin ve yönetin.",                icon: Ticket,
              },
              {
                id: "capability-2",                value: "Akışlar",                title: "İş Akışı",                description: "Özelleştirilebilir iş akışları ile süreçlerinizi otomatikleştirin ve verimliliği artırın.",                icon: Workflow,
              },
              {
                id: "capability-3",                value: "Erişim",                title: "Uzaktan Destek",                description: "Güvenli ve hızlı uzaktan erişim ile teknik destek süreçlerinizi kolaylaştırın.",                icon: MonitorPlay,
              },
              {
                id: "capability-4",                value: "Akıllı",                title: "AI Copilot",                description: "Yapay zeka destekli asistan ile görevleri hızlandırın, analizler yapın ve akıllı çözümler üretin.",                icon: Bot,
              },
              {
                id: "capability-5",                value: "Ağı",                title: "Bayi Yönetimi",                description: "Bayi ağınızı merkezi bir platformdan yönetin, performanslarını takip edin ve işbirliklerini güçlendirin.",                icon: Store,
              },
              {
                id: "capability-6",                value: "Koord.",                title: "Ekip Yönetimi",                description: "Ekiplerinizin görevlerini, projelerini ve iletişimlerini tek bir yerden koordine edin.",                icon: Users,
              },
              {
                id: "capability-7",                value: "Her Yer",                title: "Mobil",                description: "Mobil uygulamalarımız ile tüm platform özelliklerine her an, her yerden erişim sağlayın.",                icon: Smartphone,
              },
              {
                id: "capability-8",                value: "Veriler",                title: "Raporlama",                description: "Detaylı ve özelleştirilebilir raporlar ile iş performansınızı derinlemesine analiz edin.",                icon: BarChart,
              },
              {
                id: "capability-9",                value: "Bağlantı",                title: "Entegrasyon",                description: "Mevcut sistemlerinizle sorunsuz entegrasyonlar kurarak veri akışını merkezileştirin.",                icon: Plug,
              }
            ]}
            title="Weem Flow Platform Özellikleri: Gücünüzü Keşfedin"
            description="İş operasyonlarınızı dönüştürecek 9 temel yetenek ile Weem Flow'un sunduğu gücü keşfedin."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
