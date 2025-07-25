import React from "react";

export default function ImageCard({ url, alt, author, link }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      <figure className="h-64 w-full overflow-hidden">
        <img
          src={url}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </figure>
      <div className="p-4">
        <h2 className="uppercase  text-base">
          {alt || "No title"}
        </h2>
        <p className="text-sm font-semibold text-gray-600 opacity-70 mb-4">by {author}</p>
        <div className="justify-end">
          <a
            className="btn-outline p-2 rounded-sm text-white hover:bg-blue-800 bg-blue-500"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Ochiq rasm
          </a>
        </div>
      </div>
    </div>
  );
}
