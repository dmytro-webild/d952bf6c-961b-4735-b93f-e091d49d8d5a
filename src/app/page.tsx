"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Coffee, Leaf, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLarge"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Holââ Coffee"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Boutique Lezzetler, Sıcak Sohbetler."
      description="Ev yapımı tatlılarımız ve özenle hazırlanan kahvelerimizle Holââ Coffee House'da sizi evinizde hissettiriyoruz."
      buttons={[
        {
          text: "Menümüzü Keşfet",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-business-owner-making-coffee_23-2149434545.jpg"
      imageAlt="Holââ Coffee House Ambiyansı"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-asian-girl-barista-giving-out-order-cafe-inviting-guest-pick-up-takeaway_1258-199328.jpg",
          alt: "Happy customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/waitress-serving-cup-coffee-customers_1170-652.jpg",
          alt: "Happy customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/enthusiastic-young-asian-woman-barista-apron-looking-amazed-clap-hands-smiling-standing-co_1258-148443.jpg",
          alt: "Happy customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cafe-small-business-smiling-asian-barista-apron-standing-counter-coffee-shop-workin_1258-138357.jpg",
          alt: "Happy customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/outdoor-portrait-smiling-attractive-young-woman-with-short-curly-dark-hair-red-lips_291650-524.jpg",
          alt: "Happy customer 5",
        },
      ]}
      avatarText="1000+ Mutlu Misafir"
      marqueeItems={[
        {
          type: "text",
          text: "Taze Çekirdek",
        },
        {
          type: "text-icon",
          text: "Organik Tatlar",
          icon: Leaf,
        },
        {
          type: "text",
          text: "Ev Yapımı",
        },
        {
          type: "text-icon",
          text: "Hızlı Servis",
          icon: Coffee,
        },
        {
          type: "text",
          text: "Özel Harman",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Semtin En Şirin Kafe Köşesi"
      buttons={[
        {
          text: "Hakkımızda",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Ev Yapımı Tatlılar",
          descriptions: [
            "San Sebastian, Alman Pastası ve daha fazlası.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/slices-homemade-new-york-cheesecake-top-view_114579-9838.jpg",
        },
        {
          id: "2",
          title: "Sıcak Atmosfer",
          descriptions: [
            "Ders çalışmak veya dinlenmek için ideal.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/side-close-up-view-cake-wooden-board-with-cake-with-black-grapes-powdered-sugar_140725-71454.jpg",
        },
        {
          id: "3",
          title: "Güler Yüzlü Hizmet",
          descriptions: [
            "Müşteri odaklı barista ekibimiz.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-traditional-dessert-composition_23-2149143333.jpg",
        },
      ]}
      title="Neden Holââ?"
      description="Her detayı özenle düşünülmüş, samimi bir deneyim."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "San Sebastian Cheesecake",
          price: "Günübirlik",
          variant: "Ev Yapımı",
          imageSrc: "http://img.b2bpic.net/free-photo/easter-coffee-decorations-still-life_23-2150244122.jpg",
        },
        {
          id: "p2",
          name: "Özel Harman Kahve",
          price: "Barista Seçimi",
          variant: "Taze Çekirdek",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-coffee-unique-shaped-glass-served-with-milk-syrup_140725-6905.jpg",
        },
        {
          id: "p3",
          name: "Alman Pastası",
          price: "Geleneksel",
          variant: "Ev Yapımı",
          imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-plant-table_140725-8127.jpg",
        },
        {
          id: "p4",
          name: "Ev Yapımı Limonata",
          price: "Serinletici",
          variant: "Doğal",
          imageSrc: "http://img.b2bpic.net/free-photo/hot-chocolate_74190-7656.jpg",
        },
        {
          id: "p5",
          name: "Ağlayan Pasta",
          price: "Favori",
          variant: "Özel",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-classic-fresh-espresso-served-dark-surface_1220-5376.jpg",
        },
        {
          id: "p6",
          name: "Özel Kurabiyeler",
          price: "Taze",
          variant: "İkramlık",
          imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-table-grey-background_1220-7312.jpg",
        },
      ]}
      title="Sevilen Lezzetlerimiz"
      description="Damak çatlatan lezzetlerimizi yerinde deneyimleyin."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Coffee,
          title: "Mutlu Müşteri",
          value: "1000+",
        },
        {
          id: "m2",
          icon: Award,
          title: "El Yapımı Lezzet",
          value: "15+",
        },
        {
          id: "m3",
          icon: Star,
          title: "Tam Puan",
          value: "98%",
        },
      ]}
      title="Holââ Coffee Hakkında"
      description="Kaliteden ödün vermeden her gün taptaze ürünler sunuyoruz."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Hilal ÜNAL",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-asian-girl-barista-giving-out-order-cafe-inviting-guest-pick-up-takeaway-o_1258-138307.jpg",
        },
        {
          id: "t2",
          name: "Eren Çelik",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-pale-brunette-girl-with-charming-smile-gently-holding-cup-coffee_197531-6751.jpg",
        },
        {
          id: "t3",
          name: "Yeşim Uzun",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-friends-cafe-enjoying-their-time_23-2148735439.jpg",
        },
        {
          id: "t4",
          name: "Cemre Atmaca",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-young-woman-with-curly-hair-giggles-happily-holds-disposable-cup-coffee-enjoys-aromatic-beverage-dressed-casual-orange-jumper-isolated-white-background-drinking-concept_273609-61071.jpg",
        },
        {
          id: "t5",
          name: "Fırat Batur",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-hipster-man-reading-book-cafe_329181-2047.jpg",
        },
      ]}
      cardTitle="Misafirlerimizin Kaleminden"
      cardTag="Yorumlar"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Tuvalet var mı?",
          content: "Evet, alt katımızda misafirlerimize özel lavabomuz mevcuttur.",
        },
        {
          id: "q2",
          title: "Ders çalışmaya uygun mu?",
          content: "Çok sayıda prizimiz ve yüksek hızlı WiFi bağlantımızla ders çalışmak için idealdir.",
        },
        {
          id: "q3",
          title: "Rezervasyon yapılıyor mu?",
          content: "Genelde butik bir kafe olduğumuz için gelmeden aramanızı öneririz.",
        },
      ]}
      sideTitle="Sıkça Sorulanlar"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Sizi ağırlamaktan mutluluk duyarız. Bir kahveye bekliyoruz!"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Hakkımızda",
              href: "#",
            },
            {
              label: "Menü",
              href: "#products",
            },
          ],
        },
        {
          items: [
            {
              label: "İletişim",
              href: "#contact",
            },
            {
              label: "Sosyal Medya",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Holââ Coffee House"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
