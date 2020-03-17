import React, {Component} from 'react'
import classes from './Trend.module.css'
import TrendText from '../../components/TrendText/TrendText'
import TrendDecor from '../../components/TrendDecor/TrendDecor'

class Trend extends Component {
  state = {
    activeDiv: 0,
    backDisabled: true,
    moveDisabled: false,
    trend: [
      {textName: 'Сделайте свой выбор!', textPar: 'Здесь вы можете найти множество видов спорта. У нас их очень много! Мы предлагаем посетить бесплатное вводное занятие, чтобы узнать, почему так много людей занимаются спортом и придерживаются здорового образа жизни.'},
      {textName: 'Cкоростно-силовые', textPar: 'В данном направлении главным качеством является проявление взрывной, короткой по времени и очень интенсивной физической деятельности. Сюда включены: легкоатлетические виды спорта, метание, спринтерские номера программы в различных видах спорта.'},
      {textName: 'Циклические', textPar: 'Тут же одно и то же движение повторяется многократно, расходуется большое количество энергии, а сама работа выполняется, с высокой и очень высокой интенсивностью. Сюда включены: беговые дисциплины легкой атлетики, плавание, гребля, велоспорт, лыжный, конькобежный спорт.'},
      {textName: 'Координационные', textPar: 'Если в других видах спорта внимание уделяется силе, то здесь акцент ставится на координацию, равновесие и на осуществление движений сложных по своему выполнению. Сюда включены: спортивная и художественная гимнастика, фигурное катание на коньках, прыжки в воду и др.'},
      {textName: 'Единоборства ', textPar: 'Вид спортивного состязания, в котором два участника физически противодействуют друг другу с целью выявить победителя в схватке, используя только физическую силу и действуя в рамках установленных правил. Сюда включены: все виды борьбы и бокса.'},
      {textName: 'Спортивные игры', textPar: 'Самостоятельные виды спорта, связанные с игровым противоборством команд или отдельных спортсменов, и проводящиеся по определенным правилам. Сюда включены: футбол, хоккей, волейбол и т. д.'}
    ]
  }

  onClickMoveHandler = indx => {
    if (this.endOfLenght()) {
      this.setState({
         moveDisabled: true
      })
    } else {
      this.setState({
        activeDiv: this.state.activeDiv + 1,
        backDisabled: false
      })
    }
  }

  onClickBackHandler = indx => {
    if (this.startOfLength()) {
      this.setState({
         backDisabled: true
      })
    } else {
      this.setState({
        activeDiv: this.state.activeDiv - 1,
        moveDisabled: false
      })
    }
  }

  endOfLenght() {
    return this.state.activeDiv + 1 === this.state.trend.length
  }

  startOfLength() {
    return this.state.activeDiv - 1 === -1
  }

  render() {
    return (
      <div className={classes.Trend}>
                <TrendText textName={this.state.trend[this.state.activeDiv].textName} textPar={this.state.trend[this.state.activeDiv].textPar} />
                <TrendDecor backDis={this.state.backDisabled} moveDis={this.state.moveDisabled} backHandler={this.onClickBackHandler} moveHandler={this.onClickMoveHandler}/>
      </div>
    )
  }
}

export default Trend
