import { Resolver, Query } from '@nestjs/graphql';
import { CategoryService } from '../../category/category.service';
import { Public } from '../../auth/auth.guard'
import { CategoryResponseWrapper } from './dto/category-response-wrapper.dto'
@Resolver( () => CategoryResponseWrapper)
export class CategoryResolver {
    constructor(private readonly categoryService: CategoryService){}



     @Public()
     @Query( () => CategoryResponseWrapper)
     async getActiveCategories(): Promise<CategoryResponseWrapper>{
        const categories = await this.categoryService.findAll(true)
        
        return {
            success: true,
            message: "Category fetched successfully",
            data: categories as any
        }
     }
}
