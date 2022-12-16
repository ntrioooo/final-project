import axios from "axios";

export const POST_ISIDETAIL = 'POST_ISIDETAIL';

export const postIsiDetail = (data) => (dispatch) => {
    console.log('2. masuk action isi detail');
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
    //   console.log('3. Berhasil dapat API');
      // berhasil
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
    //   console.log('3. Gagal dapat API', error);
      // error
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