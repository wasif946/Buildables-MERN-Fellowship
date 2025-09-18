import useFetchWithRetry from "./useFetchWithRetry";
import { useAuthState } from "../contexts/AuthContext";

export default function useFetchWithAuth(url, options = {}) {
  const { token } = useAuthState();

  const authOptions = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  return useFetchWithRetry(url, authOptions);
}
