import { FC, useState } from 'react'
import ProfessionItem from './components/professionItem'
import toCamelCase from '../../../../utils/toCamelCase'

const professionFields = [
  {
    label: 'Company',
    type: 'text',
    required: true,
  },
  { label: 'Position', type: 'text', required: true },
  { label: 'Department', type: 'text', required: false },
  { label: 'Location', type: 'text', required: false },
  { label: 'Start Date', type: 'date', required: true },
  { label: 'End Date', type: 'date', required: false },
]

const ProfessionSection: FC = () => {
  const initValue = {}
  professionFields.map((field) => {
    Object.assign(initValue, {
      [toCamelCase(field.label)]: field.type === 'date' ? new Date() : '',
    })
  })
  const [values, setValues] = useState(initValue)
  console.log(values)
  return (
    <>
      {/* {values.map((value, index) => )} */}
      <ProfessionItem fields={professionFields} />
    </>
  )
}

export default ProfessionSection
