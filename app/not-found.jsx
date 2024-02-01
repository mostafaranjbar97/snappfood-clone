import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='flex items-center justify-center flex-col top-[5%] bg-[#E3E3E3]'>
        <div className='mx-auto text-center mt-[5%]'>
            <Image width={107} height={114} src={"https://snappfood.ir/bundles/bodofoodfrontend/images/errors/new-error-logo.png?v1850"} alt='snappfood-logo'/>
        </div>
        <div className='mx-auto text-center mt-[5%]'>
            <Image width={830} height={344} src={"https://snappfood.ir/bundles/bodofoodfrontend/images/errors/404_1.jpg?v1850"} alt='not-found'/>
        </div>
        <div>
            <p className='text-3xl font-bold mt-[15px] mb-2.5 text-center font-iransans text-carbon-main'>
                      متاسفانه، صفحه‌ موردنظر شما یافت نشد
          </p>
          <Link href={"/"} className=''>
            <div className='border border-[#505050] bg-[#e3e3e3] py-2.5 px-10 rounded-md m-10 text-center mx-auto min-w-[10%] max-w-[50%] hover:bg-[#dcdcdc]'>
            <p className='font-iransans text-carbon-main'>
                  بازگشت به صفحه اصلی
            </p>
            </div>
            
          </Link>
        </div>
    </div>
  )
}

export default NotFound