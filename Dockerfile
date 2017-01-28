FROM node:argon

RUN mkdir /app
WORKDIR /app

copy package.json /app
RUN npm install

COPY . /app

EXPOSE 3030

CMD ["npm","start"]