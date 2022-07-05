import { useStore } from "../store";
import { AuthDialog } from "../components/AuthDialog";

function MainLayout() {
  const isAuthenticated = useStore((state) => state.user) !== null;
  return (
    <>
      <AuthDialog />
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
          <button className="p-2 bg-slate-50 rounded cursor-pointer">
            Log In
          </button>
        )}
      </header>
    </>
  );
}

export { MainLayout };
