import {combineReducers} from 'redux';
import notificationReducers from './notificationReducers.js';
import toggleMenu from './menuReducers.js';
import tableReducers from './tableReducers.js';
import areaChartReducers from './chart-reducers/chartReducers.js';
import lineChartReducers from './chart-reducers/lineChartReducers.js';
import tinyChartReducers from './chart-reducers/tinyChartReducers.js';
import productTableReducers from './productTableReducers.js';
import productsReducers from './productReducers.js';
import teamReducres from './teamReducres.js';
import serviceReducers from './serviceReducers.js';
import blogReducers from './blogReducers.js';
import headerStyleReducers from './style-switcher-reducers/headerStyleReducers.js';
import headerActiveStyleReducer from './style-switcher-reducers/headeractiveReducer.js';
import sidebarStyleReducers from './style-switcher-reducers/sidebarStyleReducers.js';
import sidebarActiveStyleReducer from './style-switcher-reducers/sidebarActiveReducer.js';
import headerBannerStyleReducers from './style-switcher-reducers/headerBannerStyleReducers.js';
import headerBannerActiveStyleReducer from './style-switcher-reducers/headerBannerActiveReducer.js';

import apiReducers from './apiReducers';

const allReducers = combineReducers({
  notifications: notificationReducers,
  menu: toggleMenu,
  tableData: tableReducers,
  areaChartData: areaChartReducers,
  lineChartData: lineChartReducers,
  tinyChartData: tinyChartReducers,
  productsTable: productTableReducers,
  products: productsReducers,
  teams: teamReducres,
  services: serviceReducers,
  blogs: blogReducers,
  headerStyle: headerStyleReducers,
  headerActiveStyle: headerActiveStyleReducer,
  headerBannerStyle: headerBannerStyleReducers,
  headerBAnnerActiveStyle: headerBannerActiveStyleReducer,
  sidebarStyle: sidebarStyleReducers,
  sidebarActiveStyle: sidebarActiveStyleReducer,
  apiReducers: apiReducers
});

export default allReducers;
