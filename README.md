# Arbitrage
simple currency arbitrage path calculator in NodeJS

## Application setup

### Clone the repo
Enter the following commands to clone this repository to your local environment
```
#> git clone https://github.com/foomip/arbitrage.git
```
And then change your local diretory path to the newly created repo for the next install steps
```
#> cd arbitrage
```

### Set up Node and NVM
This application was built and tested with Node V5.8.0. It should work fine with any 5.x or 4.x version of Node, we recommend using
[NVM](https://github.com/creationix/nvm) to get things up and running. If you do not wish to use NVM on your system please skip the
NVM install steps below and go to the next installation step.

#### Install NVM
[Follow these install steps](https://github.com/creationix/nvm#install-script) on the NVM website.

#### Get required Node installed
From withing the repository directory, execute the following command
```
#> nvm install
```
Once the relevant Node version has been installed, you willbe able to load it up for your app by running the following command
```
#> nvm use
```
This will check the .nvmrc file for the relevant Node version and load it

### Running the application for the first time
#### Install node linraries
Install the reuired dependencies with the following command
```
#> npm install
```

#### Running the application
The application can now be run with the command `npm start`. Below is an example of the output produced when running this app
```
npm start

> arbitrage@1.0.0 start /project/arbitrage
> node index.js

Please enter a base currency
prompt: currency:  zar
Fetching currency information from api.fixer.io
ZAR BRL CAD CHF AUD DKK BGN HUF CNY KRW MXN CZK EUR PHP GBP HRK PLN INR HKD JPY USD MYR IDR ILS THB RON RUB TRY NZD SGD SEK NOK
Doing arbitrage calculations, for purposes of demo stopping after 10M iterations
1 => ZAR -> AUD -> ZAR => 1.0000213669999998
1 => ZAR -> CAD -> ZAR => 1.0000285
1 => ZAR -> INR -> ZAR => 1.000030936
1 => ZAR -> NZD -> ZAR => 1.000033876
1 => ZAR -> BRL -> AUD -> ZAR => 1.0000451160908999
1 => ZAR -> NOK -> AUD -> ZAR => 1.0000519568180999
1 => ZAR -> BRL -> NZD -> ZAR => 1.0000600817592
1 => ZAR -> CAD -> BGN -> AUD -> ZAR => 1.0000634978905418
1 => ZAR -> BRL -> NOK -> AUD -> ZAR => 1.0000671258939418
1 => ZAR -> CHF -> USD -> AUD -> ZAR => 1.0000681730274976
1 => ZAR -> DKK -> GBP -> AUD -> ZAR => 1.000070119555507
1 => ZAR -> DKK -> RUB -> AUD -> ZAR => 1.0000707864371223
1 => ZAR -> GBP -> NOK -> AUD -> ZAR => 1.0000827463877235
1 => ZAR -> BRL -> SEK -> CHF -> ZAR => 1.0000828986828914
1 => ZAR -> BRL -> RUB -> GBP -> ZAR => 1.000094876940866
1 => ZAR -> BRL -> SEK -> NZD -> ZAR => 1.0000965853901025
1 => ZAR -> DKK -> RUB -> GBP -> ZAR => 1.0001071432047697
1 => ZAR -> BRL -> RUB -> GBP -> AUD -> ZAR => 1.00012430634986
1 => ZAR -> DKK -> RUB -> GBP -> AUD -> ZAR => 1.0001365729747185
1 => ZAR -> BRL -> RUB -> GBP -> NOK -> ZAR => 1.000140756517165
1 => ZAR -> DKK -> RUB -> GBP -> NOK -> ZAR => 1.0001530233437863
1 => ZAR -> BRL -> RUB -> GBP -> NOK -> AUD -> ZAR => 1.000163664893897
1 => ZAR -> DKK -> RUB -> GBP -> NOK -> AUD -> ZAR => 1.0001759320014918
1 => ZAR -> DKK -> RUB -> GBP -> NOK -> CAD -> ZAR => 1.000183732000228
1 => ZAR -> THB -> DKK -> RUB -> GBP -> NOK -> ZAR => 1.0001890161623428
1 => ZAR -> BRL -> ILS -> DKK -> RUB -> GBP -> AUD -> ZAR => 1.000199215488267
1 => ZAR -> INR -> DKK -> RUB -> GBP -> NOK -> AUD -> ZAR => 1.0002004565374294
1 => ZAR -> PLN -> DKK -> RUB -> GBP -> NOK -> AUD -> ZAR => 1.0002035589297507
1 => ZAR -> THB -> DKK -> RUB -> GBP -> NOK -> AUD -> ZAR => 1.0002119256444693
Arbitrage iterations complete
```

#### Changing run configs
There are a few basic configurations that can be updated in the [lib/configs.js](https://github.com/foomip/arbitrage/blob/master/lib/configs.js) file. Please have a look at the options and comments in this file.
