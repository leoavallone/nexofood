import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";

export const metadata: Metadata = { title: "Criar Conta" };

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Nexo<span className="text-amber-400">Foods</span>
          </h1>
          <p className="text-slate-400 mt-2 text-sm">Crie sua conta e comece agora</p>
        </div>

        <div className="w-[min(92vw,24rem)] rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-2xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15">
              <Store className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-semibold text-white">Empresa pronta</h2>
              <p className="text-sm text-slate-400">Acesse o painel principal</p>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
          >
            Começar agora
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
