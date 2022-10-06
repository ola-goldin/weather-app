export interface City {
    full_name:string;
    name: string;
    latitude: number;
    longitude:number;
    image: string;
    time: Date;

}

export const localeOptions:Intl.DateTimeFormatOptions={
    
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    minute: '2-digit',
    hour: '2-digit'
}
