FROM node:16-alpine AS development

RUN apk update

WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock.json ./

RUN apk --no-cache add make gcc g++ python3

RUN npm install --legacy-peer-deps
#RUN npm ci --force

RUN npm rebuild bcrypt --build-from-source

COPY . .

RUN npm run build

EXPOSE 3040

CMD ["npm", "start"]
