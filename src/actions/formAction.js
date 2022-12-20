import axios from "axios";

export const POST_ISIDETAIL = 'POST_ISIDETAIL';
export const GET_ISIDETAIL = 'GET_ISIDETAIL'

export const postIsiDetail = (data) => (dispatch) => {
    dispatch({
        type: POST_ISIDETAIL,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });

      // POST API
  axios({
    method: 'POST',
    url: 'https://6390373c0bf398c73a805426.mockapi.io/booking/',
    timeout: 120000,
    data: data,
  })
    .then((response) => {
      dispatch({
        type: POST_ISIDETAIL,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: POST_ISIDETAIL,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
}


export const getIsiDetail = () => (dispatch) => {
    dispatch({
        type: GET_ISIDETAIL,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });

  axios({
    method: 'GET',
    url: 'https://6390373c0bf398c73a805426.mockapi.io/booking/',
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: GET_ISIDETAIL,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_ISIDETAIL,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
}