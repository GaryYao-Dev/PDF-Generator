/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '@/store/hooks'
import { FC } from 'react'

// interface PdfViewerProps {

// }

// const PdfViewer: FC<PdfViewerProps> = (props) => {
const PdfViewer: FC = () => {
  // const {} = props
  const data = useAppSelector((state) => state.data)
  function renderObj(obj: any, key = '') {
    return (
      <div key={key}>
        {Object.entries(obj).map(([k, v], i) => {
          const newKey = `${key}.${k}`
          if (typeof v === 'object' && v !== null) {
            return renderObj(v, newKey)
          } else {
            if (k === 'label' || k === 'value') {
              return <p key={newKey}>{`${k}: ${v}`}</p>
            }
          }
        })}
      </div>
    )
  }
  return <>{renderObj(data)}</>
}

export default PdfViewer
