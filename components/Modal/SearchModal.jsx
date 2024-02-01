'use client'
import { addToHistory, hideSearchModal, removeFromHistory, setResults, setSearchTerms } from '@/redux/features/SearchModal'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

function SearchModal({ restaurants,restaurantCategory,showSearchModal }) {

    
    const {isOpen,history}=showSearchModal
    if (!isOpen) return null;
    const dispatch=useDispatch()
   

    const handleClose = () => {
        dispatch(hideSearchModal())
    };

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(()=>inputRef.current.focus(),50)
    }, [isOpen]);

    const foods=restaurants.map((res)=>res.foods)
    const food=foods.flat()

    const [searchTerm,setSearchTerm]=useState("")
    const changeHandler=(e)=>{
        setSearchTerm(e.target.value)
        dispatch(setSearchTerms(e.target.value))
    }
    const searchProdouct=food.filter((food)=>food.name.includes(searchTerm))
    const first2Prodouct=searchProdouct.toSpliced(2)
    const searchRestaurant=restaurants.filter((res)=>res.name.includes(searchTerm))
    const first5Restaurant=searchRestaurant.toSpliced(5)
    const searchCategory=restaurantCategory.filter((cat)=>cat.name.includes(searchTerm))

    const params=useParams()
    const restaurantId= params.restaurant
    let searchFood
    if(restaurantId){
        const filteredRestaurant=restaurants[restaurantId-1]
        const restaurantFood=filteredRestaurant.foods
        searchFood=restaurantFood.filter((food)=>food.name.includes(searchTerm))
    }
    
    console.log("searchFood",searchFood)
    const router=useRouter()
    const addtohistoryHandler=(e)=>{
        if(e.key=="Enter"){
            dispatch(addToHistory(searchTerm))
            dispatch(hideSearchModal())
            if(restaurantId){
                dispatch(setResults(searchFood))
                router.push(`/resturants/${restaurantId}?search=${searchTerm}`)
            }
        }
    }

    const removeFromHistoryHandler=(e)=>{
            dispatch(removeFromHistory(e.target.id))
    }

    const clearInputHandler=()=>{
        setSearchTerm("");
        inputRef.current.focus();
        dispatch(setSearchTerms(""))
    }
    
  return (
    <div>
        <div onClick={handleClose} className='flex justify-center items-center fixed inset-0 z-[1000] animate-[0.3s_ease_0s_1_normal_forwards_running_modal-animation]'>
            <div onClick={(e)=>e.stopPropagation()} className='fixed top-0 flex justify-center w-[31vw] min-w-[18.75rem] m-auto py-3 rounded-t-none rounded-xl max-h-[90vh] overflow-hidden animate-[0.3s_cubic-bezier(0.4,0,0,1.5)_0s_1_normal_forwards_running_modal-animation3]'>
                <div className='w-[95%] flex flex-col'>
                    <div className='relative w-full'>
                        {searchTerm ? <Image onClick={clearInputHandler} width={18} height={18} src={"/icons/modal/exit-search.svg"} className='absolute top-0 right-4 bottom-0 m-auto cursor-pointer'/> 
                        : <Image width={18} height={18} src={"/icons/header/search-black.svg"} className='absolute top-0 right-4 bottom-0 m-auto '/>}
                        <input onKeyUp={addtohistoryHandler} ref={inputRef} value={searchTerm} onChange={changeHandler} type="text" className='w-full box-border h-12 text-carbon-main rounded-xlg font-iransans text-base py-3 pr-10 pl-3 border-border-xs border-carbon-alphaHigh focus:border focus:border-carbon-main'/>
                    </div>

                    <div className='mt-1 overflow-auto bg-white rounded-md flex flex-col'>

                        {
                            history.map((item,index)=>{
                                return(
                                    <div className='py-3.5 pr-5 pl-[1.125rem] cursor-pointer flex justify-between items-center'>
                                        <div className='flex'>
                                        <Image width={18} height={17} src={"/icons/modal/past-time-black.png"} className='ml-[1.125rem] '/>
                                        <p className='font-iransans text-sm inline-block text-carbon-main'>{item}</p>   
                                        </div>
                                        <button onClick={removeFromHistoryHandler} id={index} className='flex justify-center items-center transition-all border-transparent box-border w-8 h-8 rounded-[50%] bg-transparent bg-clip-padding border-border-sm hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium'>
                                            <Image id={index} width={12} height={14} src={"/icons/modal/exit.svg"} />
                                        </button>
                                    </div>
                                )
                            })
                        }
                        
                        {( restaurantId && searchTerm)&&<div className='p-[1.125rem] mt-0 flex justify-between items-center cursor-pointer'>
                            <span className='font-iransans text-sm inline-block text-carbon-light'>جستجو‌‌ی
                                <p className='font-iransans font-bold text-sm inline-block text-carbon-main mr-1'>{searchTerm}</p>
                            </span>
                            <Image width={12} height={12} src={"/icons/header/left.svg"} /> 
                        </div>}

                        
                        {!searchTerm && <div className='p-[1.125rem] mt-0 flex justify-between items-center'>
                            <span className='font-iransans text-sm inline-block text-carbon-light'>عبارت مورد نظر خود را وارد کنید</span>
                        </div>}
                        {
                            !restaurantId && 
                            <>
                                {searchTerm && <div className='border-b border-b-surface-dark flex flex-col'>
                                    {
                                        searchCategory.map((cat)=>{
                                            return(
                                                <Link className='' href={`/resturants/?cat=${cat.id}`} onClick={handleClose}>
                                                    <div className='box-border p-5 flex items-center'>
                                                        <Image width={24} height={22} src={"/icons/modal/search-category.svg"} className='ml-4'/>
                                                        <div>
                                                            <span className='font-iransans text-sm text-carbon-light inline-block'>دسته‌بندی
                                                                <p className='font-iransans font-bold text-sm text-carbon-main inline-block mr-1'>{cat.name}</p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link> 
                                            )
                                        })
                                    }
                                    
                                </div>}

                                {(searchTerm && first5Restaurant.length>0)&&<div className='border-b border-b-surface-dark flex flex-col'>
                                    <div className='mt-[1.125rem] flex justify-between items-center'>
                                        <span className='mr-3 font-iransans text-sm text-carbon-main inline-block'>فروشگاه‌ها</span>
                                        <Link className='' href={"/"}>
                                            <div className='ml-3 flex items-center'>
                                                <span className='ml-1 font-iransans text-sm text-accent2-main inline-block'>
                                                مشاهده همه
                                                ({searchRestaurant.length})
                                                </span>
                                                <Image width={12} height={12} src={"/icons/modal/left.svg"} />
                                            </div>
                                        </Link>
                                    </div>
                                    {
                                        first5Restaurant.map((res)=>{
                                            return(
                                                <Link href={`/resturants/${res.id}`} onClick={handleClose}>
                                                    <div className='p-5 box-border flex items-center'>
                                                        <Image width={24} height={18} src={"/icons/modal/shop.svg"} className='ml-4'/>
                                                        <div>
                                                            <span className='font-iransans text-sm text-carbon-main inline-block'>{res.name}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }

                                </div>}

                                {(searchTerm && first2Prodouct.length>0)&&<div className='border-b border-b-surface-dark flex flex-col pb-5'>
                                    <div className='mt-[1.125rem] flex justify-between items-center'>
                                        <span className='mr-3 font-iransans text-sm text-carbon-main inline-block'>محصولات</span>
                                        <Link className='' href={"/"}>
                                            <div className='ml-3 flex items-center'>
                                                <span className='ml-1 font-iransans text-sm text-accent2-main inline-block'>
                                                مشاهده همه
                                                ({searchProdouct.length})
                                                </span>
                                                <Image width={12} height={12} src={"/icons/modal/left.svg"} />
                                            </div>
                                        </Link>
                                    </div>

                                    {
                                        first2Prodouct.map((prodouct)=>{
                                            const restaurant=restaurants.filter((res)=>res.id==prodouct.restaurantId)[0]
                                            const foodWithDiscount=((prodouct.price)*(100-(prodouct.discount)))/100
                                            return(
                                                <Link href={`/resturants/${restaurant.id}`} onClick={handleClose}>
                                                    <div className='box-border p-5 flex items-start flex-col border-b border-b-surface-dark'>
                                                        <div className='flex'>
                                                            <Image width={56} height={56} src={prodouct.images[0]} alt="" className='ml-4 rounded'/>
                                                            <div className='flex flex-col'>
                                                                <span className='font-iransans font-bold text-xs text-carbon-main inline-block'>{prodouct.name}</span>
                                                                <span className='font-iransans text-xs text-gray5-color inline-block mt-3'>{restaurant.name}</span>
                                                            </div>
                                                        </div>
                                                        <div className='w-full mt-3 flex justify-between '>
                                                            <div className='flex items-center'>
                                                                <p className='font-iransans text-xs text-carbon-light inline-block mx-1'>{restaurant.delivery.type}</p>
                                                                <div className=' flex flex-col'>
                                                                    <div className='flex items-center'>
                                                                        <div className='flex items-start flex-col'>
                                                                        <span className=' text-carbon-main font-iransans text-xs inline-block'>  {restaurant.delivery.price}  
                                                                            <span className=' text-carbon-light font-iransans text-xs inline-block'>تومان</span>
                                                                        </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-col'>
                                                                <div className='flex'>
                                                                    {prodouct.discount &&<span className='pt-1.5 pb-0.5 leading-[0.625rem] text-sm flex justify-center items-center grow  px-1 rounded m-1 bg-accent-alphaLight font-iransans font-bold text-accent-main '>
                                                                        {prodouct.discount}
                                                                        <span className='mr-1'>
                                                                            <Image width={8} height={10} src={"/icons/modal/percent.svg"}/>
                                                                        </span>
                                                                    </span>}
                                                                    {prodouct.discount ? <div className='flex items-center'>
                                                                        <s className='mx-1 font-iransans inline-block text-xs text-inactive-dark'>{prodouct.price}</s>
                                                                        <span className='font-iransans font-bold inline-block text-base text-carbon-main'> {foodWithDiscount} 
                                                                            <span className='font-iransans font-normal inline-block text-xs text-carbon-light'>تومان</span>
                                                                        </span>
                                                                    </div>
                                                                    :
                                                                    <div className='flex items-center'>
                                                                        <span className='font-iransans font-bold inline-block text-base text-carbon-main'> {prodouct.price} 
                                                                            <span className='font-iransans font-normal inline-block text-xs text-carbon-light'>تومان</span>
                                                                        </span>
                                                                    </div>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }


                                </div>}
                            </>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    
  )
}

export default SearchModal