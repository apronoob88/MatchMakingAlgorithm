let fs = require("fs");

// Define your configuration
const options = {
    rainbow: {
        host: "sandbox"
    },
    credentials: {
        login: process.env.BOT_EMAIL || "spam.xyz999@gmail.com", // developer credendials
        password: process.env.BOT_PASSWORD || "1234Qwer!" // developer credentials
    },
    // Application identifier
    application: {
        appID: process.env.BOT_APPID || "de6b39a0513f11ea819a43cb4a9dae9b",
        appSecret: process.env.BOT_APPSECRET || "WzpQkTwxj6SfULL9muZJ83yKFEvxuvM1Iq59HxaXSo9S3lrTK0ST4khFlRPGErZ2"
    },
    // Logs options
    logs: {
        enableConsoleLogs: true,
        enableFileLogs: false,
        "color": true,
        "level": 'debug',
        "customLabel": "match-made-on-rainbow",
        "system-dev": {
            "internals": false,
            "http": false,
        },
        file: {
            path: "/var/tmp/rainbowsdk/",
            customFileName: "R-SDK-Node-Sample2",
            level: "debug",
            zippedArchive: false
                /*,
                            maxSize : '10m',
                            maxFiles : 10 // */
        }
    },
    // IM options
    im: {
        sendReadReceipt: true
    },

    pythonPath: process.env.PYTHON_PATH, // leave it blank for heroku
};

const dblogin = {
    connectionLimit: 10,
    host: process.env.AGENT_DB_HOST,
    user: process.env.AGENT_DB_USERNAME,
    password: process.env.AGENT_DB_PASSWORD,
    database: process.env.AGENT_DB_DATABASE
}

const cert = fs.readFileSync('public/server.cert');
const key = fs.readFileSync('public/server.key');

exports.dblogin = dblogin;
exports.options = options;
exports.cert = cert;
exports.key = key
