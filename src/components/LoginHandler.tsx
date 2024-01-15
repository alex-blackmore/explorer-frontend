import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(window.location.search);
    navigate("/");
  }, []);
  return <></>;
}
export default LoginHandler;
