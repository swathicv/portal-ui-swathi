# Create a container image for the NodeJS sample app
FROM node:carbon

# Create app directory
WORKDIR /app

# Copy files
COPY package.json ./

# Install app dependencies
RUN npm install

# Copy files
COPY . .

EXPOSE 3000 80
CMD ["npm", "start"]