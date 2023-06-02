// AnalyticsPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setDateRange, fetchDataRequest } from './actions';
import { fetchDataAction } from './actions';


const AnalyticsPage = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleFetchData = () => {
    const formattedStartDate = startDate.toISOString(); // Convert startDate to a string in ISO format
    dispatch(fetchDataAction({ startDate: formattedStartDate, endDate }));
    dispatch(setDateRange(startDate, endDate));
    dispatch(fetchDataRequest());
  };

  return (
    <div>
      <h1>Analytics Page</h1>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <button onClick={handleFetchData}>Fetch Data</button>
    </div>
  );
};

export default AnalyticsPage;