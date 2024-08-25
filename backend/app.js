import express from 'express';
import cors from 'cors';

import {
    PutObjectCommand,
    ListObjectsCommand,
    S3Client,
    GetObjectCommand,
    DeleteObjectCommand,
  } from "@aws-sdk/client-s3";

import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import {
    getSignedUrl
  } from "@aws-sdk/s3-request-presigner";

import dotenv from 'dotenv';
dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json());

const S3_BUCKET = process.env.S3_BUCKET;
const Pool_id = process.env.IDENTITY_POOL_ID;
const Aws_region = process.env.AWS_REGION;


const s3 = new S3Client({
    region: Aws_region,
   
    credentials: fromCognitoIdentityPool({
      clientConfig: { region: Aws_region },
      identityPoolId: Pool_id,
    }),
  });



const generateUploadFileUrl = async (fileName) => {
    const command = new PutObjectCommand({ 
        Bucket: S3_BUCKET, 
        Key: fileName 
    });
    return await getSignedUrl(s3, command, { expiresIn: 3600 });
}
const generateDownloadFileUrl = async (fileName) => {
    const command = new GetObjectCommand({ 
        Bucket: S3_BUCKET, 
        Key: fileName 
    });
    return await getSignedUrl(s3, command, { expiresIn: 3600 });
}
const generateDeleteFileUrl = async (fileName) => {
    const command = new DeleteObjectCommand({ 
        Bucket: S3_BUCKET, 
        Key: fileName 
    });
    return await getSignedUrl(s3, command, { expiresIn: 3600 });
}


app.get('/upload', async (req, res) => {
    const fileName = req.query.file_name;
    if (fileName) {
        
        try {
           
            const url = await generateUploadFileUrl(fileName);
            res.json({ url });
            
        } catch (err) {
            
            res.status(500).json({ error: 'Error generating presigned URL' });
        }
    } else {
        res.status(400).json({ error: 'File name not provided' });
    }
});

app.get('/download', async (req, res) => {
try{
    const command = new ListObjectsCommand({ Bucket: S3_BUCKET });
    const response = await s3.send(command);
    const files = response.Contents ? response.Contents.map(item => item.Key) : [];
    res.json({ files });
}
catch(err){
    res.status(500).json({ error: 'Error Listing Objects' });
}
});

app.get('/download/:file_name', async (req, res) => {
    const fileName = req.params.file_name;  
    try {
            const url = await generateDownloadFileUrl(fileName);
            res.json({ url });
        } catch (err) {
            res.status(500).json({ error: 'Error generating presigned URL' });
        }
});
app.get('/delete/:file_name', async (req, res) => {
    const fileName = req.params.file_name;  
    try {
            const url = await generateDeleteFileUrl(fileName);
            res.json({ url });
        } catch (err) {
            res.status(500).json({ error: 'Error generating presigned URL' });
        }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
                 