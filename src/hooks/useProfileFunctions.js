import { useState } from 'react';
import { loginOrRegister } from '../service';

function useProfileFunctions() {
  const initialValue = { name: '', email: '', password: '' };

  const [isLogging, setIsLogging] = useState(false);
  const [userData, setUserData] = useState(initialValue);

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isLogging) {
      try {
        const { data } = await loginOrRegister('http://localhost:8000/api/v1/user/login', userData);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await loginOrRegister(
          'http://localhost:8000/api/v1/user/register',
          userData,
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return { handleChange, handleSubmit, userData, setIsLogging, isLogging };
}

export default useProfileFunctions;
