import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }