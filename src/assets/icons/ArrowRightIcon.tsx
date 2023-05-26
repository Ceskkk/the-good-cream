export default function ArrowRightIcon (): JSX.Element {
  return (
    <div className='absolute w-[25px] h-[20px] top-0 right-0 group'>
      <div className='absolute w-[90%] h-[3px] top-[50%] -translate-y-1/2 bg-black group-hover:bg-tgc-green' />
      <div className='absolute w-[60%] h-[3px] top-[3px] right-[1px] bg-black rotate-45 group-hover:bg-tgc-green' />
      <div className='absolute w-[60%] h-[3px] top-[14px] right-[1px] bg-black -rotate-45 group-hover:bg-tgc-green' />
    </div>
  )
}
