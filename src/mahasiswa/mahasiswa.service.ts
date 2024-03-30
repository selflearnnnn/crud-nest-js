import { Injectable, HttpException } from '@nestjs/common';
import { MAHASISWA } from './mahasiswa.mock';
@Injectable()
export class MahasiswaService {
  private mahasiswa = MAHASISWA;
  public getMahasiswa() {
    return this.mahasiswa;
  }

  public postMahasiswa(mahasiswa) {
    return this.mahasiswa.push(mahasiswa);
  }

  public getMahasiswaById(id: number) {
    const mahasiswa = this.mahasiswa.find((m) => m.id === id.toString());
    if (!mahasiswa) {
      throw new HttpException('Not Found', 404);
    }
    return mahasiswa;
  }

  public deleteMahasiswaById(id: number) {
    const index = this.mahasiswa.findIndex((m) => m.id === id.toString());
    if (index === -1) {
      throw new HttpException('Not Found', 404);
    }
    this.mahasiswa.splice(index, 1);
    return this.mahasiswa;
  }

  public putMahasiswaById(
    id: number,
    propertyName: string,
    propertyValue: string,
  ) {
    const index = this.mahasiswa.findIndex((m) => m.id === id.toString());

    // index === -1 mengecheck ada atau tidaknya di database
    if (index === -1) {
      throw new HttpException('Not Found', 404);
    }
    // mahasiswa[index] merujuk pada index yang sesuai dengan nilai 'index'
    // [propertyName] notasi untuk mengakses properti objek berdasarkan nama
    // [propertyValue] adalah nilai baru yang akan diberikan pada properti
    this.mahasiswa[index][propertyName] = propertyValue;
    return this.mahasiswa;
  }
}
