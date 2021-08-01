import stls from '@/styles/components/sections/HelpWithEmployment.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import CorporateClients from '@/components/general/CorporateClients'
import { IconCircleCheck } from '@/components/icons'

const helpMeasures = [
  'Рекомендации по составлению портфолио и резюме',
  'Персональные консультации по развитию карьеры',
  'Подготовка к собеседованию в компаниях-партнёрах',
  'Помощь в поиске первых трех клиентов на частные консультации',
  'Модуль “Как зарабатывать психологу удаленно от 80 т.р.”',
  'Симулятор собеседования'
]

const HelpWithEmployment = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Помощь в трудоустройстве</h2>
        <ul className={stls.list}>
          {helpMeasures.map((measure, idx) => (
            <li key={measure + idx} className={stls.item}>
              <IconCircleCheck calpha />
              {measure}
            </li>
          ))}
        </ul>
        <CorporateClients />
      </Wrapper>
    </section>
  )
}

export default HelpWithEmployment