/* a service that simply fetches sample dataa from imaginary db */

const info = 
  {
    title: 'Hey',
    count: '12',
  };
    

async function getFromDB() {
  return info;
}

async function getSampleData() {
  // no params
  // awaiting for some pretend database
  let data = await getFromDB();
  return data;
}

module.exports = getSampleData;