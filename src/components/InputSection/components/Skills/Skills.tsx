import { FC, useEffect, useState } from 'react'
import EditableText from '../../../EditableText'
import { Skill } from '@/types/Fields'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addSkill, deleteSkill, updateSkill } from '@/store/dataSlice'
import _ from 'lodash'

const Skills: FC = () => {
  const dispatch = useAppDispatch()
  const initData = useAppSelector((state) => state.data.skills)
  const [data, setData] = useState<Skill[]>(initData)

  useEffect(() => {
    setData(initData)
  }, [initData])

  const handleAddMore = () => {
    const newData = { title: 'New Skill Title', content: 'New Skill Content' }
    setData([...data, newData])
    dispatch(addSkill(newData))
  }
  const handleEdit = (
    index: number,
    key: keyof { title: string; content: string },
    value: string
  ) => {
    const newData = _.cloneDeep(data)
    newData[index][key] = value
    setData(newData)
  }

  const handleDelete = (index: number) => {
    const newData = _.cloneDeep(data)
    newData.splice(index, 1)
    setData(newData)
    dispatch(deleteSkill(index))
  }

  const handleSubmit = () => {
    dispatch(updateSkill(data))
  }

  return (
    <>
      {data.map((section, index) => (
        <div key={index} className="">
          <EditableText
            content={section.title}
            setContent={(value) => handleEdit(index, 'title', value)}
            className="text-xl font-semibold"
            title={true}
            handleDelete={() => {
              console.log('clicked')
              handleDelete(index)
            }}
            submit={handleSubmit}
          />
          <div className={`px-2`}>
            <EditableText
              content={section.content}
              setContent={(value) => handleEdit(index, 'content', value)}
              className="text-base w-full"
              submit={handleSubmit}
            />
          </div>
        </div>
      ))}
      <button className="text-blue-500 font-bold py-2" onClick={handleAddMore}>
        + Add More
      </button>
    </>
  )
}

export default Skills
