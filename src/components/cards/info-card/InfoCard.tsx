import { InfoCardType } from "../../../types/cards";
import style from './InfoCard.module.css'
export default function InfoCard({infoCard}:{infoCard:InfoCardType}) {
    return (
        <div className={style['card']}>
            <div className={style['icon']}>
                <img src={infoCard.icon} alt="info-card-icon" />
            </div>
            <h2>{infoCard.title}</h2>
            <p>{infoCard.text}</p>
        </div>
    )
}