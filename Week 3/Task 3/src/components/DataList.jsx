import React from "react";
import useFetchWithAuth from "../hooks/useFetchWithAuth";
import DataCard from "./DataCard";
import useRenderCount from "../hooks/useRenderCount";

export default function DataList() {
  useRenderCount("DataList");

  const { data, error, loading } = useFetchWithAuth(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.slice(0, 5).map((item) => (
        <DataCard key={item.id} item={item} />
      ))}
    </div>
  );
}
