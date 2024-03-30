import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { DosenController } from './dosen/dosen.controller';
import { DosenService } from './dosen/dosen.service';
import { DosenModule } from './dosen/dosen.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MahasiswaModule, DosenModule],
  controllers: [DosenController],
  providers: [DosenService],
})
export class AppModule {}
