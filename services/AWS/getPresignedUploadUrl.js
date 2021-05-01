const AWS = require('aws-sdk');
const uuid = require('uuid');
// TODO - fill in region for AWS config
// TODO fix content type and expiration time
// TODO - determine what bucket you want the S3 to put the image in
// TODO - 
const credentials = {
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey : process.env.S3_SECRET_KEY
};

AWS.config.update({credentials,region:'us-east-2'});

const s3 = new AWS.S3();

async function getPresignedUploadUrl(bucket, directory) {
  const key = `${directory}/${uuid.v4()}`;
  const url = await s3
    .getSignedUrl('putObject', {
      Bucket: bucket,
      Key: key,
      ContentType: 'image/*',
      Expires: 300,
    })
    .promise();
  return url;
}

module.exports = getPresignedUploadUrl