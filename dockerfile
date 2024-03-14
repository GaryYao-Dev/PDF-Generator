# Use an official Node.js runtime as the base image
FROM node:18.19.0

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy package.json, package-lock.json, and yarn.lock into the Docker container
COPY package*.json yarn.lock ./

RUN npm install -g yarn
# Install the application dependencies using Yarn
RUN yarn install

# Install serve globally in the Docker container using Yarn
RUN yarn global add serve

# Copy the entire application into the Docker container
COPY . .

# Expose port 5000 (default port for serve) on the Docker container
EXPOSE 3000

# Build the application and start the server when the Docker container is run
CMD yarn run build && serve -s dist -l 3000
