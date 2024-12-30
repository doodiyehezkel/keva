
import style from './MedicineSectionTwo.module.css';
import checkIcon from '../../../assets/medicine/check.png';
export default function MedicineSectionTwo() {
    return (
        <>
            <h2 className={style['title']}>
                <span>המענה הניתן ע"י המרכז למשפחת הקבע</span>
            </h2>
            <ul className={style['list']}>
                <li>
                    <div>
                        <img src={checkIcon} alt="check-icon" />
                    </div>
                    <span>
                        כל משרת קבע זכאי למענה ריגשי דרך המרכז לאחר ההתרשמויות הקליניות יותאם סוג הטיפול המתאים למשרת.
                    </span>
                </li>
                <li>
                    <div>
                        <img src={checkIcon} alt="check-icon" />
                    </div>
                    <span>
                        מרכז משפחת הקבע מספק מענה טיפולי אבחוני בתחום הריאות הנפש לאנשי הקבע החל משנתם השלישית בקבע, בהתאם לצורך העולה ובכפוף להתרשמות המקצועית. הפניה מתבצעת באופן עצמאי ודיסקרטי תוך שמירה על חסיון רפואי והמענה ניתן על ידי מטפלי המרכז בפריסה ארצית.
                    </span>
                </li>
                <li>
                    <div>
                        <img src={checkIcon} alt="check-icon" />
                    </div>
                    <span>
                        סל השירותים הניתן כולל התערבות במשבר, טיפול פרטני, טיפול זוגי, הדרכת הורים, טיפול פסיכיאטרי, טיפול קבוצתי ומיצוי זכיות בקהילה.
                    </span>
                </li>
            </ul>
        </>
    )
}