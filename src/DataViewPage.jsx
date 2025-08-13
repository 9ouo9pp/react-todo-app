import { useNavigate } from "react-router";
import Button from "./components/Button";
import DataView from "./components/DataView";
import "./styles/app.css";

function DataViewPage({ todoList, onDelete }) {
 const navigate = useNavigate();

 return (
  <div className="wrap">
   <DataView todoList={todoList} onDelete={onDelete} />

   <div
    style={{
     position: "absolute",
     bottom: "40px",
     right: "40px",
    }}
   >
    <Button label="할 일 추가하기" color="#304ffe" onClick={() => navigate("/add")} />
   </div>
  </div>
 );
}

export default DataViewPage;
