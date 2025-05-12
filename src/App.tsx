import { RouterProvider } from "react-router-dom";
import router from "./Router"; // no need for curly braces if it's a default export

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
// This is the main entry point of the application. It uses React Router to manage navigation between different pages.
