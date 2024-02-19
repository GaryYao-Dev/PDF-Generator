import { FC, useEffect, useState } from 'react'
import Quill from '../Quill'
import { updateSummary } from '@/store/dataSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const Summary: FC = () => {
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
