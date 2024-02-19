import { getLabel } from './toTitleCase'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toDetailObj = (item: any) =>
  Object.entries(item).reduce((acc, [key, value]) => {
    Object.assign(acc, {
      [key]: {
        label: getLabel(key, 'profession'),
        value,
        type: key.includes('Date') ? 'date' : 'text',
      },
    })
    return acc
  }, {})

export default toDetailObj
