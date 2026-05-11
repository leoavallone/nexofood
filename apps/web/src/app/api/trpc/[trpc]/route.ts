import { createTenantClient } from "@gastrosys/db";
import { appRouter } from "@gastrosys/api";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const DEMO_USER_ID = "demo-user";
const DEMO_TENANT_ID = "demo-tenant";

/**
 * Handler tRPC para o App Router do Next.js.
 * Todas as chamadas tRPC passam por aqui: /api/trpc/[procedimento]
 */
const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => {
      return {
        userId: DEMO_USER_ID,
        tenantId: DEMO_TENANT_ID,
        db: createTenantClient(DEMO_TENANT_ID),
      };
    },
    onError({ path, error }) {
      if (process.env.NODE_ENV === "development") {
        console.error(`❌ tRPC error em ${path}:`, error);
      }
    },
  });

export { handler as GET, handler as POST };
