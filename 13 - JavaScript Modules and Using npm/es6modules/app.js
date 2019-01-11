import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
// Default export
// import ak from './src/config';
// console.log('ak', ak);

// Named export
// import { apiKey as key, url, sayHi, old, dog } from './src/config';
// console.log('Key', key, 'url', url, old, dog);
// sayHi('Wes');


// const ages = [1, 1, 4, 52, 12, 4];
// console.log(uniq(ages));

import User, { createURL, gravatar } from './src/user';
const wes = new User('wes bos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);

const image = gravatar(wes.email);
console.log(image);