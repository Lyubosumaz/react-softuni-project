export default function currentPage() {
    const pathnameNesting = 1; // Change it for more in-nesting of the url
    const currentPathname = window.location.pathname.slice(1);

    if (currentPathname.indexOf('/') > -1) {
        const pathnameArr = currentPathname.split('/');

        if (Array.isArray(pathnameArr) && pathnameArr.length > 1) {
            return pathnameArr[pathnameNesting];
        }
    }

    return currentPathname;
}
