const API_BASE_URL = 'http://go-dev.greedygame.com/v3/dummy';

export const fetchReportData = async (startDate, endDate) => {
  try {
    const response = await fetch(`${API_BASE_URL}/report?startDate=${startDate}&endDate=${endDate}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch report data');
  }
};

console.log(fetchReportData);

export const fetchAppData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/apps`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch app data');
  }
};

// console.log(fetchAppData);
