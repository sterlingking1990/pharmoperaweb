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

RUN npm install -g serve

EXPOSE 8080

CMD ["serve", "-s", "dist", "--listen", "0.0.0.0:8080", "--no-clipboard"]