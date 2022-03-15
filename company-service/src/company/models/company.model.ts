import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Company {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  location: string;
}