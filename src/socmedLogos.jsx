import discordLogoUrl from './assets/discord.svg';
import facebookLogoUrl from './assets/facebook.svg';
import instagramLogoUrl from './assets/instagram.svg';
import twitterLogoUrl from './assets/twitter-x.svg';
import youtubeLogoUrl from './assets/youtube.svg';

import './socmedLogos.css';


function SocmedLogos() {
    return(
        <>
            <div id="socmed-container">
                <ul className="flex">
                    <li><button><a href="#"><img src={discordLogoUrl} className="white-svg" /></a></button></li>
                    <li><button><a href="https://www.facebook.com/lazywanji" target="_blank"><img src={facebookLogoUrl} className="white-svg" /></a></button></li>
                    <li><button><a href="https://www.instagram.com/lazywanji" target="_blank"><img src={instagramLogoUrl} className="white-svg" /></a></button></li>
                    <li><button><a href="https://x.com/lazywanji" target="_blank"><img src={twitterLogoUrl} className="white-svg"/></a></button></li>
                    <li><button><a href="https://www.youtube.com/channel/UCArUCc0TJWh_y869eeAw4hQ"target="_blank" ><img src={youtubeLogoUrl} className="white-svg" /></a></button></li>
                </ul>
            </div>
        </>
    )

}

export default SocmedLogos