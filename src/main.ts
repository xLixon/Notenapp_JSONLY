import { NestFactory } from '@nestjs/core';
import { AppModule } from './sys/app.module';

let port = 3000;

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port).then(r => console.log(`API auf Port ${port} gestartet.`));
}
main().then()
