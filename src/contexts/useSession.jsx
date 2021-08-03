import { useContext } from "react";
import { SessionContext } from "./DataContext";

export function useSession() {
  const value = useContext(SessionContext)

  return value;
}