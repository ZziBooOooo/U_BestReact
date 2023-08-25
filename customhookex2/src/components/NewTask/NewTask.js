import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  // createTask가 여기에 위치해있으면 taskText를 쓰지 못한다. -> enterTaskHandler에 있으므로
  // 첫번째 방법은 이 함수를 enterTaskHandler 안으로 옮기기 (그러나, 중첩구조임)
  // 두번째 방법은 bind메소드를 사용하는 것!
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://learnhooks-a9eb8-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );

    // const { isLoading, error, sendRequest: sendTasks } = useHttp();

    // const enterTaskHandler = async (taskText) => {
    //   const createTask = (data) => {
    //     const generatedId = data.name; // firebase-specific => "name" contains generated id
    //     const createdTask = { id: generatedId, text: taskText };

    //     props.onAddTask(createdTask);
    //   };
    //   sendTasks(
    //     {
    //       url: "https://react-http-6b4a6.firebaseio.com/tasks.json",
    //       method: "POST",
    //       headers: "application/json",
    //       body: taskText,
    //     },
    //     addTask
    //   );
    // };
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
