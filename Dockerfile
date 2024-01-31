FROM node:18-alpine

ENV NEXT_TELEMETRY_DISABLED 1

RUN mkdir /hand_scanner_frontend
WORKDIR /hand_scanner_frontend

COPY package.json .
COPY yarn.lock .

RUN yarn
RUN yarn cache clean

COPY . .

RUN yarn build

CMD ["yarn", "start"]
