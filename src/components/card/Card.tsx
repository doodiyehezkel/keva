import style from './Card.module.css'
export default function Card ({text}:{text:string}) {
    return (
        <div className={style['card']}>
            <h2 className={style['card-title']}>
                {text}
            </h2>
        </div>
    )
}