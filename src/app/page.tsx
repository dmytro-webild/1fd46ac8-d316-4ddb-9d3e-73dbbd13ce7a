"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Activity, Sparkles, TrendingUp } from "lucide-react";

export default function LandingPage() {
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
          name: "Home",
          id: "#home",
        },
        {
          name: "AI Copilot",
          id: "#ai-copilot",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Analytics",
          id: "#analytics",
        },
        {
          name: "Integrations",
          id: "#integrations",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
      logoAlt="Weem Flow Logo"
      brandName="Weem Flow"
      button={{
        text: "Giriş Yap",
        href: "#login",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "sparkles-gradient",
      }}
      title="İş Akışının Yeni Merkezi"
      description="Weem Flow, destek yönetimi, uzaktan erişim, yapay zeka destekli operasyonlar ve ekip koordinasyonunu tek platformda birleştirir."
      tag="Geleceğin Operasyon Platformu"
      buttons={[
        {
          text: "Canlı Demo İzle",
          href: "#demo",
        },
        {
          text: "Ücretsiz Deneyin",
          href: "#trial",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/interior-nuclear-power-plant_23-2150957660.jpg",
          imageAlt: "Futuristic command center console with holographic interfaces",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-representation-city-built-water_23-2151048127.jpg",
          imageAlt: "Vast 3D command center floating in deep space",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/drone-futuristic-hangar_23-2152000868.jpg",
          imageAlt: "Drone in futuristic hangar",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/online-video-game-competition-league-3d-illustration_1419-2791.jpg",
          imageAlt: "Online video game competition league 3d illustration",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/military-drone-control-outpost-spreading-misinformation-russian-government_482257-124740.jpg",
          imageAlt: "Military drone control outpost spreading misinformation for russian government",
        },
      ]}
      mediaAnimation="opacity"
      rating={5}
      ratingText="4.9/5 Yıldız Memnuniyet"
    />
  </div>

  <div id="ai-copilot" data-section="ai-copilot">
      <ProductCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "ai-copilot-1",
          brand: "Weem Flow",
          name: "Akıllı Analiz",
          price: "Anında",
          rating: 5,
          reviewCount: "500+ Yorum",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-accounting-sales-statistics-computer-display_482257-122982.jpg",
          imageAlt: "Futuristic smart analysis dashboard",
        },
        {
          id: "ai-copilot-2",
          brand: "Weem Flow",
          name: "Otomatik Raporlama",
          price: "Hızlı",
          rating: 5,
          reviewCount: "450+ Yorum",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-minimal-technology-landing-page-template_23-2149167839.jpg",
          imageAlt: "Futuristic automated reporting interface",
        },
        {
          id: "ai-copilot-3",
          brand: "Weem Flow",
          name: "Gerçek Zamanlı Destek",
          price: "7/24",
          rating: 5,
          reviewCount: "600+ Yorum",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-techno-low-poly-background-with-connecting-dots_1048-6125.jpg",
          imageAlt: "Futuristic real-time support system",
        },
        {
          id: "ai-copilot-4",
          brand: "Weem Flow",
          name: "Proaktif Çözümler",
          price: "Akıllı",
          rating: 5,
          reviewCount: "380+ Yorum",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",
          imageAlt: "Futuristic proactive solutions dashboard",
        },
        {
          id: "ai-copilot-5",
          brand: "Weem Flow",
          name: "Veri Entegrasyonu",
          price: "Kusursuz",
          rating: 5,
          reviewCount: "520+ Yorum",
          imageSrc: "http://img.b2bpic.net/free-photo/arab-professional-future-tech_482257-76229.jpg",
          imageAlt: "Futuristic data integration visualization",
        },
        {
          id: "ai-copilot-6",
          brand: "Weem Flow",
          name: "Güvenli İşlem Yönetimi",
          price: "Güvenli",
          rating: 5,
          reviewCount: "410+ Yorum",
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-analyst-command-center_23-2152000892.jpg",
          imageAlt: "Futuristic secure transaction management UI",
        },
      ]}
      title="Akıllı Operasyonlarınızı Güçlendirin: AI Copilot"
      description="Weem Flow'un gelişmiş yapay zeka destekli Copilot'u ile iş akışlarınızı otomatikleştirin, verileri anında analiz edin ve karar alma süreçlerinizi optimize edin."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "WeemDesk: Uzaktan Destek Sistemi",
          description: "Canlı PC izleme, bağlantı tünelleri ve kapsamlı cihaz yönetimi ile uzaktan destek süreçlerinizi optimize edin.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-looking-green-screen-monitor-smartphone-sitting-desk-business-office-late-night-freelancer-watching-desktop-monitor-display-with-green-mockup-chroma-key-working-overtime_482257-13377.jpg",
            imageAlt: "WeemDesk live PC monitoring interface",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/abstract-techno-low-poly-background-with-dark-connecting-dots-lines_1048-6127.jpg",
            imageAlt: "WeemDesk remote connection tunnel",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg",
          imageAlt: "futuristic remote PC monitoring UI",
        },
        {
          title: "Video Meeting Center",
          description: "Gelişmiş video konferans özellikleri ile gerçek zamanlı işbirliği, ekran paylaşımı ve kesintisiz iletişim sağlayın.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/customer-relationship-management-concept_23-2150038403.jpg",
            imageAlt: "Futuristic video meeting interface",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/blurred-night-lights_23-2148139287.jpg",
            imageAlt: "Immersive video meeting environment",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/interior-nuclear-power-plant_23-2150957660.jpg",
          imageAlt: "futuristic remote PC monitoring UI",
        },
        {
          title: "İş Akışı Otomasyonu",
          description: "Görsel süreç akışları ile operasyonlarınızı otomatikleştirin, görevleri hızlandırın ve insan hatasını minimize edin.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/worker-providing-live-chat-support-typing-keyboard-using-ai-chatbot_482257-126204.jpg",
            imageAlt: "Workflow automation visualization",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-business-concept_53876-33533.jpg",
            imageAlt: "Workflow automation dashboard",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-representation-city-built-water_23-2151048127.jpg",
          imageAlt: "futuristic remote PC monitoring UI",
        },
        {
          title: "Gelişmiş Siber Güvenlik",
          description: "Kalkan ağları ve şifreli iletişim ile operasyonlarınızı güvence altına alın, hassas verilerinizi koruyun.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/cropped-hands-placing-finger-identification-spot-touchscreen_1098-18941.jpg",
            imageAlt: "Cybersecurity shield network",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/navy-operations-specialist-following-hostile-warship-trajectory_482257-91043.jpg",
            imageAlt: "Security monitoring dashboard",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/conceptual-3d-illustration-sacroiliac-joint-inflammation_183364-123732.jpg",
          imageAlt: "futuristic remote PC monitoring UI",
        },
      ]}
      showStepNumbers={true}
      title="Weem Flow Ekosistemi: Her Operasyon İçin Güçlü Çözümler"
      description="Uzaktan erişimden ekip işbirliğine, tüm operasyonel ihtiyaçlarınızı tek bir birleşik platformda yönetin."
    />
  </div>

  <div id="analytics" data-section="analytics">
      <MetricCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "metric-1",
          value: "%99.9",
          title: "Canlı Veri Akışı",
          description: "Tüm operasyonel verilerinizi kesintisiz ve anlık olarak izleyin.",
          icon: Activity,
        },
        {
          id: "metric-2",
          value: "x2",
          title: "Tahminci Analiz",
          description: "Yapay zeka destekli tahminlerle geleceği öngörün ve proaktif kararlar alın.",
          icon: TrendingUp,
        },
        {
          id: "metric-3",
          value: "%30",
          title: "Performans Optimizasyonu",
          description: "İş süreçlerinizde verimliliği artırın ve maliyetleri düşürün.",
          icon: Sparkles,
        },
      ]}
      title="Geleceğin Analitik Merkezi"
      description="Gerçek zamanlı verilerle operasyonlarınızı anında izleyin, derinlemesine içgörüler edinin ve stratejik kararlar alın."
    />
  </div>

  <div id="integrations" data-section="integrations">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "WhatsApp",
        "ERP Sistemleri",
        "VOIP Çözümleri",
        "CRM Platformları",
        "Google Workspace",
        "Microsoft 365",
        "Slack",
      ]}
      title="Tüm Uygulamalarınızla Kusursuz Entegrasyon"
      description="Mevcut sistemlerinizle sorunsuz bir şekilde entegre olun ve operasyonlarınızı merkezileştirin."
      speed={40}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      testimonials={[
        {
          id: "testimonial-1",
          name: "Elara Vance",
          role: "CEO, Nebula Corp.",
          testimonial: "Weem Flow, operasyonlarımızı tamamen değiştirdi. Gerçek zamanlı analizler ve yapay zeka entegrasyonu sayesinde kararlarımızı daha hızlı ve doğru alıyoruz. Geleceğin iş yönetim platformu!",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-futuristic-casino_23-2150974677.jpg",
        },
        {
          id: "testimonial-2",
          name: "Jaxor Kael",
          role: "CTO, OmniTech Solutions",
          testimonial: "Entegrasyon yetenekleri inanılmaz. Eski sistemlerimizle kusursuz çalışıyor ve geliştirme ekibimizin verimliliğini %40 artırdı. Güvenlik de üst düzeyde.",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-ai-technology-background_23-2151719614.jpg",
        },
        {
          id: "testimonial-3",
          name: "Anya Sharma",
          role: "Pazarlama Direktörü, Quantum Brands",
          testimonial: "Müşteri destek süreçlerimiz Weem Flow ile çok daha etkili hale geldi. AI Copilot, talepleri anında yönlendiriyor ve ekip koordinasyonu mükemmel. Tam bir oyun değiştirici!",
          imageSrc: "http://img.b2bpic.net/free-photo/business-person-futuristic-business-environment_23-2150970224.jpg",
        },
        {
          id: "testimonial-4",
          name: "Zane Orion",
          role: "Ürün Müdürü, Synapse Innovations",
          testimonial: "Platformun modüler yapısı ve esnekliği, kendi özel iş akışlarımızı kolayca tasarlamamıza olanak tanıdı. Kullanıcı deneyimi harika ve ekip içi iletişim hiç bu kadar sorunsuz olmamıştı.",
          imageSrc: "http://img.b2bpic.net/free-vector/cyberpunk-retro-futuristic-poster-vector-illustration_60438-2410.jpg",
        },
        {
          id: "testimonial-5",
          name: "Lyra Croft",
          role: "Operasyon Lideri, Stellar Logistics",
          testimonial: "Weem Flow ile uzaktan erişim ve cihaz yönetimi çok daha kolay. Güvenlik endişelerimiz azaldı ve tüm operasyonlarımızı tek bir panelden yönetebiliyoruz. Kesinlikle tavsiye ederim.",
          imageSrc: "http://img.b2bpic.net/free-photo/robotic-arm-interacting-with-logistics-data-interface_23-2152005499.jpg",
        },
        {
          id: "testimonial-6",
          name: "Caleb Frost",
          role: "Satış Direktörü, Apex Dynamics",
          testimonial: "Satış ekibimiz için harika bir araç. Entegrasyonlar sayesinde tüm müşteri verilerine anında erişebiliyoruz ve otomasyonlar sayesinde daha fazla anlaşmayı daha kısa sürede kapatıyoruz.",
          imageSrc: "http://img.b2bpic.net/free-photo/management-team-sharing-insight-statistics-night-corporation-meeting-providing-initiatives_482257-132898.jpg",
        },
      ]}
      title="Müşterilerimiz Weem Flow Hakkında Ne Diyor?"
      description="İş akışlarını dönüştüren ve operasyonel verimliliği artıran gerçek kullanıcı deneyimleri."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Geleceğe Hazır Olun"
      title="Operasyonlarınızı Geleceğe Taşıyın"
      description="Weem Flow ile iş süreçlerinizi yeniden tanımlayın, verimliliği artırın ve rekabette öne geçin."
      buttons={[
        {
          text: "Hemen Başlayın",
          href: "#start",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/3d-modern-technology-background-with-flowing-particles-design_1048-16836.jpg"
      imageAlt="Abstract futuristic data streams"
      videoSrc="http://img.b2bpic.net/free-photo/glowing-smoke-made-particles-black_1048-11996.jpg"
      videoAriaLabel="Futuristic data stream animation loop"
      logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
      logoAlt="Weem Flow Logo"
      logoText="Weem Flow"
      columns={[
        {
          title: "Ürün",
          items: [
            {
              label: "AI Copilot",
              href: "#ai-copilot",
            },
            {
              label: "Özellikler",
              href: "#features",
            },
            {
              label: "Analitik",
              href: "#analytics",
            },
            {
              label: "Entegrasyonlar",
              href: "#integrations",
            },
          ],
        },
        {
          title: "Şirket",
          items: [
            {
              label: "Hakkımızda",
              href: "#about",
            },
            {
              label: "Kariyer",
              href: "#careers",
            },
            {
              label: "Basın",
              href: "#press",
            },
          ],
        },
        {
          title: "Destek",
          items: [
            {
              label: "Yardım Merkezi",
              href: "#help",
            },
            {
              label: "API Belgeleri",
              href: "#api-docs",
            },
            {
              label: "İletişim",
              href: "#contact",
            },
          ],
        },
        {
          title: "Yasal",
          items: [
            {
              label: "Gizlilik Politikası",
              href: "#privacy",
            },
            {
              label: "Hizmet Şartları",
              href: "#terms",
            },
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
