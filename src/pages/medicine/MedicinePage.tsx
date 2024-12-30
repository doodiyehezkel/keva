import style from './Medicine.module.css';
import MedicineSectionFive from './section-5/MedicineSectionFive';
import MedicineSectionFour from './section-4/MedicineSectionFour';
import MedicineSectionOne from './section-1/MedicineSectionOne';
import MedicineSectionSeven from './section-7/MedicineSectionSeven';
import MedicineSectionSix from './section-6/MedicineSectionSix';
import MedicineSectionThree from './section-3/MedicineSectionThree';
import MedicineSectionTwo from './section-2/MedicineSectionTwo';
import MedicineSectionEight from './section-8/MedicineSectionEight';
import MedicineSectionNine from './section-9/MedicineSectionNine';
import MedicineSectionTen from './section-10/MedicineSectionTen';

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
            <section>
                <MedicineSectionOne />
            </section>
            <section>
                <MedicineSectionTwo />
            </section>
            <section>
                <MedicineSectionThree />
            </section>
            <section>
                <MedicineSectionFour />
            </section>
            <section>
                <MedicineSectionFive />
            </section>
            <section>
                <MedicineSectionSix />
            </section>
            <section>
                <MedicineSectionSeven />
            </section>
            <section>
                <MedicineSectionEight />
            </section>
            <section>
                <MedicineSectionNine />
            </section>
            <section>
                <MedicineSectionTen />
            </section>
        </article>
    )
}