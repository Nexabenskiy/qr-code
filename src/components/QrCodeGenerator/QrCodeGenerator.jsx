import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import QRCode from 'react-qr-code'
// импортирую ключ
import { GENERATE_DATA } from '../../constants'

import st from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('')
  const [change, setChange] = useState('')
  const [isShowQrCode, setIsShowQrCode] = useState(false)

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    // console.log(23, prevData)
    const svg = document.querySelector('._container_2xbpm_1 svg path')
    console.log(svg)

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, change]))

    setQrCode(change)
    setIsShowQrCode((isShowQrCode) => !isShowQrCode)
    setChange('')
  }

  const onChangeHandler = (e) => {
    setChange(e.target.value)
    setIsShowQrCode(false)
  }

  return (
    <div className={st.container} style={{ height: 'auto', margin: '0 auto', maxWidth: 256, width: '100%' }}>
      {isShowQrCode && <QRCode size={256} style={{ height: 'auto', maxWidth: '100%', width: '100%' }} value={qrCode} viewBox={`0 0 256 256`} />}

      <input className={st.qrTextInput} value={change} onChange={onChangeHandler} style={{ maxWidth: '100%' }} type="text" placeholder="Enter your text" />
      <button type="button" onClick={onClickHandler}>
        Generate QR-code
      </button>
    </div>
  )
}
