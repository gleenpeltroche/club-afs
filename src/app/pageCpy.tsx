import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import PrincipalBanner from "@/components/principal-banner/PrincipalBanner";
import PrincipalCards from "@/components/principal-cards/PrincipalCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <PrincipalBanner />
      <PrincipalCards />
      <Footer />
    </main>
  );
}
