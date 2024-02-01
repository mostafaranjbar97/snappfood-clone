'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'


function Sort() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const getSort = searchParams.get("sort")


    let sortBy=["بالاترین امتیاز","نزدیک‌ترین","جدیدترین","ارزان‌ترین","عملکرد کلی","گران‌ترین"]
    const initialInputText= getSort ? sortBy[getSort-1]: "به ترتیب پیش‌فرض"
    const inputRef = useRef(null);
    const [showMenu,setShowMenu]=useState(false)
    const [selectMenu,setSelectMenu]=useState()
    const [inputText,setInputText]=useState(initialInputText)
    const [inputValue,setInputValue]=useState("")

    const inputHandler=(e)=>{
        setInputText(e.target.value)
        setInputValue(e.target.value)
    }

    const removeHandler=(e)=>{
        setShowMenu(false);
        setInputText("به ترتیب پیش‌فرض")
        setInputValue("")

        const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.delete("sort")
            const newUrl = `${pathname}?${newSearchParams}`
            router.push(newUrl)
    }

    const selectMenuHandler=(e)=>{
        setShowMenu(false);
        setSelectMenu(e.target.id)
        setInputText(e.target.innerHTML)

        if(searchParams.has("sort",e.target.id)) {
            return
        }else if(searchParams.has("sort")){
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.delete("sort")
            newSearchParams.append("sort",e.target.id)
            const newUrl = `${pathname}?${newSearchParams}`
            router.push(newUrl)      
        }else {
            const newSearchParams = new URLSearchParams(searchParams)
            newSearchParams.append("sort",e.target.id)
            const newUrl = `${pathname}?${newSearchParams}`
            router.push(newUrl)
    }}

    const showMenuHandler=()=>{
        inputValue ? setShowMenu(true) : setShowMenu(!showMenu)
        inputRef.current.focus()
    }

    useEffect(()=>{
        window.addEventListener("click",(e)=>!(e.target.classList.contains("openMenu"))  && setShowMenu(false))
        return ()=> window.removeEventListener("click",(e)=>!(e.target.classList.contains("openMenu"))  && setShowMenu(false))
    },[])

  return (
    <div className='flex justify-between items-center mb-8'>
        <div></div>
        <div className='rtl relative box-border text-base leading-6 '>
            <span className='z-[99] h-px w-px absolute whitespace-nowrap'></span>
            <div onClick={showMenuHandler} className='openMenu flex items-center justify-between rounded-md bg-white flex-wrap min-h-[38px] relative box-border w-[200px] h-12 transition-all border border-carbon-alphaLight outline-0 hover:border-[rgb(179,179,179)] focus:shadow-[rgb(38,132,255)_0px_0px_0px_1px] focus:ring-[rgb(38,132,255)] focus:ring-1'>
                <div className='openMenu flex items-center flex-wrap grow shrink basis-0 py-0.5 px-2 relative overflow-hidden box-border'>
                    <div className='openMenu text-[rgb(128,128,128)] mx-0.5 absolute top-1/2 -translate-y-1/2 box-border max-w-[calc(100%-8px)] overflow-hidden text-ellipsis whitespace-nowrap opacity-100 z-[10]'>{inputText}</div>
                    <div className='m-0.5 py-0.5 box-border'>
                        <div className='inline-block'>
                            <input ref={inputRef} onChange={inputHandler} value={inputValue} type="text" name="" id="" className='w-0.5 z-30 bg-[0px_center] opacity-100 box-content focus:outline-none ' />
                            <div className='absolute top-0 left-0 h-0 invisible overflow-scroll whitespace-pre text-base font-iransans'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center self-stretch shrink-0 box-border'>
                    {inputText !="به ترتیب پیش‌فرض" &&<div onClick={removeHandler} className='text-[rgb(204,204,204)] flex p-2 transition-[color] box-border hover:text-[rgb(153,153,153)] cursor-pointer'>
                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="inline-block fill-current stroke-current leading-4"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
                    </div>}
                    <span className='self-stretch my-2 w-px box-border bg-[rgb(204,204,204)]'></span>
                    <div className='openMenu flex transition-[color] text-[rgb(204,204,204)] p-2'>
                        <Image width={8} height={5} src={"/icons/resturants/bottom-sort.svg"} alt='bottom'/>
                    </div>
                </div>
            </div>
            <div className={clsx('z-30 absolute top-full bg-white rounded my-2 w-[200px] box-border shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px,rgba(0,0,0,0.1)_0px_4px_11px]',showMenu ? "block" : "hidden")}>
                <div className='max-h-[300px] overflow-y-auto py-1 relative'>

                    {
                        sortBy.filter((sortItem)=>sortItem.includes(inputValue)).map((sortItem,index)=>{
                            return(
                                <div key={index} id={index+1} onClick={selectMenuHandler} className={clsx((getSort && index==getSort-1)? 'bg-[rgb(222,235,255)]': 'bg-transparent',' py-2 px-3 w-full box-border select-none hover:bg-[rgb(151,172,212)] active:bg-[rgb(178,212,255)] focus:bg-[rgb(38,132,255)] focus:text-white')}>{sortItem}</div>
                            )
                        })
                    }

                    {sortBy.filter((sortItem)=>sortItem.includes(inputValue)).length==0 &&
                        <div className='bg-transparent py-2 px-3 w-full box-border select-none hover:bg-[rgb(222,235,255)] active:bg-[rgb(178,212,255)] focus:bg-[rgb(38,132,255)] focus:text-white'>هیچ گزینه ای پیدا نشد!</div>
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sort