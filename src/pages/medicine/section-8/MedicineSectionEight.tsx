import style from './MedicineSectionEight.module.css'

export default function MedicineSectionEight() {
    return (
        <>
            <h2 className={style['title']}>
                <span>ביקור רופא</span>
            </h2>
            <p className={style['paragraph']}>
                כלל המשרתים בצה"ל זכאים לקבלת טיפול רפואי בביקורופא.
                <br />
                המענה ניתן על בסיס שעות הפעילות של הרשת.
                <br />
                (לצרף קישור לאתר ביקורופא ושעות פעילות הסניפים בכל הארץ).
            </p>
        </>
    )
}