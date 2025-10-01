"use client";

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  return (
    <div
      className="relative h-64 md:h-60 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url('/banner-header-bg.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Title */}
      <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
        {title}
      </h1>
    </div>
  );
}
