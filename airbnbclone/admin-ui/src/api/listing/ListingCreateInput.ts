import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  locationType: string;
  placeType: string;
  mapData: InputJsonValue;
  locationData: InputJsonValue;
  placeSpace: InputJsonValue;
  placeAmeneties: InputJsonValue;
  photos: InputJsonValue;
  listingCreatedBy: UserWhereUniqueInput;
  title: string;
  description: string;
  price: number;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
  trips?: TripCreateNestedManyWithoutListingsInput;
};
