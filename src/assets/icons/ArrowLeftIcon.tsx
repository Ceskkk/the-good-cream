interface ArrowLeftIconProps {
  color: string
}

export default function ArrowLeftIcon ({ color }: ArrowLeftIconProps): JSX.Element {
  return (
    <div className='group absolute w-[25px] h-[20px] top-[50%] right-[50%] -translate-y-1/2 translate-x-1/2 group'>
      <div className={`rounded-full absolute w-[90%] h-[3px] top-[50%] left-[1px] -translate-y-1/2 group-hover:bg-tgc-green bg-${color}`} />
      <div className={`rounded-full absolute w-[60%] h-[3px] top-[3px] left-[1px] rotate-[140deg] group-hover:bg-tgc-green bg-${color}`} />
      <div className={`rounded-full absolute w-[60%] h-[3px] top-[14px] left-[1px] -rotate-[140deg] group-hover:bg-tgc-green bg-${color}`} />
    </div>
  )
}
