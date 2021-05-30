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
    url:
      'mongodb+srv://<admin>:<password>@chnirt-graphql-apollo-vg0hq.mongodb.net/nest?retryWrites=true&w=majority',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true,
    useNewUrlParser: true,
    logging: true,
  })],
  controllers: [AppController, FacturasController],
  providers: [AppService, FacturasService],
})
export class AppModule {}
