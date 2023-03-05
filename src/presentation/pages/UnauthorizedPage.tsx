const UnauthorizedPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">401</h1>
      <h2 className="text-xl">Você não tem permissão para acessar essa página</h2>
    </div>
  );
};

export default UnauthorizedPage;