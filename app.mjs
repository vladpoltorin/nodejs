import config from  './config/json';
import models from './models';

console.log(config.name);
new models.user();
new models.product();
