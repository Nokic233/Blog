export function getBaseUrl(url: string) {
    return import.meta.env.BASE_URL === '/'
        ? url
        : `${import.meta.env.BASE_URL}${url}`
}
