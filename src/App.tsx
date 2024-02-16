import './App.css'
import InputSection from './components/inputSection'

function App() {
  return (
    <div className="grid grid-cols-2 m-4">
      <div className="border-solid border-blue-500 border-2 rounded-xl m-4">
        <InputSection />
      </div>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
  )
}

export default App
