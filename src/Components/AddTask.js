import { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import FormContainer from "./FormContainer";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please Add Task");
      return;
    }
    onAdd({ text, date, reminder, time });
    setText("");
    setDate("");
    setReminder(false);
    setTime("");
  };

  return (
    <FormContainer>
      <Form onSubmit={submitHandler}>
        <Form.Group as={Row} controlId="formHorizontalTask">
          <Form.Label column sm={2}>
            Task
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="task"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="task"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Day
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Day & Time"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Time
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="Day & Time"
            />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Reminder
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="checkbox"
                value={reminder}
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                label="reminder"
                name="formHorizontalReminder"
                id="formHorizontalReminder"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Add Task</Button>
          </Col>
        </Form.Group>
      </Form>
    </FormContainer>
  );
};

export default AddTask;
