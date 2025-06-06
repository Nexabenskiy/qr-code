import QRCode from 'react-qr-code'

import { GENERATE_DATA } from '../../constants'

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginTop: '230px' }}>
      {data.map((item, index) => {
        return (
          <div
            key={`${index}_${item}`}
            style={{ display: 'flex', flexDirection: 'column', alignAtems: 'center', justifyContent: 'center', gap: 15, width: '100%', borderBottom: 1, borderBottomStyle: 'solid', paddingBottom: 18 }}
          >
            <span style={{ fontSize: 25, marginBlock: '0px' }}>{item}</span>

            <QRCode size={80} style={{ height: 'auto', maxWidth: 80, width: '100%' }} value={item} viewBox={`0 0 256 256`} />
          </div>
        )
      })}
    </div>
  )
}
