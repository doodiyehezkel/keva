import { Link } from 'react-router'
import style from './HomePageLink.module.css'
import { HomePageLinkType } from '../../../types/cards'

export default function HomePageLink ({homePageCard}:{homePageCard:HomePageLinkType}) {
    return (
            <Link to={homePageCard.url} className={style['link']}> 
                {homePageCard.text}
            </Link>
    )
}