import { Injectable } from "@nestjs/common";
import * as fs from "fs/promises";

@Injectable()
export class PersistanceRepositoryService {
  constructor(private path: string) {}

  async getAllData(): Promise<string> {
    try {
      const data = await fs.readFile(this.path, "utf8");

      return JSON.parse(data);
    } catch (error) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
}
