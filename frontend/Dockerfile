# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend application code to the container
COPY . .

# Build your React application
RUN npm run build

# Expose the port your frontend should be served on (e.g., 80)
EXPOSE 80

# Start a web server to serve the built React app
CMD ["npx", "serve", "-s", "dist", "-l", "80"]

