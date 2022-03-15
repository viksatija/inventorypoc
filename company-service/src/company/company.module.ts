import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import {  ApolloFederationDriver,  ApolloFederationDriverConfig,} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  providers: [CompanyResolver, CompanyService],
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
    }),
  ],
})
export class CompanyModule {}
