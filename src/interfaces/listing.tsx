export interface Listing {
    id: number;
    name:  string;
    rating: number;
    host: string;
    date: string;
    cost : number;
    images: {
        rooms?: string;
        design?: string;
        monutain?: string; 
        tropical?: string;
        cabins?: string;
        barns?: string;
        pools?: string;
        breakfast?: string;
        chef?: string;
        beach?: string;
        campers?: string;
        windmill?: string;
        new?: string;
        mansion?: string;
        caves?: string;
        arctic?: string;
        cities?: string;
        golfing?: string;
        castles?: string;
        boat?: string;
    }
    distance: string;
    trend: string[];
}

