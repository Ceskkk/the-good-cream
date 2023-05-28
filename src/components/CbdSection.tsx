import CbdLogo from '../assets/icons/CbdLogo'
import QueEsElCbdIcon1 from '../assets/icons/QueEsElCbdIcon1'
import QueEsElCbdIcon2 from '../assets/icons/QueEsElCbdIcon2'
import QueEsElCbdIcon3 from '../assets/icons/QueEsElCbdIcon3'
import useMediaQuery from '../hooks/useMediaQuery'
import Button from './shared/Button'
import TitleSection from './shared/TitleSection'

export default function CbdSection (): JSX.Element {
  const isMobile = useMediaQuery('(max-width:1100px)')

  const articleStyle = isMobile ? 'flex items-center mb-12 px-6' : 'flex mb-24'
  const pStyle = isMobile ? 'text-lg ml-10' : 'text-xl ml-10 w-[350px]'

  return (
    <section className='flex flex-wrap border-b-2 border-black'>
      <TitleSection>
        <div className='flex bg-tgc-green p-2 rounded-full mr-4'>
          <CbdLogo />
        </div>
        ¿Qué es el CBD?
      </TitleSection>
      <div className={`flex flex-col items-end bg-[#F7F6F2] ${isMobile ? 'w-full pt-16 pb-12' : 'w-[50%] pt-24 pb-16 pr-20'}`}>
        <article className={articleStyle}>
          <div>
            <QueEsElCbdIcon1 />
          </div>
          <p className={pStyle}>El cannabidiol, o CBD, es uno de los compuestos de la planta Cannabis Sativa con mayores beneficios para tu piel y un gran aliado en la cosmética.</p>
        </article>
        <article className={articleStyle}>
          <div>
            <QueEsElCbdIcon2 />
          </div>
          <p className={pStyle}>El CBD está transformando la industria de la belleza y el bienestar, derribando todas las barreras sociales que despertaban el escepticismo.</p>
        </article>
        <article className={articleStyle}>
          <div>
            <QueEsElCbdIcon3 />
          </div>
          <p className={pStyle}>Otros de los grandes beneficios de este activo además de su poder hidratante y antioxidante son los de antiinflamatorio y calmante. </p>
        </article>
        {isMobile
          ? undefined
          : (
            <div className='mr-[180px]'>
              <Button text='Saber más' />
            </div>
            )}

      </div>
      <div className={`flex bg-[#F7F6F2] ${isMobile ? 'w-full justify-center' : 'w-[50%]'}`}>
        <img src='/que-es-el-cbd/que_es_el_cbd.jpg' alt='Mano con cuentagotas lleno de cbd líquido' />
      </div>
    </section>
  )
}
