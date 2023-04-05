# elm

## Pre-require
```
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install nodejs
sudo apt-get install npm
npm install --global yarn
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy
```
npm run build
docker pull nginx
docker build -t proj-vue .
docker run -d -p 8080:8080 --name vue proj-vue
```

# nju-CDM
