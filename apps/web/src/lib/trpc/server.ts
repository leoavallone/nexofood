import { createCallerFactory } from "@gastrosys/api";
import { appRouter } from "@gastrosys/api";
import { createTenantClient } from "@gastrosys/db";

const DEMO_USER_ID = "demo-user";
const DEMO_TENANT_ID = "demo-tenant";

/**
 * Caller do tRPC para uso em Server Components e Server Actions.
 * Permite chamar procedures diretamente, sem HTTP.
 *
 * USO em Server Component:
 * ```tsx
 * import { trpc } from "@/lib/trpc/server";
 * const clientes = await trpc.clientes.listar({ pagina: 1 });
 * ```
 */
export async function createServerCaller() {
  const createCaller = createCallerFactory(appRouter);
  return createCaller({
    userId: DEMO_USER_ID,
    tenantId: DEMO_TENANT_ID,
    db: createTenantClient(DEMO_TENANT_ID),
  });
}
