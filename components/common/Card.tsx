import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

<Image src="/assets/logo.png" alt="Logo" width={50} height={50} />