import React from "react";
import Task from "./Task";
import { Card, Col, Row } from "react-bootstrap";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <Row className="container">
      {tasks.map((task) => (
        <Col key={task.id} sm={12} md={6} lg={4} xl={4}>
          <Task task={task} onDelete={onDelete} onToggle={onToggle} />
        </Col>
      ))}
    </Row>
  );
};

export default Tasks;
