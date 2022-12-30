import axios from "axios";

export const GET_LIST_AIRLINES = "GET_LIST_AIRLINES";
export const GET_DETAIL_LIST_AIRLINES = "GET_DETAIL_LIST_AIRLINES";
export const ADD_LIST_AIRLINES = "ADD_LIST_AIRLINES";
export const DELETE_LIST_AIRLINES = "DELETE_LIST_AIRLINES";
export const EDIT_LIST_AIRLINES = "EDIT_LIST_AIRLINES";

const token = localStorage.getItem('token')

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
    method: "GET",
    // url: "http://localhost:8000/get-airport",
    url: "https://testdev5-production.up.railway.app/get-airport",
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      // console.log(response);
      dispatch({
        type: GET_LIST_AIRLINES,
        payload: {
          loading: false,
          data: response.data.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log(error);
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

// export const getListAirlines = () => async (dispatch) => {
//   dispatch({
//     type: GET_LIST_AIRLINES,
//     payload: {
//       loading: true,
//       data: false,
//       errorMessage: false,
//     },
//   });

//   try {
//     const response = await axios({
//       method: "GET",
//       url: "http://localhost:8000/get-airport",
//       timeout: 120000,
//     });
//     dispatch({
//       type: GET_LIST_AIRLINES,
//       payload: {
//         loading: false,
//         data: response.data,
//         errorMessage: false,
//       },
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_LIST_AIRLINES,
//       payload: {
//         loading: false,
//         data: false,
//         errorMessage: error.message,
//       },
//     });
//   }
// };

export const addListAirlines = (data) => (dispatch) => {
  dispatch({
    type: ADD_LIST_AIRLINES,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "POST",
    // url: "http://localhost:8000/add-schedule",
    url: "https://testdev5-production.up.railway.app/add-schedule",
    data: data,
    timeout: 120000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `${token}`
    }
  })
    .then((response) => {
      console.log(data);
      dispatch({
        type: ADD_LIST_AIRLINES,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log('ERRRRR', error);
      dispatch({
        type: ADD_LIST_AIRLINES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const getDetailListAirlines = (id) => (dispatch) => {
  dispatch({
    type: GET_DETAIL_LIST_AIRLINES,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: `https://6390373c0bf398c73a805426.mockapi.io/price_list/${id}`,
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: GET_DETAIL_LIST_AIRLINES,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DETAIL_LIST_AIRLINES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const deleteListAirlines = (id) => (dispatch) => {
  dispatch({
    type: DELETE_LIST_AIRLINES,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "delete",
    url: "https://6390373c0bf398c73a805426.mockapi.io/price_list/" + id,
    timeout: 120000,
  })
    .then((response) => {
      dispatch(getListAirlines());
    })
    .catch((error) => {
      dispatch({
        type: DELETE_LIST_AIRLINES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const editListAirlines = (id, data) => (dispatch) => {
  dispatch({
    type: DELETE_LIST_AIRLINES,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "put",
    url: "https://6390373c0bf398c73a805426.mockapi.io/price_list/" + id,
    data: data,
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: EDIT_LIST_AIRLINES,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: EDIT_LIST_AIRLINES,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
