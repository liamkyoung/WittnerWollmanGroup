FROM node:18.8-alpine AS base

FROM base AS builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN yarn install
# RUN cross-env NODE_ENV=production yarn build:payload
# RUN yarn build:payload && yarn build:server && yarn copyfiles && yarn build:next

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
ENV PAYLOAD_SECRET=17f1a455a70217ebee255472

RUN yarn build:payload
RUN yarn build:server
RUN yarn copyfiles
RUN yarn build:next

FROM base AS runtime

WORKDIR /home/node/app
COPY package*.json  ./
COPY yarn.lock ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build
COPY --from=builder /home/node/app/.next ./.next

EXPOSE 3000

CMD ["yarn", "serve"]
