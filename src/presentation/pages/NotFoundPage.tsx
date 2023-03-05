import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-xl">Página não encontrada</h2>

      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
        >
          Voltar
        </button>
        </div>
    </div>
  );
};

export default NotFoundPage;
