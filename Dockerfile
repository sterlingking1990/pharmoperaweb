FROM node:22.12.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

# Use npm start which runs: "serve -s dist -l 8080"
CMD ["npm", "start"]