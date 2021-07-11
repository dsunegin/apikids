import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbkidDataSource} from '../datasources';
import {Cartoon, CartoonRelations} from '../models';

export class CartoonRepository extends DefaultCrudRepository<
  Cartoon,
  typeof Cartoon.prototype.id,
  CartoonRelations
> {
  constructor(
    @inject('datasources.dbkid') dataSource: DbkidDataSource,
  ) {
    super(Cartoon, dataSource);
  }
}
