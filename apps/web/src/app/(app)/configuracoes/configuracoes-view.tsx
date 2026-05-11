"use client";

import { Building2, Mail, Phone, Settings } from "lucide-react";

export function ConfiguracoesView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Settings className="h-6 w-6 text-amber-400" /> Configurações
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Configurações da sua organização
        </p>
      </div>

      <div className="max-w-2xl rounded-xl border border-slate-700 bg-slate-800 p-6">
        <div className="flex items-center gap-3 border-b border-slate-700 pb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/15">
            <Building2 className="h-5 w-5 text-amber-400" />
          </div>
          <div>
            <h2 className="font-semibold text-white">NexoFoods</h2>
            <p className="text-sm text-slate-400">Ambiente principal</p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Mail className="h-4 w-4 text-amber-400" />
              E-mail
            </div>
            <p className="mt-2 text-sm text-slate-500">Configure no cadastro da empresa</p>
          </div>

          <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Phone className="h-4 w-4 text-amber-400" />
              Telefone
            </div>
            <p className="mt-2 text-sm text-slate-500">Configure no cadastro da empresa</p>
          </div>
        </div>
      </div>
    </div>
  );
}
