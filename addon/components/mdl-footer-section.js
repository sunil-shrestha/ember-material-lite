import Ember from 'ember';
import MdlMiniFooter from './mdl-mini-footer';
import MdlMegaFooter from './mdl-mega-footer';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import BaseChildComponent from './-base-child-component';
import layout from '../templates/components/mdl-footer-section';
import computed from 'ember-new-computed';

export default BaseChildComponent.extend(ChildComponentSupport, {
  _parentComponentTypes: Ember.A([MdlMegaFooter, MdlMiniFooter]),
  layout,
  align: 'middle',
  childComponentClassName: computed('align', {
    get() {
      return `${this.get('align')}-section`;
    }
  })
});
