FROM node:9
WORKDIR /app
COPY server.js /app
RUN npm install
COPY . /app
EXPOSE 8080
CMD node server.js
