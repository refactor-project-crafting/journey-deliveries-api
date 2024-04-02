import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { config } from "process";
import { ConfigModule, ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const configService = app.get(ConfigService);

  await app.listen(configService.get("PORT") || 4000);
}

bootstrap();
