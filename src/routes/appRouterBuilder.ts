export function appRouterBuilder(
  path: string,
  params: Record<string, string | number> = {}
): string {
  let builtPath = path;

  for (const [key, value] of Object.entries(params)) {
    builtPath = builtPath.replace(`:${key}`, encodeURIComponent(String(value)));
  }

  return builtPath;
}
