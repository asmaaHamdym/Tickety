const apiURL = import.meta.env.VITE_APP_API_URL;

export const CheckLogin = async (formData) => {
  try {
    const response = fetch(`${apiURL}auth/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      // },
    });

    const json = await response.json()

    if (response.status === 200) {
      return ({
        isSuccess: true,
        data: json.data
      });

      // return "success";
    }

    // return response;
  } catch (error) {
    return ({
      isSuccess: false,
      data: error
    });
    // return error;
  }
};

export const CheckSignup = async (formData) => {
  try {
    const response = await fetch(`${apiURL}auth/register`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const json = await response.json()

    if (response.status === 200) {
      return ({
        isSuccess: true,
        data: json.data
      });

      // return response;
    }

    
  } catch (error) {
    return ({
      isSuccess: false,
      data: error
    });
  }
};


export const getEvents = async () => {
  try {
    const response = await fetch(apiURL, {});
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
