import { combineReducers } from 'redux';
import {
  SET_SELECTED_COLUMNS,
  SET_DATE_RANGE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from './components/actions';

const selectedColumnsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SELECTED_COLUMNS:
      return action.payload;
    default:
      return state;
  }
};

const dateRangeReducer = (state = { startDate: null, endDate: null }, action) => {
  switch (action.type) {
    case SET_DATE_RANGE:
      return action.payload;
    default:
      return state;
  }
};

const dataReducer = (state = { loading: false, error: null, data: [] }, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedColumns: selectedColumnsReducer,
  dateRange: dateRangeReducer,
  data: dataReducer,
});

export default rootReducer;
