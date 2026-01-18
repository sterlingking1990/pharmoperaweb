FROM node:22.12.0-alpine

WORKDIR /app

COPY package*.json ./

# Install all dependencies (including dev) for build
RUN npm ci

COPY . .

# Build the React app
RUN npm run build

# Clean up dev dependencies to reduce image size
RUN npm prune --production

# Debug build output
RUN echo "=== Build Verification ===" && \
    echo "Dist directory contents:" && \
    ls -la dist/ && \
    echo "Checking for index.html..." && \
    if [ -f "dist/index.html" ]; then \
      echo "✅ index.html exists"; \
      echo "File size:" && du -h dist/index.html; \
    else \
      echo "❌ ERROR: index.html missing!"; \
      echo "Listing all files in dist:" && find dist -type f; \
      exit 1; \
    fi

EXPOSE 8080

# Use Express server to serve the built app
CMD ["node", "server.js"]