import { AppContext } from "@presentation/context";
import { useContext } from "react";
import UserItem from "./UserItem";

const UserList: React.FC = () => {
  const { users, isLoading } = useContext(AppContext);

  if (users.length === 0) {
    return <h3 className="text-2xl mt-24 text-center">Não há ranking para listar!</h3>;
  }

  return (
    <div className="">
      <p>
        Total de itens:{" "}
        {users.length}
      </p>
      <div className="flex gap-3 flex-wrap mt-5 justify-center">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );


};

export default UserList;