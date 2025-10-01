"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/212661979186"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center transition-colors z-50"
    >
      <MessageSquare size={24} className="mr-2" />
      Contacter via WhatsApp
    </a>
  );
}
