import Image from 'next/image'
import React from 'react'

function OrderCommentModal() {
  return (
    <div>
      <div className='flex inset-0 justify-center items-center fixed z-[2000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]'>
      <div className='w-[480px] h-[644px] overflow-auto bg-white shadow-shadows-modal rounded-xl animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation2] max-h-[90vh]'>
        <div className='relative h-[40.25rem] bg-surface-main shadow-shadows-inset flex flex-col'>
          <div className='h-14 px-4 flex justify-between items-center '>
            <button className='flex justify-center items-center transition-all rtl rounded-[50%] box-border w-8 h-8 bg-transparent bg-clip-padding border-border-sm border-transparent hover:bg-carbon-alphaLight hover:border-carbon-alphaLight active:bg-carbon-alphaMedium active:border-carbon-alphaMedium'>
              <Image width={14} height={14} src={"/icons/modal/exit-modal.svg"} />
            </button>
            <button className='flex justify-center items-center box-border min-w-[6.6875rem] h-8 border-border-sm border-transparent rounded-md bg-transparent transition-all rtl hover:bg-carbon-alphaLight hover:text-carbon-dark active:bg-carbon-alphaMedium active:text-carbon-dark'>
              <Image width={20} height={20} src={"/icons/modal/factor.svg"} />
              <p className='mr-2 font-bold text-sm font-iransans text-carbon-main inline-block'>جزئیات سفارش</p>
            </button>
          </div>
          <div className='p-4 flex flex-col'>
            <div className='mb-6 flex justify-center items-center flex-col'>
              <p className='font-iransans font-bold text-lg inline-block text-carbon-main'>امتیاز به سفارش از فست فود الو پیتزا </p>
              <div className='mt-1 flex'>
                <Image width={18} height={18} src={"/icons/modal/calender.svg"} className='ml-1'/>
                <p className='ml-8 font-iransans text-sm inline-block text-carbon-main'>دوشنبه، ۳۱ مرداد</p>
                <Image width={18} height={18} src={"/icons/modal/time.svg"} className='ml-1'/>
                <p className='ml-8 font-iransans text-sm inline-block text-carbon-main'>۲۰:۰۳</p>
              </div>
            </div>
            <div className='relative box-border h-[9.75rem] my-4 p-2 border-surface-dark border rounded flex flex-col justify-center items-center'>
              <div className='absolute -top-7 p-4 bg-surface-main flex'>
                <img src="https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/5da4802be800c.jpg" alt="تصویر رستوران" width={24} height={24} />
              </div>
              <p className='my-2 font-iransans font-bold text-base inline-block text-carbon-main'>به سفارش‌تان از فست فود الو پیتزا چه امتیازی می‌دهید؟</p>
              <div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='h-5 mb-2.5 flex justify-center'>
                    <div className='h-5 mb-2.5 flex justify-center'>
                      <span className='px-1 py-0.5 bg-alert-alphaLight font-bold text-xs inline-block font-iransans text-alert-main'>نسبتاً بد</span>
                    </div>
                  </div>
                  <div className='flex flex-row-reverse '>
                  <svg className='mx-2 w-[27px] h-[27px] transition-all align-middle hover:cursor-pointer hover:transition-all' width="1.75rem" height="1.6875rem" viewBox="0 0 28 27" fill="#FFCE00" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0)"><path d="M12.8042 1.42263C13.2933 0.431635 14.7065 0.431633 15.1955 1.42263L18.7022 8.52784L26.5432 9.66722C27.6369 9.82613 28.0735 11.1701 27.2822 11.9415L21.6083 17.4721L22.9478 25.2815C23.1346 26.3707 21.9913 27.2013 21.0132 26.6871L13.9999 23L6.98662 26.6871C6.00845 27.2013 4.86521 26.3707 5.05202 25.2815L6.39144 17.4721L0.717585 11.9415C-0.073771 11.1701 0.362908 9.82613 1.45653 9.66722L9.29761 8.52784L12.8042 1.42263Z"></path></g><defs><filter id="filter0" x="0.313477" y="0.679382" width="27.3728" height="27.1638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                  <svg className='mx-2 w-[27px] h-[27px] transition-all align-middle hover:cursor-pointer hover:transition-all' width="1.75rem" height="1.6875rem" viewBox="0 0 28 27" fill="#FFCE00" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0)"><path d="M12.8042 1.42263C13.2933 0.431635 14.7065 0.431633 15.1955 1.42263L18.7022 8.52784L26.5432 9.66722C27.6369 9.82613 28.0735 11.1701 27.2822 11.9415L21.6083 17.4721L22.9478 25.2815C23.1346 26.3707 21.9913 27.2013 21.0132 26.6871L13.9999 23L6.98662 26.6871C6.00845 27.2013 4.86521 26.3707 5.05202 25.2815L6.39144 17.4721L0.717585 11.9415C-0.073771 11.1701 0.362908 9.82613 1.45653 9.66722L9.29761 8.52784L12.8042 1.42263Z"></path></g><defs><filter id="filter0" x="0.313477" y="0.679382" width="27.3728" height="27.1638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                  <svg className='mx-2 w-[27px] h-[27px] transition-all align-middle hover:cursor-pointer hover:transition-all' width="1.75rem" height="1.6875rem" viewBox="0 0 28 27" fill="#F2F4F5" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0)"><path d="M12.8042 1.42263C13.2933 0.431635 14.7065 0.431633 15.1955 1.42263L18.7022 8.52784L26.5432 9.66722C27.6369 9.82613 28.0735 11.1701 27.2822 11.9415L21.6083 17.4721L22.9478 25.2815C23.1346 26.3707 21.9913 27.2013 21.0132 26.6871L13.9999 23L6.98662 26.6871C6.00845 27.2013 4.86521 26.3707 5.05202 25.2815L6.39144 17.4721L0.717585 11.9415C-0.073771 11.1701 0.362908 9.82613 1.45653 9.66722L9.29761 8.52784L12.8042 1.42263Z"></path></g><defs><filter id="filter0" x="0.313477" y="0.679382" width="27.3728" height="27.1638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                  <svg className='mx-2 w-[27px] h-[27px] transition-all align-middle hover:cursor-pointer hover:transition-all' width="1.75rem" height="1.6875rem" viewBox="0 0 28 27" fill="#F2F4F5" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0)"><path d="M12.8042 1.42263C13.2933 0.431635 14.7065 0.431633 15.1955 1.42263L18.7022 8.52784L26.5432 9.66722C27.6369 9.82613 28.0735 11.1701 27.2822 11.9415L21.6083 17.4721L22.9478 25.2815C23.1346 26.3707 21.9913 27.2013 21.0132 26.6871L13.9999 23L6.98662 26.6871C6.00845 27.2013 4.86521 26.3707 5.05202 25.2815L6.39144 17.4721L0.717585 11.9415C-0.073771 11.1701 0.362908 9.82613 1.45653 9.66722L9.29761 8.52784L12.8042 1.42263Z"></path></g><defs><filter id="filter0" x="0.313477" y="0.679382" width="27.3728" height="27.1638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                  <svg className='mx-2 w-[27px] h-[27px] transition-all align-middle hover:cursor-pointer hover:transition-all' width="1.75rem" height="1.6875rem" viewBox="0 0 28 27" fill="#F2F4F5" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0)"><path d="M12.8042 1.42263C13.2933 0.431635 14.7065 0.431633 15.1955 1.42263L18.7022 8.52784L26.5432 9.66722C27.6369 9.82613 28.0735 11.1701 27.2822 11.9415L21.6083 17.4721L22.9478 25.2815C23.1346 26.3707 21.9913 27.2013 21.0132 26.6871L13.9999 23L6.98662 26.6871C6.00845 27.2013 4.86521 26.3707 5.05202 25.2815L6.39144 17.4721L0.717585 11.9415C-0.073771 11.1701 0.362908 9.82613 1.45653 9.66722L9.29761 8.52784L12.8042 1.42263Z"></path></g><defs><filter id="filter0" x="0.313477" y="0.679382" width="27.3728" height="27.1638" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                  </div>
                </div>
              </div>
            </div>
            <button disabled className='rtl absolute bottom-4 w-[calc(100%-2rem)] bg-accent-main border-accent-main text-white hover:bg-accent-light hover:border-accent-light active:bg-accent-dark active:border-accent-dark disabled:text-inactive-dark disabled:bg-inactive-main disabled:border-inactive-main flex justify-center items-center transition-all box-border min-w-[6.6875rem] h-12 border-border-sm rounded-md bg-clip-padding font-iransans font-bold text-lg '>ثبت</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default OrderCommentModal