export const path = {
    catalog: 'catalog'
};

export class DBPathHelper {
    static getCatalogPath(domain: string, catalogId: string): string {
        return `${domain}/${path.catalog}` + (catalogId ? `/${catalogId}` : '');
    }
}
