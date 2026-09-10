import React from "react";

function MapImg() {
  return (
    <div className="main-container mt-15">
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31367.586248172738!2d76.99314949368828!3d10.661122526749528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba839d117dea505%3A0xb3fd96d9c8642659!2sPollachi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1789057994542!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default MapImg;
