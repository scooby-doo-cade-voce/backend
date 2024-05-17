import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { ResponsibleModule } from './responsible/responsible.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeModule } from './size/size.module';
import { SpeciesModule } from './species/species.module';
import { ColorsModule } from './colors/colors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm]
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
    }),
    AnimalModule,
    ResponsibleModule,
    SizeModule,
    SpeciesModule,
    ColorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
