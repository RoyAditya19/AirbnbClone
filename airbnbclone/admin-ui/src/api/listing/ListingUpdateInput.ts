import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistUpdateManyWithoutListingsInput } from "./WishlistUpdateManyWithoutListingsInput";
import { TripUpdateManyWithoutListingsInput } from "./TripUpdateManyWithoutListingsInput";

export type ListingUpdateInput = {
  locationType?: string;
  placeType?: string;
  mapData?: InputJsonValue;
  locationData?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeAmeneties?: InputJsonValue;
  photos?: InputJsonValue;
  listingCreatedBy?: UserWhereUniqueInput;
  title?: string;
  description?: string;
  price?: number;
  wishlists?: WishlistUpdateManyWithoutListingsInput;
  trips?: TripUpdateManyWithoutListingsInput;
};
