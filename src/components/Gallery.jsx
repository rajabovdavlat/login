import React from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

export default function Gallery() {
  const { items, loading, error, searched } = useSelector((s) => s.images);

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error max-w-md mx-auto">
        <span>{error}</span>
      </div>
    );
  }

  if (searched && items.length === 0) {
    return (
      <div className="alert alert-warning max-w-md mx-auto">
        <span>Natija topilmadi. Boshqa so‘z bilan urinib ko‘ring.</span>
      </div>
    );
  }

  if (!items.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((p) => (
        <ImageCard
          key={p.id}
          url={p.urls.small}
          alt={p.alt_description}
          author={p.user?.name ?? "Unknown"}
          link={p.links.html}
        />
      ))}
    </div>
  );
}
