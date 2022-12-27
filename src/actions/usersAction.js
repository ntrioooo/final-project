import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
export const GET_LIST_USERS = "GET_LIST_USERS";
export const GET_DETAIL_LIST_USERS = "GET_DETAIL_LIST_USERS";
export const ADD_LIST_USERS = "ADD_LIST_USERS";
export const DELETE_LIST_USERS = "DELETE_LIST_USERS";
export const EDIT_LIST_USERS = "EDIT_LIST_USERS";
export const LOGIN_USERS = "LOGIN_USERS";
export const WHO_AM_I = "WHO_AM_I";


export const whoAmI = () => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch({
    type: WHO_AM_I,
    payload: {
      loading: true,
      data: false,
      errorMessage: false
    }
  });

  axios({
    method: 'get',
    url: "http://localhost:8000/api/v1/whoami",
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
  .then((response) => {
    // console.log(response.data.data);
    dispatch({
      type: WHO_AM_I,
      payload: {
        loading: false,
        data: response.data.data,
        errorMessage: false,
      },
    });
  })
  .catch((error) => {
    console.log(error.message);
    dispatch({
      type: WHO_AM_I,
      payload: {
        loading: false,
        data: false,
        errorMessage: error.message,
      },
    });
  });
} 


export const loginUsers = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: LOGIN_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "post",
    url: "http://localhost:8000/login",
    data: data,
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: LOGIN_USERS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({
        type: LOGIN_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const getListUsers = () => (dispatch) => {
  dispatch({
    type: GET_LIST_USERS,
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
      dispatch({
        type: GET_LIST_USERS,
        payload: {
          loading: false,
          data: response.data.data.airport,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_LIST_USERS,
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

export const addListUsers = (data) => (dispatch) => {
  dispatch({
    type: ADD_LIST_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "POST",
    url: "http://localhost:8000/register",
    data: data,
    timeout: 120000,
  })
    .then((response) => {
      const navigate = useNavigate();
      // console.log(data);
      if (response.status === 400) {
        dispatch({
          type: ADD_LIST_USERS,
          payload: {
            loading: false,
            data: false,
            errorMessage: 'Email is already in use'
          },
        });
      } else {
        dispatch({
          type: ADD_LIST_USERS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
        swal("Yeeaaay!", "Berhasil Membuat Akun", "success").then(() => {
          navigate('/login')
        });
      }
    })
    .catch((error) => {
      // console.log("ERRRRR", error);
      dispatch({
        type: ADD_LIST_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const getDetailListUsers = (id) => (dispatch) => {
  dispatch({
    type: GET_DETAIL_LIST_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: `http://localhost:8000/user/${id}`,
    timeout: 120000,
  })
    .then((response) => {
      dispatch({
        type: GET_DETAIL_LIST_USERS,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DETAIL_LIST_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const deleteListUsers = (id) => (dispatch) => {
  dispatch({
    type: DELETE_LIST_USERS,
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
      dispatch(getListUsers());
    })
    .catch((error) => {
      dispatch({
        type: DELETE_LIST_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const editListUsers = (id, formData) => (dispatch) => {
  console.log('formdata ', formData)
  dispatch({
    type: DELETE_LIST_USERS,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "put",
    url: `http://localhost:8000/user/${id}/update`,
    data: formData,
    timeout: 120000,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  .then((response) => {
      console.log(response.data.data[0]);
      console.log(response);
      dispatch({
        type: EDIT_LIST_USERS,
        payload: {
          loading: false,
          data: response.data.data[0],
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log(error.message);
      dispatch({
        type: EDIT_LIST_USERS,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
