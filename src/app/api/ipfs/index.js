// const IPFS = require('ipfs');
// const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

const IPFSapi = require('ipfs-api')
import dag from './dag'

let node

/*
export const getIpfs = () => {
  if (node) return node;
  return new Promise((resolve, reject) => {
    node = new IPFS();

    node.on('ready', () => {
      // Your node is now ready to use \o/
      resolve(node);
    });
  });
};
*/

const getIpfsNode = (params = {}) => {
  if (node) return node
  const { host = 'localhost', port = '5001' } = params
  console.log('IPFS START')
  const endpoint = `http://${host}:${port}/api/v0`
  node = IPFSapi(host, port)
  node = dag(node, endpoint)
  return node
}

export default getIpfsNode
