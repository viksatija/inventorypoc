import { Injectable } from '@nestjs/common';
import { Company } from './models/company.model';

@Injectable()
export class CompanyService {
    private company: Company[] = [
        { id: 1, name: 'Dell' ,location:'US'},
        { id: 2, name: 'HP', location:'UK'},
      ];
    
      findById(id: number): Company {
        return this.company.find((i) => i.id === Number(id));
      }
}
