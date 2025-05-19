export const hasParams = (url: string): boolean => {
  const queryString = url.split("?")[1];
  return queryString
    ? new URLSearchParams(queryString).toString().length > 0
    : false;
};

<<<<<<< HEAD
=======
// ----------------------------------------------------------------------

>>>>>>> 9a340526c3e6c2c8d371147b716aa27a47ac5be9
export function removeLastSlash(pathname: string): string {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

<<<<<<< HEAD
=======
// ----------------------------------------------------------------------

>>>>>>> 9a340526c3e6c2c8d371147b716aa27a47ac5be9
export function removeParams(url: string): string {
  try {
    const urlObj = new URL(url, window.location.origin);
    return removeLastSlash(urlObj.pathname);
  } catch (error) {
    console.error("Invalid URL in removeParams:", error);
    return url;
  }
}

<<<<<<< HEAD
=======
// ----------------------------------------------------------------------

>>>>>>> 9a340526c3e6c2c8d371147b716aa27a47ac5be9
export function isExternalLink(url: string): boolean {
  return url.startsWith("http");
}
