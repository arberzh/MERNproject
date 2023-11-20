import axios from 'axios';

const BASE_API = 'http://localhost:3001'

export const getAll = () =>{
  return axios.get(`${BASE_API}/porosite`)
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);
      throw error
    })
    .finally(function () {
    });
}

export const addOne = async ({ fullName, product }) => {
  const userData = { fullName, product };

  try {
    const response = await axios.post(`${BASE_API}/porosite/shto`, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

