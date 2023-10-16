import React from "react";

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return <div className="h-full bg-red-500 text-white">{children}</div>;
};

export default RootLayout;
