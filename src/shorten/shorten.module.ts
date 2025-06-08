import { Module } from '@nestjs/common';
import { ShortenController } from './shorten.controller';
import { ShortenService } from './shorten.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shorten } from './shorten.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shorten])],
  controllers: [ShortenController],
  providers: [ShortenService]
})
export class ShortenModule { }
