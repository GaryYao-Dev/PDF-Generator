// const keys = {
//   place: ['company', 'university'],
//   position: ['position', 'degree'],
//   department: ['department', 'major'],
//   location: ['city'],
//   startDate: ['startDate'],
//   endDate: ['endDate'],
// }
type sectionItem = {
  // __brand: 'sectionItem'
  company?: string
  university?: string
  position?: string
  degree?: string
  department?: string
  major?: string
  city: string
  startDate: Date
  endDate: Date
}

// function isSectionItem(item: sectionItem): item is sectionItem {
//   const valueArray = Object.values(keys)
//   for (const value of valueArray) {
//     const contains = value.some((key) => item.hasOwnProperty(key))
//     if (!contains) return false
//   }
//   return true
// }

const titleGenerator = (item: sectionItem): string => {
  const titleElement = {
    place: item.company || item.university,
    position: item.position || item.degree,
    department: item.department || item.major,
  }
  const parts = [
    titleElement.position,
    titleElement.position && titleElement.department ? 'of' : null,
    titleElement.department,
    (titleElement.position || titleElement.department) && titleElement.place ? 'at' : null,
    titleElement.place
  ];

  return parts.filter(Boolean).join(' ');
}

export default titleGenerator
