FROM node:latest

# make the 'client' folder the current working directory
WORKDIR /client

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /client/

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'client' folder)
COPY . /client/

# build client for production with minification
RUN npm run build

EXPOSE 5173
CMD bash -c "npm start"