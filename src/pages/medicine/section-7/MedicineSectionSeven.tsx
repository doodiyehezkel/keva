import style from './MedicineSectionSeven.module.css'

export default function MedicineSectionSeven() {
    return (
        <>
            <h2 className={style['title']}>
                <span>יישומון מדיקליק</span>
            </h2>
            <p className={style['paragraph']}>
                יישומון אשר מציע מספר שירותי רפואה אשר ניתן לבצע מרחוק כגון: הגשת בקשה להפניה, הגשת בקשה למרשם לתרופה קבועה, משקפיים מדרסים ולאסמכתא תקציבית.
                <br />
                בנוסף, אצל אנשי הקבע קיימת אפשרות להגיש בקשה לימי מחלה (עד 3 ימי במחלה).
            </p>
        </>
    )
}