// actions.js
import { fetchReportData } from '../apiService';

// ...

export const SET_SELECTED_COLUMNS = 'SET_SELECTED_COLUMNS';
export const SET_DATE_RANGE = 'SET_DATE_RANGE';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const REORDER_COLUMNS = 'FETCH_DATA_FAILURE';

export const setSelectedColumns = (selectedColumns) => ({
  type: SET_SELECTED_COLUMNS,
  payload: selectedColumns,
});

export const reorderColumns = (columnOrder) => ({
  type: REORDER_COLUMNS,
  payload: columnOrder,
});

export const setDateRange = (startDate, endDate) => ({
  type: SET_DATE_RANGE,
  payload: { startDate, endDate },
});

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchDataAction = (dates) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const { startDate, endDate } = dates;

      // Perform the API call with the startDate and endDate values
      const response = await fetch(
        `http://go-dev.greedygame.com/v3/dummy/report?startDate=${startDate}&endDate=${endDate}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};