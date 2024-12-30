import style from './MedicineSectionSix.module.css'
import checkIcon from '../../../assets/medicine/check.png';

export default function MedicineSectionSix() {
    return (
        <>
             <h2 className={style['title']}>
                <span>זימון תורים</span>
            </h2>
            <ul className={style['list']}>
                <li>
                    <div>
                        <img src={checkIcon} alt="check-icon" />
                    </div>
                    <span>
                        קביעת תורים לשירותי רפואה בצה"ל בכל מקום ובכל זמן ניתן להיכנס ליישומון באמצעות קישור דרך אפליקציית 360 או דרך פורטל הרפואה.
                    </span>
                </li>
                <li>
                    <div>
                        <img src={checkIcon} alt="check-icon" />
                    </div>
                    <span>
                        במערכת ניתן לחפש את השירות הרפואי הנדרש, ניתן לקבל רשימת תורים זמינים ובמידה ואין בנמצא תור זמין במערכת ניתן להיכנס לרשימת המתנה.
                    </span>
                </li>
                <li>
                    <div>
                        <img src={checkIcon} alt="check-icon" />
                    </div>
                    <span>
                        לתורים בבתי חולים אזרחיים יש צורך להגיע לרופא היחידה קודם לכן ולהוציא את ההפניה והאסמכתא המתאימים לפני הגעה לתורים, תורים למרפאות מומחים צבאיות לא מחייבות בהפניה במידה ומדובר באנשי קבע. 
                    </span>
                </li>
            </ul>
        </>
    )
}