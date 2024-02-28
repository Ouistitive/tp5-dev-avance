import { writeFile } from "node:fs";

const {generateKeyPair, createHash} = await import('node:crypto')

const curve = "prime256v1";

generateKeyPair('ec', {
        namedCurve: curve,
        publicKeyEncoding: {type: 'spki', format: 'pem'},
        privateKeyEncoding: {type: 'pkcs8', format: 'pem'},
    }, (err, publicKey, privateKey) => {
        if (!err) {
            console.log("Private key:\n", privateKey.toString('base64'));
            console.log("Public key:\n", publicKey.toString('base64'));

            writeFile(".ssl/ecdsa.pri", privateKey.toString('base64'), (err) => {
                if(err) {
                    console.log("err")
                }
                else{
                    console.log("ecriture ok")
                }
            })

            writeFile(".ssl/ecdsa.pub", publicKey.toString('base64'), (err) => {
                if(err) {
                    console.log("err")
                }
                else{
                    console.log("ecriture ok")
                }
            })

        }
    }
)