import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Category from "@/components/Home/Category/Category";
import Cities from "@/components/Home/Cities/Cities";
import DownloadSection from "@/components/Home/DownloadSection/DownloadSection";
import FoodParty from "@/components/Home/FoodParty/FoodParty";
import ResturantSlider from "@/components/Home/ResturantSlider/ResturantSlider";
import VendorRegister from "@/components/Home/VendorRegister/VendorRegister";
import AddressModal from "@/components/Modal/AddressModal";
import NewAddressModal from "@/components/Modal/NewAddressModal";
import OrderCommentModal from "@/components/Modal/OrderCommentModal";
import OrderInvoiceModal from "@/components/Modal/OrderInvoiceModal";
import OrderModal from "@/components/Modal/OrderModal";


export default function Home() {
  return (
    <>
      <Header/>
      <main className="p-4 pt-0 grow box-border w-full max-w-[85.375rem] mx-auto tablet:p-6 laptop:p-10">
        <Category/>
        <FoodParty/>
        <ResturantSlider/>
        <ResturantSlider/>
        <ResturantSlider/>
        <ResturantSlider/>
        <DownloadSection/>
        <VendorRegister/>
        {/* <OrderModal/> */}
        {/* <OrderCommentModal/> */}
        {/* <OrderInvoiceModal/> */}
        {/* <AddressModal/> */}
        {/* <NewAddressModal/> */}
      </main>
      <Cities/>
      <Footer/>
    </>
  )
}
