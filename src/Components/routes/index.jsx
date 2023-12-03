import { useRoutes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import GuestRoutes from "./GuestRoutes";

export default function AdminRoutes() {
  return useRoutes([ AuthRoutes, GuestRoutes]);
}
