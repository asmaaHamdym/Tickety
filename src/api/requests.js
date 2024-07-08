const api = import.meta.env.VITE_APP_API_URL;

export const getEvents = async () => {
  try {
    const response = await fetch(api, {});
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
