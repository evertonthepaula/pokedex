import Api from '../http/index';

function get({ limit = 20, offset = 0 }) {
  return Api(`pokemon?limit=${limit}&offset=${offset}`);
}

function find({ name = '', id = '' }) {
  return Api(`pokemon/${name || ''}${id || ''}`);
}

export default {
  get,
  find,
};
