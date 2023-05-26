interface CartIconProps {
  cartItems: number
  onClick: () => void
}

function CartIcon ({ cartItems, onClick }: CartIconProps): JSX.Element {
  return (
    <div className='relative group' onClick={onClick}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={26}
        height={26}
        fill='none'
        className='cursor-pointer'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M9.75 23.833a1.083 1.083 0 1 0 0-2.166 1.083 1.083 0 0 0 0 2.166ZM21.667 23.833a1.083 1.083 0 1 0 0-2.166 1.083 1.083 0 0 0 0 2.166ZM1.083 1.083h4.334L8.32 15.59a2.166 2.166 0 0 0 2.167 1.744h10.53a2.166 2.166 0 0 0 2.166-1.744L24.917 6.5H6.5'
          className='text-black group-hover:text-tgc-green transition-colors'
        />
      </svg>
      <div className='absolute -top-1 -right-3 bg-black text-white center rounded-full p-1 h-5 leading-3 cursor-pointer group-hover:bg-tgc-green transition-colors'>{cartItems}</div>
    </div>
  )
}
export default CartIcon
