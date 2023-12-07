# Use an official Node.js runtime as a parent image
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

#RUN npm install -g typescript

COPY . .

RUN npm run build

# Install Prisma Client and generate the client code
RUN npx prisma generate

# NOTE THIS IS DEPENDENT ON PSQL  UP AND RUNNING
# RUN npx prisma migrate deploy
# Not sure when this needs to be ran.
# I think just once for our use case.

# Expose the port your Express app is listening on (e.g., 3000)
EXPOSE 3000

CMD ["npm", "start"]
