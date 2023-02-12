import { PropsWithChildren } from "react";

const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="m-5">{children}</div>;
};

export default PageContainer;
