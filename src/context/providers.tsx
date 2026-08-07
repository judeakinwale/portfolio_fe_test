"use client";
import { LenisProvider } from "@/context/lenis";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <LenisProvider>{children}</LenisProvider>;
};
