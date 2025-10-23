// app/login/session/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { mockSession } from "@/mocks/mockSession";

export default function MockLogin() {
  const router = useRouter();

  useEffect(() => {


    // Guardar la cookie manualmente (solo para desarrollo/mock)
    document.cookie = `user-session=${encodeURIComponent(
      JSON.stringify(mockSession)
    )}; path=/`;

    // Redirigir a la ruta protegida después del "login"
    router.push("/home");
  }, []);

  return <div>Simulando login y redirigiendo...</div>;
}
