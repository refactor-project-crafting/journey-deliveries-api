import { Injectable } from "@nestjs/common";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { PersistanceRepositoryService } from "src/persistance-repository/persistance-repository.service";
import { Delivery } from "./entities/delivery.entity";
import { randomUUID } from "crypto";

@Injectable()
export class DeliveriesService {
  constructor(private persistanceRepository: PersistanceRepositoryService) {}

  create(createDeliveryDto: CreateDeliveryDto) {
    const newDeliveryId = randomUUID();
    const newDelivery = {
      id: newDeliveryId,
      ...createDeliveryDto,
    };

    return this.persistanceRepository.createData(newDelivery);
  }

  async findAll(): Promise<Delivery[]> {
    debugger;
    return await this.persistanceRepository.getAllData();
  }

  findOne(id: number) {
    return `This action returns a #${id} delivery`;
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return `This action updates a #${id} delivery`;
  }

  remove(id: number) {
    return `This action removes a #${id} delivery`;
  }
}
