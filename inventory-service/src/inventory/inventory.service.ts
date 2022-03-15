import { Injectable } from '@nestjs/common';
import { Inventory } from './models/inventory.model';

@Injectable()
export class InventoryService {

    private inventory: Inventory[] = [
        { id: 1, name: 'Dell Precision',companyId :1},
        { id: 2, name: 'HP Pavillion',companyId :2},
      ];
    
      findById(id: number): Inventory {
        return this.inventory.find((i) => i.id === Number(id));
      }

      all():Inventory[]{
        return this.inventory;
      }

      forCompany(companyId:number) : Inventory[]{
        return this.inventory.filter((x)=>x.companyId ===Number(companyId));
      }

}
