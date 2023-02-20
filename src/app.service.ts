import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs/dist';

@Injectable()
export class AppService {
  constructor(@InjectModel() private readonly knex: Knex) {}
  async getBrands(): Promise<any> {
    return await this.knex('brands').limit(5);
  }
}
