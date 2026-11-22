import classes from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={classes.loader}>
            <div className={classes.spinner}>
                <span className={classes.ring}></span>
                <span className={classes.ring}></span>
                <span className={classes.ring}></span>
            </div>
            <p className={classes.text}>Загрузка постов…</p>
        </div>
    )
}