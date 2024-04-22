import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
  });

  const configService = app.get(ConfigService);

  await app.listen(configService.get("PORT") || 4000);
}

bootstrap();
