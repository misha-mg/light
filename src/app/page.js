"use client";

import HandScanner from "@/components/HandScanner";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("render twice");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HandScanner />
    </main>
  );
}
