import { createReducer, on } from '@ngrx/store';
import { ProductsActions, ProductsApiActions } from '../actions';
import { productAdapter, productInitialState } from '../states';

export const productsFeatureKey = 'products';

export const reducer = createReducer(
    productInitialState,
    on(
        ProductsActions.loadProducts,
        ProductsApiActions.loadProductsSuccess,
        (state, { products }) => {
            products = products.filter(x => x.deleted === false);
            return productAdapter.addMany(products, state);
        },
    ),
    on(
        ProductsActions.addProduct,
        ProductsApiActions.addProductSuccess,
        (state, { product }) => productAdapter.addOne(product, state),
    ),
    on(
        ProductsActions.updateProduct,
        (state, { update }) => productAdapter.updateOne(update, state),
    ),
    on(
        ProductsActions.deleteProduct,
        (state, { update }) => productAdapter.updateOne(update, state),
    ),
);
