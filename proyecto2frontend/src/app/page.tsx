import Image from "next/image";
import * as React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Button} from "@mui/material";

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
          <footer className={'FooterContainer'}>
              <div className={'FooterContent'}>
                  <section className={'FooterTitleSection'}>
                      <h2 className={'FooterTitle'}>ReserHub</h2>
                      <div className={'SocialMediaContainer'}>
                          <div className={'InstagramMedia'}>
                              <InstagramIcon/>
                              <span className={'SpanMedia'}>Instagram</span>
                          </div>
                          <div className={'GitMedia'}>
                              <GitHubIcon />
                              <span className={'SpanMedia'}>GitHub</span>
                          </div>
                      </div>
                  </section>
                  <section className={'FooterContactSection'}>
                      <div className={'MailContainer'}>
                          <EmailIcon className={'MailIcon'}/>
                          <p className={'MailText'}>Mail de Contacto: manuel.moyavadillo2@gmail.com</p>
                      </div>
                      <div className={'LinkedInContainer'}>
                          <LinkedInIcon className={'LinkedInIcon'}/>
                          <p className={'LinkedInText'}>LinkedIn: manuel-moya-vadillo</p>
                      </div>
                      <div className={'ContactContainer'}>
                          <Button className={'ContactBtn'} variant={'contained'}>Contacta</Button>
                      </div>
                  </section>
                  <section className={'FooterCopySection'}>
                      <p>@Copyright: This work is licensed under CC BY-NC 4.0</p>
                  </section>
              </div>
          </footer>

      </main>
  );
}
