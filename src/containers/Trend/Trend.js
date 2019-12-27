import React, {Component} from 'react'
import classes from './Trend.module.css'
import TrendContent from '../../components/Elements/TrendContent/TrendContent'
import {connect} from 'react-redux'
import {clickMoveHandler, clickBackHandler} from '../../store/actions/trend'

class Trend extends Component {
  render() {
    return (
      <div className={classes.Trend}>
          <TrendContent
            backDisabled={this.props.backDisabled}
            moveDisabled={this.props.moveDisabled}
            textName={this.props.trend[this.props.activeDiv].textName}
            textPar={this.props.trend[this.props.activeDiv].textPar}
            clickMoveHandler={this.props.clickMoveHandler}
            clickBackHandler={this.props.clickBackHandler}
          />
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state.trend.activeDiv)
  return {
    activeDiv: state.trend.activeDiv,
    trend: state.trend.trend,
    backDisabled: state.trend.backDisabled,
    moveDisabled: state.trend.moveDisabled
  }
}

function mapDispatchToProps(displatch) {
  return {
    clickMoveHandler: indx => displatch(clickMoveHandler(indx)),
    clickBackHandler: indx => displatch(clickBackHandler(indx))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trend)
