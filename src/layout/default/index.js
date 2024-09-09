import React, { useLayoutEffect } from 'react'


import AppRoot from '../global/AppRoot'
import AppMain from '../global/AppMain'
import AppWrap from '../global/AppWrap'
import AppContent from '../global/AppContent'
import "../../i18n-translation";

import Header from './Header'
import Footer from './Footer'
import LayoutProvider from './LayoutProvider'

function Default({title,content,show,...props}) {

  useLayoutEffect(() => {
    document.title = `${title} - 7Crore Technologies`;
  });

  return (
    <LayoutProvider>
      <AppRoot> 
          <AppMain>
              {/* <ErpSidebar /> */}
              {/* <Sidebar/> */}
              
              <AppWrap>
                  <Header show={show}/>
                  <AppContent content={content}>
                      {props.children}
                  </AppContent>
                  <Footer />
              </AppWrap>
          </AppMain>
      </AppRoot>
    </LayoutProvider>
  )
}

export default Default