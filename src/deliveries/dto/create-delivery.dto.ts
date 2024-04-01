import { OmitType } from "@nestjs/mapped-types";
import { Delivery } from "../entities/delivery.entity";

export class CreateDeliveryDto extends OmitType(Delivery, [
  "id",
  "createdAt",
]) {}
