import { FC, useEffect, useState } from 'react'
import ProfessionItem from './components/ProfessionItem'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Field, Fields } from '@/types/Fields'
import _ from 'lodash'
import DisplayItem from './components/DisplayItem'

interface ProfessionSectionProps {
  initData: Fields
  type: string
}

const ProfessionSection: FC<ProfessionSectionProps> = (props) => {
  const { initData, type } = props
  const dispatch = useAppDispatch()
  const profession = useAppSelector(
    (state) =>
      state.data[type.toLowerCase() as keyof typeof state.data] as Fields[]
  )
  const [fields, setFields] = useState(_.cloneDeep(profession) as Fields[])

  useEffect(() => {
    setFields(_.cloneDeep(profession))
  }, [profession])

  const handleAdd = () => {
    setFields([...fields, initData])
    dispatch({ type: `data/add${type}`, payload: initData })
  }
  const handleItemDelete = (index: number) => {
    const newFields = _.cloneDeep(fields)
    newFields.splice(index, 1)
    setFields(newFields)
    dispatch({
      type: `data/delete${type}`,
      payload: index,
    })
  }

  const handleItemSave = (index: number) => {
    const newFields = _.cloneDeep(fields)
    newFields.forEach((field) => {
      field.editMode = false
    })
    setFields(newFields)
    dispatch({
      type: `data/update${type}`,
      payload: { index, data: fields[index] },
    })
  }

  const handleItemCancel = () => {
    setFields([...profession])
  }
  const handleItemEdit = (index: number, name: string, value: string) => {
    const newFields = _.cloneDeep(fields)
    const newField = { ...newFields[index] }
    const field = { ...newField.data[name as keyof typeof newField.data] }
    if (field) {
      field.value = value
      newField.data[name as keyof typeof newField.data] = field as Field
    }
    newFields[index] = newField
    setFields(newFields)
  }

  const handleDescChange = (index: number, value: string) => {
    const newFields = _.cloneDeep(fields)
    newFields[index].description = value
    setFields(newFields)
  }

  const handleEditClick = (index: number) => {
    const newFields = fields.map((field) => ({ ...field }))
    newFields[index].editMode = true
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
              editDesc: (value: string) => handleDescChange(index, value),
            }}
          />
        ) : (
          <div
            key={`display-${index}`}
            className="flex flex-row gap-2 items-center justify-between">
            <DisplayItem
              field={field}
              openEdit={() => handleEditClick(index)}
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
