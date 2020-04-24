FROM node:10

WORKDIR /app
COPY package*.json /app/
RUN npm install
RUN npm install -g @angular/cli

# Get all the code needed to run the app
# COPY . /app/      commented because the code is mounted in a volume
# Expose the port the app runs in
# EXPOSE 4200       commented because the port is managed by docker-compose

CMD ng build && node app.js