import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Holââ Coffee House | Beylikdüzü\'nün En Şirin Kafesi',
  description: 'Beylikdüzü\'nde ev yapımı tatlılar, aromatik kahveler ve huzurlu bir ortam. Holââ Coffee House sizi bekliyor.',
  openGraph: {
    "title": "Holââ Coffee House",
    "description": "Beylikdüzü'nde sıcak bir kahve molası.",
    "siteName": "Holââ Coffee House",
    "type": "website"
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
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
