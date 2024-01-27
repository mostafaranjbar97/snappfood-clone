
import Footer from '@/components/Footer/Footer'
import './globals.css'
import Header from '@/components/Header/Header'
import Services from '@/components/Header/Services'
import Navbar from '@/components/Header/Navbar'
import Providers from '@/redux/Provider'


export const metadata = {
  title: ' اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها و فست فودها',
  description: 'سفارش غذا با تخفیف از رستوران ها و فست فود های ایران. ارسال اکسپرس در سریع ترین زمان ممکن. خرید غذا با امکان مقایسه رستوران ها',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body> 
        <Providers>
          <Header/>
          <Navbar/>
          {children}
          <Footer/>
        </Providers>    
       
      </body>
    </html>
  )
}
