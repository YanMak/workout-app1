import React from 'react'
import Header from './Header'

import styles from './Layout.module.scss'

function Layout({children}) {
  return (
    <div className= { styles.wrapper }>
        <Header/>  
        { children }
    </div>
  )
}

export default Layout
