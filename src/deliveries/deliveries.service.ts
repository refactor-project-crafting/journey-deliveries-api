import { Injectable } from "@nestjs/common";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { PersistanceRepositoryService } from "src/persistance-repository/persistance-repository.service";

@Injectable()
export class DeliveriesService {
  constructor(private persistanceRepository: PersistanceRepositoryService) {}

  create(createDeliveryDto: CreateDeliveryDto) {
    return "This action adds a new delivery";
  }

  findAll() {
    return this.persistanceRepository.getAllData();
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
