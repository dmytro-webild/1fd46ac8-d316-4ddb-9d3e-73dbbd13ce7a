"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { CheckCircle, Shield } from "lucide-react";

export default function SolutionsPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="radialGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Anasayfa", id: "/" },
              { name: "Hakkımızda", id: "/hakkimizda" },
              { name: "Çözümler", id: "/cozumler" },
              { name: "İletişim", id: "/iletisim" },
              { name: "Blog", id: "/blog" },
              { name: "Kariyer", id: "/kariyer" },
              { name: "Gizlilik", id: "/gizlilik" },
              { name: "Şartlar", id: "/sartlar" }
            ]}
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Çözüm Şirketi Logo"
            brandName="Çözüm Şirketi"
            button={{ text: "Hemen Başlayın", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitDoubleCarousel
            title="Geleceğin Teknolojileriyle Tanışın"
            description="Sektör lideri çözümlerimizle işinizi bir üst seviyeye taşıyın. İnovasyon ve verimlilik odaklı yaklaşımımızla fark yaratın."
            background={{ variant: "animated-grid" }}
            leftCarouselItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/abstract-cityscape-with-glowing-lines-futuristic-urban-landscape_23-2150974673.jpg", imageAlt: "Futuristic cityscape with glowing lines" },
              { imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-analyst-command-center_23-2152000892.jpg", imageAlt: "Cyber security analyst command center" }
            ]}
            rightCarouselItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/digital-transformation-concept-made-with-gears_23-2149178553.jpg", imageAlt: "Digital transformation concept" },
              { imageSrc: "http://img.b2bpic.net/free-photo/abstract-futuristic-background-with-lines-dots_23-2149177699.jpg", imageAlt: "Abstract futuristic background" }
            ]}
            tag="Yenilikçi Çözümler"
            buttons={[
              { text: "Çözümlerimizi Keşfet", href: "#solutions" }
            ]}
          />
        </div>

        <div id="solutions" data-section="solutions">
          <FeatureCardTen
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={true}
            title="Çözümlerimiz"
            description="Yenilikçi çözümlerimizle dijital dönüşümünüzü hızlandırın."
            features={[
              {
                title: "Açık Kaynak Gelişimi",                description: "Herkesin katılabileceği ve katkıda bulunabileceği şeffaf bir geliştirme süreci.",                media: { imageSrc: "http://img.b2bpic.net/free-photo/view-planet-earth-elements-this-image-furnished-by-nasa_1170-3882.jpg" },
                items: [{ icon: CheckCircle, text: "Topluluk Destekli" }],
                reverse: false
              },
              {
                title: "Blockchain Entegrasyonu",                description: "Güvenli ve şeffaf işlemler için merkeziyetsiz teknoloji ile entegrasyon.",                media: { imageSrc: "http://img.b2bpic.net/free-photo/blockchain-concept-with-connected-cubes_1048-11883.jpg" },
                items: [{ icon: CheckCircle, text: "Güvenli İşlemler" }],
                reverse: true
              },
              {
                title: "Yapay Zeka Destekli Analiz",                description: "Veri odaklı kararlar için gelişmiş yapay zeka algoritmaları ve analitikler.",                media: { imageSrc: "http://img.b2bpic.net/free-photo/abstract-techno-low-poly-background-with-connecting-dots_1048-6125.jpg" },
                items: [{ icon: CheckCircle, text: "Akıllı Analiz" }],
                reverse: false
              }
            ]}
          />
        </div>

        <div id="about-testimonial" data-section="about-testimonial">
          <TestimonialAboutCard
            tag="Müşteri Deneyimi"
            title="Müşterilerimiz Neden Bizi Tercih Ediyor?"
            description="İş ortaklarımızın başarı hikayeleri, çözüm odaklı yaklaşımımızın en güzel kanıtı."
            subdescription="Şirketimiz, müşterilerinin ihtiyaçlarına özel çözümler sunarak dijital dönüşüm yolculuklarında onlara rehberlik eder."
            icon={Shield}
            imageSrc="http://img.b2bpic.net/free-photo/businessman-with-laptop-cyber-security-concept_23-2149176465.jpg"
            imageAlt="Businessman with laptop, cyber security concept"
            mediaAnimation="opacity"
            useInvertedBackground={false}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            tag="Bize Ulaşın"
            title="Çözümlerimiz Hakkında Daha Fazla Bilgi Edinin"
            description="İhtiyaçlarınıza özel çözümlerimizle ilgili uzmanlarımızdan destek almak için bizimle iletişime geçin."
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={true}
            imageSrc="http://img.b2bpic.net/free-photo/abstract-connection-dots-lines-blue-background-ai-generated_23-2150821008.jpg"
            imageAlt="Abstract connection dots and lines on blue background"
            mediaAnimation="opacity"
            inputPlaceholder="E-posta adresinizi girin"
            buttonText="Gönder"
            termsText="Kaydol düğmesine tıklayarak, Şartlar ve Koşullarımızı kabul ettiğinizi onaylamış olursunuz."
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoSrc="http://img.b2bpic.net/free-photo/blue-neon-light-dark-backdrop_23-2147881452.jpg"
            logoAlt="Çözüm Şirketi Logo"
            logoText="Çözüm Şirketi"
            columns={[
              {
                title: "Ürünler",                items: [
                  { label: "Yapay Zeka", href: "#ai" },
                  { label: "Blockchain", href: "#blockchain" },
                  { label: "Veri Analizi", href: "#data-analysis" }
                ]
              },
              {
                title: "Şirket",                items: [
                  { label: "Hakkımızda", href: "/hakkimizda" },
                  { label: "Kariyer", href: "/kariyer" },
                  { label: "Basın", href: "#press" }
                ]
              },
              {
                title: "Destek",                items: [
                  { label: "Yardım Merkezi", href: "#help" },
                  { label: "İletişim", href: "/iletisim" }
                ]
              }
            ]}
            copyrightText="© 2024 Çözüm Şirketi. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
