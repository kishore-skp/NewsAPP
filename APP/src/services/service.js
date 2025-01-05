import apiService from '../client/client';

const getHomeData = async (data = {}) => {
  try {
    const result = await apiService.get('/home')   
    return result;
  } catch (error) {
    console.error('Error in getHomeData:', error);
  }
};

export { getHomeData };
