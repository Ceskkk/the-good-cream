const hamburgerIconLines = [...Array(3)].map((_, i) =>
  <div key={i} className='bg-black w-full h-[2px] rounded-full group-hover:bg-tgc-green transition-colors' />
)

interface HamburgerIconProps {
  onClick: () => void
}

function HamburgerIcon ({ onClick }: HamburgerIconProps): JSX.Element {
  return (
    <div className='flex flex-col justify-center w-[22px] h-[22px] gap-1 cursor-pointer group' onClick={onClick}>
      {hamburgerIconLines}
    </div>
  )
}

export default HamburgerIcon
