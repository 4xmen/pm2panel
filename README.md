# pm2panel is web panel for pm2

you can do with this application with web GUI and without any command:

 * Add process to pm2
 * Remove process from pm2
 * Restart process in pm2
 * Save processes
 * has login

![](http://4uploader.com/upload/file/201804_1/pm2%20gif5acc753a.gif)

Requirement:

 * nodejs

## how use:


```bash
git clone https://github.com/4xmen/pm2panel.git
cd pm2panel
npm install
node pm2panel
```

Then you can go to url : http://localhost:3001 or http://server_ip:3001 and the default user is `admin` and password is `admin`.


you can change config in first lines of `pm2panel.js`:

```javascript
const PORT = 3001;
const USER = 'admin';
const PASS = 'admin';
const SESSTION_AGE = 10 * 60000; // 10 minutes
```

change port or user name and password

<img src="https://www.uplooder.net/img/image/15/fd8d1c8ed2ea1e09e558f423ff2925ae/login-pm2.png" />
<br /><br />
<img src="https://www.uplooder.net/img/image/10/f9f161252a89283a2f5aa85b2b1e1718/pm2index.png" />

