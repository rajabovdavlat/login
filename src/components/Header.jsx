import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Header() {
  const { isAuthenticated, user } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  return (
    <header className="h-16 shadow-gray-900  bg-blue-500 border-none shadow flex items-center justify-between px-6">
      <h1 className="font-bold text-lg text-white">My App</h1>

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <span className="text-sm text-gray-600">{user?.email}</span>
            <button
              onClick={() => dispatch(logout())}
              className="px-3 py-1.5 rounded bg-gray-100 hover:bg-gray-200 text-sm"
            >
              Выйти
            </button>
          </>
        ) : (
          <span className="text-md font-semibold text-white">Гость</span>
        )}
      </div>
    </header>
  );
}
