import { getCategories, getProductBySlug } from '@/actions';
import { Title } from '@/components';
import { redirect } from 'next/navigation';
import { ProductForm } from './ui/ProductForm';

interface Props {
  params: {
    slug: string;
  }
}



export default async function ProductPage({ params }: Props) {

  const { slug } = params;

  const [ product, categories ] = await Promise.all([
    getProductBySlug(slug),
    getCategories()
  ]);
 

  // Todo: new
  if ( !product && slug !== 'new' ) {
    redirect('/admin/products')
  }

  const title = (slug === 'new') ? 'Nuevo producto' : 'Editar producto'

  return (
    <>
      <Title title={ title } />

      {/* <ProductForm product={ product ?? {} } categories={ categories } /> */}
      <ProductForm
  product={
    product
      ? {
          ...product,
          ProductImage: product.ProductImage?.map((img, index) => ({
            id: index, // El ID sigue siendo numérico, ya que puede ser un número
            productId: String(product.id) || '', // Convertir productId a string
            url: img.url,
          })),
        }
      : {}
  }
  categories={categories}
/>


    </>
  );
}