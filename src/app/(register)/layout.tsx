import Header from '.././Header'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid min-h-screen  pt-16">
     
        <div className="flex items-center justify-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

