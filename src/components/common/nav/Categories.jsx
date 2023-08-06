import {useEffect} from 'react'
import {BsChevronDown} from "react-icons/bs"
import styles from './categories.module.css'
import { useDispatch,useSelector } from 'react-redux'
import { navCategories } from '../../../store'
import { useNavigate } from 'react-router-dom'
const Categories = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const categoriesList = useSelector((state) => state.navbar.categories)
  console.log(categoriesList)
  useEffect(()=> {
    dispatch(navCategories())
  },[])
  const handleClick = (category) => {
    navigate(`/categories/${category}`)
  }
  return (
    <div className={styles.categories}>
      <div className={styles.wrap}>
      <div className={styles.categoryWrapper}>Categories<BsChevronDown className={styles.icon}/></div>
        <ul className={styles.items}>
            {categoriesList.map((category) => {
                return <li onClick={()=> handleClick(category)}>{category}</li>
            })}
        </ul>
      </div>
      
        
    </div>
  )
}

export default Categories