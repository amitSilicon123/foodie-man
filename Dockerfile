FROM node:20.19.0

WORKDIR /app

COPY . .

RUN npm install

# 👇 generate AFTER install but WITHOUT needing env
RUN npx prisma generate --schema=./prisma/schema.prisma

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]