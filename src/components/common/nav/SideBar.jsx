import {useState} from 'react'
import styles from './sidebar.module.css'
import Categories from './Categories'
import Search from './Search'
import { navData } from '../../../meta/navData'
import { BiChevronDown } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
const SideBar = ({handleClose}) => {
    const [visible,setVisible] = useState(false)
  return (
    <div className={styles.main}>
        <div>
            <Search/>
        </div>
        <h2 onClick={()=> setVisible(!visible)}>Categories<span><BiChevronDown/></span></h2>
        { visible &&
            <ul>
                {navData.map((item) => {
                    const {name} = item
                    return <li>{name}</li>
                })}
            </ul>
        }
        <ul className={styles.categories}>
                <li>Deals</li>
                <li>What's New</li>
                <li>Delivery</li>
        </ul>
        <span onClick={handleClose}>
            <IoMdClose/>
        </span>
    </div>
  )
}

export default SideBar