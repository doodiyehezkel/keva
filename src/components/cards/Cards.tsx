import Card from "../card/Card";
import style from './Cards.module.css'


export default function Cards ({cards}:{cards:string[]}) {
    return (
        <div className={style['cards']}>
            {
                cards.map(card => <Card text={card} />)
            }
        </div>
    )
}