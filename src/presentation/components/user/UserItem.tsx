import { IUser } from "@domain/model/user";
import { AppContext } from "@presentation/context";
import { useContext } from "react";

interface IProps {
  user: IUser;
}

const UserItem: React.FC<IProps> = ({ user }) => {
  const { currentUser } = useContext(AppContext);

  return (
    <div
      className={`${
        user.id === currentUser?.id ? "bg-yellow-800" : "bg-neutral-700"
      } rounded-lg p-4`}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`h-10 w-10 font-semibold ${
            user.score > 0 ? "bg-yellow-500" : "bg-neutral-500"
          } rounded-full flex justify-center items-center text-white`}
        >
          {user.score}
        </div>
        <div className=" text-xl text-gray-700">
          <h2 className="text-gray-300 whitespace-nowrap">{user.name}</h2>
          {currentUser?.isAdmin && (
            <p className="text-xs text-gray-300 font-normal">{user.email}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserItem;
