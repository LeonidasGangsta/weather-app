export const addCity = (city) => {
  return {
    type: "ADD_CITY",
    payload: city,
  };
};

export const removeCity = (id) => {
  return {
    type: "REMOVE_CITY",
    payload: id,
  };
};
