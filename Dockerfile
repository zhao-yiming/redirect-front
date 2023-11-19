FROM arm32v7/node:14
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "index.js"]
EXPOSE 8080