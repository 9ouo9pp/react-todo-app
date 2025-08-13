import Button from "./Button";
import TextInput from "./TextInput";
import Title from "./Title";

const todoInputWrapStyle = {
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 justifyContent: "center",
 backgroundColor: "#eee",
 padding: "32px",
 borderRadius: "8px",
};

const TodoInput = ({ inputRef, todo, onInputChange, onAdd }) => {
 return (
  <div style={todoInputWrapStyle}>
   <Title label="할 일 추가" />
   <div>
    <TextInput ref={inputRef} todo={todo} onInputChange={onInputChange} />
    <Button label="추가" color="#304ffe" onClick={onAdd} />
   </div>
  </div>
 );
};

export default TodoInput;
