"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ContactCTA from '@/components/sections/contact/ContactCTA';

export default function CozumlerPage() {
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
              { name: "Home", href: "/" },
              { name: "AI Copilot", href: "/#ai-copilot" },
              { name: "Features", href: "/#features" },
              { name: "Analytics", href: "/#analytics" },
              { name: "Integrations", href: "/#integrations" },
              { name: "Testimonials", href: "/#testimonials" },
              { name: "Contact", href: "/#contact" },
              { name: "Çözümler", href: "/cozumler" }
            ]}
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Weem Flow Logo"
            brandName="Weem Flow"
            button={{ text: "Giriş Yap", href: "#login" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitDualMedia
            background={{ variant: "sparkles-gradient" }}
            title="Endüstriye Özel Çözümlerimiz"
            description="Weem Flow, farklı sektörlerin benzersiz ihtiyaçlarına yönelik kapsamlı ve entegre çözümler sunar. İş akışlarınızı optimize edin, verimliliği artırın."
            tag="Sektör Lideri Çözümler"
            buttons={[
              { text: "Tüm Çözümleri Keşfet", href: "#solutions" },
            ]}
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/multiethnic-team-business-meeting_23-2148970719.jpg", imageAlt: "Diverse team collaborating in a futuristic office" },
              { imageSrc: "http://img.b2bpic.net/free-photo/group-diverse-people-having-business-meeting_53876-25916.jpg", imageAlt: "Digital interface overlaying a business meeting" }
            ]}
            mediaAnimation="opacity"
            rating={5}
            ratingText="4.9/5 Yıldız Memnuniyet"
          />
        </div>

        <div id="solutions" data-section="solutions">
          <FeatureCardSix
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            title="İşletmenize Özel Esnek Çözümler"
            description="Sektörünüz ne olursa olsun, Weem Flow ile operasyonel mükemmelliğe ulaşın."
            features={[
              {
                title: "Teknik Servis Çözümleri",                description: "Uzaktan destek, saha operasyonları ve cihaz yönetimi ile teknik servis süreçlerinizi basitleştirin.",                imageSrc: "http://img.b2bpic.net/free-photo/engineer-working-server-room-digital-data_23-2150247656.jpg",                buttons: [{ text: "Detaylar", href: "/cozumler/teknik-servis" }]
              },
              {
                title: "IT Departmanları İçin",                description: "Ağ yönetimi, siber güvenlik ve helpdesk otomasyonu ile IT operasyonlarınızı güçlendirin.",                imageSrc: "http://img.b2bpic.net/free-photo/young-man-wearing-virtual-reality-headset-playing-cyber-arena-game_23-2150961817.jpg",                buttons: [{ text: "Detaylar", href: "/cozumler/it-departments" }]
              },
              {
                title: "ERP Destek Yönetimi",                description: "ERP entegrasyonu, veri senkronizasyonu ve otomatik raporlama ile iş süreçlerinizi optimize edin.",                imageSrc: "http://img.b2bpic.net/free-photo/data-visualization-with-system-stats_23-2149301037.jpg",                buttons: [{ text: "Detaylar", href: "/cozumler/erp-support" }]
              },
              {
                title: "Dealer Ağları İçin",                description: "Bayi iletişimi, stok yönetimi ve sipariş takibi ile bayi ağınızı merkezi hale getirin.",                imageSrc: "http://img.b2bpic.net/free-photo/dealer-group_23-2148117769.jpg",                buttons: [{ text: "Detaylar", href: "/cozumler/dealer-networks" }]
              },
              {
                title: "Saha Operasyonları",                description: "Mobil saha ekiplerini yönetin, görev atamalarını otomatikleştirin ve gerçek zamanlı takip yapın.",                imageSrc: "http://img.b2bpic.net/free-photo/workers-uniform-looking-tablet_23-2148197771.jpg",                buttons: [{ text: "Detaylar", href: "/cozumler/field-operations" }]
              },
              {
                title: "Kurumsal Destek Merkezleri",                description: "Yüksek hacimli destek taleplerini yönetin, SLA'ları optimize edin ve müşteri memnuniyetini artırın.",                imageSrc: "http://img.b2bpic.net/free-photo/customer-service-concept-with-person-headset_23-2148780708.jpg",                buttons: [{ text: "Detaylar", href: "/cozumler/enterprise-support-centers" }]
              }
            ]}
          />
        </div>

        <div id="contact-cta" data-section="contact-cta">
          <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "sparkles-gradient" }}
            tag="Sizin İçin Buradayız"
            title="İşletmenize Özel Çözümler Keşfedin"
            description="İhtiyaçlarınıza en uygun çözümü bulmak için uzman ekibimizle iletişime geçin."
            buttons={[
              { text: "Bize Ulaşın", href: "/#contact" },
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
            columns={[
              {
                title: "Ürün",                items: [
                  { label: "AI Copilot", href: "/#ai-copilot" },
                  { label: "Özellikler", href: "/#features" },
                  { label: "Analitik", href: "/#analytics" },
                  { label: "Entegrasyonlar", href: "/#integrations" },
                  { label: "Çözümler", href: "/cozumler" }
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
                  { label: "İletişim", href: "/#contact" },
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
