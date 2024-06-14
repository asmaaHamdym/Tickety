const api = import.meta.env.VITE_APP_API_URL;

export const createEvent = async (data) => {
  // console.log(api);
  // console.log('API URL:', api);

  // // Debugging: Log the body and its type
  console.log('Body:', data);
  // console.log('Type of body:', typeof data);

  try{
    const response = await fetch(api, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data),
    })
    console.log(await response.json());
  }catch (error){
    console.log(error);
  }
}