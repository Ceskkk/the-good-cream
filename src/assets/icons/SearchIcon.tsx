interface CartIconProps {
  onClick: () => void
}

function SearchIcon ({ onClick }: CartIconProps): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={27}
      height={26}
      fill='none'
      className='group cursor-pointer'
      onClick={onClick}
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12.375 20.583c4.97 0 9-3.88 9-8.666 0-4.787-4.03-8.667-9-8.667s-9 3.88-9 8.667c0 4.786 4.03 8.666 9 8.666ZM23.625 22.75l-4.894-4.712'
        className='text-black group-hover:text-tgc-green transition-colors'
      />
    </svg>
  )
}

export default SearchIcon
