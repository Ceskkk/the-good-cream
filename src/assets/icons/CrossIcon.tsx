const crossIconStyle = 'bg-black w-full h-[2px] rounded-full group-hover:bg-red-600 relative transition-colors'

interface CrossIconProps {
  onClick: () => void
}

function CrossIcon ({ onClick }: CrossIconProps): JSX.Element {
  return (
    <div className='flex flex-col cursor-pointer group w-[22px] h-[22px]' onClick={onClick}>
      <div className={`${crossIconStyle} rotate-45 top-[11px]`} />
      <div className={`${crossIconStyle} -rotate-45 bottom-[-9px]`} />
    </div>
  )
}

export default CrossIcon
