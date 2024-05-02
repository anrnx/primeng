export interface Directory {
    uuid?: string;

    name?: string;
    firstname?: string;
    city?: string;
    physicalAddress?: string;
    postalAddress?: string;
    postalcode?: string;
    street?: string;
    avatarUrl?: string;
    description?: string;

    pictureUrl?: string;

    emails?: any[];
    phonenumbers?: any[];
    label?: string;

    isPrimary?: boolean;
    displayPosition?: number;

    latitude?: number;
    longitude?: number;

    schedule ?: string[];
    tags?: string[];
    website?: string;

    i18n?: any[];
    priority?: number;
}