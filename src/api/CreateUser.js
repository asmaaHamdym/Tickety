const api = import.meta.env.VITE_APP_API_URL;

export const createUser = async (body) => {
  console.log(api);
  console.log('API URL:', api);

  // Debugging: Log the body and its type
  console.log('Body:', body);
  console.log('Type of body:', typeof body);

  try{
    const response = await fetch(api, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(body)
    }).then((res) => {
      if(res.status !== 200 && res.status !== 201){
        throw new Error(res.statusText)
      }
      return res.json();
    })
    return response;
  }catch (error){
    console.log(error);
  }
}