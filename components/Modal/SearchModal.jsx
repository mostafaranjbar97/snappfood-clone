'use client'
import { addToHistory, hideSearchModal, removeFromHistory, setResults, setSearchTerms } from '@/redux/features/SearchModal'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchHistory from './SearchHistory'
import SearchInput from './SearchInput'
import SearchByCat from './SearchByCat'
import SearchByRes from './SearchByRes'
import SearchByFood from './SearchByFood'

function SearchModal({ restaurants,restaurantCategory}) {

    const router=useRouter()
    const dispatch=useDispatch()
    const params=useParams()
    const inputRef = useRef();
    const [searchTerm,setSearchTerm]=useState("")
    const showSearchModal=useSelector((store)=>store.searchModal)
    const {isOpen,history}=showSearchModal
    
    useEffect(() => {
        if (isOpen) {
            inputRef.current.focus();
        }  
    }, [isOpen]);
    if (!isOpen) return null;

   

    const handleClose = () => {
        dispatch(hideSearchModal())
    };





    const foods=restaurants.map((res)=>res.foods)
    const food=foods.flat()


    const changeHandler=(e)=>{
        setSearchTerm(e.target.value)
        dispatch(setSearchTerms(e.target.value))
    }
    const searchProdouct=food.filter((food)=>food.name.includes(searchTerm))
    const first2Prodouct=searchProdouct.toSpliced(2)
    const searchRestaurant=restaurants.filter((res)=>res.name.includes(searchTerm))
    const first5Restaurant=searchRestaurant.toSpliced(5)
    const searchCategory=restaurantCategory.filter((cat)=>cat.name.includes(searchTerm))


    const restaurantId= params.restaurant
    let searchFood
    if(restaurantId){
        const filteredRestaurant=restaurants[restaurantId-1]
        const restaurantFood=filteredRestaurant.foods
        searchFood=restaurantFood.filter((food)=>food.name.includes(searchTerm))
    }
    


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
                   <SearchInput  addtohistoryHandler={addtohistoryHandler} inputRef = {inputRef} searchTerm={searchTerm} changeHandler={changeHandler} clearInputHandler={clearInputHandler}/>
                    <div className='mt-1 overflow-auto bg-white rounded-md flex flex-col'>
                        <SearchHistory history={history} removeFromHistoryHandler={removeFromHistoryHandler}/>
                        
                        {( restaurantId && searchTerm)&&<div className='p-[1.125rem] mt-0 flex justify-between items-center cursor-pointer'>
                            <span className='font-iransans text-sm inline-block text-carbon-light'>جستجو‌‌ی
                                <p className='font-iransans font-bold text-sm inline-block text-carbon-main mr-1'>{searchTerm}</p>
                            </span>
                            <Image width={12} height={12} src={"/icons/header/left.svg"} alt='left' /> 
                        </div>}

                        
                        {!searchTerm && <div className='p-[1.125rem] mt-0 flex justify-between items-center'>
                            <span className='font-iransans text-sm inline-block text-carbon-light'>عبارت مورد نظر خود را وارد کنید</span>
                        </div>}
                        {
                            !restaurantId && 
                            <>
                                {searchTerm && <SearchByCat handleClose={handleClose} searchCategory={searchCategory}/>}

                                {(searchTerm && first5Restaurant.length>0) && <SearchByRes searchRestaurant={searchRestaurant} first5Restaurant={first5Restaurant} handleClose={handleClose}/>}

                                {(searchTerm && first2Prodouct.length>0) && <SearchByFood searchProdouct={searchProdouct} first2Prodouct={first2Prodouct} handleClose={handleClose} restaurants={restaurants}/>}
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