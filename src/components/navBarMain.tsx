import { FaHome } from "react-icons/fa"
import { GiSmartphone } from "react-icons/gi";
import { IoMdClose, IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const SideBarMain = ({ active }: any) => {
  const handleClickOutSideBar = (e: EventTarget) => {
    if (e === document.getElementById('side-bar-main')) {
      closeSideBar()
    }
  }
  const closeSideBar = () => {
    overflow()
    active(false)
  }

  const overflow = () => {
    document.body.style.overflow = "auto"
  }

  return (
    <div className="bg-black/50 z-[99] w-full h-lvh top-0 left-0 fixed" onClick={(e) => handleClickOutSideBar(e.target)} id="side-bar-main">
      <nav className="fixed top-0 left-0 z-[9999] w-[200px] bg-color-logo h-lvh p-3 animate-showSideBar">
        <IoMdClose onClick={closeSideBar} size={'30px'} className="mt-[70px] text-white cursor-pointer hover:text-red-500" />
        <ul className="mt-[50px] flex justify-center  flex-col">
          <li className="text-white mt-2" >
            <Link to="/" className="flex items-center hover:text-gray-400" onClick={() => overflow()}>
              <FaHome size={'25px'} />
              <p className="ml-2 pt-2">Inicio</p>
            </Link>
          </li>

          <li className="text-white mt-2 ">
            <Link to="/produtos" className="flex items-center hover:text-gray-400" onClick={() => overflow()}>
              <GiSmartphone size={'25px'} />
              <p className="ml-2  pt-2">Produtos</p>
            </Link>
          </li>

          <li className="text-white mt-2 ">
            <Link to="/conta" className="flex items-center hover:text-gray-400" onClick={() => overflow()}>
              <IoMdPerson size={'25px'} />
              <p className="ml-2 pt-2">Conta</p>
            </Link>
          </li>


          
        </ul>
      </nav>
    </div >
  )
}

export default SideBarMain