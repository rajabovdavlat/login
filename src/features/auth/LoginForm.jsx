export default function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-xl p-8 shadow">
      <form>
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign up / Login</h2>

        <input
          type="text"
          placeholder="Имя пользователя"
          className="w-full mb-4 px-3 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Пароль"
          className="w-full mb-6 px-3 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2.5 text-white font-medium hover:bg-blue-700 transition"
        >
          Продолжить
        </button>
      </form>
    </div>
  );
}
