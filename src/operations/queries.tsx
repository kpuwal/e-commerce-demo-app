import { client, Query, Field} from "@tilework/opus";

const url = "http://localhost:4000";

async function getCategories () {
  const query = new Query('categories', true)
    .addFieldList(['name'])
    .addField(new Field('products', true)
      .addFieldList(['id', 'name']))

  client.setEndpoint(url);
  return await client.post(query);
}

export const QueryGraphQL = {
  getCategories,
}