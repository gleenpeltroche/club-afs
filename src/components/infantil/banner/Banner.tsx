import menoresCategoryImage from "./assets/menores-category.png";
import BannerCategory from "@/components/banner-category/bannerCategory";

const BannerMenores = () => {
  return (
    <BannerCategory image={menoresCategoryImage} upperTitle="categoría" mainTitle="menores"/>
  )
}

export default BannerMenores