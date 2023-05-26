interface CartIconProps {
  onClick: () => void
}

function UserIcon ({ onClick }: CartIconProps): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={26}
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
        d='M21.667 22.75v-2.167a4.333 4.333 0 0 0-4.334-4.333H8.667a4.333 4.333 0 0 0-4.334 4.333v2.167M13 11.917a4.333 4.333 0 1 0 0-8.667 4.333 4.333 0 0 0 0 8.667Z'
        className='text-black group-hover:text-tgc-green transition-colors'
      />
    </svg>
  )
}

export default UserIcon
