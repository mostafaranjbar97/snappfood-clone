import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Category from "@/components/Home/Category/Category";
import Cities from "@/components/Home/Cities/Cities";
import VendorRegister from "@/components/Home/VendorRegister/VendorRegister";


export default function Home() {
  return (
    <>
      <Header/>
      <main className="p-4 pt-0 grow box-border w-full max-w-[85.375rem] mx-auto tablet:p-6 laptop:p-10">
        <Category/>
        <VendorRegister/>
      </main>
      <Cities/>
      <Footer/>
    </>
  )
}
