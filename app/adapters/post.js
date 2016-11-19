// app/adapters/post.js
import GraphQLAdapter from 'ember-graphql-adapter';

export default GraphQLAdapter.extend({
  endpoint: `${EmberENV.apiBaseUrl}/graph`
});