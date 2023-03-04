import { PageContainer, UserList } from "@presentation/components";
import { AppContext } from "@presentation/context";
import { useContext, useEffect } from "react";
import { BeatLoader } from "react-spinners";

const HomePage: React.FC = () => {
  const { getUsers, isLoading } = useContext(AppContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <PageContainer>
      <div className="border-4 border-dashed border-neutral-600 rounded-lg">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Bem vindo ao Bolão da Copa!
          </h1>
          <p className="text-xl md:text-2xl mt-2 text-center">
            Faça sua aposta e acompanhe os resultados!
          </p>
        </div>
      </div>

      <section className="mt-12">
        <div className="border-b pb-1 border-gray-400 flex gap-5 justify-between items-end mb-8">
          <h1 className="text-xl md:text-3xl font-bold">Ranking de Pontos</h1>
        </div>

        {!isLoading ? (
          <UserList />
        ) : (
          <div className="mt-24 text-center">
            <BeatLoader color="#eab308" size={30} />
          </div>
        )}
      </section>
    </PageContainer>
  );
};

export default HomePage;
