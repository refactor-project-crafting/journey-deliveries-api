import { Urls } from "../entities/delivery.entity";

export class CreateDeliveryDto {
  owner: string;
  week: number;
  hasPartner: boolean;
  firstPartnerName?: string;
  secondPartnerName?: string;
  deliveryDate: Date;
  frontUrls?: Urls;
  backUrls?: Urls;
}
