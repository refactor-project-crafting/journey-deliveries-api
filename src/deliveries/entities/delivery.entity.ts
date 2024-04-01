import { UUID } from "crypto";

export type Urls = {
  gitHub: string;
  production: string;
};

export class Delivery {
  id: UUID;
  owner: string;
  week: number;
  hasPartner: boolean;
  firstPartnerName?: string;
  secondPartnerName?: string;
  deliveryDate: Date;
  frontUrls?: Urls;
  backUrls?: Urls;
}
