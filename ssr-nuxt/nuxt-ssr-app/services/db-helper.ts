export const path = {
    adminEstates: 'admin/estates',
    publicSearchEstates: 'public/estates/search'
};

export class DBPathHelper {
    static getEstatesPath(domain: string, estateId?: string): string {
        return `${domain}/${path.adminEstates}` + (estateId ? `/${estateId}` : '');
    }

    static getSearchEstatesPath(domain: string, estateId?: string): string {
        return `${domain}/${path.publicSearchEstates}` + (estateId ? `/${estateId}` : '');
    }
}
