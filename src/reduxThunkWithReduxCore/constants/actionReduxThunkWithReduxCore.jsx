export const fetchDataStart = () => ({
  type: "FETCH_DATA_START",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchDataFailure = () => ({
  type: "FETCH_DATA_FAILURE",
});
