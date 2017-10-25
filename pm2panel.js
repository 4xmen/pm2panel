
//##############################################################################
//                             config panel
//##############################################################################
const PORT = 3001;
const USER = 'admin';
const PASS = 'admin';
const SESSTION_AGE = 10 * 60000; // 10 minutes

//##############################################################################
//                             inital packages
//##############################################################################
const path = require('path');
const express = require('express');
const app = express();
var session = require('express-session');

// Use the session middleware
app.use(session({secret: 'keyboard cat', cookie: {maxAge: SESSTION_AGE}}));
// add assets path
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
//
//##############################################################################
//                             rounting urls
//##############################################################################
app.get('/', function (req, res) {
    if (req.session.islogin) {
        res.sendFile(path.join(__dirname, 'www/index.html'));
    } else {
//        req.session.views = 1
        res.writeHead(302, {
            'Location': '/login'
                    //add other headers here...
        });
        res.end();
    }
    
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, 'www/login.html'));
});

app.post('/loginCheck', function (req, res) {
    if (req.body.username === USER && req.body.passwd == PASS) {
        req.session.islogin = true;
        res.writeHead(302, {
            'Location': '/'
                    //add other headers here...
        });
    } else {
        res.writeHead(302, {
            'Location': '/login'
                    //add other headers here...
        });
    }
    res.end();
});

app.get('/logout', function (req, res) {
    delete req.session.islogin;
    res.end();
});



//##############################################################################
//                              finazle
//##############################################################################

app.listen(PORT, function () {
    console.log('pm2panel app listening on port ' + PORT + '!');
});