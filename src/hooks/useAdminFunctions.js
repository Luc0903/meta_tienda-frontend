import { useState, createRef } from 'react';
import axios from 'axios';
import { generateImageUrl, generateProduct } from '../service';

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
      let serverResponse = await generateImageUrl(formData);

      let imageFileData = await serverResponse.json();

      if (imageFileData) {
        const {
          data: { createdProduct },
        } = await generateProduct(clotheInfo, imageFileData);
        console.log(createdProduct);
      }
    } catch (error) {
      console.log('Mensaje de error', error);
    }
  }

  return { handleChange, clotheInfo, handleSubmit, fileInput };
}

export default useAdminFunctions;
