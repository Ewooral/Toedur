"use client";


interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div
    style={{
      backgroundImage: `url(https://res.cloudinary.com/dn1lqngds/image/upload/v1718324057/sfytsqftf9pjulb2tb9v.jpg)`,

      // backgroundImage: `url(https://res.cloudinary.com/dn1lqngds/image/upload/v1718315157/uploads/csqulpf1ca2x5y17snvx.jpg)`,
      // backgroundImage: `url(https://res.cloudinary.com/dn1lqngds/image/upload/v1718315204/uploads/f5ynljqgxhus2ty9plbr.jpg)`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
    }}
     className="flex  h-screen bg-[#e3e0e0]">
      <div className="flex-1">
       <div className="mt-[1rem]">
       {children}
       </div>
      </div>
    </div>
  );
}

export default Layout;


