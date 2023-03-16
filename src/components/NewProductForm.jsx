import { v4 as uuidv4 } from 'uuid';

function NewProductForm({ productInputs, handleChange, handleSubmit, fileInput }) {
  return (
    <form onSubmit={handleSubmit} className=' flex flex-col'>
      {productInputs.map((elem) => {
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
      <input type='file' name='productImage' ref={fileInput} accept='image/png, image/jpeg' />
      <button className=' bg-black text-zinc-50' type='submit'>
        Agregar producto
      </button>
    </form>
  );
}

export default NewProductForm;
