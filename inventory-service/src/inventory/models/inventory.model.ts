import { Directive, Field, ID,Int, ObjectType } from '@nestjs/graphql';
import { Company } from './company.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Inventory {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int)
  companyId: number;

  @Field((type) => Company)
  company?: Company;
}
