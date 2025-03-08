'use client' // cannot use hooks with server components(by default)
import Link from "next/link";
import createSession from "../actions/createSession";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { Button } from "@/components/ui/button";

const LoginPage = () => {

    const [state, formAction] = useActionState(createSession, {}); // empty state - success/error on submit
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (state.error) toast.error(state.error);
      if (state.success) {
        toast.success('Logged in successfully!');
        setIsAuthenticated(true);
        router.push('/');
      }
    }, [state]);

    return (
      <>
        <div className="flex items-center justify-center">
          <div className="bg-background text-accent-foreground shadow-lg rounded-[var(--radius)] p-6 w-full max-w-sm mt-20">
            <form action={formAction}>
              <h2 className="text-2xl font-bold text-center text-foreground mb-6">
                Login
              </h2>

              <div className="mb-4">
                <label htmlFor="email" className="block text-foreground font-bold mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-foreground dark:text-card-foreground font-bold mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                />
              </div>

              <div className="flex flex-col gap-5">
                <Button variant="default"
                  type="submit"
                >
                  Login
                </Button>

                <p>
                  No account?
                  <Button variant="link">
                    <Link href="/register"> Register</Link>
                  </Button>
                  
                </p>
              </div>
            </form>
          </div>
        </div>
      </>

    )
  }
  
  export default LoginPage