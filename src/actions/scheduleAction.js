import axios from "axios";

export const GET_LIST_SCHEDULE = "GET_LIST_SCHEDULE";
export const GET_DETAIL_LIST_SCHEDULE = "GET_LIST_SCHEDULE";
export const ADD_LIST_SCHEDULE = "ADD_LIST_SCHEDULE";
export const EDIT_LIST_SCHEDULE = "EDIT_LIST_SCHEDULE";
export const DELETE_LIST_SCHEDULE = "DELETE_LIST_SCHEDULE";

export const getListSchedule = () => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: GET_LIST_SCHEDULE,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: "https://testdev5-production.up.railway.app/schedule",
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: response.data.data.Jadwal,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log("ERRRRR", error);
      dispatch({
        type: GET_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const addListSchedule = (data) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: ADD_LIST_SCHEDULE,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "POST",
    url: "https://testdev5-production.up.railway.app/add-schedule",
    data: data,
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: ADD_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log("ERRRRR", error);
      dispatch({
        type: ADD_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const getDetailListSchedule = (id) => (dispatch) => {
  dispatch({
    type: GET_DETAIL_LIST_SCHEDULE,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  axios({
    method: "GET",
    url: `https://testdev5-production.up.railway.app/schedule/${id}`,
    timeout: 120000,
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: GET_DETAIL_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: GET_DETAIL_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const editListSchedule = (id, data) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: EDIT_LIST_SCHEDULE,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "put",
    url: "https://testdev5-production.up.railway.app/edit-schedule/" + id,
    data: data,
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: EDIT_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: EDIT_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};

export const deleteListSchedule = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({
    type: EDIT_LIST_SCHEDULE,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  // get API
  axios({
    method: "delete",
    url: "https://testdev5-production.up.railway.app/delete-schedule/" + id,
    timeout: 120000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      console.log(response);
      dispatch(getListSchedule());
      dispatch({
        type: EDIT_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: false,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: EDIT_LIST_SCHEDULE,
        payload: {
          loading: false,
          data: false,
          errorMessage: error.message,
        },
      });
    });
};
