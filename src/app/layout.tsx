import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Weem Flow - İş Akışının Yeni Merkezi',
  description: 'Weem Flow ile geleceğin operasyon yönetim platformuna adım atın. Destek, uzaktan erişim, yapay zeka ve ekip koordinasyonunu tek bir platformda birleştirin.',
  keywords: ["Weem Flow, iş akışı, operasyon yönetimi, destek sistemi, uzaktan erişim, yapay zeka, AI, otomasyon, ekip koordinasyonu, futuristic platform, SaaS, 2035 software"],
  openGraph: {
    "title": "Weem Flow - İş Akışının Yeni Merkezi",
    "description": "Weem Flow ile geleceğin operasyon yönetim platformuna adım atın. Destek, uzaktan erişim, yapay zeka ve ekip koordinasyonunu tek bir platformda birleştirin.",
    "url": "https://www.weemflow.com",
    "siteName": "Weem Flow",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/interior-nuclear-power-plant_23-2150957660.jpg",
        "alt": "Futuristic command center interface"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Weem Flow - İş Akışının Yeni Merkezi",
    "description": "Weem Flow ile geleceğin operasyon yönetim platformuna adım atın. Destek, uzaktan erişim, yapay zeka ve ekip koordinasyonunu tek bir platformda birleştirin.",
    "images": [
      "http://img.b2bpic.net/free-photo/interior-nuclear-power-plant_23-2150957660.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
