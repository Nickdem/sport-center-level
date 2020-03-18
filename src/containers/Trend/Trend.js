import React, {useState} from 'react'
import classes from './Trend.module.css'
import TrendText from '../../components/TrendText/TrendText'
import TrendDecor from '../../components/TrendDecor/TrendDecor'

const Trend = () => {
  const objTrend = [
    {textName: 'Сделайте свой выбор!', textPar: 'Здесь вы можете найти множество видов спорта. У нас их очень много! Мы предлагаем посетить бесплатное вводное занятие, чтобы узнать, почему так много людей занимаются спортом и придерживаются здорового образа жизни.'},
    {textName: 'Cкоростно-силовые', textPar: 'В данном направлении главным качеством является проявление взрывной, короткой по времени и очень интенсивной физической деятельности. Сюда включены: легкоатлетические виды спорта, метание, спринтерские номера программы в различных видах спорта.'},
    {textName: 'Циклические', textPar: 'Тут же одно и то же движение повторяется многократно, расходуется большое количество энергии, а сама работа выполняется, с высокой и очень высокой интенсивностью. Сюда включены: беговые дисциплины легкой атлетики, плавание, гребля, велоспорт, лыжный, конькобежный спорт.'},
    {textName: 'Координационные', textPar: 'Если в других видах спорта внимание уделяется силе, то здесь акцент ставится на координацию, равновесие и на осуществление движений сложных по своему выполнению. Сюда включены: спортивная и художественная гимнастика, фигурное катание на коньках, прыжки в воду и др.'},
    {textName: 'Единоборства ', textPar: 'Вид спортивного состязания, в котором два участника физически противодействуют друг другу с целью выявить победителя в схватке, используя только физическую силу и действуя в рамках установленных правил. Сюда включены: все виды борьбы и бокса.'},
    {textName: 'Спортивные игры', textPar: 'Самостоятельные виды спорта, связанные с игровым противоборством команд или отдельных спортсменов, и проводящиеся по определенным правилам. Сюда включены: футбол, хоккей, волейбол и т. д.'}
  ]

  const [move, setMove] = useState(false)
  const [count, setCount] = useState(0)
  const [back, setBack] = useState(true)

  const onClickMoveHandler = indx => {
    if (endOfLenght()) {
      setMove(true)
    } else {
      setCount(count + 1)
      setBack(false)
    }
  }

 const onClickBackHandler = indx => {
    if (startOfLength()) {
      setBack(true)
    } else {
      setCount(count - 1)
      setMove(false)
    }
  }

 const endOfLenght = () => {
    return count + 1 === objTrend.length
  }

 const startOfLength= () => {
    return count - 1 === -1
  }

    return (
      <div className={classes.Trend}>
        <TrendText trend = {objTrend[count]} />
        <TrendDecor backDis={back} moveDis={move} backHandler={onClickBackHandler} moveHandler={onClickMoveHandler}/>
      </div>
    )
}

export default Trend
