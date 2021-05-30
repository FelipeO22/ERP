import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FacturasController } from './facturas/facturas/facturas.controller';
import { FacturasService } from './facturas/facturas/facturas.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'test',
    entities: [],
    synchronize: false,
  })],
  controllers: [AppController, FacturasController],
  providers: [AppService, FacturasService],
})
export class AppModule {}
