import { components, OptionProps } from 'react-select'
import { SelectOption } from './card'

export const CustomOption = (props: OptionProps<SelectOption>) => {
  const { data } = props
  return (
    <components.Option {...props}>
      <div className='flex items-center gap-2'>
        {data.icon}
        <span>{data.label}</span>
      </div>
    </components.Option>
  )
}
