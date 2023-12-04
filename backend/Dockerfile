# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install -g typescript

# Copy the rest of your backend application code to the container
COPY . .

RUN npm run build

# Expose the port your Express app is listening on (e.g., 3000)
EXPOSE 3000

# Start the Express app
CMD ["npm", "start"]

