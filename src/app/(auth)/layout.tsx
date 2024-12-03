import Image from "next/image";
import Header from '.././Header'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 pt-16">
        {/* Left Section: Image and Text */}
        <div className="relative hidden md:block">
          <Image
            src="/auth.jpeg?height=1080&width=1920"
            alt="Authentication background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/50" />
          <div className="relative z-10 flex h-full flex-col justify-between p-12">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Ardhisasa</span>
            </div>
            <div className="space-y-4">
              <blockquote className="text-lg font-medium">
                This platform enables the common mwananchi to access credible, reliable, and efficient land and land-based services.
              </blockquote>
              <p className="text-sm">Ministry of Lands and Physical Planning</p>
            </div>
          </div>
        </div>
        {/* Right Section: Children */}
        <div className="flex items-center justify-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

