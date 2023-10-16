import { ReactNode } from "react";
import Navbar from "./_components/navbar";

interface Props {
  children: ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
