import { NextRequest, NextResponse } from "next/server";
import { routes } from "@/routes/routes";

type UserSession = {
  name: string;
  userName: string;
  role: string;
  permissions: string[];
};

function parseUserSession(req: NextRequest): UserSession | null {
  try {
    const raw = req.cookies.get("user-session")?.value;
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const pathToRegex = (path: string) =>
  new RegExp(`^${path.replace(/:[^/]+/g, "[^/]+")}$`);

function extractProtectedRoutes(
  obj: any
): { path: string; access: string[] }[] {
  const routes: { path: string; access: string[] }[] = [];

  function traverse(value: any) {
    if (value && typeof value === "object") {
      if ("path" in value && "access" in value) {
        routes.push({ path: value.path, access: value.access });
      }
      Object.values(value).forEach(traverse);
    }
  }

  traverse(obj);
  return routes;
}


export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = parseUserSession(req);
  const protectedRoutes = extractProtectedRoutes(routes);

  const matchedRoute = protectedRoutes.find(({ path }) =>
    pathToRegex(path).test(pathname)
  );

  if (matchedRoute) {
    if (!session) {
      const loginUrl = new URL("/login/session", req.url);
      loginUrl.searchParams.set("redirectTo", pathname);
      return NextResponse.redirect(loginUrl);
    }

    const hasAllPermissions = matchedRoute.access.every((perm) =>
      session.permissions.includes(perm)
    );

    if (!hasAllPermissions) {
      return NextResponse.redirect(new URL("/403", req.url));
    }
  }

  return NextResponse.next();
}
