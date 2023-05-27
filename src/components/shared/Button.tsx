interface ButtonProps {
  text: string
}

export default function Button ({ text }: ButtonProps): JSX.Element {
  return (
    <button className='text-white text-lg bg-tgc-green px-12 py-2 rounded-full hover:shadow-lg hover:font-medium'>{text}</button>
  )
}
