FROM node:18.8-alpine AS base

FROM base AS builder

WORKDIR /home/node/app
COPY package*.json ./

# Remove Old Files
RUN rm -rf ./build
RUN rm -rf ./dist
RUN rm -rf ./.next

COPY . .
RUN yarn install

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

# Docker on Prod
ENV PAYLOAD_PUBLIC_SERVER_URL=https://lkycode.com
ENV NEXT_PUBLIC_SERVER_URL=https://lkycode.com

# Docker on Local
# ENV PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
# ENV NEXT_PUBLIC_SERVER_URL=http://localhost:3000


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
COPY --from=builder /home/node/app/next.config.js ./
COPY --from=builder /home/node/app/csp.js ./
COPY --from=builder /home/node/app/redirects.js ./
COPY --from=builder /home/node/app/ca-certificate.crt ./
COPY --from=builder /home/node/app/public ./public

EXPOSE 3000

CMD ["yarn", "serve"]
