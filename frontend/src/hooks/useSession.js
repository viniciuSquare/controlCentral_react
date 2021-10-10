import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

export function useSession() {
  const value = useContext(SessionContext)

  return value;
}