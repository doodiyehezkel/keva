import style from './MedicineSectionTwelve.module.css'
import checkIcon from '../../../assets/medicine/check.png'
export default function MedicineSectionTwelve() {
    return (
        <>
            <h2 className={style['title']}>
                <span>תרופות</span>
            </h2>
            <div>
                <h3>
                    תרופות שלא דורשות מרשם פיזי
                </h3>
                <ul className={style['list']}>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            ניתן לקבלן בעזרת מרשם דיגיטלי וחוגר תקין בסניפי רשת "סופר פארם" ברחבי הארץ ללא עלות.
                            <br />
                            בנוסף, ניתן לקבל את התרופות בבתי המרקחת הצבאיים ללא עלות.
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>
                    תרופות שדורשות מרשם פיזי
                </h3>
                <ul className={style['list']}>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            (תרופות נרקוטיות ותרופות להפרעות קשב וריכוז) – ישנו צורך בעותק מודפס וחתום על ידי רופא של המרשם וחוגר תקין.
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>
                    תרופות שדורשות אישור מיוחד
                </h3>
                <ul className={style['list']}>
                    <li>
                        <div>
                            <img src={checkIcon} alt="check-icon" />
                        </div>
                        <span>
                            ישנו צורך באסמכתא – שמקבלים אל מול רופא היחידה- אותה יש להציג ברשתות סופר פארם לצד המרשם והחוגר.
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}