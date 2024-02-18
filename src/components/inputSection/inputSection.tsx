import { FC } from 'react'
import 'react-quill/dist/quill.snow.css'
import Quill from '../quill'
import Skills from './components/skills'
import ProfessionSection from './components/professionSection'
import {
  educationInitData,
  professionInitData,
} from '@/utils/constants/initialData'

const template = [
  // {
  //   title: 'Personal Detail',
  //   component: <PersonalDetail />,
  // },
  {
    title: 'Personal Summary',
    component: <Quill />,
  },
  { title: 'Skills', component: <Skills /> },
  {
    title: 'Professional Experience',
    component: <ProfessionSection initData={professionInitData} />,
  },
  {
    title: 'Education',
    component: <ProfessionSection initData={educationInitData} />,
  },
]

const InputSection: FC = () => {
  return (
    <div className="p-8 flex flex-col gap-4">
      {template.map((section, index) => (
        <div key={index}>
          <h2 className="my-4">{section.title}</h2>
          {section.component}
        </div>
      ))}
    </div>
  )
}

export default InputSection
