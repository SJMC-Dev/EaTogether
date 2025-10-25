import { useContext, useEffect } from "react";
import Head from "next/head";
import AuthContext from "@/contexts/auth";

const HomePage = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    if (!authCtx.checkLoginAndRedirect()) return;
  }, [authCtx]);

  return (
    <>
      Test
    </>
  );
};

export default HomePage;