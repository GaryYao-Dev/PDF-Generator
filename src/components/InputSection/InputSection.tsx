import { FC } from 'react'
import 'react-quill/dist/quill.snow.css'
import Section from './components/Section'
import {
  educationInitData,
  professionInitData,
  projectInitData,
  skillInitData,
} from '@/utils/constants/initialData'
import PersonalDetail from './components/PersonalDetail'
import Summary from '../Summary'

const InputSection: FC = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <PersonalDetail title="Personal Detail" />
      <Summary title="Personal Summary" />
      <Section initData={skillInitData} type="Skill" title="Skills" />
      <Section
        initData={professionInitData}
        type="Profession"
        title="Professional Experience"
      />
      <Section
        initData={projectInitData}
        type="Project"
        title="Project Experience"
      />
      <Section
        initData={educationInitData}
        type="Education"
        title="Education"
      />
    </div>
  )
}

export default InputSection
