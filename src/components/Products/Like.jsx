import {useState} from 'react'
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai";
import styles from '../../styles/Products/like.module.css'
const Like = () => {
    const [isSelected,setIsSelected] = useState(false)
    const handleLike = () => {
        setIsSelected((isSelected)=> !isSelected)
    }
  return (
    <div onClick={handleLike} className={styles.main}>
        {
            isSelected ? <AiFillHeart className={`${styles.liked} ${styles.icon}`}/> : <AiOutlineHeart className={styles.icon}/>
        }
    </div>
  )
}

export default Like