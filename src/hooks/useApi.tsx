import axios from "axios";
import { useCallback } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const getTasks = useCallback(async () => {
    const { data: tasks } = await axios.get(`${apiUrl}`);
    return tasks;
  }, []);

  return { getTasks };
};

export default useApi;
