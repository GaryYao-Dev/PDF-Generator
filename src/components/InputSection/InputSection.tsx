import { FC } from 'react'
import 'react-quill/dist/quill.snow.css'
import Skills from './components/Skills'
import ProfessionSection from './components/ProfessionSection'
import {
  educationInitData,
  professionInitData,
  projectInitData,
} from '@/utils/constants/initialData'
import PersonalDetail from './components/PersonalDetail'
import Summary from '../Summary'

const InputSection: FC = () => {
  const template = [
    {
      title: 'Personal Detail',
      component: <PersonalDetail />,
    },
    {
      title: 'Personal Summary',
      component: <Summary />,
    },
    { title: 'Skills', component: <Skills /> },
    {
      title: 'Professional Experience',
      component: (
        <ProfessionSection initData={professionInitData} type="Profession" />
      ),
    },
    {
      title: 'Projects',
      component: (
        <ProfessionSection initData={projectInitData} type="Project" />
      ),
    },
    {
      title: 'Education',
      component: (
        <ProfessionSection initData={educationInitData} type="Education" />
      ),
    },
  ]
  return (
    <div className="p-6 flex flex-col gap-4">
      {template.map((section, index) => (
        <div key={index}>
          <h2
            className="my-4 relative before:content-[''] before:absolute before:-left-2 before:top-1 before:w-[3px] before:h-6 before:bg-blue-500"
            style={{}}>
            {section.title}
          </h2>
          {section.component}
        </div>
      ))}
    </div>
  )
}

export default InputSection
