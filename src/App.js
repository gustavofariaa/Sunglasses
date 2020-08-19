import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyles from './styles/GlobalStyles'

import NavbarWeb from './components/NavbarWeb';
import NavbarMobile from './components/NavbarMobile';
import Router from './routes';

export default () => {
  const [isWeb, setIsWeb] = useState(true);
  const handleResize = () => setIsWeb(window.innerWidth > 912)

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  
  return(
    <>
      <Provider store={store}>
        {isWeb ? <NavbarWeb /> : <NavbarMobile />}
        <main id="main">
          <Router isWeb={isWeb} />
        </main>
      </Provider>
      <GlobalStyles />
    </>
  )
};
