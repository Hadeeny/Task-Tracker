import { Button, Card, ListGroup } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./Task.css";

const Task = ({ task, onDelete, onToggle }) => {
  const { text, date, id, reminder, time } = task;
  return (
    <>
      <Card
        onDoubleClick={() => onToggle(id)}
        className={`my-3 p-3 rounded ${reminder ? "reminder" : ""}`}
      >
        <Card.Body>
          <Card.Title>
            {text}{" "}
            <FaTimes
              style={{
                color: "red",
                cursor: "pointer",
              }}
              onClick={() => {
                onDelete(id);
              }}
            />
          </Card.Title>
          <Card.Text>{date}</Card.Text>
          <Card.Text>{time}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Task;

// <h2>
//   {text} <Button onClick={() => onDelete(id)}>x</Button>{" "}
// </h2>
// <p>{date}</p>
