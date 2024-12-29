import { InfoCardType } from "../../../types/cards";
import InfoCard from "../info-card/InfoCard";
import style from './InfoCards.module.css'

export default function InfoCards({ infoCards }: { infoCards: InfoCardType[] }) {
    return (
        <div className={style['cards']}>
            {
                infoCards.map(infoCard => {
                    return (
                        <InfoCard infoCard={{
                            icon: infoCard.icon,
                            title: infoCard.title,
                            text: infoCard.text
                        }} />
                    )
                })
            }
        </div>
    )
}