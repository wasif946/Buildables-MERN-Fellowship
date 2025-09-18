import React from "react";
import useRenderCount from "../hooks/useRenderCount";

export default function TaskItem({ task }) {
  const count = useRenderCount("TaskItem");
  return (
    <div style={{ border: "1px solid #ddd", padding: 8, marginBottom: 8 }}>
      <div style={{fontSize:12, color:'#666'}}>renders: {count}</div>
      <h4>{task.name || task.username || task.title}</h4>
      <div>{task.email}</div>
      {task.optimistic && <small>(saving...)</small>}
      {task.__failed && <small style={{color:'red'}}>Failed to save</small>}
    </div>
  );
}
