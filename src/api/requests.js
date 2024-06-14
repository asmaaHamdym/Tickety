const url = "https://event-management-app-z5bk.onrender.com/";

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

export const getEvents = async () => {
  try {
    const response = await fetch(url, {}).then((res) => res);
    return response;
  } catch (error) {
    return error;
  }
};
