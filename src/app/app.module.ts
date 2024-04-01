import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DeliveriesModule } from "src/deliveries/deliveries.module";

@Module({
  imports: [DeliveriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
