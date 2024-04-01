import { PickType } from "@nestjs/mapped-types";
import { Delivery } from "../entities/delivery.entity";

export class DeleteDeliveryDto extends PickType(Delivery, ["owner", "week"]) {}
