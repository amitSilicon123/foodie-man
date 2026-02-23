import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.dto';
@Controller('categories')
export class CategoryController {
    constructor(private categoryService:CategoryService){}

    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
      console.log("aaaaaaaaaa",createCategoryDto)
      return this.categoryService.create(createCategoryDto);
    }
 

    @Get()
    findAll() {
      return this.categoryService.findAll();
    }

  // GET /users/:id
  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }*/

  // PATCH /users/:id
  /*@Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }*/

  // DELETE /users/:id
  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }*/
}
