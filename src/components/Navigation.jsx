/*
 * @Author: Zz
 * @Date: 2017-02-09 15:00:42
 * @Last Modified by: Zz
 * @Last Modified time: 2017-03-02 16:50:23
 */
import "./style.less";
import { VMenu, VMenuItem } from './menu';
import VIcon from './icon';

export default {
  props: {
  },
  data: function() {
   return {}; 
  },
  methods: {
    click(keyId) {
      console.log('nav', keyId);
    },
  },
  render: function(h) {
    return (
      <div>
        <VMenu theme='light' click={this.click}>
          <VMenuItem id='aa'><VIcon type='user' />菜单一</VMenuItem>
          <VMenuItem id='yu8'><VIcon type='message'/>菜单二</VMenuItem> 
          <VMenuItem id='ty77'><a href="https://ant.design" target="_blank" rel="noopener noreferrer">uuuuu</a></VMenuItem>
        </VMenu>
      </div>
    ); 
  },
};