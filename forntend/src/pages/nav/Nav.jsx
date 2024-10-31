import React from 'react'
import { NavLink } from 'react-router-dom'
import SelectIcon from '../../helper/SelectIcon'
import { useSelector } from 'react-redux'



const Nav = () => {

  const { primary2,lightpink ,secondary} = useSelector((state) => state.color)
  const defultColor = primary2

  return (
    <div className="nav flex w-full h-14 items-center justify-between px-5 border-2 border-grey-200 p-2 rounded ">
      <NavLink to={""}>
        <SelectIcon name={"home"} style={{ color: defultColor, fontSize: '30px' }} onClick={() => { }} />
      </NavLink>
      <NavLink to={"/music"}>
        <SelectIcon name={"music-notes-bold"} style={{ color: defultColor, fontSize: '30px' }} onClick={() => { }} />
      </NavLink>
      <NavLink to={"/playlist"}>
        <SelectIcon name={"playlist"} style={{ color: defultColor, fontSize: '30px' }} onClick={() => { }} />
      </NavLink>

      {
        window.innerWidth <=426 ? 
        <SelectIcon name={"ham-menu"} style={{ color: defultColor, fontSize: '30px' }} onClick={() => { }} />
        : <NavLink to={"/logout"}><p className='text-red-600 font-bold'>Logout</p></NavLink>
      }

      {/* <NavLink to={"#"}>
        <SelectIcon name={"ham-menu"} style={{ color: defultColor, fontSize: '30px' }} onClick={() => { }} />
      </NavLink> */}
    </div>
  )
}

export default Nav