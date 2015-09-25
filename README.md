# dm-tex
tex helper

## Description
* started project --> look at the [todos](todo.md) to see what will be done

## Run
```
dmtex [task]
dm-tex [task]
```

## Install

```
npm install dm-tex -g # for global use
npm install dm-tex --save # for programmatically use
```

## Tasks

### [livereload](tasks/livereload/index.js)
* livereloads a tex sheet

#### livereload global usage
```
dmtex [livereload|lr]
```

#### livereload programmatically usage
```javascript
var livereload = require("dm-tex").livereload;
var livereloadResult = livereload.start();
```

#### livereload steps

#### livereload features

#### livereload config
```javascript
{
    "livereload": {
    }
}
```

### [exampleAsync](tasks/exampleAsync/index.js)
* 

#### exampleAsync global usage
```
dmtex [exampleAsync]
```

#### exampleAsync programmatically usage
```javascript
var exampleAsync = require("dm-tex").exampleAsync;
var exampleAsyncResult = exampleAsync.start();
```

#### exampleAsync steps

#### exampleAsync features

#### exampleAsync config
```javascript
{
    "exampleAsync": {
    }
}
```

### [exampleSync](tasks/exampleSync/index.js)
* 

#### exampleSync global usage
```
dmtex [exampleSync]
```

#### exampleSync programmatically usage
```javascript
var exampleSync = require("dm-tex").exampleSync;
var exampleSyncResult = exampleSync.start();
```

#### exampleSync steps

#### exampleSync features

#### exampleSync config
```javascript
{
    "exampleSync": {
    }
}
```

## Config
* you can place a .dm-tex.json file in your home directory (~/.dm-tex.json)
* the following things are allowed at the moment
```javascript
{
}
```

## Lessons Learned
