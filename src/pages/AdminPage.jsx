import { useState } from 'react';

const initialValue = {
  name: '',
  description: '',
  category: '',
  price: '',
  stock: '',
};

export function AdminPage() {
  const [clotheInfo, setClotheInfo] = useState(initialValue);
  const [image, setImage] = useState();

  function handleSubmit(e) {
    e.preventDefalult();
  }

  function handleChage(e) {
    setClotheInfo({
      ...clotheInfo,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        //Este input solo va a servir para el nombre del producto, faltan todos los demás
        <input
          type='text'
          className=''
          placeholder='Nombre'
          name='name'
          onChange={handleChage}
          value={clotheInfo.name}
          autoComplete='off'
        />
      </form>
    </div>
  );
}
