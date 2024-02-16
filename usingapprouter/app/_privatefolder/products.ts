export async function getProducts() {
    return [
      {
        id: 1,
        name: 'Product 1',
        description: 'This is an amazing product',
        price: 99.99,
        imageUrl: 'https://example.com/product-1.jpg'
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'This product is also great',
        price: 89.99,
        imageUrl: 'https://example.com/product-2.jpg'
      },
    ];
  }