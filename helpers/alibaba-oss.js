require('dotenv').config()

const _ = require('lodash')
const OSS = require('ali-oss')
const fs = require('fs')

class AliOssClient {

    constructor({ bucket, region }) {
        this.client = new OSS({
            accessKeyId: process.env.ALIBABA_CLOUD_ACCESS_KEY_ID,
            accessKeySecret: process.env.ALIBABA_CLOUD_ACCESS_KEY_SECRET,
            bucket,
            region
        })
    }

    async listBuckets(query, options) {
        const result = await this.client.listBuckets(query, options)
        console.log('Bucket names: ' + _.map(result.buckets, 'name'))

        return result
    }

    async listObjects(query, options) {
        const result = await this.client.list(query, options)
        console.log('Object names: ' + _.map(result.objects, 'name'))

        return result
    }

    async uploadObject(objectKey, file, options) {
        return await this.client.put(objectKey, file, options)
    }

    async downloadObject(objectKey, file, options) {
        return await this.client.get(objectKey, file, options)
    }
}

module.exports = AliOssClient