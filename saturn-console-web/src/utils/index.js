import array from './array';
import http from './request';
import message from './message';
import validate from './validate';
import routerMapper from './router_mapper';
import map from './map';

const Utils = {
  array,
  http,
  message,
  validate,
  routerMapper,
};
/* eslint-disable no-param-reassign */
Utils.install = (Vue) => {
  Vue.prototype.$array = array;
  Vue.prototype.$http = http;
  Vue.prototype.$message = message;
  Vue.prototype.$validate = validate;
  Vue.prototype.$routermapper = routerMapper;
  Vue.prototype.$map = map;
};
export default Utils;
