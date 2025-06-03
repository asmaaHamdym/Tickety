import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../store/auth-context';
import axios from 'axios';

const api = import.meta.env.VITE_APP_API_URL;

export default function GoogleLogin() {
  const navigate = useNavigate();
  const { handleUser, handleToken, handleTokenExpiresAt } = useAuthContext();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const googleUserInfo = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        // Send the Google user info to your backend
        const backendResponse = await axios.post(`${api}/auth/google`, {
          google_token: response.access_token,
          email: googleUserInfo.data.email,
          name: googleUserInfo.data.name,
          picture: googleUserInfo.data.picture
        });

        // Handle successful login
        handleUser(backendResponse.data.data.user);
        handleToken(backendResponse.data.data.jwt.token);
        handleTokenExpiresAt(backendResponse.data.data.jwt.expires_at);
        
        navigate('/create-event');
      } catch (error) {
        console.error('Error during Google login:', error);
      }
    },
    onError: error => console.error('Google Login Error:', error)
  });

  return (
    <button
      onClick={() => login()}
      type="button"
      className="flex justify-center border-2 border-button-border w-full bg-white text-[#412234] font-semibold rounded-lg mb-8 px-8 py-4"
    >
      <img src="/src/assets/google.png" alt="google icon" className="w-[24px]" />
      <p className="ml-2">Continue with Google</p>
    </button>
  );
}