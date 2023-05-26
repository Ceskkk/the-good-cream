import { FormEvent } from 'react'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function NewsletterBanner (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')
  const han = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <section className={`flex items-center justify-between bg-[#F7F6F2] ${isMobile ? 'px-6 pt-10 pb-20 flex-col text-center' : 'px-28 py-10 gap-10'}`}>
      <h1 className={`text-3xl ${isMobile ? 'mb-14' : ''}`}>Newsletter <br /> The Good Cream</h1>
      <h2 className={`text-2xl font-medium text-center ${isMobile ? 'mb-6' : ''}`}>Suscríbete para recibir <br /> novedades y ofertas exclusivas</h2>
      <form className={`relative ${isMobile ? 'w-full max-w-[400px]' : ''}`} onSubmit={(e) => han(e)}>
        <input
          type='email' placeholder='Dirección de correo'
          className={`${isMobile ? 'w-full max-w-[400px]' : 'min-w-[300px]'} text-2xl py-2 border-b-2 border-black outline-none placeholder:text-black placeholder:text-2xl bg-[#F7F6F2]`}
        />
        <button className='absolute right-0 top-4'>
          <ArrowRightIcon />
        </button>
      </form>
    </section>
  )
}
