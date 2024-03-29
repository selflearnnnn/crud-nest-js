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
    const mahasiswa = this.mahasiswa.find(
      (m) => m.id.toString() === id.toString(),
    );
    if (mahasiswa) {
      throw new HttpException('Not Found', 404);
    }
    return mahasiswa;
  }

  public deleteMahasiswaById(id: number) {
    const index = this.mahasiswa.findIndex(
      (m) => m.id.toString() === id.toString(),
    );
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
    const index = this.mahasiswa.findIndex(
      (m) => m.id.toString() === id.toString(),
    );
    if (index === -1) {
      throw new HttpException('Not Found', 404);
    }
    this.mahasiswa[index][propertyName] = propertyValue;
    return this.mahasiswa;
  }
}
