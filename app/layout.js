
import './globals.css'


export const metadata = {
  title: ' اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها و فست فودها',
  description: 'سفارش غذا با تخفیف از رستوران ها و فست فود های ایران. ارسال اکسپرس در سریع ترین زمان ممکن. خرید غذا با امکان مقایسه رستوران ها',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  )
}
