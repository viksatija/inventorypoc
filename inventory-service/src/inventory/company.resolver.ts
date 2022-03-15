import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { InventoryService } from './inventory.service';
import { Company } from './models/company.model';
import { Inventory } from './models/inventory.model';


@Resolver((of) => Company)
export class CompanyResolver {
  constructor(private readonly inventoryService: InventoryService) {}

  @Query((returns) => [Inventory])
  getInventories(): Inventory[] {
    return this.inventoryService.all();
  }

  @ResolveField((of) => [Inventory])
  public inventory(@Parent() company: Company): Inventory[]{
    return this.inventoryService.forCompany(company.id);
  }
}