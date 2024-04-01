import { Module } from "@nestjs/common";
import { DeliveriesService } from "./deliveries.service";
import { DeliveriesController } from "./deliveries.controller";
import { PersistanceRepositoryService } from "src/persistance-repository/persistance-repository.service";
import * as path from "path";

@Module({
  controllers: [DeliveriesController],
  providers: [
    DeliveriesService,
    {
      provide: PersistanceRepositoryService,
      useFactory: () => {
        const deliverablesPath = path.join(
          process.cwd(),
          "data",
          "deliveries.json",
        );

        return new PersistanceRepositoryService(deliverablesPath);
      },
    },
  ],
})
export class DeliveriesModule {}
