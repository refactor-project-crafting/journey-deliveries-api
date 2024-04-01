import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as fs from "fs/promises";
import { UniqueDataDeliveryDto } from "src/deliveries/dto/unique-data-delivery.dto";
import { Delivery } from "src/deliveries/entities/delivery.entity";

@Injectable()
export class PersistanceRepositoryService {
  constructor(private path: string) {}

  async getAllData(): Promise<Delivery[]> {
    try {
      const data = await fs.readFile(this.path, "utf8");
      return JSON.parse(data) as Delivery[];
    } catch (error) {
      throw new HttpException(
        "Error geting Deliveries",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createData(data: Delivery): Promise<void> {
    const deliveries = await this.getAllData();

    const existingDelivery = deliveries.find(
      (delivery) =>
        delivery.week === data.week && delivery.owner === data.owner,
    );

    if (existingDelivery) {
      throw new HttpException("Delivery already exists", HttpStatus.CONFLICT);
    }

    deliveries.push(data);

    try {
      await fs.writeFile(this.path, JSON.stringify(deliveries, null, 2));
    } catch (error) {
      throw new HttpException(
        "Error Creating Delivery",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteData({ week, owner }: UniqueDataDeliveryDto): Promise<void> {
    const deliveries = await this.getAllData();

    const existingDelivery = deliveries.find(
      (delivery) => delivery.week === week && delivery.owner === owner,
    );

    if (!existingDelivery) {
      throw new HttpException("Delivery not found", HttpStatus.NOT_FOUND);
    }

    const newDeliveries = deliveries.filter(
      (delivery) => !(delivery.week === week && delivery.owner === owner),
    );

    try {
      await fs.writeFile(this.path, JSON.stringify(newDeliveries, null, 2));
    } catch (error) {
      throw new HttpException(
        "Error Deleting Delivery",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
