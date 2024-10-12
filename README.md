# Country Info APP

<div align="center" style="display: display_block">

![image_info](https://img.shields.io/badge/Language-JavaScript-yellow)
[![DateNager](https://img.shields.io/badge/API-Date_Nager-blue)](https://date.nager.at/api/)

</div>

<div align="center" style="display: display_block">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" width="100" height="100" />

</div>

## 💬 About

This repository contains a Full-Stack JavaScript application to return information about several countries.

The project was developed in the [JavaScript](https://javascript.info/) language, with [Node.js](https://nodejs.org/), in the [Visual Studio Code](https://code.visualstudio.com/) IDE.

For the Back End, the application uses [Express](https://expressjs.com/) and [Axios](https://axios-http.com/) to connect with the [Date Nager API](https://date.nager.at/api/) and obtain country information data.

For the Front End, [React](https://react.dev/), [Next.js](https://nextjs.org/) and [Tailwind](https://tailwindcss.com/) were used to build the web interface.

The application runs locally, and presents both a list of countries, and information details about specific countries' populations, bordering countries and flag.

## 💻 Configuration

First, download this repository by clicking the `<> Code` button at the top of this repository. You can download it as a .zip compressed file, or clone it via HTTPS or SSH.

If downloaded as a .zip file, decompress the project in the desired folder or workspace.

Once the project structure is set up locally, install the latest version of [Node.js](https://nodejs.org/).

Navigate to the project folder via terminal, such as the one provided by the IDE [Visual Studio Code](https://code.visualstudio.com/), and execute the command:

`npm install`

Once the installation is done, nagivate to the `FrontEnd` folder, and execute the command again:

`npm install`

After all dependencies are installed, it's time to configure the `.env` file in the root directory, and the `.env.local` file, in the FrontEnd directory.

The `.env` file contains three fields, `PORT`, `DATE_NAGER_API_URL` and `COUNTRIES_NOW_API_URL`. The last two refer to URLs that obtain data from the API, whereas the first one is the port where the Back End will run locally. An example of configuring the fields is:

```
PORT=3000
DATE_NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIES_NOW_API_URL=https://countriesnow.space/api/v0.1/countries
```

The `.env.local` contains just one field, `BACKEND_URL`, which refers to the URL used by the Back End. Continuing from the previous example, it could be configured as:

```
BACKEND_URL=http://localhost:3000
```

In the `FrontEnd/package.json` file, the `dev` script executes the Front End on a different port than the Back End one. By default, it uses port `3001`, but could be altered to another port simply by editing the value.

Once the environment variables are configured, navigate to the root directory, and execute the command:

`npm start`

That will start the Back End server. Once it is running, navigate to the FrontEnd directory, open another terminal, and execute the command:

`npm run dev`

That will run the Front End application. Once it is running (after the "Ready" message), the web pages can be viewed. Continuing with the previous examples, where the Back End port is `3000`, and the Front End port is `3001`, the Country List page, which lists all countries, can be accessed by the following URL:

`http://localhost:3001/`

Clicking one of the country names in that list will access the Country Info page, which contains the name, flag, bordering countries, and population data for the country. The country-specific pages for Country Info are accessed by a URL parameter, for example, the following URL accesses the Country Info page for Brazil:

`http://localhost:3001/country/BR`