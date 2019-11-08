# Helpful Scripts

## Setup
Run:

`$ bash install.sh`

This script installs the npm packages the scripts use to run and adds an alias for each script to `~/.bash_profile` so they can be used globally in your terminal.

### Accessing Globally
Once installed, you can use the alias to call each script:

* `$ weather 43210`
* `$ case "hello" -u`

## Scripts
### Case
Take an input string and transform it to upper or lower case

```
$ node case.js "Hello, World" -u
HELLO, WORLD

$ node case.js "Hello, World"
hello, world
```

### Weather
Show the current weather for a given zip code

```
$ node weather.js 43210

Weather report: 43210

      .-.      Heavy snow
     (   ).    26..+33 °F     
    (___(__)   ↘ 10 mph       
    * * * *    1 mi           
   * * * *     0.1 in
```