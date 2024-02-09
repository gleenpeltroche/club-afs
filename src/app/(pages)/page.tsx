import PrincipalBanner from "@/components/principal-banner/PrincipalBanner";
import PrincipalCards from "@/components/principal-cards/PrincipalCards";
import JerseyBanner from "@/components/jersey-banner/JerseyBanner";
import PromoCards from "@/components/cards/promo-cards/PromoCards";

export default function Home() {
  return (
    <>
      <PrincipalBanner />
      <PrincipalCards />
      <JerseyBanner />
      <PromoCards />
    </>
  );
}
