import { FC, useState } from 'react'
import EditableText from '../../../editableText'

const initData = [
  {
    title: 'Front end',
    content:
      'JavaScript ES6, Typescript, HTML5, CSS3, Java, React, React-Redux, Redux- Toolkit, MUI, Styled component, SASS, Tailwind CSS, Azure, Regex',
  },
]

const Skills: FC = () => {
  const [data, setData] =
    useState<{ title: string; content: string }[]>(initData)
  const [content, setContent] = useState('TEST')

  const handleAddMore = () => {
    setData([
      ...data,
      { title: 'New Skill Title', content: 'New Skill Content' },
    ])
  }
  const handleEdit = (
    index: number,
    key: keyof { title: string; content: string },
    value: string,
  ) => {
    const newData = [...data]
    newData[index][key] = value
    setData(newData)
  }

  const handleDelete = (index: number) => {
    const newData = [...data]
    newData.splice(index, 1)
    setData(newData)
    console.log(newData)
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
          />
          <div className={`px-2`}>
            <EditableText
              content={section.content}
              setContent={(value) => handleEdit(index, 'content', value)}
              className="text-base w-full"
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
