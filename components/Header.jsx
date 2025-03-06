'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import logo from '@/assets/images/logo.svg';
import { User, LogIn, LogOut, PackageOpen, MailOpen } from 'lucide-react';
import destroySession from "@/app/actions/destroySession";
import toast from "react-hot-toast";
import { useAuth } from "@/context/authContext";
import { Button } from "./ui/button";
import { ThemeSwitch } from "./ThemeSwitch";


const Header = () => {
  const router = useRouter();
  const { isAuthenticated, setIsAuthenticated } = useAuth();


  const handleLogout = async () => {
    const { success, error } = await destroySession();

    if (success) {
      setIsAuthenticated(false);
      router.push('/login');
    }
    else {
      console.log(error);
      toast.error(error);
    }
  }

  return (
    <header className="bg-[var(--background)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image className="h-8 w-8" src={ logo } alt="Campus-cart" priority={true} />
            </Link>
            <h2 className="text-lg">Campus Cart</h2>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Button asChild variant="outline">
                  <Link href="/" >
                  Products
                  </Link>
                </Button>
                
                {/* <!-- Logged In Only --> */}
                { isAuthenticated && (
                  <>
                      <Link
                      href="/bids"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                      >
                      My Bids
                      </Link>
                      <Link
                        href="/products/add"
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
                      >
                        Add Product
                      </Link>
                  </>
                ) }

              </div>
            </div>
          </div>
          {/* <!-- Right Side Menu --> */}
          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <!-- Logged Out Only --> */}
              { !isAuthenticated && (
                <>  
                    <div className="flex gap-1">
                      <Button variant="secondary">
                        <MailOpen className="inline"/>
                        <Link
                        href="/login"
                        >
                        Login
                        </Link>
                      </Button>
                      <Button variant="outline">
                      <User />
                        <Link
                        href="/register"
                        >
                        Register
                        </Link>
                      </Button>
                    </div>


                </>
              )}

              { isAuthenticated && (
                <>
                  <Link href="/products/my">
                    <PackageOpen className="inline mr-1" /> My Products
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mx-3 text-gray-800 hover:text-gray-600"
                  >
                    <LogOut className="inline mr-1" /> Sign Out
                  </button>
                </>
              )}
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Mobile menu --> */}
      <div className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            href="/"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
          >
            Products
          </Link>
          {/* <!-- Logged In Only --> */}
          { isAuthenticated && (
            <>
              <Link
                href="/bids"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                My Bids
              </Link>
              <Link
                href="/products/add"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
              >
                Add Product
              </Link>
            </>
          ) }
        </div>
      </div>
    </header>
  )
}

export default Header