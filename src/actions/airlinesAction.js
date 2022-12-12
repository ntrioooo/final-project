import axios from 'axios';

export const GET_LIST_AIRLINES = 'GET_LIST_AIRLINES';

export const getListAirlines = () => (dispatch) => {
  dispatch({
    type: GET_LIST_AIRLINES,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: 'GET',
    url: 'https://6390373c0bf398c73a805426.mockapi.io/price_list/',
    timeout: 120000,
  })
    .then((response) => {
    //   console.log('3. Berhasil dapat API');
      // berhasil
      dispatch({
        type: GET_LIST_AIRLINES,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
    //   console.log('3. Gagal dapat API', error);
      // error
      dispatch({
        type: GET_LIST_AIRLINES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
