const api = import.meta.env.VITE_APP_API_URL;

export const CheckLogin = async (formData) => {
  try {
    const response = fetch(`${url}/auth/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if ((await response).status === 200) {
      return "success";
    }

    return response;
  } catch (error) {
    return error;
  }
};

export const CheckSignup = async (formData) => {
  try {
    const response = await fetch(`${url}/auth/register`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response.status === 200) {
      return "success";
    }

    return response;
  } catch (error) {
    return error;
  }
};
export const getEvents = async () => {
  try {
    const response = await fetch(url, {});
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
