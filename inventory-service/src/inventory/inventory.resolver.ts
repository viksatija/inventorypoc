import { Resolver,Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { InventoryService } from './inventory.service';
import { Company } from './models/company.model';
import { Inventory } from './models/inventory.model';

@Resolver((of) => Inventory)
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}

  @Query((returns) => Inventory)
  getInventory(@Args('id') id: number): Inventory {
    return this.inventoryService.findById(id);
  }

  @Query((returns) => [Inventory])
  getInventories(): Inventory[] {
    return this.inventoryService.all();
  }

  @ResolveField((of) => Company)
  company(@Parent() inventory: Inventory): any {
    return { __typename: 'Company', id: inventory.companyId };
  }
}
