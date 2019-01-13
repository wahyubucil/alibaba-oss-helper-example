const OSS = require('ali-oss')

class AliOssClient {

  static getInstance() {
    if (!this.instance) {
      this.instance = new AliOssClient()
    }

    return this.instance
  }

  constructor() {
    const client = new OSS({
      region: 'region-name',
      accessKeyId: 'access key id',
      accessKeySecret: 'access key secret',
      bucket: 'bucket-name',
      secure: true
    })

    return client
  }
}

module.exports = AliOssClient