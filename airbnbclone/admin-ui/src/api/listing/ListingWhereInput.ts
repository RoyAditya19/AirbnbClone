import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type ListingWhereInput = {
  id?: StringFilter;
  locationType?: StringFilter;
  placeType?: StringFilter;
  mapData?: JsonFilter;
  locationData?: JsonFilter;
  placeSpace?: JsonFilter;
  placeAmeneties?: JsonFilter;
  photos?: JsonFilter;
  listingCreatedBy?: UserWhereUniqueInput;
  title?: StringFilter;
  description?: StringFilter;
  price?: FloatFilter;
  wishlists?: WishlistListRelationFilter;
  trips?: TripListRelationFilter;
};
