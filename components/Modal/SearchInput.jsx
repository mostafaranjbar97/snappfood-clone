import Image from 'next/image'
import React from 'react'

function SearchInput({searchTerm,clearInputHandler,inputRef,addtohistoryHandler,changeHandler}) {
    
  return (
    <div className='relative w-full'>
        {searchTerm ? <Image onClick={clearInputHandler} width={18} height={18} src={"/icons/modal/exit-search.svg"} alt="search" className='absolute top-0 right-4 bottom-0 m-auto cursor-pointer'/> 
        : <Image width={18} height={18} src={"/icons/header/search-black.svg"}  alt="search" className='absolute top-0 right-4 bottom-0 m-auto '/>}
        <input onKeyUp={addtohistoryHandler} ref={inputRef} value={searchTerm} onChange={changeHandler} type="text" className='w-full box-border h-12 text-carbon-main rounded-xlg font-iransans text-base py-3 pr-10 pl-3 border-border-xs border-carbon-alphaHigh focus:border focus:border-carbon-main'/>
    </div>
  )
}

export default SearchInput