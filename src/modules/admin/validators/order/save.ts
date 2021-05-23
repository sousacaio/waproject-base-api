import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';
export class SaveValidator implements IOrder {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsInt()
  @ApiProperty({ required: true, type: 'integer' })
  public userId: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 50 })
  public name: string;

  @IsString()
  @ApiProperty({ required: true, type: 'string', maxLength: 50 })
  public description: string;

  @IsInt()
  @ApiProperty({ required: true, type: 'integer' })
  public quantity: number;
  @IsInt()
  @ApiProperty({ required: true, type: 'integer' })
  public value: number;
}
