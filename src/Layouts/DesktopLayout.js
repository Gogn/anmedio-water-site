import React from 'react';
import Promo from "../Components/Forms/Promo/Promo";

function DesktopLayout() {
let step = 1


  if (step===1) {
    return (
      <div className='desktop'>
        1
        <div className='c'>asdasd</div>
        <div>qweqweqwe</div>
        <div>zxczxczxc</div>
        <Promo/>
      </div>
    )
  }

  if (step===2) {
    return (
      <>
        2
        <Promo/>
      </>
    )
  }

}

export default DesktopLayout;