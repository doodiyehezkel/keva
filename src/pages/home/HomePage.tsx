import HomePageLinks from './home-page-links/HomePageLinks';
import style from './HomePage.module.css';

export default function HomePage() {
    return (
        <>
            <h1 className={style['title']}>
                מעטפת הפרט למשרתי הקבע – סיוע מנהלתי קרבי  "חרבות ברזל"
            </h1>
            <div className={style['cards']}>
                <HomePageLinks homePageLinks={[
                    {
                        text: 'מי אנחנו',
                        url: 'who-are-we'
                    },
                    {
                        text: 'רפואה',
                        url: 'medicine'
                    },
                    {
                        text: 'שכר',
                        url: '/'
                    },
                    {
                        text: 'השכלה',
                        url: '/'
                    },
                    {
                        text: 'משפחה',
                        url: '/'
                    },
                    {
                        text: 'הטבות למשרת המבצעי',
                        url: '/'
                    },
                    {
                        text: 'זכויות משרתי הקבע',
                        url: '/'
                    },
                    {
                        text: 'אוכלוסיה מיוחדת',
                        url: '/'
                    },
                    {
                        text: 'קרן הסיוע למשרת הקבע',
                        url: '/'
                    },
                    {
                        text: 'מפונים',
                        url: '/'
                    },
                    {
                        text: 'טלפונים',
                        url: '/'
                    },
                    {
                        text: 'מסמכים',
                        url: '/'
                    }

                ]} />
            </div>
            <div className={style['content']}>
                <p>
                משרת יקר, <br />
                לאור אתגרי התקופה ריכזנון עבורך את זכויות הפרט  להם אתה זכאי  לךשימושך. ניתן ליצור קשר עם מרכז הפרט: <br />
                </p>
                <ul>
                    <li><a href=""> WhatApp </a></li>
                    <li><a href=""> Email </a></li>
                </ul>
            </div>
        </>
    )
}