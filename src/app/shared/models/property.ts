export interface Details {
  air_conditioner: boolean;
  backyard: boolean;
  bathrooms: number;
  bedrooms: number;
  floors: number;
  parking: number;
  security: boolean;
  service_room: boolean;
  size: number;
  terrace: boolean;
  type: string;
  warehouse: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Property {
  address: string;
  currency: string;
  description: string;
  details: Details;
  id: number;
  location: Location;
  price: number;
  tags: string[];
  title: string;
}

export interface PropertyImages {
  id_property: number;
  images: string[];
}
