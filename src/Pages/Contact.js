import React from 'react'
import MobileLayout from "../Layouts/MobileLayout";
import DesktopLayout from "../Layouts/DesktopLayout";

export const Contact = () => {
  function isMobile() {
    return ( ( window.innerWidth < 800 ) && ( window.innerHeight < 600 ) )
  }

  return (
    isMobile() ?
      <MobileLayout/>
      : <DesktopLayout/>
  )
}