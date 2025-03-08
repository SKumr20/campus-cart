'use client';
import Link from "next/link";
import { useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast";
import createUser from "@/app/actions/createUser";
import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";


const RegisterPage = () => {
  const [state, formAction] = useActionState(createUser, {});

  const router = useRouter();
  useEffect(() => { 
    if (state.error) toast.error(state.error);
    if (state.success) {
      toast.success('You can now login!');
      router.push('/login');
    }
  }, [state]); // useEffect runs if state changes


  return (
    <div className="flex items-center justify-center">
        <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-sm mt-10">
          <form action={formAction}>
            <h2 className="text-2xl font-bold text-center text-card-foreground mb-6">
              Join Campus Cart
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="block text-card-foreground mb-2"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-card-foreground mb-2"
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

            <div className="mb-4">
              <label htmlFor="password" className="block text-card-foreground mb-2"
                >Password</label
              >
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-card-foreground mb-2"
                >Confirm Password</label
              >
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="********"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-5">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Register
              </button>

              <p>
                Have an account?
                <Button variant="link">
                  <Link href="/login"> Login</Link>
                </Button>
              </p>
            </div>
          </form>
        </div>
      </div>
  )
}

export default RegisterPage