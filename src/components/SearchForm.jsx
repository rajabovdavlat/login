import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, setQuery } from "../features/images/imagesSlice";

export default function SearchForm() {
  const dispatch = useDispatch();
  const query = useSelector((s) => s.images.query);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("Иltimos, rasm nomini kiriting! / Введите название картинки");
      return;
    }
    dispatch(fetchImages(query));
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2 justify-center mb-8">
      <input
        type="text"
        className="input bg-gray-400 hover:bg-gray-600 text-white border-none rounded-sm focus:outline focus:outline-2 focus:outline-blue-500 w-full max-w-md"
        placeholder="Masalan: cat, mountains, car..."
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
      />
      <button type="submit" className="p-3 bg-blue-500 rounded-lg cursor-pointer text-white hover:bg-blue-900">
        Qidirish
      </button>
    </form>
  );
}
