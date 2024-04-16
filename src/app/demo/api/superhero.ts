export interface Squad{
    squadName?: string,
    homeTown?: string,
    formed?: string, 
    secretBase : string,
    active?: boolean,
    members?: SuperHero[]
}

export interface SuperHero{
    name?: string,
    age?: string,
    secretIdentity?: string,
    powers?: string[],
}