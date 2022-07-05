import { useState } from "react";
import { toast } from "react-toastify";
import { useStore } from "../store";
import { AuthDialog } from "../components/AuthDialog";

function MainLayout() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Error message placeholder");
  const user = useStore((state) => state.user);
  const isAuthenticated = useStore((state) => state.user) !== null;
  const authenticate = useStore((state) => state.authenticate);
  return (
    <>
      <AuthDialog
        errorMessage={errorMsg}
        isOpen={isAuthOpen}
        onLoginRequest={(email: string, password: string) =>
          authenticate(email, password).then(
            () => {
              console.info("Logged in., user = ", user);
              setIsAuthOpen(false);
              toast("You have logged in!");
            },
            (errorText) => {
              console.error("Didn't log in.");
              setErrorMsg(errorText);
            }
          )
        }
        onCloseRequest={() => setIsAuthOpen(false)}
      />
      <header className="p-6 top-16 bg-slate-400 grid grid-cols-4 justify-items-center items-center">
        <span className="text-2xl font-medium text-black basis-1/5">
          Coin Mena Test Task
        </span>
        <nav className="inline-block align-middle basis-4/5">
          <ul className="list-none">
            <li className="inline-block mx-3 cursor-pointer">Home</li>
            <li className="inline-block mx-3 cursor-pointer">Trade</li>
          </ul>
        </nav>
        <div></div>
        {!isAuthenticated && (
          <button
            onClick={(_) => setIsAuthOpen(true)}
            className="p-2 bg-slate-50 rounded cursor-pointer"
          >
            Log In
          </button>
        )}
        {isAuthenticated && <span>Hello, {user?.email}</span>}
      </header>
    </>
  );
}

export { MainLayout };
