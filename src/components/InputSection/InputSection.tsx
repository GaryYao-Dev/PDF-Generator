import { FC } from 'react'
import 'react-quill/dist/quill.snow.css'
import ProfessionSection from './components/ProfessionSection'
import {
  educationInitData,
  professionInitData,
  projectInitData,
  skillInitData,
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
    {
      title: 'Skills',
      component: <ProfessionSection initData={skillInitData} type="Skill" title='Skills' />,
    },
    {
      title: 'Professional Experience',
      component: (
        <ProfessionSection initData={professionInitData} type="Profession" title='Professional Experience'/>
      ),
    },
    {
      title: 'Projects',
      component: (
        <ProfessionSection initData={projectInitData} type="Project" title='Project Experience'/>
      ),
    },
    {
      title: 'Education',
      component: (
        <ProfessionSection initData={educationInitData} type="Education" title='Education' />
      ),
    },
  ]
  return (
    <div className="p-6 flex flex-col gap-4">
      {template.map((section, index) => (
        <div key={index}>
          
          {section.component}
        </div>
      ))}
    </div>
  )
}

export default InputSection
