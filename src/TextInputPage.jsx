import { useNavigate } from "react-router";
import Button from "./components/Button";
import TodoInput from "./components/TodoInput";
import "./styles/app.css";

function TextInputPage({ inputRef, todo, onInputChange, onAdd }) {
 const navigate = useNavigate();

 return (
  <div className="wrap">
   <TodoInput inputRef={inputRef} todo={todo} onInputChange={onInputChange} onAdd={onAdd} />

   <div
    style={{
     position: "absolute",
     bottom: "40px",
     right: "40px",
    }}
   >
    <Button label="할 일 목록" color="#304ffe" onClick={() => navigate("/")} />
   </div>
  </div>
 );
}

export default TextInputPage;
