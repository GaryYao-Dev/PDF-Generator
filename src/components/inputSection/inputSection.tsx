import { FC } from 'react'
import 'react-quill/dist/quill.snow.css'
import Quill from '../quill'
import Skills from './components/skills'
import PersonalDetail from './components/personalDetail'
import ProfessionSection from './components/professionSection'

const template = [
  {
    title: 'Personal Detail',
    component: <PersonalDetail />,
  },
  {
    title: 'Personal Summary',
    component: <Quill />,
  },
  { title: 'Skills', component: <Skills /> },
  {
    title: 'Professional Experience',
    component: <ProfessionSection />,
  },
]

const InputSection: FC = () => {
  return (
    <div className="p-8 flex flex-col gap-4">
      {template.map((section, index) => (
        <div key={index}>
          <h2 className="title">{section.title}</h2>
          {section.component}
        </div>
      ))}
    </div>
  )
}

export default InputSection
