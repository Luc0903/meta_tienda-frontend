import { useState, createRef } from 'react';
import axios from 'axios';

function useAdminFunctions() {
  const fileInput = createRef();

  const initialValue = {
    name: '',
    description: '',
    category: '',
    price: '',
    stock: '',
  };

  const [clotheInfo, setClotheInfo] = useState(initialValue);

  function handleChange(e) {
    setClotheInfo({
      ...clotheInfo,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('clotheImage', fileInput.current.files[0]);

    try {
      let serverResponse = await fetch('http://localhost:8000/api/images', {
        method: 'POST',
        body: formData,
        mode: 'cors',
      });

      let imageFileData = await serverResponse.json();

      if (imageFileData) {
        const { data } = await axios.post('http://localhost:8000/api/products', {
          ...clotheInfo,
          url: imageFileData.result.secure_url,
        });
        console.log(data.createdProduct);
      }
    } catch (error) {
      console.log('Mensaje de error', error);
    }
  }

  return { handleChange, clotheInfo, handleSubmit, fileInput };
}

export default useAdminFunctions;
