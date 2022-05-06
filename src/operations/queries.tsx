import { client, Query, Field} from "@tilework/opus";

const url = "http://localhost:4000";

async function getCategories () {
  const query = new Query('categories', true)
    .addField('name')
  client.setEndpoint(url);
  return await client.post(query);
}

async function getCategory (category: string) {
  const query = new Query('category')
		.addArgument('input', 'CategoryInput', { title: category })
    .addField(new Field('products')
      .addFieldList(['id', 'name', 'inStock', 'gallery', 'brand'])
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
  return  await client.post(query);
}

export const QueryGraphQL = {
  getCategories,
  getCategory,
}