const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const validator = require('validator')
const User = require('./models/user').User;
const app = require('express')()
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/cyoa';
mongoose.connect(mongoURI);
const db = mongoose.connection;

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

// Body parser, to access `req.body`
app.use(bodyParser.json())

// Sessions to create `req.session`
app.use(session({
  secret: 'super-secret-key',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: db
  })
}))

// POST `/api/login` to log in the user and add him to the `req.session.authUser`
app.post('/api/login', function (req, res) {
  const errors = [];
  User.authenticate(req.body.username, req.body.password, (error, user) => {
    if (error || !user) {
      res.status(401).json({ error: 'Invalid username or password' })
    } else {
      return res.status(200).json({ user })
    }
  });
})

app.post('/api/register', function (req, res) {
  const {
    username,
    email,
    password,
    confirmation
  } = req.body
  const errors = []
  console.log(username)
  if (!username) {
    errors.push({
      message: 'Username cannot be blank',
      field: 'username'
    })
  }
  if (!email) {
    errors.push({
      message: 'Email cannot be blank',
      field: 'email'
    })
  } else if (!validator.isEmail(email)) {
    errors.push({
      message: 'Please provide a valid email address',
      field: 'email'
    })
  }
  if (!password) {
    errors.push({
      message: 'Password cannot be blank',
      field: 'password'
    })
  } else if (password.length < 6) {
    errors.push({
      message: 'Password must be at least 6 characters',
      field: 'password'
    })
  }
  if (password !== confirmation) {
    errors.push({
      message: `Passwords don't match`,
      field: 'confirm'
    })
  }
  if (errors.length) {
    res.statusCode = 401;
    return res.json({ errors })
  } else {
    User.findOne({ username }).exec(function (err, userCheck) {
      if (userCheck) {
        console.log('username exists')
        res.statusCode = 401;
        return res.json({
          errors: [{ message: 'Username already exists' }]
        })
      }
      User.findOne({ email }).exec(function (err, emailCheck) {
        if (emailCheck) {
          console.log('email exists')
          res.statusCode = 401;
          return res.json({
            errors: [{ message: 'Email address already in use' }]
          })
        }
        User.create({
          username,
          email,
          password,
          confirmation
        }, (error, user) => {
          if (error) {
            res.statusCode = 401;
            return res.json({ errors: [{ message: error.errmsg }] })
          } else {
            return res.status(200).json({ ok: true })
          }
        });
      })
    })
  }
})

// POST `/api/logout` to log out the user and remove it from the `req.session`
app.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

// We instantiate Nuxt.js with the options
const nuxt = new Nuxt(config)
const { host, port } = nuxt.options.server
// No build in production
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
} else {
  nuxt.ready()
}
app.use(nuxt.render)
app.listen(port, host)

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  consola.log('[db] Connected to database')
});
console.log('Server is listening on http://localhost:3000')
