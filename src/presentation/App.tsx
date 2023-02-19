import AppRoutes from "@infra/routes/app.routes";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
