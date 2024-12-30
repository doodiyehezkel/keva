import style from './MedicineSectionNine.module.css';
export default function MedicineSectionNine() {
    return (
        <>
            <h2 className={style['title']}>
                <span>החזרים כספיים</span>
            </h2>
            <p className={style['paragraph']}>
                כלל משרתי צה"ל זכאים לקבל את כל השירותים הקיימים בצהל ללא תשלום.
                <br />
                במידה ובוצעה רכישה של שירות רפואי מכספו הפרטי של המשרת- ניתן להגיש בקשה להחזר כספי אל מול מרפאת היחידה בעזרת אפליקציית המדיקליק- בכפוף לנוהל "החזרים כספיים בדיעבד עבור שירותים ואביזרים".
            </p>
        </>
    )
}