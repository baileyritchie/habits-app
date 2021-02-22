const createError = require('http-errors');
const getSampleData = require('../services/getSampleData');
/* dummy controller for testing 
-> this controller handles the req,res structure/flow and executes them
-> it receives the data handling logic (business logic) from the services branch
-> the "manager" is the controller and the services are the "workers"
*/

async function sampleController(req,res,next) {
  let data = await getSampleData();

  if (!data) {
    throw createError(404,"Data was not found");
  }
  res.status(200).send(data);
}


module.exports = sampleController;