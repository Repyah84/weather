# Weather

_This application interacts with the [OpenWeather](https://openweathermap.org/api) API. API key: **17b7ee083a1acff30731c1208f4111ee**. Hourly data caching is used. This means that the data will be updated after one hour later the next user request or after page reload. There is a functionality of adding cities to the list of favorites. The coordinates of cities are added to the local storage of the browser._

_The application consists of three pages. First dashboard. On it, you can find the city or cities by name added to the input. The second page is a list of your favorite cities. On it, you can see the cities that you will add to this list. The third page with detailed data and weather forecasts for five days in the city. To go to it you need to click on the link for more details on the city card on the dashboard page or favorite cities list page. To add a city to the favorite city list you need to go to the city page and press the push pin button. To remove a city from the list you need to do the same. You will see the status on the button added or deleted city. And also a message in the snack bar._

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deployment

Run `npm run deploy:GitHub` The script automatically builds and then deploys the application to GitHub.

You can see the result from this link [Weather](https://Repyah84.github.io/weather/)
