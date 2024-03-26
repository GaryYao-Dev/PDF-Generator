import { FC } from 'react'
import { toggleLink, togglePageNumber } from '@/store/footerSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const FooterSelector: FC = () => {
  const dispatch = useAppDispatch()
  const { showLink, showPageNumber } = useAppSelector((state) => state.footer)
  const handleLinkBoxChange = () => {
    dispatch(toggleLink())
  }
  const handlePageNumberBoxChange = () => {
    dispatch(togglePageNumber())
  }
  return (
    <div className="flex flex-col gap-2 mr-4">
      <div>
        <input
          type="checkbox"
          id="link"
          name="link"
          checked={showLink}
          onChange={handleLinkBoxChange}
        />
        <label htmlFor="link">Show link</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="page"
          name="page"
          checked={showPageNumber}
          onChange={handlePageNumberBoxChange}
        />
        <label htmlFor="page">Show page number</label>
      </div>
    </div>
  )
}

export default FooterSelector
