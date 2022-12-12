import { GET_LIST_AIRLINES } from '../../actions/airlinesAction';

const initialState = {
  getListAirlinesResult: false,
  getListAirlinesLoading: false,
  getListAirlinesError: false,
};

const Airlines = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_AIRLINES:
      return {
        ...state,
        getListAirlinesResult: action.payload.data,
        getListAirlinesLoading: action.payload.loading,
        getListAirlinesError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Airlines;
