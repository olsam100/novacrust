import { components, ControlProps } from 'react-select'
import ChevronDown from '@/assets/icons/chevron-down'
import { SelectOption } from './card'

export const CustomControl = (props: ControlProps<SelectOption>) => {
  const { getValue } = props

  return (
    <components.Control {...props}>
      <div className='flex w-full items-center justify-between px-3 py-2'>
        <div className='flex items-center gap-2'>
          {getValue()[0]?.icon}
          <span>{getValue()[0]?.label}</span>
        </div>
        <ChevronDown />
      </div>
    </components.Control>
  )
}
