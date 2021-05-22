import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';
import { IOrder } from '../interfaces/order';
import { User } from './user';

export class Order extends Model implements IOrder {
  @ApiProperty({ type: 'integer' })
  public id: number;
  @ApiProperty({ type: 'string' })
  public name: string;
  @ApiProperty({ type: 'integer' })
  public userId: number;
  @ApiProperty({ type: 'integer' })
  public quantity: string;
  @ApiProperty({ type: 'integer' })
  public description: string;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public createdDate: Date;
  @ApiProperty({ type: 'string', format: 'date-time' })
  public updatedDate: Date;

  public static get tableName(): string {
    return 'Orders';
  }

  public static get relationMappings(): any {
    return {
      devices: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'Orders.userId',
          to: 'User.id'
        }
      }
    };
  }

  public $beforeInsert(): void {
    this.createdDate = this.updatedDate = new Date();
  }

  public $beforeUpdate(): void {
    this.updatedDate = new Date();
  }
}
