
import React from 'react'
import RestaurantInfoModal from './RestaurantInfoModal'
import FoodInfoModal from './FoodInfoModal'
import FoodPartyInfoModal from './FoodPartyInfoModal'
import AddressModal from './AddressModal'
import SearchModal from './SearchModal'
import OrderModal from './OrderModal'
import OrderCommentModal from './OrderCommentModal'
import OrderInvoiceModal from './OrderInvoiceModal'
import SupportModal from './SupportModal'
import RestaurantMapModal from './RestaurantMapModal'


function ModalRoot({restaurants,restaurantCategory}) {

  return (
    <div>
        <RestaurantInfoModal restaurants={restaurants} />
        <FoodInfoModal restaurants={restaurants} />
        <FoodPartyInfoModal restaurants={restaurants}/>
        <AddressModal/>
        <SearchModal restaurants={restaurants} restaurantCategory={restaurantCategory}/>
        <OrderModal />
        <OrderCommentModal/>
        <OrderInvoiceModal/>
        <SupportModal/>
        <RestaurantMapModal restaurants={restaurants}/>
    </div>
  )
}

export default ModalRoot