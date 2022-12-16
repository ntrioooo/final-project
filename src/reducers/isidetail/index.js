import { POST_ISIDETAIL } from '../../actions/airlinesAction';

const initialState = {
  postIsiDetailResult: false,
  postIsiDetailLoading: false,
  postIsiDetailError: false,
};

const Airlines = (state = initialState, action) => {
  switch (action.type) {
    case POST_ISIDETAIL:
      return {
        ...state,
        postIsiDetailResult: action.payload.data,
        postIsiDetailLoading: action.payload.loading,
        postIsiDetailError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default Airlines;
