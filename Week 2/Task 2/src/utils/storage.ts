// src/utils/storage.ts
export function saveTodos(todos: any[]) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function loadTodos(): any[] {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}
