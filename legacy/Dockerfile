# Use an official Node runtime as the parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files into the docker image
COPY . .

# Build the app
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Set the command to start the node server
CMD ["serve", "-s", "dist", "-l", "3000"]

# Expose port 3000
EXPOSE 3000
