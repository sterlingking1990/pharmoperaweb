FROM node:22.12.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Verify build
RUN echo "=== Build Verification ===" && \
    ls -la dist/ && \
    if [ -f "dist/index.html" ]; then \
      echo "✅ index.html exists"; \
    else \
      echo "❌ ERROR: index.html missing!"; \
      exit 1; \
    fi

EXPOSE 8080

CMD ["node", "server.js"]