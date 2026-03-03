FROM node:20.19.0

WORKDIR /app

# 1️⃣ Copy full project first (including prisma folder)
COPY . .

# 2️⃣ Install dependencies
RUN npm install

# 3️⃣ Build project
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]