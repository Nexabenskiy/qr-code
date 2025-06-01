import { Routes, Route, Outlet, Link } from 'react-router-dom'

import { Navigation } from '../components/Navigation/Navigation'

import { QrCodeGenerator } from '../components/QrCodeGenerator/QrCodeGenerator'
import { QrCodeScanner } from '../components/QrCodeScanner/QrCodeScanner'
import { GenerateHistory } from '../components/GenerateHistory/GenerateHistory'
import { ScanHistory } from '../components/ScanHistory/ScanHistory'

export const Layout = () => {
  // const arr = [1, 2, 3]
  // const jarr = JSON.stringify(arr, 9)
  // console.log(JSON.parse(jarr))
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
        <Route path="/scanHistory" element={<ScanHistory />} />
      </Routes>
    </div>
  )
}
