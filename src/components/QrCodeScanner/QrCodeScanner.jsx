import { useState } from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'
// импортирую ключ
import { SCAN_DATA } from '../../constants'

import st from './qrCodeScanner.module.css'

export const QrCodeScanner = () => {
  const [scanValue, setScanValue] = useState('')

  const onScanHandler = (result) => {
    setScanValue(result[0].rawValue)

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    // console.log(23, prevData)

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]))
  }

  // настройки сканнера
  const scannerSettings = {
    audio: false, // звук при сканировании
    //  finder: false, // красные углы рамка
  }
  // стили сканнера
  const scannerStyles = {
    container: { width: 256, margin: 'auto' },
    video: { backgroundColor: 'grey', opacity: 1 },
    //  finderBorder: 3,
  }

  return (
    <div className={st.container}>
      <Scanner className={st.scanner} styles={scannerStyles} onScan={onScanHandler} components={scannerSettings} />
      <div className={st.text}>{scanValue}</div>
    </div>
  )
}
