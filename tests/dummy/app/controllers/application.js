import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  randomVariable: 111,

  addressQuery: 'SF, Lafayette Park',
  addressQueryInput: computed.reads('addressQuery'),

  customOptions: {
    mapTypeId: google.maps.MapTypeId.TERRAIN
  },

  actions: {
    refresh() {
      this.set('randomVariable', Math.floor(Math.random() * 1000));
    },

    onInfowindowClosed() {
      window.alert('Info Window Closed!');
    },

    updateAdressQuery() {
      this.set('addressQuery', this.get('addressQueryInput'));
    }
  }
});
