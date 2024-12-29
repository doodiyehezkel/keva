import style from './Medicine.module.css';
import checkIcon from '../../assets/medicine/check.png';

export default function MedicinePage() {
    return (
        <article className={style['medicine-page']}>
            <h1 className={style['title']}>
                <span>
                    המענה הרגשי למשרתי הקבע
                </span>
                <br />
                <span>
                    בצה"ל ובני משפחותיהם
                </span>
            </h1>
            <section className={style['section-one']}>
                <div className={style['section-one-part-one']}>
                    <h2>
                        <span>משרתי קבע יקרים</span>
                    </h2>
                    <p>
                        המלחמה הביאה עימה אתגרים יחודיים עבור הפרט ומשפחתו ולמולם אנו פועלים כל העת על מנת לגבש מענה מותאם.
                        <br />
                        מפרוץ מלחמת "חרבות ברזל" מתקיימים מאמצים נרחבים לטיפול בפרט במשרתי צה"ל בהיבט הפיזי וגם בהיבט הנפשי.
                        <br />
                        באגרת זו תוכלו למצוא מידע בנוגע לזכויות וזכאיות לטיפול הנפשי והריגשי בעבור אנשי הקבע בצה"ל ובני משפחותיהם.
                    </p>
                </div>
                <div className={style['section-one-part-two']}>
                    <h2>
                        <span>המענה הניתן ע"י המרכז למשפחת הקבע</span>
                    </h2>
                    <ul>
                        <li>
                            <div>
                                <img src={checkIcon} alt="check-icon" />
                            </div>
                            <p>
                                כל משרת קבע זכאי למענה ריגשי דרך המרכז לאחר ההתרשמויות הקליניות יותאם סוג הטיפול המתאים למשרת.
                            </p>
                        </li>
                        <li>
                            <div>
                                <img src={checkIcon} alt="check-icon" />
                            </div>
                            <p>
                                מרכז משפחת הקבע מספק מענה טיפולי אבחוני בתחום הריאות הנפש לאנשי הקבע החל משנתם השלישית בקבע, בהתאם לצורך העולה ובכפוף להתרשמות המקצועית. הפניה מתבצעת באופן עצמאי ודיסקרטי תוך שמירה על חסיון רפואי והמענה ניתן על ידי מטפלי המרכז בפריסה ארצית.
                            </p>
                        </li>
                        <li>
                            <div>
                                <img src={checkIcon} alt="check-icon" />
                            </div>
                            <p>
                                סל השירותים הניתן כולל התערבות במשבר, טיפול פרטני, טיפול זוגי, הדרכת הורים, טיפול פסיכיאטרי, טיפול קבוצתי ומיצוי זכיות בקהילה.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={style['section-one-part-three']}>
                    <h2>
                        <span>המענה הניתן ע"י חבר - לעמיתי חבר ובני משפחותיהם</span>
                    </h2>
                    <div>
                        <h3>
                            פסיכולוג - און לין
                        </h3>
                        <ul>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="check-icon" />
                                </div>
                                <p>
                                    12 מפגשים ליחיד ועד 24 למשפחה בשנה.
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="check-icon" />
                                </div>
                                <p>
                                    80 ש"ח למפגש.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            פסיכולוג - פנים מול פנים
                        </h3>
                        <ul>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="check-icon" />
                                </div>
                                <p>
                                    12 מפגשים ליחיד ועד 20 למשפחה בשנה.
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="check-icon" />
                                </div>
                                <p>
                                    מפגש ראשון ב80 ש"ח ולשאר המפגשים 100 ש"ח עבור כל מפגש נוסף מעבר לזכאות דמי שירות בסך 250 ש"ח. (נותני שירות בהסדר בלבד)
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>
                            חבילת שירותים לילד - קלינאי תקשורת וריפוי בעיסוק
                        </h3>
                        <ul>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="check-icon" />
                                </div>
                                <p>
                                    כמות הטיפולים המקסימלית בשנת ביטוח הינה 8 טיפולים. נדרשת הפנייה מרופא מומחה בהתפתחות הילד הכוללת אבחנה רפואית בגינה נדרש הטיפול. (פרט לכיסויי תזונה וכושר) טיפולי הילדים ניתנים ע"י Femi.
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src={checkIcon} alt="check-icon" />
                                </div>
                                <p>
                                    85 ש"ח למפגש.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style['section-one-part-four']}>
                    <h2>
                        <span>מוקד הפנייה לקבלת סיוע</span>
                    </h2>
                    <div className={style['section-one-part-four-book-phone']}>
                        <ol>
                            <li>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    מוקד רפואה דחופה <a href="tel:*6690">6690*</a>
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    המרכז למשפחות הקבע <a href="tel:0768600010">076-8600010</a>
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    מכון הקבע חיל האוויר <a href="tel:097716509">09-7716509</a>
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    מנהלת פני העורף <a href="tel:0529322897">052-932-2897</a>
                                </p>
                            </li>
                        </ol>
                        <ol>
                            <li>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    מכון הקבע חיל הים <a href="tel:048693241">04-869-3241</a>
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    מכון הקבע חיל המודיעין <a href="tel:0529261145">052-926-1145</a>
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    מועדון חבר <a href="tel:036100100">03-6100100</a>
                                </p>
                            </li>
                            <li>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <p>
                                    מוקד פמי <a href="tel:035304040">03-5304040</a>
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

        </article>
    )
}