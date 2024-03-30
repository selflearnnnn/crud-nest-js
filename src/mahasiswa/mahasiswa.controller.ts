import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { MahasiswaDto } from './mahasiswa.dto';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private mahasiswaService: MahasiswaService) {}

  @Get()
  public getMahasiswa() {
    return this.mahasiswaService.getMahasiswa();
  }

  @Post()
  public postMahasiswa(@Body mahasiswa: MahasiswaDto) {
    return this.mahasiswaService.postMahasiswa(mahasiswa);
  }

  @Get()
  public getMahasiswaById(id: number) {}

  @Delete()
  public deleteMahasiswaById(id: number) {}

  @Put()
  public putMahasiswaById() {}
}

// 46:39
//  https://www.youtube.com/watch?v=R7DnXdjw13g
