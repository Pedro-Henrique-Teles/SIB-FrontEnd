/**
 * Middleware de Rotas Públicas
 * Define as rotas acessíveis publicamente (com e sem login) na aplicação.
 */

export const publicRoutes: string[] = [
  '/',
  '/termos',
  '/privacidade',
  '/login',
];

/**
 * Valida se um determinado caminho pertence às rotas públicas
 * @param pathname Caminho da URL a ser verificado
 * @returns boolean indicando se a rota é pública
 */
export function isPublicRoute(pathname: string): boolean {
  return publicRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
}

export interface MiddlewareRequest {
  nextUrl: {
    pathname: string;
  };
}

export default function middleware(request: MiddlewareRequest): Response | void {
  const { pathname } = request.nextUrl;

  // Rotas públicas são liberadas sem necessidade de autenticação
  if (isPublicRoute(pathname)) {
    return;
  }

  // Rotas privadas exigem validação de sessão/token
}
