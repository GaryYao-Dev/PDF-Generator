import { FC, useState } from 'react'
import ProfessionItem from './components/professionItem'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addProfession, updateProfession } from '@/store/dataSlice'
import titleGenerator from '@/utils/titleGenerator'
import { Field, Fields } from '@/types/Fields'
import _ from 'lodash'

interface ProfessionSectionProps {
  initData: Fields
}

const ProfessionSection: FC<ProfessionSectionProps> = (props) => {
  const { initData } = props
  const dispatch = useAppDispatch()
  const profession = useAppSelector((state) => state.data.profession)
  const [fields, setFields] = useState(
    JSON.parse(JSON.stringify(profession)) as Fields[]
  )
  const handleAdd = () => {
    setFields([...fields, initData])
    dispatch(addProfession(initData))
  }
  const handleItemDelete = (index: number) => {
    const newFields = _.cloneDeep(fields)
    newFields.splice(index, 1)
    setFields(newFields)
  }

  const handleItemSave = (index: number) => {
    const newFields = _.cloneDeep(fields)
    newFields.forEach((field) => {
      field.editMode = false
    })
    setFields(newFields)
    dispatch(updateProfession({ index, data: fields[index] }))
  }

  const handleItemCancel = () => {
    setFields([...profession])
  }
  const handleItemEdit = (index: number, name: string, value: string) => {
    const newFields = _.cloneDeep(fields)
    const newField = { ...newFields[index] }
    const field = { ...newField.data[name as keyof typeof newField.data] }
    console.log(field)
    if (field) {
      field.value = value
      newField.data[name as keyof typeof newField.data] = field as Field
    }
    newFields[index] = newField
    setFields(newFields)
  }

  return (
    <>
      {fields.map((field, index) =>
        field.editMode ? (
          <ProfessionItem
            key={`edit-${index}`}
            setItem={handleItemEdit}
            index={index}
            item={field}
            operation={{
              delete: () => handleItemDelete(index),
              save: () => handleItemSave(index),
              cancel: () => handleItemCancel(),
            }}
          />
        ) : (
          <div
            key={`display-${index}`}
            className="flex flex-row gap-2 items-center justify-between">
            <div>
              {titleGenerator(field)}
              <p>{`${field.data.startDate?.value} - ${
                field.data.endDate?.value || 'current'
              }`}</p>
            </div>
            <img
              className="w-6 h-6"
              src="/src/assets/edit.svg"
              alt="edit"
              onClick={() => {
                const newFields = fields.map((field) => ({ ...field }))
                newFields[index].editMode = true
                setFields(newFields)
              }}
            />
          </div>
        )
      )}
      <button onClick={handleAdd} className="text-blue-500 font-bold py-2">
        + Add More
      </button>
    </>
  )
}

export default ProfessionSection
