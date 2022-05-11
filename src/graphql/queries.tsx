import { client, Query, Field} from "@tilework/opus";

const url = "http://localhost:4000";

async function getCategories() {
  const query = new Query('categories', true)
    .addField('name')
  client.setEndpoint(url);
  return await client.post(query);
}

async function getCategory(category: string) {
  console.log('category? ', category)
  const query = new Query('category', true)
		.addArgument('input', 'CategoryInput', { title: category })
    .addField(new Field('products')
      .addFieldList(['id', 'name', 'inStock', 'category', 'gallery', 'brand'])
      .addField(new Field('prices')
        .addField('amount')
        .addField(new Field('currency')
          .addFieldList(['label', 'symbol'])
        )
      )
      .addField(new Field('attributes')
        .addFieldList(['id', 'name', 'type'])
        .addField(new Field('items')
          .addFieldList(['id', 'value', 'displayValue'])
        )
      )
    )
  client.setEndpoint(url);
  const result = await client.post(query);
  return (JSON.parse(JSON.stringify(result.category)));
}

async function getProduct(id: string) {
  const query = new Query('product', true)
    .addArgument('id','String!', id)
    .addFieldList(['id', 'name', 'inStock', 'gallery', 'description', 'category', 'brand'])
    .addField(new Field('prices')
      .addField('amount')
      .addField(new Field('currency')
        .addFieldList(['label', 'symbol'])
      )
    )
    .addField(new Field('attributes')
      .addFieldList(['id', 'name', 'type'])
      .addField(new Field('items')
       .addFieldList(['id', 'value', 'displayValue'])
      )
    )
  client.setEndpoint(url);
  const result = await client.post(query)
  return (JSON.parse(JSON.stringify(result.product)));
}

async function getCurrencies() {
  const query = new Query('currencies', true)
    .addFieldList(['label', 'symbol'])
  client.setEndpoint(url);
  const result = await client.post(query);
  return (result.currencies);
}

export const QueryGraphQL = {
  getCategories,
  getCategory,
  getProduct,
  getCurrencies,
}