FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent
COPY . ./

FROM node:13.12.0-alpine
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
CMD ["node", "index.js"]