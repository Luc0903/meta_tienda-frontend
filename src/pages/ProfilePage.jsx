import NavBar from '../components/NavBar';
import useProfileFunctions from '../hooks/useProfileFunctions';

function ProfilePage() {
  const { handleChange, handleSubmit, userData, setIsLogging, isLogging } = useProfileFunctions();
  const formInputs = [
    {
      label: 'Nombre',
      placeholder: 'Máximo 20 caracteres',
      styles: '',
      name: 'name',
      value: userData.name,
    },
    {
      label: 'Correo',
      placeholder: '',
      styles: '',
      name: 'email',
      value: userData.email,
    },
    {
      label: 'Contraseña',
      placeholder: 'Mínimo 8 caracteres',
      styles: '',
      name: 'password',
      value: userData.password,
    },
  ];

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
        {formInputs.map((elem) => {
          return (
            <div key={elem.name}>
              <label>{elem.label}</label>
              <input
                className={elem.styles}
                placeholder={elem.placeholder}
                name={elem.name}
                onChange={(e) => handleChange(e)}
                value={elem.value}
                autoComplete='off'
              />
            </div>
          );
        })}
        <button type='submit'>sumit</button>
      </form>
    </div>
  );
}

export default ProfilePage;
