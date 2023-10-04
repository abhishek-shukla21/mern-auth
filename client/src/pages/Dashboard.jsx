import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Hi {user?.data?.user}</h2>      
    </div>
  );
}
