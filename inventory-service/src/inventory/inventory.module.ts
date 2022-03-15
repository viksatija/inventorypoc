import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryResolver } from './inventory.resolver';
import {  ApolloFederationDriver,  ApolloFederationDriverConfig,} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CompanyResolver } from './company.resolver';
import { Company } from './models/company.model';

@Module({
  providers: [InventoryResolver, InventoryService, CompanyResolver],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [Company],
      }
    }),
  ],
})
export class InventoryModule {}
