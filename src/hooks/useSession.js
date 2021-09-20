import { useContext } from "react";
import { SessionContext } from "../contexts/DataContext";

export function useSession() {
  const value = useContext(SessionContext)

  return value;
}