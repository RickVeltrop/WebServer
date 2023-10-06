FROM node:20.8 as builder
WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .

RUN npm install -g @angular/cli@13
RUN npm run build

ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0", "--port", "3000", "--disable-host-check"]
