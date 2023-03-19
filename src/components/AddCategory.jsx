import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange =({target})=>{
    setInputValue(target.value)
  }

  const onSubmit=(event)=>{
    event.preventDefault(); // para evitar que el form haga el ''refresh' cada que da enter(onSubmit prop)
    if(inputValue.trim().length<=1) return; //quita los espacios (atras y adel.), si tiene <=1 letra, no hace nada. 
    onNewCategory(inputValue.trim()); //manda el valor del newCategory
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}> 
      <input type="text" 
      placeholder="Buscar gifs"
      value={inputValue}
      onChange={onInputChange}
      />
    </form>
  )
}

