type Urls = {
  gitHub: string;
  production: string;
};

export class Delivery {
  id: number;
  owner: string;
  week: number;
  hasPartner: boolean;
  firstPartnerName?: string;
  secondPartnerName?: string;
  deliveryDate: Date;
  frontUrls?: Urls;
  backUrls?: Urls;
}
