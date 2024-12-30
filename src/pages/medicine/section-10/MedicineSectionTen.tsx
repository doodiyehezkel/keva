import style from './MedicineSectionTen.module.css'

export default function MedicineSectionTen() {
    return (
        <>
            <h2 className={style['title']}>
                <span>רפואת שיניים</span>
            </h2>
            <p className={style['paragraph']}>
                אנשי קבע זכאים לקבלת טיפולי שיניים במסגרת המרפאות היחידתיות או המרפ"אות.
                <br />
                ניתן לתאם תורים באפליקציית זימון תורים או בטלפון אל מול מוקד מקול הלב(קישור לתאר צה"ל - שיניים).
            </p>
            <div style={{ overflowX: 'auto' }}>
                <table className={style['table']}>
                    <thead>
                        <tr>
                            <th>מרפאה</th>
                            <th>טלפון מטכלי</th>
                            <th>טלפון אזרחי</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                מרחב צפון
                            </td>
                            <td>
                            </td>
                            <td>
                                0733482323
                                <br />
                                וואטסאפ- 0529411002
                            </td>
                        </tr>
                        <tr>
                            <td>
                                מרפ"א 8282(צריפין)
                            </td>
                            <td>
                                03031476/9
                            </td>
                            <td>
                                039571476/9
                                <br />
                                וואטסאפ- 0529023978
                            </td>
                        </tr>
                        <tr>
                            <td>
                                מרפ"א 8283
                            </td>
                            <td>
                                07472855/6
                                <br />
                                07472222
                            </td>
                            <td>
                                0733772885/6
                                <br />
                                0733772222
                            </td>
                        </tr>
                        <tr>
                            <td>
                                מרחב ערבה
                            </td>
                            <td>
                                07022007
                                <br />
                                07942267
                            </td>
                            <td>
                                089902797
                                <br />
                                086302267
                            </td>
                        </tr>
                        <tr>
                            <td>
                                מרפ"א 8281(חיפה)
                                <br />
                                בשעות הפעילות בלבד
                                <br />
                                08:00-16:00
                            </td>
                            <td>
                                04694223/395
                            </td>
                            <td>
                                048300223/395
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}