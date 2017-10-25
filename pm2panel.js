
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
const express = require('express');
const app = express();
var session = require('express-session');
// Use the session middleware
app.use(session({secret: 'keyboard cat', cookie: {maxAge: SESSTION_AGE}}));

//##############################################################################
//                             rounting urls
//##############################################################################
app.get('/', function (req, res) {
    if (req.session.islogin) {
        res.send('hello world');
    } else {
//        req.session.views = 1
        res.writeHead(302, {
            'Location': '/login'
                    //add other headers here...
        });
    }
    res.end();
});

app.get('/login', function (req, res) {
    res.send('login');
});
app.get('/loginCheck', function (req, res) {
    req.session.islogin = true; 
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