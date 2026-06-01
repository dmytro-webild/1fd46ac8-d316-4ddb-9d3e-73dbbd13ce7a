"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';

export default function BlogPage() {
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

        <div id="blog-posts" data-section="blog-posts">
          <BlogCardThree
            animationType="slide-up"
            textboxLayout="default"
            title="En Son Blog Yazılarımız"
            description="Operasyon yönetimi, yapay zeka ve teknolojideki güncel gelişmeleri takip edin."
            blogs={[
              {
                id: "post-1",                category: "Teknoloji",                title: "Ticket Sistemi Nedir?",                excerpt: "Destek operasyonlarınızı kolaylaştıran, çağrıları düzenleyen ve müşteri memnuniyetini artıran bilet sistemlerinin temel prensiplerini keşfedin.",                imageSrc: "http://img.b2bpic.net/free-photo/abstract-network-background-with-dots-lines_1048-6126.jpg",                imageAlt: "Ticket system concept with abstract network background",                authorName: "Weem Flow Ekibi",                authorAvatar: "https://avatar.vercel.sh/1.png",                date: "23 Mayıs 2024"},
              {
                id: "post-2",                category: "Rehber",                title: "Uzaktan Destek Rehberi",                excerpt: "Etkili uzaktan destek sağlamanın adımları, kullanılan araçlar ve en iyi uygulamalarla müşterilerinize kesintisiz hizmet sunun.",                imageSrc: "http://img.b2bpic.net/free-photo/abstract-screen-computer-laptop-digital_23-2148493188.jpg",                imageAlt: "Remote support guide with abstract screen on laptop",                authorName: "Weem Flow Ekibi",                authorAvatar: "https://avatar.vercel.sh/2.png",                date: "15 Mayıs 2024"},
              {
                id: "post-3",                category: "Yönetim",                title: "Teknik Servis Yönetimi",                excerpt: "Teknik servis süreçlerinizi optimize etmek, ekip verimliliğini artırmak ve maliyetleri düşürmek için kapsamlı bir kılavuz.",                imageSrc: "http://img.b2bpic.net/free-photo/maintenance-robot-working-assembly-line_23-2150997193.jpg",                imageAlt: "Technical service management with a robot arm",                authorName: "Weem Flow Ekibi",                authorAvatar: "https://avatar.vercel.sh/3.png",                date: "7 Mayıs 2024"},
              {
                id: "post-4",                category: "Yapay Zeka",                title: "Yapay Zeka ile Destek Operasyonları",                excerpt: "Yapay zekanın destek operasyonlarına nasıl entegre edildiğini, otomasyonun faydalarını ve müşteri deneyimini nasıl dönüştürdüğünü öğrenin.",                imageSrc: "http://img.b2bpic.net/free-photo/view-city-from-inside-futuristic-car_23-2151046897.jpg",                imageAlt: "AI in support operations with futuristic car view",                authorName: "Weem Flow Ekibi",                authorAvatar: "https://avatar.vercel.sh/4.png",                date: "28 Nisan 2024"},
              {
                id: "post-5",                category: "Otomasyon",                title: "Workflow Otomasyonu",                excerpt: "İş akışı otomasyonu ile süreçlerinizi hızlandırın, insan hatasını azaltın ve operasyonel verimliliğinizi en üst düzeye çıkarın.",                imageSrc: "http://img.b2bpic.net/free-photo/business-person-futuristic-business-environment_23-2150970224.jpg",                imageAlt: "Workflow automation in a futuristic business environment",                authorName: "Weem Flow Ekibi",                authorAvatar: "https://avatar.vercel.sh/5.png",                date: "20 Nisan 2024"},
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
