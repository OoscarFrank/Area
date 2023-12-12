FROM beevelop/android-nodejs:v2023.10.1 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV EXPO_TOKEN=vnVJu-U6lbRAW-Wx7Z8CP3hSk9Qa5KyHsBqKfPkN
ENV EAS_NO_VCS=1
COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent
RUN npm install -g eas-cli
RUN yes | sdkmanager --update
COPY . ./
RUN eas build --platform android --local --non-interactive --profile preview
RUN mv *.apk client.apk


FROM beevelop/android-nodejs:v2023.10.1
WORKDIR /app
COPY --from=build /app .