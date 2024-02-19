import { Fields } from '@/types/Fields'

const titleGenerator = (item: Fields): string => {
  const { role, department, place } = item.data
  const parts = [
    role?.value,
    role?.value && department?.value ? 'of' : null,
    department?.value,
    (role?.value || department?.value) && place?.value ? 'at' : null,
    place?.value,
  ]

  return parts.filter(Boolean).join(' ')
}

export default titleGenerator
