import React from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="bg-header-background text-header-foreground py-10 w-full mt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
    </header>
  );
};

export default PageHeader;
