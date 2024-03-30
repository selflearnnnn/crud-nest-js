import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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
  public postMahasiswa(@Body() mahasiswa: MahasiswaDto) {
    return this.mahasiswaService.postMahasiswa(mahasiswa);
  }

  @Get(':id')
  public getMahasiswaById(@Param('id') id: number) {
    return this.mahasiswaService.getMahasiswaById(id);
  }

  @Delete(':id')
  public deleteMahasiswaById(@Param('id') id: number) {
    return this.mahasiswaService.deleteMahasiswaById(id);
  }

  @Put(':id')
  public putMahasiswaById(@Param('id') id: number, @Query() query) {
    const propertyName = query.propertyName;
    const propertyValue = query.propertyValue;
    return this.mahasiswaService.putMahasiswaById(
      id,
      propertyName,
      propertyValue,
    );
  }
}

// 46:39
//  https://www.youtube.com/watch?v=R7DnXdjw13g
