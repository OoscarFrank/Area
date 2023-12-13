FROM beevelop/android-nodejs:v2023.10.1 as build
WORKDIR /app
ARG EAS_CRED
ENV PATH /app/node_modules/.bin:$PATH
ENV EXPO_TOKEN=${EAS_CRED}
ENV EAS_NO_VCS=1
COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent
RUN npx expo install expo-checkbox
RUN npm install -g eas-cli
RUN yes | sdkmanager --update
COPY . ./
RUN eas build --platform android --local --non-interactive --profile preview
RUN mv *.apk client.apk


FROM beevelop/android-nodejs:v2023.10.1
WORKDIR /mobile
RUN rm client.apk || true
COPY --from=build /app/client.apk .