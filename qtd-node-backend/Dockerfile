FROM node:10
#  it also creates the directory
WORKDIR /usr/src/app 
COPY package*.json /usr/src/app/
# not installing the devDependencies
RUN npm install --only=prod

# Get all the code needed to run the app
# COPY . /usr/src/app       commented because the code is mounted in a volume
# Expose the port the app runs in
# EXPOSE 4201               commented because the port is managed by docker-compose

CMD npm start