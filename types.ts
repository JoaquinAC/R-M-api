export interface Characters {
    id: number
    name: string
    status: Status
    species: string
    gender: Gender
    origin: OriginandLocation
    location:OriginandLocation
    image: string
    episodes: string[]
  }


export enum Status {
    Alive = 'Alive',
    Dead = 'Dead',
    Unknown = 'Unknown'
}

export enum Gender {
    Female = 'Female',
    Male = 'Male',
    Genderless = 'Genderless',
    Unknown = 'Unknown'
}

export interface OriginandLocation {
    name : string ,
    url : string
}