export const updateUser = async (id, body) => {
  const url = `${api}/:${id}`; // Adjust the endpoint as needed

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
