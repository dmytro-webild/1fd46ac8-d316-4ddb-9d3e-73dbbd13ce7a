"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import { Gauge, ShieldCheck, Lightbulb, FileText, Headphones, Zap, Share2, Bot, Video, Remote, Users, Globe, MessageCircle, Warehouse, Cloud, Microsoft, Mail, MailCheck, Phone } from "lucide-react";

export default function OzelliklerPage() {
  const navItems = [
    { name: "Home", id: "/#home" },
    { name: "AI Copilot", id: "/#ai-copilot" },
    { name: "Özellikler", id: "/ozellikler" },
    { name: "Analytics", id: "/#analytics" },
    { name: "Entegrasyonlar", id: "/entegrasyonlar" },
    { name: "Testimonials", id: "/#testimonials" },
    { name: "Contact", id: "/#contact" },
  ];

  const footerColumns = [
    {
      title: "Ürün",      items: [
        { label: "AI Copilot", href: "/#ai-copilot" },
        { label: "Özellikler", href: "/ozellikler" },
        { label: "Analitik", href: "/#analytics" },
        { label: "Entegrasyonlar", href: "/entegrasyonlar" },
      ],
    },
    {
      title: "Şirket",      items: [
        { label: "Hakkımızda", href: "/#about" },
        { label: "Kariyer", href: "/#careers" },
        { label: "Basın", href: "/#press" },
      ],
    },
    {
      title: "Destek",      items: [
        { label: "Yardım Merkezi", href: "/#help" },
        { label: "API Belgeleri", href: "/#api-docs" },
        { label: "İletişim", href: "/#contact" },
      ],
    },
    {
      title: "Yasal",      items: [
        { label: "Gizlilik Politikası", href: "/#privacy" },
        { label: "Hizmet Şartları", href: "/#terms" },
      ],
    },
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
              text: "Giriş Yap",              href: "#login"}}
          />
        </div>

        <div id="ozellikler" data-section="ozellikler">
          <FeatureBento
            title="Tüm Özelliklerimizi Keşfedin"
            description="Weem Flow'un sunduğu geniş özellik yelpazesi ile iş süreçlerinizi baştan sona dönüştürün."
            animationType="depth-3d"
            useInvertedBackground={true}
            features={[
              {
                title: "Hızlı Erişim",                description: "İhtiyacınız olan her şeye anında ulaşın.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "Dashboard", icon: Gauge },
                  { name: "Ayarlar", icon: ShieldCheck },
                  { name: "Bildirimler", icon: Lightbulb },
                  { name: "Raporlar", icon: FileText }
                ],
                centerIcon: Zap
              },
              {
                title: "Güvenli Veri Yönetimi",                description: "Verileriniz en üst düzey güvenlik ile korunur.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "Şifreleme", icon: ShieldCheck },
                  { name: "Yedekleme", icon: Cloud },
                  { name: "Erişim Kontrolü", icon: Users },
                  { name: "Denetim Kayıtları", icon: FileText }
                ],
                centerIcon: Zap
              },
              {
                title: "Akıllı Analizler",                description: "İş süreçleriniz hakkında derinlemesine içgörüler edinin.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "Performans", icon: TrendingUp },
                  { name: "Verimlilik", icon: Activity },
                  { name: "Maliyet", icon: DollarSign },
                  { name: "Tahminler", icon: Lightbulb }
                ],
                centerIcon: Zap
              },
              {
                title: "Otomatik Raporlama",                description: "Özelleştirilebilir raporları otomatik olarak oluşturun.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "Günlük", icon: FileText },
                  { name: "Haftalık", icon: Calendar },
                  { name: "Aylık", icon: CalendarCheck },
                  { name: "Özelleştirilebilir", icon: Settings}
                ],
                centerIcon: Zap
              },
              {
                title: "Gerçek Zamanlı Destek",                description: "Müşterilerinize ve ekibinize anında destek sunun.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "Canlı Sohbet", icon: MessageCircle },
                  { name: "Uzaktan Yardım", icon: Remote },
                  { name: "Ticket Yönetimi", icon: Headset },
                  { name: "Bilgi Bankası", icon: Book}
                ],
                centerIcon: Zap
              },
              {
                title: "Proaktif Çözümler",                description: "Sorunları oluşmadan önce tespit edin ve önleyin.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "Uyarılar", icon: BellRing },
                  { name: "Otomasyon", icon: Bot },
                  { name: "Önleyici Bakım", icon: Wrench },
                  { name: "Makine Öğrenimi", icon: BrainCircuit}
                ],
                centerIcon: Zap
              },
              {
                title: "Veri Entegrasyonu",                description: "Tüm sistemlerinizi tek bir çatı altında birleştirin.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "API Bağlantıları", icon: Share2 },
                  { name: "Veri Senkronizasyonu", icon: RefreshCcw },
                  { name: "Akış Yönetimi", icon: Workflow },
                  { name: "Veri Dönüşümü", icon: Shuffle}
                ],
                centerIcon: Zap
              },
              {
                title: "İş Akışı Otomasyonu",                description: "Tekrarlayan görevleri otomatikleştirerek verimliliği artırın.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "Görev Yönetimi", icon: ListChecks },
                  { name: "Onay Akışları", icon: CheckSquare },
                  { name: "Zamanlama", icon: Clock },
                  { name: "Hatırlatıcılar", icon: Bell}
                ],
                centerIcon: Zap
              },
              {
                title: "Video Konferans",                description: "Ekip üyeleri ve müşterilerle kesintisiz iletişim kurun.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "HD Kalite", icon: Video },
                  { name: "Ekran Paylaşımı", icon: Monitor },
                  { name: "Kayıt", icon: CircleDotDashed },
                  { name: "Beyaz Tahta", icon: Whiteboard}
                ],
                centerIcon: Zap
              },
              {
                title: "Uzaktan Yönetim",                description: "Cihazlarınızı ve sistemlerinizi uzaktan kontrol edin.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "PC İzleme", icon: Laptop },
                  { name: "Bağlantı Tüneli", icon: Network },
                  { name: "Dosya Transferi", icon: FolderSync },
                  { name: "Envanter Yönetimi", icon: Package2}
                ],
                centerIcon: Zap
              },
              {
                title: "Ekip İşbirliği",                description: "Projelerinizi ve görevlerinizi ekip içinde etkili bir şekilde yönetin.",                bentoComponent: "3d-card-grid",                items: [
                  { name: "Grup Sohbetleri", icon: MessageSquare },
                  { name: "Belge Paylaşımı", icon: FolderShared },
                  { name: "Görev Atama", icon: UserCheck },
                  { name: "Proje İzleme", icon: Projector}
                ],
                centerIcon: Zap
              },
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
            columns={footerColumns}
            copyrightText="© 2035 Weem Flow. Tüm hakları saklıdır."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
