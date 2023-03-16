import NewProductForm from '../components/NewProductForm';
import useAdminFunctions from '../hooks/useAdminFunctions';

export default function AdminPage() {
  const { handleChange, clotheInfo, handleSubmit, fileInput } = useAdminFunctions();

  const productInputs = [
    {
      label: 'Nombre',
      type: 'Text',
      styles: '',
      placeholder: 'Nombre del producto',
      name: 'name',
      value: clotheInfo.name,
    },
    {
      label: 'Descripción',
      type: 'Text',
      styles: '',
      placeholder: 'Ej: Talles, datos, etc',
      name: 'description',
      value: clotheInfo.description,
    },
    {
      label: 'Categoria',
      type: 'Text',
      styles: '',
      placeholder: 'Ej: Jeans, Camisas',
      name: 'category',
      value: clotheInfo.category,
    },
    {
      label: 'Precio',
      type: 'Text',
      styles: '',
      placeholder: 'Solo números',
      name: 'price',
      value: clotheInfo.price,
    },
    {
      label: 'Stock',
      type: 'Text',
      styles: '',
      placeholder: 'Solo números',
      name: 'stock',
      value: clotheInfo.stock,
    },
  ];

  return (
    <div>
      <NewProductForm
        productInputs={productInputs}
        clotheInfo={clotheInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fileInput={fileInput}
      />
    </div>
  );
}
