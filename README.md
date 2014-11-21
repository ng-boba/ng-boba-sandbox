ngBoba Seed
===================================
> Seed project using ngBoba: Angular Dependency Manager

This project is a sample application for a basic ngBoba project.
You can use it to quickly bootstrap your AngularJS webapp with ngBoba
support for production and development.

## Getting Started
To get started you can clone the ng-boba-seed repository and install the dependencies.

### Clone the repo

```shell
git clone https://github.com/ng-boba/ng-boba-seed.git
```

### Install dependencies

```shell
cd ng-boba-seed
npm install
```

### Run ngBoba
Before we fire up the server, we need to tell ngBoba to create our module configurations & bundles.

```shell
grunt
```

### Start the server
We're using the python SimpleHTTPServer to launch the sample app. If you don't have python installed, this isn't
going to work...

```shell
npm start
```

Visit the server in your web browser of choice at: http://localhost:8000

### Explore the application
Now it's up to you to explore the project and see if ngBoba is right for your needs. Open the developer tools and watch
the seed project's dependencies get included on the fly. Click through the available links and watch how the
dependencies are loaded differently.

Enjoy ngBoba!

## Contact & Thanks
For more information about ngBoba please check out [ngBoba.](http://ng-boba.github.io/)

You'll notice a similarity between this documentation and the [angular-seed](https://github.com/angular/angular-seed)
project. That's because the format and wording was lifted heavily
from that project's documentation. Thanks guys!

We <3 angular & angular-seed.
