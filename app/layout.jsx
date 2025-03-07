import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toast, { Toaster } from 'react-hot-toast';
import AuthWrapper from "@/components/AuthWrapper";
import Providers from "./providers";
const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: "Campus Cart App",
  description: "Buy/sell anything on campus!",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <body
          className={` ${inter.className} relative min-h-screen`}>
            <Providers>
              <Header />
              <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {children}
              </main>
              <Toaster />
              <Footer />
            </Providers>
        </body>
      </html>
    </AuthWrapper>

  );
}
