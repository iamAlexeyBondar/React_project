import style from './footer.module.css'

const Footer = () => {
    return(
        <footer>
            <div className={style.logo}>Карандаши</div>
            <p>Все типы карандашей 2022.</p>
        </footer>
    )
}

export default Footer