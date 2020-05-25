import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IProduct } from '../../../@core/data/products';


export interface ProductsState extends EntityState<IProduct> {
  selectedProductID: number | null;
}
export const productAdapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>({
  selectId: (product: IProduct) => product.productId,
  sortComparer: null,
});

export const productInitialState: ProductsState = productAdapter.getInitialState({
  selectedProductID: null,
  entities: {
    0: { },
  },
});
