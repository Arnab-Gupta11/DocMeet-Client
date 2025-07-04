import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const useCurrenUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }
  return context;
};

export default useCurrenUser;
