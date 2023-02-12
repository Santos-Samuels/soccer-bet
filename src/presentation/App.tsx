import AppRoutes from "../main/routes/app.routes";
import { BetList, MatchList } from "./components";

function App() {
  return (
      <AppRoutes />
    // <div className="m-5">
    //   <div className="mb-8">
    //   <h1 className="text-3xl border-b pb-1 border-gray-600 text-gray-400 font-bold mb-5">Minhas Apostas</h1>
    //   <BetList />
    //   </div>

    //   <div className="mb-8">
    //   <h1 className="text-3xl border-b pb-1 border-gray-600 text-gray-400 font-bold mb-5">Partidas Configuradas</h1>
    //   <MatchList />
    //   </div>
    // </div>
  );
}

export default App;
