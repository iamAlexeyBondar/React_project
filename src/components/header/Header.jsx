import { Link } from 'react-router-dom'
import style from './header.module.css'

const Header = (props) =>{
    return(
        <header>
            <Link to='/'>
                <h1 className={style.logo}>Карандаши</h1>
            </Link>
            <nav>
                <Link to='/favorites'>
                    <button className={style.nav_item}>Избранное</button>
                </Link>
                <div className={style.cart_btn}>
                    <button className={style.nav_item} onClick={props.openCart}>Корзина</button>
                    <span className={style.count_cart_items}>{props.cartItems.length}</span>
                </div>
            </nav>
        </header>
    )
} 

export default Header