import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsInt, IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateBookingInput {

  @Field(() => Int)
  @IsInt()
  vendorId: number;

  @Field()
  @IsString()
  eventDate: string;

  @Field(() => Int)
  @IsInt()
  guestCount: number;

  @Field()
  @IsString()
  location: string;

  @Field()
  @IsString()
  description: string;

  @Field(() => Float)
  @IsNumber()
  paidAmount: number;

  @Field(() => Float)
  @IsNumber()
  fullAmount: number;

  @Field(() => String)
  @IsString()
  paymentOption: PaymentOptions;
}