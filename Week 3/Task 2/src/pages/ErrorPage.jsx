import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>
        {isRouteErrorResponse(error)
          ? `${error.status} ${error.statusText || ""}`
          : error.message}
      </pre>
    </div>
  );
}
