
import InfoCards from '../../components/cards/info-cards/InfoCards'
import style from './WhoAreWePage.module.css'
import giftIcom from '../../assets/who-are-we/gift.png'
import educationIcon from '../../assets/who-are-we/education.png'
import showsIcon from '../../assets/who-are-we/shows.png'
import organizationDaysIcon from '../../assets/who-are-we/organization-days.png'
import coursesAndTrainingsIcon from '../../assets/who-are-we/courses-and-trainings.png'
import taxIcon from '../../assets/who-are-we/tax.png'
import handshakeIcon from '../../assets/who-are-we/handshake.png'

const infoCards = [
    {
        icon: giftIcom,
        title: 'זכאויות והטבות',
        text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
        icon: educationIcon,
        title: 'שכר והשכלה',
        text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
        icon: showsIcon,
        title: 'מופעים מרכזיים',
        text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
        icon: organizationDaysIcon,
        title: 'ימי התארגנות',
        text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
        icon: coursesAndTrainingsIcon,
        title: 'קורסים והדרכות',
        text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
        icon: taxIcon,
        title: 'הטבות מס',
        text: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    }
]

export default function WhoAreWePage() {
    return (
        <article className={style['who-are-we-page']}>
            <div  className={style['section-one-container']}>
                <section className={style['section-one']}>
                    <h1>
                        <span>מעטפת הפרט</span>
                        <br />
                        <span>למשרת המבצעי</span>
                    </h1>
                    <InfoCards infoCards={infoCards} />
                </section>
            </div>
            <section className={style['section-two']}>
                <div className={style['section-two-part-one']}>
                    <h1>
                        מרכז הפרט הישבשתי
                    </h1>
                    <p>
                        אנו פועלים כדי לחזק את תחושת ההערכה והשייכות של משרתי הקבע, המילואים והמפונים, ולהעניק להם ולבני משפחותיהם את הכלים והמשאבים הנדרשים להצלחה בחיים האישיים והמקצועיים.
                    </p>
                </div>
                <hr />
                <div className={style['section-two-part-two']}>
                    <h1>
                        <span>
                            מרכז הפרט
                        </span>
                        <br />
                        <span>
                            הישבשתי
                        </span>
                    </h1>
                    <img src={handshakeIcon} alt="handshake-icon" />
                    <h3>פשוט יחד</h3>
                </div>
            </section>
            <section className={style['section-three']}>
                <hr />
            </section>
            <section className={style['section-four']}>
                <h1>
                    <span>מה תמצאו אצלינו?</span>
                </h1>
                <div className={style['section-four-info']}>
                    <div className={style['section-four-info-div']}>
                        <h2>שירותים מותאמים אישית</h2>
                        <p>
                            מערכת דיגיטלית חכמה שתעזור לכם למצות את כל הזכויות המגיעות לכם ,לקבל מידע חשוב, ולמצוא את השירותים שמתאימים בדיוק עבורכם.
                        </p>
                        <div className={style['section-four-end-p']}></div>
                    </div>
                    <div className={style['section-four-info-div']}>
                        <h2>תמיכה ריגשית ומשפחתית</h2>
                        <p>
                            כלים וסדנאות שיעזרו להתמודד עם אתגרי היומיום ,מהבטים זוגיים ומשפחתיים ועד יעוץ כלכלי.
                        </p>
                        <div className={style['section-four-end-p']}></div>
                    </div>
                    <div className={style['section-four-info-div']}>
                        <h2>מערכת קהילתית מתקדמת</h2>
                        <p>
                            פורום פעיל למענה על שאלות ,שיתוף חוויות ,ותמיכה בין חברי הקהילה.
                        </p>
                        <div className={style['section-four-end-p']}></div>
                    </div>
                    <div className={style['section-four-info-div']}>
                        <h2>הטבות יחודיות</h2>
                        <p>
                            כרטיס דיגיטלי המעניק הנחות והטבות בשירותים אזרחיים ,תרבות ,פנאי וחינוך.
                        </p>
                        <div className={style['section-four-end-p']}></div>
                    </div>
                </div>
            </section>
        </article>
    )
}