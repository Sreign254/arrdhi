import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <>
    
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] mt-20"> {/* Added margin for spacing */}
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <div className="grid gap-6">
          <form>
            <div className="grid gap-4">
              {/* Email Input */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                />
              </div>
              {/* Password Input */}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
             
              <Button>
              <Link href="/login" >
              Sign In 
               </Link>
              </Button>
            </div>
          </form>
          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {/* Social Login Button */}
          <Button variant="outline" type="button">
            Continue with Google
          </Button>
        </div>
        {/* Sign Up Link */}
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/auth/register"
            className="underline underline-offset-4 hover:text-primary"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
