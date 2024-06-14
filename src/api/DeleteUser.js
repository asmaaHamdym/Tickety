const api = import.meta.env.VITE_APP_API_URL;

export const deleteUser = async (id) => {
  const url = `${api}/:${id}`; // Adjust the endpoint as needed

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
