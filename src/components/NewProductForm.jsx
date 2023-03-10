import { v4 as uuidv4 } from 'uuid';

function NewProductForm({ clotheInfo, handleChange, handleSubmit, fileInput }) {
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

  return (
    <form onSubmit={handleSubmit} className=' flex flex-col'>
      {/* {productInputs.map((elem) => {
        return (
          <input
            key={uuidv4()}
            className={elem.styles}
            placeholder={elem.placeholder}
            name={elem.name}
            onChange={(e) => handleChange(e)}
            value={elem.value}
            autoComplete='off'
          />
        );
      })} */}
      <input
        type='text'
        className=''
        placeholder='Nombre del producto'
        name='name'
        onChange={handleChange}
        value={clotheInfo.name}
        autoComplete='off'
      />
      <input
        type='text'
        className=''
        placeholder='Info del producto'
        name='description'
        onChange={handleChange}
        value={clotheInfo.description}
        autoComplete='off'
      />
      <input
        type='text'
        className=''
        placeholder='ej: Jeans, etc'
        name='category'
        onChange={handleChange}
        value={clotheInfo.category}
        autoComplete='off'
      />
      <input
        type='text'
        className=''
        placeholder='Solo números'
        name='price'
        onChange={handleChange}
        value={clotheInfo.price}
        autoComplete='off'
      />
      <input
        type='text'
        className=''
        placeholder='Solo números'
        name='stock'
        onChange={handleChange}
        value={clotheInfo.stock}
        autoComplete='off'
      />
      <input type='file' name='productImage' ref={fileInput} accept='image/png, image/jpeg' />
      <button className=' bg-black text-zinc-50' type='submit'>
        Agregar producto
      </button>
    </form>
  );
}

export default NewProductForm;
