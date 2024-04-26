export interface Directory {
    uuid?: string;
    firstname?: string;
    lastname?: string;
    city?: string;
    physicalAddress?: string;
    postalAddress?: string;
    postalcode?: string;
    street?: string;
    
    avatarUrl?: string;
    description?: string;
    isprimary?: boolean;
    displayPosition?: number;
    emails?: string[];
    phonenumbers?: string[];
    latitude?: number;
    longitude?: number;
    pictureUrl?: string;
    schedule ?: string[];
    tags?: string[];
    website?: string;
    i18n?: any[];
    priority?: number;
    label?: string;

}