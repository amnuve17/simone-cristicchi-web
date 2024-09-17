import Header from "@/components/Header"
import { Providers } from "./providers";
import "./globals.css";
import HeaderMobile from "@/components/HeaderMobile";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";

export const metadata = {
  title: "Simone Cristicchi",
  description: "Emozioni e musica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className="light" suppressHydrationWarning>
      <body>
        <Providers>
            <Header/>
              <HeaderMobile/>
                {children}
              <FooterMobile/>
            <Footer />
        </Providers>
      </body>
    </html>
  );
}
