import { FC, MouseEventHandler } from 'react'

interface PrimaryButtonProps {
  name: string
  onClick: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  name,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={`
        flex gap-2 h-15 cursor-pointer text-[#E6FBF2] font-bold text-[16px]
        rounded-[30px] bg-[#013941] w-full items-center justify-center
        hover:opacity-90 transition-opacity
      `}
      style={{ padding: '20px 40px' }}
    >
      {name}
    </button>
  )
}

export default PrimaryButton
