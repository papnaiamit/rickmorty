/**
 * @Interface
 */


 export interface IRickMortyResponse {
    info: Iinfo;
    results: Iresults[];
 }

 export interface Iinfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
 }

 export interface Iresults {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Iorigin;
    location: Ilocation;
    image: string;
    episode: [];
    url: string;
    created: string;
 }

 export interface Ilocation {
    name: string;
    url: string;
 }

 export interface Iorigin {
    name: string;
    url: string;
 }
