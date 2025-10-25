import { useContext, useEffect } from "react";
import AuthContext from "@/contexts/auth";
import UserContext from "@/contexts/user";

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    if (!authCtx.checkLoginAndRedirect()) return;
  }, [authCtx]);

  return <>{userCtx.profile && userCtx.profile.username}</>;
};

export default HomePage;
