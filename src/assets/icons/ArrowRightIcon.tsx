interface ArrowRightIconProps {
  color: string
}

export default function ArrowRightIcon ({ color }: ArrowRightIconProps): JSX.Element {
  return (
    <div className='group absolute w-[25px] h-[20px] top-[50%] right-[50%] -translate-y-1/2 translate-x-1/2'>
      <div className={`rounded-full absolute w-[90%] h-[3px] top-[50%] right-[1px] group-hover:bg-tgc-green -translate-y-1/2 bg-${color}`} />
      <div className={`rounded-full  absolute w-[60%] h-[3px] top-[3px] right-[1px] group-hover:bg-tgc-green rotate-45 bg-${color}`} />
      <div className={`rounded-full  absolute w-[60%] h-[3px] top-[14px] right-[1px] group-hover:bg-tgc-green -rotate-45 bg-${color}`} />
    </div>
  )
}
