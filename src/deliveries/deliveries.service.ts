import { Injectable } from "@nestjs/common";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { PersistanceRepositoryService } from "src/persistance-repository/persistance-repository.service";
import { Delivery } from "./entities/delivery.entity";
import { randomUUID } from "crypto";
import { DeleteDeliveryDto } from "./dto/delete-delivery.dto";

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
    return await this.persistanceRepository.getAllData();
  }

  findOne(id: number) {
    return `This action returns a #${id} delivery`;
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return `This action updates a #${id} delivery`;
  }

  async remove(deleteDeliveryDto: DeleteDeliveryDto) {
    return await this.persistanceRepository.deleteData(deleteDeliveryDto);
  }
}
