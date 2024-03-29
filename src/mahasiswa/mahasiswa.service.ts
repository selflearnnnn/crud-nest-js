import { Injectable } from '@nestjs/common';
import { MAHASISWA } from './mahasiswa.mock';
@Injectable()
export class MahasiswaService {
  private mahasiswa = MAHASISWA;
  public async getMahasiswa() {
    return this.mahasiswa;
  }

  public async postMahasiswa(mahasiswa) {
    return;
  }

  public async getMahasiswaById(id) {
    return;
  }

  public async deleteMahasiswaById(id) {
    return;
  }

  public async putMahasiswaById(id) {
    return;
  }
}
