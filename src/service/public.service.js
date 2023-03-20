import axios from 'axios';

export async function generateImageUrl(formData) {
  return await fetch('http://localhost:8000/api/images', {
    method: 'POST',
    body: formData,
    mode: 'cors',
  });
}

export async function generateProduct(clotheInfo, imageFileData) {
  return await axios.post('http://localhost:8000/api/products', {
    ...clotheInfo,
    url: imageFileData.result.secure_url,
  });
}

export async function loginOrRegister(endpoint, userData) {
  return await axios.post(endpoint, { ...userData });
}
