# Helpful Scripts

## Setup
Run:

`$ bash install.sh`

This script installs the npm packages the scripts use to run and adds an alias for each script to `~/.bash_profile` so they can be used globally in your terminal.

### Accessing Globally
Once installed, you can use the alias to call each script:

* `$ weather 43210`
* `$ case "hello" -u`
* `$ uuid`
* `$ db 5 -b`

## Scripts
### Case
Take an input string and transform it to upper or lower case

```
$ case "Hello, World" -u
HELLO, WORLD

$ case "Hello, World"
hello, world
```

### Weather
Show the current weather for a given zip code

```
$ weather 43210

Weather report: 43210

      .-.      Heavy snow
     (   ).    26..+33 °F     
    (___(__)   ↘ 10 mph       
    * * * *    1 mi           
   * * * *     0.1 in
```

### UUID
Generates a version 4 UUID, copies the UUID to the clipboard and prints it to the console

```
$ uuid

2c7b2ba7-4049-4751-bd8e-dcb146318714
```

### Binary-to-Decimal (and Decimal-to-Binary)
Converts a binary number to decimal (base 10), and a decimal number to binary (base 2)

```
$ db 5 -b

101

$ db 101 -d

5
```