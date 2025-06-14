import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
const API = "http://localhost:5000/tasks";
//  we need to create a context
const TaskContext = createContext();
// createa provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    try {
      const data = await axios.get(API);
      setTasks(data.data);
    } catch (error) {
      console.log("error while fetching data", error);
      toast.error("unable to fetch data");
    }
  };
  const addTask = async (title) => {
    try {
      const task = {
        title,
        completed: false,
      };  
      const response = await axios.post(API, task);
      setTasks((prevTasks) => [...prevTasks, response.data]);
      toast.success("task is added successfully");
    } catch (error) {
      console.log("error while", error);
      toast.error("unable to add task");
    }
  };
  const toggleTaskCompletion = async (id) => {
    try {
      const task = tasks.find((t) => t.id === id);
      const response = await axios.patch(API, { completed: !task.completed });
      setTasks((prev) => {
        prev.map((t) =>
          t.id === id ? { ...t, completed: response.data.completed } : t
        );
      });
      toast.success(
        `task marked as ${
          response.data.completed ? "completed" : "incomplete"
        } `
      );
    } catch (error) {
      console.log("failed to update ", error);
      toast.error("error while updating ");
    }
  };
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      toast.success("succesfully deleted task");
    } catch (error) { 
      console.log("error while deleting the task", error);
      toast.error("unable to delete task");
    }
  };
  useEffect(()=>{
    fetchTasks();
  },[]);
  return (  
    <TaskContext.Provider value={{tasks,addTask,toggleTaskCompletion,deleteTask,fetchTasks}} >
        {children}
    </TaskContext.Provider>
  )
};
export const useTasks =()=> useContext(TaskContext)
