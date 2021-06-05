FROM node:12.18-alpine As builder
# ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN npm install
COPY . .

RUN npm run build --prod

FROM node:latest
COPY --from=builder /usr/src/app/dist/family-tree-app/ /usr/share/nginx/html

EXPOSE 4200
CMD ["npm", "start"]




