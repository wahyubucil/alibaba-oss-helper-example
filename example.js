const OssClient = require('./helpers/alibaba-oss')

const ossClient = new OssClient({ bucket: 'your-bucket-name', region: 'your-bucket-region (e.g. "oss-us-west-1")' })

ossClient.uploadObject('key-name', '/path/to/local-file')
ossClient.listBuckets()
ossClient.listObjects()
ossClient.downloadObject('key-name', '/path/to/local-file');