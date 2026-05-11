"use client";

import { ShieldCheck, UserCog } from "lucide-react";

export function UsuariosView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <UserCog className="h-6 w-6 text-amber-400" /> Usuários
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Gerencie os membros e papéis da sua organização
        </p>
      </div>

      <div className="max-w-2xl rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/15">
            <ShieldCheck className="h-5 w-5 text-amber-400" />
          </div>
          <div>
            <h2 className="font-semibold text-white">Gestor principal</h2>
            <p className="mt-1 text-sm text-slate-400">
              O controle de usuários está preparado para receber autenticação dedicada em uma próxima etapa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
