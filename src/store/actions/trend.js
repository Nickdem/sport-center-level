import {
  END_DISABLED,
  TREND_MOVE_CONTENT,
  START_DISABLED,
  TREND_BACK_CONTENT
} from './actionTypes'

export function endDisabled() {
  return {
    type: END_DISABLED
  }
}

export function trendMoveContent(backDisabled) {
  return {
    type: TREND_MOVE_CONTENT
  }
}

export function clickMoveHandler(indx) {
  return (dispatch, getState) => {
    const state = getState().trend

    if (this.endOfLenght(state)) {
      dispatch(endDisabled())
    } else {
      dispatch(trendMoveContent(state.activeDiv + 1))
    }
  }
}

export function startDisabled() {
  return {
    type: START_DISABLED
  }
}

export function trendBackContent(moveDisabled) {
  return {
    type: TREND_BACK_CONTENT
  }
}

export function clickBackHandler(indx) {
  return (dispatch, getState) => {
    const state = getState().trend
    if (this.startOfLength(state)) {
      dispatch(startDisabled())
    } else {
      dispatch(trendBackContent(state.activeDiv - 1))
    }
  }
}

function endOfLenght(state) {
  return this.state.activeDiv + 1 === this.state.trend.length
}

function startOfLength(state) {
  return this.state.activeDiv - 1 === -1
}
