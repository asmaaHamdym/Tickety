const api = import.meta.env.VITE_APP_API_URL;

export const updateEvent = async (id, body) => {
  const url = `${api}/:${id}`; // Adjust the endpoint as needed
  console.log(url)
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log(await response.json())
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
