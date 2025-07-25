import React from "react";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
  const bgUrl = "/cyber-shield.png";

  return (
    <main className="flex-1">
      <section className="relative min-h-[calc(100vh-8rem)] flex">
      
        <div className="flex-1 bg-white flex items-center justify-center px-4">
        
          <div className="w-full max-w-md relative z-10">
            <LoginForm />
          </div>

          <div
            className="
              absolute inset-0 bg-cover bg-center bg-no-repeat
              lg:hidden
            "
            style={{ backgroundImage: `url(${bgUrl})` }}
          >
            <div className="absolute inset-0 bg-black/30" /> {/* затемнение */}
          </div>
        </div>

        <div
          className="
            hidden lg:block flex-1
            bg-cover bg-center bg-no-repeat
          "
          style={{ backgroundImage: `url(${bgUrl})` }}
        />
      </section>
    </main>
  );
}
