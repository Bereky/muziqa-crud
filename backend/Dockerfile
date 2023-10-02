# parent image
FROM node:18

# working directory
WORKDIR /usr/srs/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 8400

# Define the command to run your app
CMD ["npm", "start"]
