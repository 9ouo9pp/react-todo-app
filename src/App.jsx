import { useRef, useState } from "react";
import { Route, Routes } from "react-router";
import DataViewPage from "./DataViewPage";
import "./styles/app.css";
import TextInputPage from "./TextInputPage";

const initTodoList = ["리액트 공부하기", "운동하기", "책 읽기", "자바스크립트 공부하기"];

function App() {
 const [todoList, setTodoList] = useState(initTodoList);
 const [todo, setTodo] = useState("");
 // 리액트에서 DOM에 직접 접근하는 방법
 const inputRef = useRef(null);

 // 삭제하기
 const onDelete = (todo) => {
  setTodoList(todoList.filter((item) => item !== todo));
 };

 // 할 일 입력
 const onInputChange = (e) => {
  setTodo(e.target.value);
 };

 // 할 일 추가하기
 const onAdd = () => {
  if (todo.trim() === "") return;

  setTodoList([...todoList, todo]);
  setTodo("");
  inputRef.current.focus();
 };

 return (
  <div className="wrap">
   <Routes>
    <Route path="/" element={<DataViewPage todoList={todoList} onDelete={onDelete} />} />
    <Route
     path="/add"
     element={
      <TextInputPage inputRef={inputRef} todo={todo} onInputChange={onInputChange} onAdd={onAdd} />
     }
    />
   </Routes>
  </div>
 );
}

export default App;
