import FileOperation from '@/components/FileOperation'
import InputSection from '@/components/InputSection'
import PdfViewer from '@/components/PdfViewer'

function Homepage() {
  return (
    <div className="grid grid-cols-2 m-4">
      <div>
        <FileOperation />
        <div className="border-solid border-blue-500 border-2 rounded-xl m-4">
          <InputSection />
        </div>
      </div>
      <PdfViewer />
    </div>
  )
}

export default Homepage
