// import { useState } from 'react'

import { Link } from 'react-router-dom'

import st from './navigation.module.css'

export const Navigation = () => {
  // const [isClickLink, setIsClickLink] = useState(false)

  // const onClickHandler = () => {
  //   setIsClickLink(true)
  // }

  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        textTransform: 'uppercase',
        padding: 10,
        borderWidth: 2,
        borderColor: '#000',
        borderStyle: 'solid',
        position: 'absolute',
        top: 10,
        left: 10,
      }}
    >
      <Link to="/generate" className={st.link}>
        Generate QR-code
      </Link>
      <Link to="/scan">Scan QR-code</Link>
      <Link to="/generateHistory">History of generate</Link>
      <Link to="/scanHistory">History of scan</Link>
    </nav>
  )
}
