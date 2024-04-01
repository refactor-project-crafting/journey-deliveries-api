import { Injectable } from "@nestjs/common";
import * as fs from "fs/promises";
import { Delivery } from "src/deliveries/entities/delivery.entity";

@Injectable()
export class PersistanceRepositoryService {
  constructor(private path: string) {}

  async getAllData(): Promise<Delivery[]> {
    try {
      const data = await fs.readFile(this.path, "utf8");

      return JSON.parse(data) as Delivery[];
    } catch (error) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
}
