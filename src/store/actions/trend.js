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

export function trendMoveContent(number) {
  return {
    type: TREND_MOVE_CONTENT,
    number
  }
}

export function clickMoveHandler(indx) {
  return (dispatch, getState) => {
    const state = getState().trend

    if (endOfLenght(state)) {
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

export function trendBackContent(number) {
  return {
    type: TREND_BACK_CONTENT,
    number
  }
}

export function clickBackHandler(indx) {
  return (dispatch, getState) => {
    const state = getState().trend
    if (startOfLength(state)) {
      dispatch(startDisabled())
    } else {
      dispatch(trendBackContent(state.activeDiv - 1))
    }
  }
}

function endOfLenght(state) {
  return state.activeDiv + 1 === state.trend.length
}

function startOfLength(state) {
  return state.activeDiv - 1 === -1
}
