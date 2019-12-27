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
            clickMoveHandler={this.clickMoveHandler}
            clickBackHandler={this.clickBackHandler}
          />
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(this.props)
  return {
    activeDiv: state.activeDiv,
    backDisabled: state.backDisabled,
    moveDisabled: state.moveDisabled,
    trend: state.trend
  }
}

function mapDispatchToProps(displatch) {
  return {
    clickMoveHandler: indx => displatch(clickMoveHandler(indx)),
    clickBackHandler: indx => displatch(clickBackHandler(indx))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trend)
