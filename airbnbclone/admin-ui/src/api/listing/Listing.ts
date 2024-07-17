import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { Wishlist } from "../wishlist/Wishlist";
import { Trip } from "../trip/Trip";

export type Listing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  locationType: string;
  placeType: string;
  mapData: JsonValue;
  locationData: JsonValue;
  placeSpace: JsonValue;
  placeAmeneties: JsonValue;
  photos: JsonValue;
  listingCreatedBy?: User;
  title: string;
  description: string;
  price: number;
  wishlists?: Array<Wishlist>;
  trips?: Array<Trip>;
};
