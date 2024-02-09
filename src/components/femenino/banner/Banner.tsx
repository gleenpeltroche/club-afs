import femeninoCategoryImage from "./assets/femenino-category.png";
import BannerCategory from "@/components/banner-category/bannerCategory";

const BannerFemenino = () => {
  return (
    <BannerCategory image={femeninoCategoryImage} upperTitle="categoría" mainTitle="femenina"/>
  )
}

export default BannerFemenino