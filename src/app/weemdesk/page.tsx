"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Wifi, UploadCloud, Share2, Funnel, Monitor, Network, Lock } from "lucide-react";

export default function WeemDeskPage() {
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
              {
                name: "Home",                id: "#home"},
              {
                name: "AI Copilot",                id: "#ai-copilot"},
              {
                name: "Features",                id: "#features"},
              {
                name: "Analytics",                id: "#analytics"},
              {
                name: "Integrations",                id: "#integrations"},
              {
                name: "Testimonials",                id: "#testimonials"},
              {
                name: "Contact",                id: "#contact"},
              {
                name: "Platform",                id: "/platform"},
              {
                name: "WeemDesk",                id: "/weemdesk"}
            ]}
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            brandName="Weem Flow"
            button={{
              text: "Giriş Yap",              href: "#login"}}
          />
        </div>

        <div id="weemdesk-features" data-section="weemdesk-features">
          <FeatureCardTwelve
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              {
                id: "feature-1",                label: "Uzaktan Bağlantı",                title: "Herhangi bir cihaza güvenli ve hızlı erişim sağlayın.",                items: ["Tek tıkla bağlantı", "Düşük gecikme süresi", "Çapraz platform uyumluluğu"]
              },
              {
                id: "feature-2",                label: "Dosya Aktarımı",                title: "Cihazlar arasında kolayca dosya ve klasör transferi yapın.",                items: ["Sürükle-bırak desteği", "Büyük dosya transferi", "Şifreli aktarım"]
              },
              {
                id: "feature-3",                label: "Ekran Paylaşımı",                title: "Ekranınızı gerçek zamanlı olarak paylaşın veya uzaktan kontrol edin.",                items: ["Çoklu monitör desteği", "Yüksek çözünürlüklü görüntü", "Etkileşimli kontrol"]
              },
              {
                id: "feature-4",                label: "Tünel Yönetimi",                title: "Özel ağ tünelleri ile güvenli ve izole bağlantılar kurun.",                items: ["Özel VPN tünelleri", "Port yönlendirme", "Ağ segmentasyonu"]
              },
              {
                id: "feature-5",                label: "Cihaz Yönetimi",                title: "Bağlı tüm cihazlarınızı merkezi bir panelden yönetin.",                items: ["Cihaz envanteri", "Uzak yeniden başlatma", "Sistem bilgisi görüntüleme"]
              },
              {
                id: "feature-6",                label: "Çoklu Bağlantı",                title: "Aynı anda birden fazla cihaza bağlanarak verimliliği artırın.",                items: ["Paralel oturumlar", "Sekmeli arayüz", "Grup yönetimi"]
              },
              {
                id: "feature-7",                label: "Güvenli Erişim",                title: "En yüksek güvenlik standartlarıyla erişim kontrolünü sağlayın.",                items: ["Uçtan uca şifreleme", "İki faktörlü kimlik doğrulama", "Erişim günlükleri"]
              },
            ]}
            title="WeemDesk: Uzaktan Destek Merkezine Hoş Geldiniz"
            description="WeemDesk'in gelişmiş uzaktan destek özellikleri ile ekiplerinizi güçlendirin ve sorunları anında çözün."
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
                title: "Ürün",                items: [
                  {
                    label: "AI Copilot",                    href: "#ai-copilot"},
                  {
                    label: "Özellikler",                    href: "#features"},
                  {
                    label: "Platform",                    href: "/platform"},
                  {
                    label: "WeemDesk",                    href: "/weemdesk"},
                  {
                    label: "Analitik",                    href: "#analytics"},
                  {
                    label: "Entegrasyonlar",                    href: "#integrations"},
                ],
              },
              {
                title: "Şirket",                items: [
                  {
                    label: "Hakkımızda",                    href: "#about"},
                  {
                    label: "Kariyer",                    href: "#careers"},
                  {
                    label: "Basın",                    href: "#press"},
                ],
              },
              {
                title: "Destek",                items: [
                  {
                    label: "Yardım Merkezi",                    href: "#help"},
                  {
                    label: "API Belgeleri",                    href: "#api-docs"},
                  {
                    label: "İletişim",                    href: "#contact"},
                ],
              },
              {
                title: "Yasal",                items: [
                  {
                    label: "Gizlilik Politikası",                    href: "#privacy"},
                  {
                    label: "Hizmet Şartları",                    href: "#terms"},
                ],
              },
            ]}
            copyrightText="© 2035 Weem Flow. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
