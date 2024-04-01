import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { DeliveriesService } from "./deliveries.service";
import { CreateDeliveryDto } from "./dto/create-delivery.dto";
import { UpdateDeliveryDto } from "./dto/update-delivery.dto";
import { Delivery } from "./entities/delivery.entity";

@Controller("deliveries")
export class DeliveriesController {
  constructor(private readonly deliveriesService: DeliveriesService) {}

  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveriesService.create(createDeliveryDto);
  }

  @Get()
  async findAll(): Promise<{ deliveries: Delivery[] }> {
    return {
      deliveries: await this.deliveriesService.findAll(),
    };
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.deliveriesService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDeliveryDto: UpdateDeliveryDto,
  ) {
    return this.deliveriesService.update(+id, updateDeliveryDto);
  }

  @Delete()
  async remove(@Query("week") week: number, @Query("owner") owner: string) {
    return await this.deliveriesService.remove({ week: +week, owner });
  }
}
