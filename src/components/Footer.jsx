import React from "react";

export default function Footer() {
  return (
    <footer className="h-16 border-none shadow-gray-800 bg-blue-500 border-t flex items-center justify-center text-sm text-white">
      © {new Date().getFullYear()} My App
    </footer>
  );
}
