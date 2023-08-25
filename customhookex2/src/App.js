import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  // 구조분해 이용 - sendRequest: fetchTasks 이거는 구조분해 중 별칭? 문법이다!
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  /*
  구조분해 이용 X
  useHttp를 실행한 뒤 리턴값이 httpData에 저장된다.
  const httpData = useHttp({
    url: "https://learnhooks-a9eb8-default-rtdb.firebaseio.com/tasks.json",
    transformTasks,
  });
  
  // httpData 객체를 통해 isLoading, error, sendRequest 함수에 접근
  const isLoading = httpData.isLoading;
  const error = httpData.error;
  const fetchTasks = httpData.sendRequest;
*/

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        url: "https://learnhooks-a9eb8-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
