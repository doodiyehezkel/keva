import style from './MedicineSectionOne.module.css';

export default function MedicineSectionOne() {
    return (
        <>
            <h2 className={style['title']}>
                <span>משרתי קבע יקרים</span>
            </h2>
            <p className={style['paragraph']}>
                המלחמה הביאה עימה אתגרים יחודיים עבור הפרט ומשפחתו ולמולם אנו פועלים כל העת על מנת לגבש מענה מותאם.
                <br />
                מפרוץ מלחמת "חרבות ברזל" מתקיימים מאמצים נרחבים לטיפול בפרט במשרתי צה"ל בהיבט הפיזי וגם בהיבט הנפשי.
                <br />
                באגרת זו תוכלו למצוא מידע בנוגע לזכויות וזכאיות לטיפול הנפשי והריגשי בעבור אנשי הקבע בצה"ל ובני משפחותיהם.
            </p>
        </>
    )
}