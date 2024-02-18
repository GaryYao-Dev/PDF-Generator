const profession = new Map([
  ['place', 'Company'],
  ['role', 'Position'],
  ['department', 'Department'],
  ['location', 'Location'],
  ['startDate', 'Start Date'],
  ['endDate', 'End Date'],
])

const education = new Map([
  ['place', 'University'],
  ['role', 'Degree'],
  ['department', 'Major'],
  ['location', 'Location'],
  ['startDate', 'Start Date'],
  ['endDate', 'End Date'],
])

export function getLabel(input: string, type: string) {
  const map = type === 'profession' ? profession : education
  return map.get(input) || ''
}
