import QRCode from 'react-qr-code'

import { SCAN_DATA } from '../../constants'
// console.log(SCAN_DATA)

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
  console.log(data)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginTop: 232 }}>
      {data.map((item, index) => {
        return (
          <div
            key={`${item}_${index}`}
            style={{ display: 'flex', flexDirection: 'column', alignAtems: 'center', justifyContent: 'center', gap: 15, width: '100%', borderBottom: 1, borderBottomStyle: 'solid', paddingBottom: 18 }}
          >
            <p style={{ fontSize: 25, marginBlock: '0px' }}>{item}</p>
            <QRCode size={80} style={{ height: 'auto', maxWidth: 80, width: '100%' }} value={item} viewBox={`0 0 256 256`} />
          </div>
        )
      })}
    </div>
  )
}
