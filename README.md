# A Modern Query Of Javascript | Garuda Javacript 2 | ES5 & ES6 Style

## Features
- Support Template Syntax (single data) and *new* (multiple data)
- Support Find Class Element
- Support Find Tag Element
- Support Defined Event Multi Element
- Support Ajax
- Pretty Code

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

__({
  el:"@p",
  html:{
  	 single:{
         name:"Lamhot",
         email:"Lamhot@gmail.com"
     }
  }
});

@start@
   Hello #username# !
@end@
```
<a href="https://jsfiddle.net/steoa1xn/1/">See on JSFiddle</a>

# IMPORTANT
- if (el) with value # then it will be search the class of element
- if (el) with value without # it will be search the id of element
- if (el) with value * only it will be search all of element
- if (el) with value @ then it will be search the tag of element
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

## Download Source Code
https://github.com/lamhotsimamora/Garuda-Javascript/archive/v.1.0.0.zip

--------------------------------
## CDN For Development or Production (Recommended)
```
https://www.cdn.lamhotsimamora.com/garuda2/ 
```
## Copy this code to HTML
```
<script type="text/javascript" src="https://www.cdn.lamhotsimamora.com/garuda2/"></script>
```
------------------------------

## Demo
```
http://bit.ly/GarudaJavascript2
```

## Demo Code
1.  String Char Code Example 
https://lamhotsimamora.github.io/String-Char-Code/

2.  Get Type Of Variable / VarDump In Javascript   
https://jsfiddle.net/LamhotSimamora/7p1s5u9z/embedded/js,html,result/dark/#Result

3.  Money Format Example
https://jsfiddle.net/LamhotSimamora/aqtjof42/embedded/js,html,result/dark/#Result

4.  Input text (required)
https://jsfiddle.net/LamhotSimamora/xrLsveLj/embedded/js,html,result/dark/#Result

5.  Input text (set value and focus)
https://jsfiddle.net/LamhotSimamora/9gdre734/embedded/js,html,result/dark/#Result

6.  AJAX
https://lamhotsimamora.github.io/Modern-Ajax-Garuda-Javascript/

7.  Syntax Templating  
https://jsfiddle.net/LamhotSimamora/k8bpb48z/embedded/js,html,result/dark/#Result
https://jsfiddle.net/LamhotSimamora/chm4wx1a/embedded/js,html,result/dark/#Result
https://jsfiddle.net/LamhotSimamora/655d1bon/2/embedded/js,html,result/dark/#Result
https://jsfiddle.net/pdj35gv4/embedded/js,html,result/dark/#Result

8.  Event Keyup & Keydown (No Javascript)
https://jsfiddle.net/LamhotSimamora/L32s6g9r/embedded/html,result/dark/#Result
https://jsfiddle.net/LamhotSimamora/L32s6g9r/1/embedded/html,result/dark/#Result

9.  More 1
https://jsfiddle.net/LamhotSimamora/eq6qkpo8/1/embedded/js,html,result/dark/

10. More 2
https://jsfiddle.net/LamhotSimamora/ukhasz6b/1/embedded/js,html,result/dark/#Result

11. More 3
https://jsfiddle.net/LamhotSimamora/tgrhabj6/embedded/js,html,result/dark/#Result

## Demo On Youtube
1. part 1 https://www.youtube.com/watch?v=uyHGiiSn2wo
2. part 2 https://www.youtube.com/watch?v=xwGnKWGXPx4

## Example On The Fly

1. Notification
https://github.com/lamhotsimamora/Notification-Garuda-Javascript

2. Card Template
https://github.com/lamhotsimamora/Card-Template-Garuda-Javascript-2

3. Best Hero ML
https://github.com/lamhotsimamora/Best-Hero-Mobile-Legend

4. Searching Image PIXEBAY
https://github.com/lamhotsimamora/Search-Image-Pixebay

5. Profile User
https://jsfiddle.net/LamhotSimamora/s4ran61f/embedded/js,html,result/dark/#Result


----------------

### Want to buy me a cup of coffee ?
<a href="http://ko-fi.com/Z8Z579XC">Yes</a>
