import classes from './Header.module.css'

export const Header = () => {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>BlogPost</div>
            <nav className={classes.nav}>
                <a href='#' className={classes.link}>Главная</a>
                <a href='#' className={classes.link}>Посты</a>
                <a href='#' className={classes.link}>О нас</a>
            </nav>
        </header>
    )
}