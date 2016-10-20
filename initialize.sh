~/.npm-global/bin/ttab -t 'Express Server' -d $1 npm run start:dev
~/.npm-global/bin/ttab -t 'Webpack' -d $1 npm run build:watch
~/.npm-global/bin/ttab -t 'Karma' -d $1 npm test
~/.npm-global/bin/ttab -t 'Gulp' -d $1 gulp build:watch
