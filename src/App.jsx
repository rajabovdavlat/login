import React from "react";
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div  className="min-h-screen bg-black/30">
      <div className="container mx-auto px-4 py-10 max-w-6xl">
        <h1 className="text-6xl font-bold text-center uppercase mb-8">
          Rasm qidirish 
        </h1>

        <SearchForm />
        <Gallery />
      </div>
    </div>
  );
}
