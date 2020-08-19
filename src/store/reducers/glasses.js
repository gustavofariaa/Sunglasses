const INITIAL_STATE = {
  model: 'sunglass',
  frameColor: '#232323',
  lensColor: '#6246E9',
  templeTipsColor: '#232323',
  value: 99.99,
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'CHANGE_FRAME_COLOR':
      return { ...state, frameColor: action.color }

    case 'CHANGE_TEMPLE_TIPS_COLOR':
      return { ...state, templeTipsColor: action.color }

    case 'CHANGE_LENS_COLOR':
      return { ...state, lensColor: action.color }

    case 'CHANGE_MODEL':
      return { ...state, model: action.model }

    default: return state
  }
};
