import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasksThunk } from "../features/tasks/tasksThunks";
import { selectAllTasks, selectTasksLoading } from "../features/tasks/tasksSelectors";
import TaskItem from "./TaskItem";

export default function TasksList() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);
  const loading = useSelector(selectTasksLoading);

  useEffect(() => {
    dispatch(fetchTasksThunk());
  }, [dispatch]);

  if (loading) return <p>Loading tasks...</p>;
  return (
    <div>
      {tasks.map((t) => <TaskItem key={t.id} task={t} />)}
    </div>
  );
}
