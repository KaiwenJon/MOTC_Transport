This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

# Scenic-Spot Browser App
A webapp that allows you to visit the "All scenic spots in Taiwan", or just choose some of them in the category of city/country.  
Using React, Router, IntersectionObserver to implement the features.  
Also, we're using API (https://ptx.transportdata.tw/MOTC?t=Tourism&v=2) provided by MOTC.  

## Installation

```shell
$ git clone https://github.com/KaiwenJon/MOTC_Transport.git
$ cd transport
$ npm install && npm start 
```

## Warning
There's a limitation on numbers of requesting an API every day.  
If that happens, the web will no longer load new pages and you can find a error message like this in the console: 
```shell
GET https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Hsinchu?$top=30&$skip=60&$format=JSON 429 (Too Many Requests).
```
In this situation, either change your IP address, or wait until next day to get another whole numbers of requesting.

If everything's doing great,then you might see an interface like this:
![image](https://github.com/KaiwenJon/MOTC_Transport/blob/6a0fd192a74924c8eb2398d6fb13b4f593b52648/scenic_Spot.png)

## Source Code File Structure
```
├──public
│   ├── index.html
│   └── styles.css
└──src
    ├── components
    │   └── Header.js
    ├── containers
    │   └── Main.js
    │   └── SpotAll.js
    │   └── SpotCity.js
    └── index.js
```
## Source Code Brief Explanation
Starting from ./src/index.js, we render a "Main" component on the root in HTML.  
In Main.js, we set up links and routers. 
Then depending which button the user presses, we direct the user to "SpotAll" or "SpotCity" componenet, where we render a list of scenic spots.  
We're using fetch() syntax to implement the promise structure.  
Every time the scrolling window intersects with the bottom element, we request another 30 items from the API.  
That't basically how it works!  

## Enjoy!
