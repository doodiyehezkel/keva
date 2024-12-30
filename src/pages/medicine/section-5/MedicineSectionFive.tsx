import style from './MedicineSectionFive.module.css'
export default function MedicineSectionFive() {
    return (
        <>
            <h2 className={style['title']}>
                <span>מכון הקבע</span>
            </h2>
            <p className={style['paragraph']}>
                מכון הקבע מעניק טיפולים רגשיים החל משנת הקבע השלישית.
                <br />
                ניתן לקבל טיפולים פרטניים עבור המשרת, טיפול זוגי, הדרכת הורים ועוד.
                <br />
                הפניה מתבצעת באופן עצמאי ודיסקרטי בטלפון מס 07-68600010
            </p>
        </>
    )
}