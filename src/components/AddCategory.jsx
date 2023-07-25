import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState();

  const inInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(inputValue.trim().length<=1) return;    
    onNewCategory(inputValue);
    setInputValue('');    
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={inInputChange}

      />
    </form>
  )

  /*   onChange={(event) => inInputChange(event)}  */
}
