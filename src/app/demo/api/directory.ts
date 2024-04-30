export interface Directory {
    uuid?: string;

    name?: string;
    lastname?: string;
    city?: string;
    physicalAddress?: string;
    postalAddress?: string;
    postalcode?: string;
    street?: string;
    avatarUrl?: string;
    description?: string;

    pictureUrl?: string;

    emails?: string[];
    phonenumbers?: string[];
    label?: string;

    isprimary?: boolean;
    displayPosition?: number;

    latitude?: number;
    longitude?: number;

    schedule ?: string[];
    tags?: string[];
    website?: string;

    i18n?: any[];
    priority?: number;
}