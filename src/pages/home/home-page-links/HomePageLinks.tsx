import { HomePageLinkType } from "../../../types/cards";
import HomePageLink from "../home-page-link/HomePageLink";
import style from './HomePageLinks.module.css'


export default function HomePageLinks ({homePageLinks}:{homePageLinks:HomePageLinkType[]}) {
    return (
        <div className={style['cards']}>
            {
                homePageLinks.map(homePageLinks => <HomePageLink homePageCard={{
                    text: homePageLinks.text,
                    url: homePageLinks.url
                }} />)
            }
        </div>
    )
}