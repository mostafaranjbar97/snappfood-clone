
import Category from "@/components/Home/Category/Category";
import Cities from "@/components/Home/Cities/Cities";
import DownloadSection from "@/components/Home/DownloadSection/DownloadSection";
import FoodParty from "@/components/Home/FoodParty/FoodParty";
import ResturantSlider from "@/components/Home/ResturantSlider/ResturantSlider";
import VendorRegister from "@/components/Home/VendorRegister/VendorRegister";
import { fetchData } from "@/libs/fetchData";


export default async function Home() {

    const {restaurants}= await fetchData()
    const cat=["پیشنهاد کاربران","تازه‌ها در اسنپ‌فود","برترین‌ها","جایزه خرید","مزه‌های خاص","دارای تخفیف","یک تجربه جدید","دارای کوپن","فقط در اسنپ‌فود"]

  return (
    <>
    
      <main className="p-4 pt-0 grow box-border w-full max-w-[85.375rem] mx-auto tablet:p-6 laptop:p-10">
        <Category/>
        <FoodParty/>
        {
          cat.map((cat,index)=>{
            return(
              <ResturantSlider key={index} title={cat} restaurants={restaurants}/>
            )
          })
        } 
        <DownloadSection/>
        <VendorRegister/>
      </main>
      <Cities/>
      
    </>
  )
}
