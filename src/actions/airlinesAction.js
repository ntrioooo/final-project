import axios from "axios";

export const GET_LIST_AIRLINES = "GET_LIST_AIRLINES";
export const GET_DETAIL_LIST_AIRLINES = "GET_DETAIL_LIST_AIRLINES";
export const ADD_LIST_AIRLINES = "ADD_LIST_AIRLINES";
export const DELETE_LIST_AIRLINES = "DELETE_LIST_AIRLINES";
export const EDIT_LIST_AIRLINES = "EDIT_LIST_AIRLINES";

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
    url: "http://localhost:8000/get-airport",
    timeout: 120000,
  })
    .then((response) => {
      console.log('action', response.data.data.airport);
      dispatch({
        type: GET_LIST_AIRLINES,
        payload: {
          loading: false,
          data: response.data.data.airport,
          errorMessage: false,
        },
      });
    })
    .catch((error) => { 
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
    url: "https://6390373c0bf398c73a805426.mockapi.io/price_list/",
    data: data,
    timeout: 120000,
  })
    .then((response) => {
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
