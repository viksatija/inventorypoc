import { Args, ID,Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './models/company.model';

@Resolver((of) => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query((returns) => Company)
  getCompany(@Args({ name: 'id', type: () => ID }) id: number) : Company{
    return this.companyService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Company {
    return this.companyService.findById(reference.id);
  }
}
