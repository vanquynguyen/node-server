FROM node:10

# Create app directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-freefont-ttf \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

RUN  yarn install

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]
