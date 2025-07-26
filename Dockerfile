# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /flight-service

# Copy only package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Optional: Build step, if you're using TypeScript or a bundler like webpack
# Remove if you're not using a build step
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Install nodemon globally (only needed if you're running in development)
RUN npm install -g nodemon

# Start the app with nodemon (development use)
CMD ["nodemon", "index.js"]
