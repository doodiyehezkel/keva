import style from './MedicineSectionEleven.module.css'

export default function MedicineSectionEleven() {
    return (
        <>
              <h2 className={style['title']}>
                <span>מוקד פר"ח</span>
            </h2>
            <p className={style['paragraph']}>
                מוקד פניות חיל הרפואה המוקד נותן פניות בנושא הרפואה(בין היתר תלונות ציבור ופניות בנושאי תחומי מדיניות ופעילות חיל הרפואה).
                <br />
                המוקד נותן מענה לכלל המשרתים, הורים בני משפחה ועוד. ניתן לפנות למוקד דרך מספר הטלפון של מוקד "מקול הלב" *6690" שלוחה 2.
            </p>
        </>
    )
}