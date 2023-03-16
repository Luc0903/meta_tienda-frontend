import { useState } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';

function ProfilePage() {
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
        const { data } = await axios.post('http://localhost:8000/api/v1/user/login', { userData });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await axios.post('http://localhost:8000/api/v1/user/register', {
          ...userData,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <NavBar />
      <div>
        <button onClick={() => setIsLogging(true)}>INGRESAR</button>
        <button
          onClick={() => {
            setIsLogging(false);
            console.log(isLogging);
          }}
        >
          REGISTRARSE
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='nombre'
          name='name'
          className=''
          onChange={handleChange}
          value={userData.name}
        />
        <input
          type='text'
          placeholder='email'
          name='email'
          className=''
          onChange={handleChange}
          value={userData.email}
        />
        <input
          type='text'
          placeholder='contraseña'
          name='password'
          className=''
          onChange={handleChange}
          value={userData.password}
        />
        <button type='submit'>sumit</button>
      </form>
    </div>
  );
}

export default ProfilePage;
