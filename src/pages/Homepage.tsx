import FileOperation from '@/components/FileOperation'
import FooterSelector from '@/components/FooterSelector'
import InputSection from '@/components/InputSection'
import PdfViewer from '@/components/PdfViewer'
import { useAppSelector } from '@/store/hooks'

function Homepage() {
  const footer = useAppSelector((state) => state.footer)
  return (
    <div className="grid grid-cols-2 m-4">
      <div>
        <div className="flex flex-row w-full">
          <FileOperation />
          <FooterSelector />
        </div>
        <div className="border-solid border-blue-500 border-2 rounded-xl m-4">
          <InputSection />
        </div>
      </div>
      <PdfViewer footer={footer} />
    </div>
  )
}

export default Homepage
