import Image from "next/image";
import * as React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function Home() {
  return (
      <main className={'MainContainer'}>
        <header className={'HeaderContainer'}>
            <div className={'HeaderContainerContent'}>
                <nav className={'NavBarContainer'}>
                    <h1 className={'NavTitle'}>RESER<span className={'orangeColor'}>HUB</span></h1>
                    <div className={'NavBarItemsContainer'}>
                        <ul>
                            <li className={'navItem'}><p>About</p></li>
                            <li className={'navItem'}><p>Crew</p></li>
                            <li className={'navItem'}><p>Contact</p></li>
                            <li className={'navItem'}>
                                <DehazeIcon fontSize={'large'} />
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={'HeaderContent'}>
                    <h1 className={'headerSlogan1'}>The <span className={'orangeColor'}>best</span> service</h1>
                    <h1 className={'headerSlogan2'}>The best <span className={'orangeColor'}>services</span></h1>
                </div>
            </div>
            <div className={'HeaderContainerVideoContainer'}>

            </div>
        </header>
          <section className={'AboutContainer'}>
              <div className={'AboutTextContainer'}>
                  <h2 className={'AboutTitle'}>Great <span className={'orangeColor'}>Touch</span></h2>
                  <p className={'AboutText'}>Casi todos los servicios de tu ciudad en un solo sitio. Totalmente personalizado</p>
              </div>
              <div className={'AboutServicesContainer'}>
                  <div className={'AboutServiceContainer'}></div>
                  <div className={'AboutServiceContainer'}></div>
                  <div className={'AboutServiceContainer'}></div>
                  <div className={'AboutServiceContainer'}></div>
                  <div className={'AboutServiceContainer'}></div>
                  <div className={'AboutServiceContainer'}></div>
              </div>
          </section>
      </main>
  );
}
