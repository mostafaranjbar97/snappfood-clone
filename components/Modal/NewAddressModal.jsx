import Image from 'next/image'
import React from 'react'

function NewAddressModal() {
  return (
    <div>
        <div className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]'>
            <div className='w-[90vw] max-w-[640px] bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation2]'>
                <div className='relative box-border w-full h-14 pl-14 flex justify-between items-center'>
                    <button className='h-14 w-14 flex justify-center items-center'>
                        <Image width={14} height={14} src={"/icons/modal/exit.svg"}/>
                    </button>
                    <p className='font-iransans font-bold text-sm inline-block text-carbon-main'>آدرس جدید</p>
                    <div></div>
                </div>
                {/* leaflet js */}
                <section className='relative'>
                    <div className='h-40'></div>
                </section>
                <form action="">
                    <section className='max-h-[42vh] p-4 overflow-y-auto'>
                        <section className='mb-8'>
                            <p className='text-carbon-light font-iransans font-bold text-xs inline-block'>انتخاب آدرس</p>
                            <div name="autoAddress" className='mt-1.5 h-12 relative rounded-md bg-white box-border border-border-sm border-carbon-alphaMedium transition-[border] rtl focus-within:border-carbon-main'>
                                <input name="autoAddress" type="text" className='p-3 rounded-md text-carbon-main rtl h-full w-full' value={"تهران، دانشگاه تهران، کارگر شمالی، امین"}/>
                            </div>
                        </section>

                        <section className='mb-8'>
                            <p className='text-carbon-light font-iransans font-bold text-xs inline-block'>جزئیات آدرس</p>
                            <div className='mt-1.5 relative rounded-md bg-white box-border border-border-sm border-carbon-alphaMedium  transition-[border] rtl focus-within:border-alert-main'>
                                <input type="text" className='p-3 rounded-md text-carbon-main rtl h-full w-full' name='address' placeholder='پلاک، طبقه، واحد'/>
                            </div>
                            <div className='flex items-center mt-1.5'>
                                <Image width={12} height={18} src={"/icons/modal/warning.png"} />
                                <p className='text-alert-main font-iransans text-2xs inline-block mr-0.5' >جزییات آدرس را تکمیل نکردید</p>
                            </div>
                        </section>

                        <section className='mb-8'>
                            <p className='text-carbon-light font-iransans font-bold text-xs inline-block'>عنوان آدرس</p>
                            <div className='mt-1.5 relative rounded-md bg-white box-border border-border-sm border-carbon-alphaMedium transition-[border] rtl focus-within:border-carbon-main'>
                                <input type="text" className='p-3 rounded-md text-carbon-main rtl h-full w-full' />
                            </div>
                        </section>

                        <section className='mb-8'>
                            <p className='text-carbon-light font-iransans font-bold text-xs inline-block'>شماره تماس (اختیاری)</p>
                            <div className='mt-1.5 relative rounded-md bg-white box-border border-border-sm border-carbon-alphaMedium transition-[border] rtl focus-within:border-carbon-main'>
                                <input type="text" className='p-3 rounded-md text-carbon-main rtl h-full w-full' value={"09399236269"}/>
                            </div>
                            <p className='text-carbon-light font-iransans text-xs inline-block mr-0.5' >شماره موبایل یا شماره تلفن ثابت با پیش‌شماره</p>
                        </section>

                    </section>
                    <div className='p-3 '>
                        <button className='w-full font-iransans font-bold text-base h-12 flex justify-center items-center transition-all box-border text-white bg-accent-main border-accent-main border-border-sm bg-clip-padding rounded-md hover:bg-accent-light active:bg-accent-dark'>تایید و ساخت آدرس</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewAddressModal