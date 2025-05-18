import { useRouterState } from "@tanstack/react-router";
import {
  hasParams,
  removeParams,
  isExternalLink,
  removeLastSlash,
} from "../lib/utils";

export function useActiveLink(itemPath: string, deep: boolean = true): boolean {
  const pathname = removeLastSlash(
    useRouterState({ select: (s) => s.location.pathname })
  );

  const pathHasParams = hasParams(itemPath);

  const notValid = itemPath.startsWith("#") || isExternalLink(itemPath);
  if (notValid) {
    return false;
  }

  const isDeep = deep || pathHasParams;

  if (isDeep) {
    const defaultActive = pathname.includes(itemPath);

    const originItemPath = removeParams(itemPath);
    const hasParamsActive = pathHasParams && originItemPath === pathname;

    return defaultActive || hasParamsActive;
  }

  return pathname === itemPath;
}
