import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from "@/contexts/auth";
import { UserContextProvider } from "@/contexts/user";
import { ToastContextProvider } from "@/contexts/toast";
import { useAxiosInterceptors } from "@/services/request";
import MainLayout from "@/layouts/main-layouts";

export default function App({ Component, pageProps }: AppProps) {

  useAxiosInterceptors();
  
  return (
    <ChakraProvider>
      <ToastContextProvider>
        <UserContextProvider>
          <AuthContextProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </AuthContextProvider>
        </UserContextProvider>
      </ToastContextProvider>
    </ChakraProvider>
  );
}
