export interface Listing {
    id: number;
    name:  string;
    rating: number;
    host: string;
    date: string;
    cost : number;
    images: {
        Rooms?: string;
        Design?: string;
        Top_of_the_world?: string; 
        Tropical?: string;
        Cabins?: string;
        Barns?: string;
        Amazing_pools?: string;
        Bed_breakfasts?: string;
        Chef_kitchens?: string;
        Beach?: string;
        Campers?: string;
        Windmills?: string;
        New?: string;
        Mansions?: string;
        Caves?: string;
        Arctic?: string;
        Iconic_Cities?: string;
        Golfing?: string;
        Castles?: string;
        Boats?: string;
    }
    distance: string;
    trend: string[];
}

