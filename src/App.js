import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import SideBar from "./Components/SideBar";
import { Row, Col } from "react-bootstrap";

function App() {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);
  //FETCH_DATA
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //FETCH_DATA
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const toggleTask = () => {
    setShowTask(!showTask);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const reminderToToggle = await fetchTask(id);
    const updTask = {
      ...reminderToToggle,
      reminder: !reminderToToggle.reminder,
    };

    const res = await fetch(`http://localhost://5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json;
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000) + 1;
    // setTasks([...tasks, { ...task, id }]);

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  return (
    <div style={{ backgroundColor: "#eceff1" }}>
      <Header
        title="Task Tracker"
        showTask={showTask}
        toggleTask={toggleTask}
      />
      <Row>
        <Col lg={1}>
          <SideBar />
        </Col>
        <Col xs={6} lg={11}>
          {showTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={handleDelete}
              onToggle={toggleReminder}
            />
          ) : (
            <h3>You have no tasks here</h3>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;
