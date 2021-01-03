function currentPage() {
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

function currentPageClass() {
    switch (currentPage()) {
        case 'register':
        case 'login':
            return 'form';
        default:
            return 'component';
    }
}

function currentPagePathList() {
    const currentPathname = window.location.pathname.split('/');

    if (currentPathname.length > 1) {
        return currentPathname.slice(1);
    }

    return currentPathname;
}

export { currentPage, currentPageClass, currentPagePathList };
