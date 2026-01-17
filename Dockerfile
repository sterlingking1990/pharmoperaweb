FROM node:22.12.0-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies including express
RUN npm install

# Copy server file
COPY server.js ./

COPY . .

RUN npm run build

# Verify build
RUN ls -la dist/ && echo "Build completed successfully!"

EXPOSE 8080

CMD ["node", "server.js"]