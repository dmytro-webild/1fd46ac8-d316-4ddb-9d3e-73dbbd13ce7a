"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';

export default function WeemdeskPage() {
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
              { name: "Home", id: "/" },
              { name: "AI Copilot", id: "/ai-copilot" },
              { name: "WEEMDESK", id: "/weemdesk" },
              { name: "Features", id: "#features" },
              { name: "Analytics", id: "#analytics" },
              { name: "Integrations", id: "#integrations" },
              { name: "Testimonials", id: "#testimonials" },
              { name: "Contact", id: "#contact" },
            ]}
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            brandName="Weem Flow"
            button={{ text: "Giriş Yap", href: "#login" }}
          />
        </div>

        <div id="weemdesk" data-section="weemdesk">
          <FeatureCardNine
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              {
                title: "Canlı PC İzleme",                description: "Gerçek zamanlı ekran paylaşımı ve kontrolü ile masaüstü bilgisayarları uzaktan yönetin.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-office-wearing-virtual-reality-headset_23-2150968940.jpg", imageAlt: "WeemDesk live PC monitoring interface" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/abstract-binary-code-background-digital-technology-concept_53876-118815.jpg", imageAlt: "Binary code background" }
              },
              {
                title: "Güvenli Bağlantı Tünelleri",                description: "Uçtan uca şifreli, yüksek güvenlikli bağlantılarla veri aktarımını sağlayın.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/futuristic-view-illuminated-server-room_23-2150968971.jpg", imageAlt: "Illuminated server room" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/futuristic-man-working-with-holographic-interface_23-2149591461.jpg", imageAlt: "Man working with holographic interface" }
              },
              {
                title: "Gelişmiş Cihaz Yönetimi",                description: "Tüm bağlı cihazları tek bir panelden izleyin, yapılandırın ve sorun giderin.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-male-hacker-dark-background_23-2150974636.jpg", imageAlt: "Cyberpunk hacker" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/digital-data-screen-with-abstract-futuristic-lines_23-2150974659.jpg", imageAlt: "Digital data screen" }
              },
              {
                title: "Entegre Dosya Aktarımı",                description: "Hızlı ve güvenli dosya aktarım özellikleriyle operasyonel akışınızı hızlandırın.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-digital-screen-projector-technology_23-2150968955.jpg", imageAlt: "Businessman using digital screen" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/futuristic-hacker-typing-code_23-2150974683.jpg", imageAlt: "Futuristic hacker typing code" }
              },
              {
                title: "Otomatik Güncellemeler ve Yama Yönetimi",                description: "Cihazlarınızın her zaman güncel ve güvende kalmasını sağlayın.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/network-security_23-2148946726.jpg", imageAlt: "Network security" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/artificial-intelligence-humanoid-robot_23-2148834466.jpg", imageAlt: "Humanoid robot" }
              },
              {
                title: "Kullanıcı Erişim Kontrolü",                description: "İzin tabanlı erişim yönetimi ile hangi kullanıcının hangi cihaza erişebileceğini belirleyin.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/businessman-futuristic-office-using-ai-interface_23-2150974642.jpg", imageAlt: "Businessman using AI interface" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/3d-futuristic-data-tunnel_23-2151048037.jpg", imageAlt: "Futuristic data tunnel" }
              },
              {
                title: "Sistem Sağlığı İzleme",                description: "Cihazların performansını, disk kullanımını ve ağ bağlantılarını anlık olarak takip edin.",                phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/digital-network-technology-background_23-2150974656.jpg", imageAlt: "Digital network background" },
                phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/futuristic-abstract-blue-lines_23-2151048028.jpg", imageAlt: "Abstract blue lines" }
              },
            ]}
            showStepNumbers={true}
            title="WEEMDESK: Geleceğin Uzaktan Kontrol Merkezi"
            description="Gelişmiş uzaktan erişim, gerçek zamanlı izleme ve merkezi yönetimle operasyonlarınızı yeni bir boyuta taşıyın."
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
                  { label: "AI Copilot", href: "/ai-copilot" },
                  { label: "WEEMDESK", href: "/weemdesk" },
                  { label: "Özellikler", href: "#features" },
                  { label: "Analitik", href: "#analytics" },
                  { label: "Entegrasyonlar", href: "#integrations" },
                ],
              },
              {
                title: "Şirket",                items: [
                  { label: "Hakkımızda", href: "#about" },
                  { label: "Kariyer", href: "#careers" },
                  { label: "Basın", href: "#press" },
                ],
              },
              {
                title: "Destek",                items: [
                  { label: "Yardım Merkezi", href: "#help" },
                  { label: "API Belgeleri", href: "#api-docs" },
                  { label: "İletişim", href: "#contact" },
                ],
              },
              {
                title: "Yasal",                items: [
                  { label: "Gizlilik Politikası", href: "#privacy" },
                  { label: "Hizmet Şartları", href: "#terms" },
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