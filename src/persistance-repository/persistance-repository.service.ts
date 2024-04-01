import { Injectable } from "@nestjs/common";
import * as fs from "fs/promises";
import { Delivery } from "src/deliveries/entities/delivery.entity";

@Injectable()
export class PersistanceRepositoryService {
  constructor(private path: string) {}

  async getAllData(): Promise<Delivery[]> {
    try {
      const data = await fs.readFile(this.path, "utf8");
      debugger;
      return JSON.parse(data) as Delivery[];
    } catch (error) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

  async createData(data: Delivery): Promise<void> {
    try {
      const deliveries = await this.getAllData();

      deliveries.push(data);

      await fs.writeFile(this.path, JSON.stringify(deliveries, null, 2));
    } catch (error) {
      throw new Error(`Error writing file: ${error.message}`);
    }
  }
}
