import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  parentId: null | string;
}
