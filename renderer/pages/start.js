import Axios from 'axios';
let headers = {
 'User-Agent':
  'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
};

let wrapper = async () => {
 let { data } = await Axios.get(
  ' http://data.nba.net/prod/v1/20170201/0021600732_boxscore.json'
 );
 console.log('data', data);
};
wrapper();

export default () => <span>yea</span>;
