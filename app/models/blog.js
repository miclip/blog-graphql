import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  //author_id: DS.attr('number'),
  author: DS.belongsTo('author')
});
