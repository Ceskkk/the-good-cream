function InstagramIcon (): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='none'
      className='group'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z'
        className='text-black group-hover:text-tgc-green transition-colors'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37ZM17.5 6.5h.01'
        className='text-black group-hover:text-tgc-green transition-colors'
      />
    </svg>
  )
}

export default InstagramIcon
