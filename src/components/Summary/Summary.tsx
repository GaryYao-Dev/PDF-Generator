import { FC, useEffect, useState } from 'react'
import Quill from '../Quill'
import { updateSummary } from '@/store/dataSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
interface SummaryProps {
  title: string
}
const Summary: FC<SummaryProps> = (props) => {
  const { title } = props

  const dispatch = useAppDispatch()
  const initSummary = useAppSelector((state) => state.data.summary)
  const [summary, setSummary] = useState(initSummary)

  useEffect(() => {
    setSummary(initSummary)
  }, [initSummary])

  const handleSummarySubmit = (value: string) => {
    dispatch(updateSummary(value))
  }
  return (
    <>
      <h2 className="my-4 relative before:content-[''] before:absolute before:-left-2 before:top-1 before:w-[3px] before:h-6 before:bg-blue-500">
        {title}
      </h2>
      <Quill value={summary} setValue={setSummary} />
      <div className="flex justify-end">
        <button
          className="btn-primary"
          onClick={() => handleSummarySubmit(summary)}>
          save
        </button>
      </div>
    </>
  )
}

export default Summary
