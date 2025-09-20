import './App.css'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { add, done, edit, remove } from './redux/slice';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.data.data); // get todos
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Add / Update Task
  const handleAdd = () => {
    if (!input.trim()) return;

    if (editId) {
      dispatch(edit({ id: editId, title: input }));
      setEditId(null);
    } else {
      dispatch(add(input));
    }
    setInput("");
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"style={{  backgroundImage: `url("https://i.pinimg.com/736x/a0/55/a3/a055a3cc5391382c964c01ed0177aa8a.jpg")`,  height: "100vh",  backgroundRepeat: "no-repeat",  backgroundSize: "cover"
        }}
      >
        <div
          className="justify-content-center p-5 shadow"style={{  width: "650px",  minHeight: "450px",  backgroundColor: "rgb(248, 245, 245,0.6)",  borderRadius: "50px"}}
        >
          <h1 className="text-center" style={{ color: "rgb(29, 2, 90)" }}>
            MY TODO LIST
          </h1>
          <div className="d-flex">
            <input  type="text"  className="form-control mx-3"  value={input}  onChange={(e) => setInput(e.target.value)}/>
            <button className="btn" onClick={handleAdd} style={{   width: "100px",   borderRadius: "10px",   backgroundColor: "rgb(4, 2, 105)",   color: "white" }}
            >
 {editId ? "UPDATE" : "ADD"}
            </button>
          </div>
{/* task */}
          <div className="mt-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="m-2 d-flex justify-content-between align-items-center px-3"
                style={{
                  width: "100%",
                  minHeight: "40px",
                  backgroundColor: "rgb(164, 175, 238)",
                  borderRadius: "10px"
                }}
              >
                <span
                  style={{
                    textDecoration: task.done ? "line-through" : "none",
                    color: task.done ? "green" : "black"
                  }}
                >
                  {task.title}
                </span>
                <div>
                  <IoCheckmarkDoneCircleOutline
                    onClick={() => dispatch(done(task.id))}
                    className="text-success mx-2"
                    style={{ cursor: "pointer" }}
                  />
                  <CiEdit
                    onClick={() => {
                      setEditId(task.id);
                      setInput(task.title);
                    }}
                    className="text-dark mx-2"
                    style={{ cursor: "pointer" }}
                  />
                  <MdDeleteForever
                    onClick={() => dispatch(remove(task.id))}
                    className="text-danger mx-2"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            ))}
          </div>
{/* clear all */}
          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn text-light"
              onClick={() => tasks.forEach((item) => dispatch(remove(item.id)))}
              style={{
                backgroundColor: "rgb(29, 2, 90)",
                width: "120px",
                height: "40px",
                borderRadius: "10px"
              }}
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
