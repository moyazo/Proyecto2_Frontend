import Image from "next/image";
import * as React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function Home() {
  return (
      <main className={'MainContainer'}>
        <header className={'HeaderContainer'}>
            <div className={'HeaderContainerContent'}>
                <nav className={'NavBarContainer'}>
                    <h1 className={'NavTitle'}>ReserHub</h1>
                    <div className={'NavBarItemsContainer'}>
                        <ul>
                            <li>About</li>
                            <li>Crew</li>
                            <li>Contact</li>
                            <li>
                                <DehazeIcon />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={'HeaderContainerVideoContainer'}>

            </div>
        </header>
      </main>
  );
}
