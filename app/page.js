"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window.PagefindUI !== "undefined") return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/pagefind/pagefind-ui.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "/pagefind/pagefind-ui.js";
    script.onload = () => {
      new window.PagefindUI({ element: "#search", showSubResults: true });
    };
    document.body.appendChild(script);
  }, []);

  return <div className="">aaa</div>;
}
