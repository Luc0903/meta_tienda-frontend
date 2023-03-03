import { useState, createRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewProductForm from '../components/NewProductForm';
import axios from 'axios';

export default function AdminPage() {
  const fileInput = createRef();

  const initialValue = {
    name: '',
    description: '',
    category: '',
    price: '',
    stock: '',
  };

  const [clotheInfo, setClotheInfo] = useState(initialValue);

  // const productInputs = [
  //   {
  //     label: 'Nombre',
  //     type: 'Text',
  //     styles: '',
  //     placeholder: 'Nombre del producto',
  //     name: 'name',
  //     value: clotheInfo.name,
  //   },
  //   {
  //     label: 'Descripción',
  //     type: 'Text',
  //     styles: '',
  //     placeholder: 'Ej: Talles, datos, etc',
  //     name: 'description',
  //     value: clotheInfo.description,
  //   },
  //   {
  //     label: 'Categoria',
  //     type: 'Text',
  //     styles: '',
  //     placeholder: 'Ej: Jeans, Camisas',
  //     name: 'category',
  //     value: clotheInfo.category,
  //   },
  //   {
  //     label: 'Precio',
  //     type: 'Text',
  //     styles: '',
  //     placeholder: 'Solo números',
  //     name: 'price',
  //     value: clotheInfo.price,
  //   },
  //   {
  //     label: 'Stock',
  //     type: 'Text',
  //     styles: '',
  //     placeholder: 'Solo números',
  //     name: 'stock',
  //     value: clotheInfo.stock,
  //   },
  // ];

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
        const { createdProduct } = await axios.post('http://localhost:8000/api/products', {
          ...clotheInfo,
          url: imageFileData.result.secure_url,
        });
        console.log(createdProduct);
      }
    } catch (error) {
      console.log('Mensaje de error', error);
    }
  }

  return (
    <div>
      <NewProductForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fileInput={fileInput}
        clotheInfo={clotheInfo}
      />
    </div>
  );
}
