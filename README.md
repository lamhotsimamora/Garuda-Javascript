# A Modern Query Of Javascript | Garuda Javacript 2 | ES5 & ES6 Style

### Preview Syntax 
```
$text = __({
  el:"my_article",
  html:"<h1>Hello World</h1>"
});
```

```
$my_btn.when("click",$=>{
  // Do something 
});

$getComment = __({
    url:"https://jsonplaceholder.typicode.com/comments/1",
    method:"get"
});

$getComment.request($response=>{
    _a($response);
});
```
<a href="https://jsfiddle.net/steoa1xn/1/">See on JSFiddle</a>

# IMPORTANT
- if (el) with value # then it will be search the class of element
- if (el) with value without # it will be search the id of element
- if (el) with value * only it will be search all of element
```
$id = __({
  el:"id"
});
$class = __({
  el:"#class"
});
$all = __({
  el:"*"
});
```
--------------------
# Getting Started

## Install via NPM
```
npm i garudajavascript2
```

## Clone Repository
```
git clone https://github.com/lamhotsimamora/Garuda-Javascript.git
```

--------------------------------
## CDN For Development or Production (Recommended)
```
https://www.cdn.lamhotsimamora.com/garuda2/ 
https://lamhotsimamora.github.io/Garuda-Javascript/src/garuda.js
```
## Copy this code to HTML
```
<script type="text/javascript" src="https://www.cdn.lamhotsimamora.com/garuda2/"></script>
```
OR
```
<script type="text/javascript" src="https://lamhotsimamora.github.io/Garuda-Javascript/src/garuda.js"></script>
```
------------------------------

## Demo
```
http://bit.ly/GarudaJavascript2
```

## Demo Code
1. String Char Code Example 
https://lamhotsimamora.github.io/String-Char-Code/

2. Get Type Of Variable / VarDump In Javascript   
https://jsfiddle.net/LamhotSimamora/7p1s5u9z/embedded/js,html,result/dark/#Result

3. Money Format Example
https://jsfiddle.net/LamhotSimamora/aqtjof42/embedded/js,html,result/dark/#Result

4. Input text (required)
https://jsfiddle.net/LamhotSimamora/xrLsveLj/embedded/js,html,result/dark/#Result

5. Input text (set value and focus)
https://jsfiddle.net/LamhotSimamora/9gdre734/embedded/js,html,result/dark/#Result

6. More
https://jsfiddle.net/LamhotSimamora/eq6qkpo8/1/embedded/js,html,result/dark/

----------------

### Want to buy me a cup of coffee ?
<a href="http://ko-fi.com/Z8Z579XC">Yes</a>
