import libreCategoryImage from "./assets/libre-category.png";
import BannerCategory from "@/components/banner-category/bannerCategory";

const BannerLibre = () => {
  return (
    <BannerCategory image={libreCategoryImage} upperTitle="categoría" mainTitle="libre"/>
  )
}

export default BannerLibre