import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style['header']}>
            <h1 className={style['title']}>
                מעטפת הפרט
            </h1>
            <h1 className={style['title']}>
                לאנשי המילואים
            </h1>
            <p className={style['second-title']}>
                'חרבות ברזל'
            </p>
        </header>
    )
}