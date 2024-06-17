import React from 'react'
import Header from './Header'
import Aside from './Aside'
import PanelArea from './PanelArea'
import { useSelector } from 'react-redux'

const Home = () => {
  let menu = useSelector(state => state.pageSlice.menu)



  return (
  
    /*  las clases para pinear el menu g-sidenav-pinned*/
    <div className={`g-sidenav-show bg-gray-100 ${menu?'g-sidenav-pinned':''}`}>
    <Header/>
    <Aside/>
    <PanelArea/>
   
    </div>
 
  )
}

export default Home