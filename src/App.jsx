import { RouterProvider } from "react-router";
import router from "./router/router";
import { ContextProvider } from "./context/Context";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
   <>
      <ContextProvider>
        <UserContextProvider>
           <RouterProvider router={router} />
        </UserContextProvider>
      </ContextProvider>
    </>
  );
}

export default App
