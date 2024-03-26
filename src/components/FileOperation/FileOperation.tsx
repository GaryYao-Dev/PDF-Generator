import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { FC } from 'react'

const FileOperation: FC = () => {
  const storedData = useAppSelector((state) => state.data)
  const dispatch = useAppDispatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSave = (data: any) => {
    const content = JSON.stringify(data)
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleLoad = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target) {
          const result = e.target.result
          if (typeof result === 'string') {
            const data = JSON.parse(result)
            dispatch({ type: 'data/load', payload: data })
          }
        }
      }
      reader.readAsText(file as Blob)
    }
    input.click()
  }

  return (
    <div className="flex justify-between mx-4 gap-8 grow">
      <button className="btn-primary w-full" onClick={() => handleSave(storedData)}>
        Save File
      </button>
      <button className="btn-primary w-full" onClick={handleLoad}>
        Load File
      </button>
    </div>
  )
}

export default FileOperation
