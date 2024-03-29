import { Controller, Get } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private mahasiswaService: MahasiswaService) {}

  @Get()
  async getMahasiswa() {
    return this.mahasiswaService.getMahasiswa();
  }
}
