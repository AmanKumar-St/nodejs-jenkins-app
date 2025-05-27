# Use an official Node.js runtime
FROM node:18

# Set working directory
WORKDIR /app

# Copy all files to the container
COPY . .

# Install dependencies
RUN npm install

# Expose a port (optional, if your app runs a server)
EXPOSE 3000

# Run your app (adjust if using something other than index.js)
CMD ["node", "index.js"]
