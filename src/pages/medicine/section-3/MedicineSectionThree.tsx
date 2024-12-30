
import style from './MedicineSectionThree.module.css';
import checkIcon from '../../../assets/medicine/check.png'

export default function MedicineSectionThree() {
    return (
        <>
            <h2 className={style['title']}>
                <span>המענה הניתן ע"י חבר - לעמיתי חבר ובני משפחותיהם</span>
            </h2>
            <div>
                <h3>
                    פסיכולוג - און לין
                </h3>
                <ul className={style['list']}>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            12 מפגשים ליחיד ועד 24 למשפחה בשנה.
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            80 ש"ח למפגש.
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>
                    פסיכולוג - פנים מול פנים
                </h3>
                <ul className={style['list']}>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            12 מפגשים ליחיד ועד 20 למשפחה בשנה.
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            מפגש ראשון ב80 ש"ח ולשאר המפגשים 100 ש"ח עבור כל מפגש נוסף מעבר לזכאות דמי שירות בסך 250 ש"ח. (נותני שירות בהסדר בלבד)
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>
                    חבילת שירותים לילד - קלינאי תקשורת וריפוי בעיסוק
                </h3>
                <ul className={style['list']}>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            כמות הטיפולים המקסימלית בשנת ביטוח הינה 8 טיפולים. נדרשת הפנייה מרופא מומחה בהתפתחות הילד הכוללת אבחנה רפואית בגינה נדרש הטיפול. (פרט לכיסויי תזונה וכושר) טיפולי הילדים ניתנים ע"י Femi.
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            85 ש"ח למפגש.
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}
