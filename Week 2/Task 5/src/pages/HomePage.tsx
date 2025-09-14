// src/pages/HomePage.tsx
import React from "react";
import Card from "../components/Card";
import PaginationControls from "../components/PaginationControls";
import useFetch from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";
import Button from "../components/Button"; // 1. Import the Button component

const HomePage: React.FC = () => {
  // demo API that returns an array
  const { data = [], loading, error, refetch } = useFetch<any[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  // our usePagination(items, initialPage = 1, perPage = 6)
  const {
    page,
    total,
    paginated, // current page items
    next,
    prev,
  } = usePagination<any>(data || [], 1, 6);

  // ✅ safely handle error messages
  const errorMessage =
    error instanceof Error ? error.message : error ? String(error) : null;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Home Page</h1>

      {/* 2. Add a section to display the Button components */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {errorMessage && (
        <p className="text-center text-red-500">Error: {errorMessage}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginated.map((item: any, i: number) => (
          <Card key={item.id ?? i}>
            <h3 className="font-semibold">{item.title ?? `Item ${i + 1}`}</h3>
            <p className="text-sm text-gray-600">ID: {item.id}</p>
            <p className="text-sm">Completed: {String(item.completed)}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <PaginationControls
          currentPage={page}
          totalPages={total}
          onPrev={prev}
          onNext={next}
        />
      </div>

      <div className="text-center mt-4">
        {/* 3. Replace the plain <button> with your Button component */}
        <Button variant="primary" onClick={() => refetch()}>
          Refresh Data
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
