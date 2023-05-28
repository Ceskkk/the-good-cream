function FemaleIcon (): JSX.Element {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={19}
      height={31}
      fill='none'
    >
      <path
        stroke='#000'
        strokeLinecap='round'
        strokeWidth={2}
        d='M10 30V18M4 24h12'
      />
      <circle cx={9.5} cy={9.5} r={8.5} stroke='#000' strokeWidth={2} />
    </svg>
  )
}

export default FemaleIcon
