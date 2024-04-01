import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { Delivery } from "./entities/delivery.entity";
import { UniqueDataDeliveryDto } from "./dto/unique-data-delivery.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class DeliveriesService {
  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
  ) {}

  async create(createDeliveryDto: CreateDeliveryDto) {
    const existingDelivery = await this.findOne({
      week: createDeliveryDto.week,
      owner: createDeliveryDto.owner,
    });

    if (existingDelivery) {
      throw new HttpException("Delivery already exists", HttpStatus.CONFLICT);
    }

    const newDelivery: Delivery = Object.assign(
      new Delivery(),
      createDeliveryDto,
    );

    return await this.deliveryRepository.save(newDelivery);
  }

  async findAll(): Promise<Delivery[]> {
    return await this.deliveryRepository.find();
  }

  async findOne(uniqueDataDeliverDto: UniqueDataDeliveryDto) {
    return await this.deliveryRepository.findOne({
      where: {
        week: uniqueDataDeliverDto.week,
        owner: uniqueDataDeliverDto.owner,
      },
    });
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    throw new HttpException(
      "Method not implemented.",
      HttpStatus.NOT_IMPLEMENTED,
    );
  }

  async remove(uniqueDataDeliverDto: UniqueDataDeliveryDto) {
    const existingDelivery = await this.findOne(uniqueDataDeliverDto);

    if (!existingDelivery) {
      throw new HttpException("Delivery already exists", HttpStatus.NOT_FOUND);
    }

    return await this.deliveryRepository.delete({
      week: uniqueDataDeliverDto.week,
      owner: uniqueDataDeliverDto.owner,
    });
  }
}
