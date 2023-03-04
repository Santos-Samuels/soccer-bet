import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mx-5 my-10 mt-24 md:mx-16 lg:mx-24">{children}</div>
    </>
  );
};

export default PageContainer;
