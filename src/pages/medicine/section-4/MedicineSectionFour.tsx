
import style from './MedicineSectionFour.module.css';

export default function MedicineSectionFour() {
    return (
        <>
            <h2 className={style['title']}>
                <span>מוקד הפנייה לקבלת סיוע</span>
            </h2>
            <div className={style['book-phone']}>
                <ul className={style['list']}>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span>
                            מוקד רפואה דחופה <a href="tel:*6690">6690*</a>
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span>
                            המרכז למשפחות הקבע <a href="tel:0768600010">076-8600010</a>
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span>
                            מכון הקבע חיל האוויר <a href="tel:097716509">09-7716509</a>
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span>
                            מנהלת פני העורף <a href="tel:0529322897">052-932-2897</a>
                        </span>
                    </li>
                </ul>
                <ul className={style['list']}>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span>
                            מכון הקבע חיל הים <a href="tel:048693241">04-869-3241</a>
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span>
                            מכון הקבע חיל המודיעין <a href="tel:0529261145">052-926-1145</a>
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span>
                            מועדון חבר <a href="tel:036100100">03-6100100</a>
                        </span>
                    </li>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <span>
                            מוקד פמי <a href="tel:035304040">03-5304040</a>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    )
}