FROM node:22.12.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-s", "dist", "-p", "8080", "--no-clipboard"]