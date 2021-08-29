import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useRequest from "../../hooks/use_request";

const NewTask = (props) => {
  // Using custom hook to get the data
  const { isLoading, error, sendRequest } = useRequest();

  const enterTaskHandler = (taskText) => {
    // use the fetched data from custom Hook
    const fetchedTask = (taskObj) => {
      const generatedId = taskObj.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    };

    sendRequest(
      {
        url: "https://task-8e5d7-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      fetchedTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
