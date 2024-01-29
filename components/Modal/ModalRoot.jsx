
import React from 'react'
import RestaurantInfoModal from './RestaurantInfoModal'


function ModalRoot({restaurants}) {





  return (
    <div>
        <RestaurantInfoModal restaurants={restaurants} />
    </div>
  )
}

export default ModalRoot