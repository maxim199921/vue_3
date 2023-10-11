export const path = {
    admin: 'admin',
    estates: 'estates'
};

export class DBPathHelper {
    static getEstatesPath(domain: string, estateId?: string): string {
        return `${domain}/${path.admin}/${path.estates}` + (estateId ? `/${estateId}` : '');
    }
}
