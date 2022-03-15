import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Inventory } from './inventory.model';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Company {
  @Field((type) => ID)
  @Directive('@external')
  id: number;

  @Field((type) => [Inventory])
  inventory?: Inventory[];
}