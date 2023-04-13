import _ from 'lodash';


const data = [
  {
    username : 'diego',
    role : 'admin'
  },
  {
    username : 'alan',
    role : 'seller'
  },
  {
    username : 'valentina',
    role : 'seller'
  },
  {
    username : 'fabri',
    role : 'customer'
  },
];
const rta = _.groupBy(data,item => item.role);
console.log(rta);