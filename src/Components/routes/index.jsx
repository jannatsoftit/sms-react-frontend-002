import { useRoutes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import GuestRoutes from "./GuestRoutes";

export default function Routes() {
  return useRoutes([AuthRoutes, GuestRoutes]);
}
