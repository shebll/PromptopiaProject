import '@styles/globals.css';
import React from "react";
import { Children } from 'react';
import Home from './page';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata ={
  title : 'Promptopia',
  description : 'Discover And Share AI Prompts',
  icons: {
    icon: '/assets/images/logo.svg',
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main' > 
            <div className="gradient" />
          </div>
          <main className='app'>
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
