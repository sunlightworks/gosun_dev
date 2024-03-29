

// Initialize library
lozad('.lozad', {
  load: function(el) {
      el.src = el.dataset.src;
      el.onload = function() {
        el.classList.add('fade')
      }
      el.style.backgroundImage = "url('" + el.getAttribute("data-background-image") + "')";
  }
}).observe()





$(window).resize(function(){
  if ($(window).width() <= 768){	
    $('.width-small-1-1').removeClass('width-1-2');
  }	
});
 

// Tone Styling
console.log('🎨  Adding styles to Tone SMS iframe');
document.addEventListener("DOMContentLoaded", function(event) {
$('#sms-opt-in').contents().find('button').addClass('btn','btn--subtle');
console.log('✅  Added styles to Tone SMS iframe')
});





// ============================================================================
// Navigation / Promo Banner
// ============================================================================
// When the user scrolls down 40px from the top of the document, hide the promo banner
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 40) {
//   $('.pre-header').addClass('hide');
//   $('.header').addClass('hide');
//   $('.top_bar').addClass('hide');
// } else {
//   $('.pre-header').removeClass('hide');
//   $('.header').removeClass('hide');
//   $('.top_bar').removeClass('hide');
// }
// } 



// ============================================================================
// Navigation / Promo Banner
// ============================================================================
// When the user scrolls down 40px from the top of the document, hide the promo banner
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 40) {
//   $('.sub-nav').addClass('position-fixed');
// } else {
//   $('.sub-nav').removeClass('position-fixed');
// }
// } 


/* #Banners / Dialog - [Show/Hide] */
$(".dismiss-trigger").click(function(){
$(".dismiss-target").addClass("hide");
});



// ============================================================================
// Third Party / Shogun
// ============================================================================
/* #Shogun */
$(function() {
$(".shg-product-title-component h3").addClass("article-title base-BodyTitle");
$(".shogun-form button").addClass("btn btn--accent btn--md");
});
/* #Icon + Text / Make vertical */
$(function() {
$(".shg-c .flex-column").addClass("flex");
});

$(function() {
  $(".sub-nav .shopify-product-form").addClass("flex");
  });

  $(function() {
    $(".sub-nav .select").addClass("margin-right-md  padding-bottom-sm");
  });


/* #Register / Account */
$(function() {
if ($(window).width() > 768 ) {
   $('.full-left, .full-right').addClass('width-1-2 h100').removeClass('width-1-1');
   $('.full-container').addClass('f-r-c').removeClass('flex flex-column');
   $('.card--lg').addClass('ml30');
   $('.full-left').addClass('align-end');
   $('.full-right').addClass('align-start');
   $('.grid--1-2').addClass('grid--1-4').removeClass('grid--1-2');
   /* #Shogun / Slides */
   $('.shg-sld-nav-button').removeClass('hide');
   $('.shg-sld-slides').addClass('shg-sld-slides-padded');
} else {
    $('.full-left, .full-right').addClass('width-1-1').removeClass('width-1-2 h100');
    $('.full-container').addClass('flex flex-column m0').removeClass('f-r-c');
    $('.card--lg').removeClass('ml30');
    $('.full-left').removeClass('align-end');
    $('.full-right').removeClass('align-start');
    $('.grid--1-4').addClass('grid--1-2').removeClass('grid--1-4');
    $('.shg-sld-nav-button').addClass('hide');
    $('.shg-sld-slides').removeClass('shg-sld-slides-padded');
}
});



// ============================================================================
// Media / Video
// ============================================================================
// $('#play').on('click', function(e) {
//   e.preventDefault();
//   $("#player")[0].src += "?autoplay=1;rel=0;modestbranding=1&amp;title=";
//   $('#player').show();
//   $('#video-cover').hide();
//   $('.overlay-bottom').hide();
//   $('.btn-wrap').hide();
// });


$('[id=play]').on('click', function(e) {
  e.preventDefault();
  $("[id=player]")[0].src += "?autoplay=1;rel=0;modestbranding=1&amp;title=";
  $('[id=player]').show();
  $('[id=video-cover]').hide();
  $('.overlay-bottom').hide();
  $('.btn-wrap').hide();
});

/* #Media / Video – Autoloop */
window.addEventListener('load', async () => {
let video = document.querySelector('video[muted][autoplay]');
try {
  await video.play();
} catch (err) {
  video.controls = true;
}
});


/* Banner H2 to P */

// Select the 'a' tag to be replaced and call the replaceWith method
$('.collection_description h2').replaceWith(function(){
// Execute a callback to generate contents of the replacement
// The $('<div>') part creates a div
return $('<p>', {
    html: this.innerHTML // This takes the html of the 'a' tag and copies it to the new div
});
});


$('.add-to-cart__text').text(function (i, text)
{
  return text.replace('&lt;', '<').replace('&gt;', '>');
});


// Select the 'a' tag to be replaced and call the replaceWith method
$('<span class="add-to-cart__text">+</span>').replaceWith(function(){
// Execute a callback to generate contents of the replacement
// The $('<div>') part creates a div
return $('<span class="icon"> <i class="material-icons-outlined">add_circle_outline</i></span>', {
    html: this.innerHTML // This takes the html of the 'a' tag and copies it to the new div
});
});


/* #Upsell */
$(function() {
$(".productbox").addClass("choice-img bg radius-md col-6@xs col-4@sm col-3@md js-choice-img js-tab-focus");
});






// Utility function
function Util () {};

/* 
class manipulation functions
*/
Util.hasClass = function(el, className) {
if (el.classList) return el.classList.contains(className);
else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
};

Util.addClass = function(el, className) {
var classList = className.split(' ');
 if (el.classList) el.classList.add(classList[0]);
 else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
 if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
};

Util.removeClass = function(el, className) {
var classList = className.split(' ');
if (el.classList) el.classList.remove(classList[0]);	
else if(Util.hasClass(el, classList[0])) {
  var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
  el.className=el.className.replace(reg, ' ');
}
if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
};

Util.toggleClass = function(el, className, bool) {
if(bool) Util.addClass(el, className);
else Util.removeClass(el, className);
};

Util.setAttributes = function(el, attrs) {
for(var key in attrs) {
  el.setAttribute(key, attrs[key]);
}
};

/* 
DOM manipulation
*/
Util.getChildrenByClassName = function(el, className) {
var children = el.children,
  childrenByClass = [];
for (var i = 0; i < el.children.length; i++) {
  if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
}
return childrenByClass;
};

Util.is = function(elem, selector) {
if(selector.nodeType){
  return elem === selector;
}

var qa = (typeof(selector) === 'string' ? document.querySelectorAll(selector) : selector),
  length = qa.length,
  returnArr = [];

while(length--){
  if(qa[length] === elem){
    return true;
  }
}

return false;
};

/* 
Animate height of an element
*/
Util.setHeight = function(start, to, element, duration, cb) {
var change = to - start,
    currentTime = null;

var animateHeight = function(timestamp){  
  if (!currentTime) currentTime = timestamp;         
  var progress = timestamp - currentTime;
  var val = parseInt((progress/duration)*change + start);
  element.style.height = val+"px";
  if(progress < duration) {
      window.requestAnimationFrame(animateHeight);
  } else {
    cb();
  }
};

//set the height of the element before starting animation -> fix bug on Safari
element.style.height = start+"px";
window.requestAnimationFrame(animateHeight);
};

/* 
Smooth Scroll
*/

Util.scrollTo = function(final, duration, cb, scrollEl) {
var element = scrollEl || window;
var start = element.scrollTop || document.documentElement.scrollTop,
  currentTime = null;

if(!scrollEl) start = window.scrollY || document.documentElement.scrollTop;
    
var animateScroll = function(timestamp){
  if (!currentTime) currentTime = timestamp;        
  var progress = timestamp - currentTime;
  if(progress > duration) progress = duration;
  var val = Math.easeInOutQuad(progress, start, final-start, duration);
  element.scrollTo(0, val);
  if(progress < duration) {
      window.requestAnimationFrame(animateScroll);
  } else {
    cb && cb();
  }
};

window.requestAnimationFrame(animateScroll);
};

/* 
Focus utility classes
*/

//Move focus to an element
Util.moveFocus = function (element) {
if( !element ) element = document.getElementsByTagName("body")[0];
element.focus();
if (document.activeElement !== element) {
  element.setAttribute('tabindex','-1');
  element.focus();
}
};

/* 
Misc
*/

Util.getIndexInArray = function(array, el) {
return Array.prototype.indexOf.call(array, el);
};

Util.cssSupports = function(property, value) {
if('CSS' in window) {
  return CSS.supports(property, value);
} else {
  var jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase();});
  return jsProperty in document.body.style;
}
};

// merge a set of user options into plugin defaults
// https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
Util.extend = function() {
// Variables
var extended = {};
var deep = false;
var i = 0;
var length = arguments.length;

// Check if a deep merge
if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
  deep = arguments[0];
  i++;
}

// Merge the object into the extended object
var merge = function (obj) {
  for ( var prop in obj ) {
    if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
      // If deep merge and property is an object, merge properties
      if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
        extended[prop] = extend( true, extended[prop], obj[prop] );
      } else {
        extended[prop] = obj[prop];
      }
    }
  }
};

// Loop through each object and conduct a merge
for ( ; i < length; i++ ) {
  var obj = arguments[i];
  merge(obj);
}

return extended;
};

// Check if Reduced Motion is enabled
Util.osHasReducedMotion = function() {
if(!window.matchMedia) return false;
var matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
if(matchMediaObj) return matchMediaObj.matches;
return false; // return false if not supported
}; 

/* 
Polyfills
*/
//Closest() method
if (!Element.prototype.matches) {
Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
Element.prototype.closest = function(s) {
  var el = this;
  if (!document.documentElement.contains(el)) return null;
  do {
    if (el.matches(s)) return el;
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1); 
  return null;
};
}

//Custom Event() constructor
if ( typeof window.CustomEvent !== "function" ) {

function CustomEvent ( event, params ) {
  params = params || { bubbles: false, cancelable: false, detail: undefined };
  var evt = document.createEvent( 'CustomEvent' );
  evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
  return evt;
 }

CustomEvent.prototype = window.Event.prototype;

window.CustomEvent = CustomEvent;
}

/* 
Animation curves
*/
Math.easeInOutQuad = function (t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t + b;
t--;
return -c/2 * (t*(t-2) - 1) + b;
};

Math.easeInQuart = function (t, b, c, d) {
t /= d;
return c*t*t*t*t + b;
};

Math.easeOutQuart = function (t, b, c, d) { 
t /= d;
t--;
return -c * (t*t*t*t - 1) + b;
};

Math.easeInOutQuart = function (t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t*t*t + b;
t -= 2;
return -c/2 * (t*t*t*t - 2) + b;
};

Math.easeOutElastic = function (t, b, c, d) {
var s=1.70158;var p=d*0.7;var a=c;
if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
if (a < Math.abs(c)) { a=c; var s=p/4; }
else var s = p/(2*Math.PI) * Math.asin (c/a);
return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
};


/* JS Utility Classes */
(function() {
// make focus ring visible only for keyboard navigation (i.e., tab key) 
var focusTab = document.getElementsByClassName('js-tab-focus');
function detectClick() {
  if(focusTab.length > 0) {
    resetFocusTabs(false);
    window.addEventListener('keydown', detectTab);
  }
  window.removeEventListener('mousedown', detectClick);
};

function detectTab(event) {
  if(event.keyCode !== 9) return;
  resetFocusTabs(true);
  window.removeEventListener('keydown', detectTab);
  window.addEventListener('mousedown', detectClick);
};

function resetFocusTabs(bool) {
  var outlineStyle = bool ? '' : 'none';
  for(var i = 0; i < focusTab.length; i++) {
    focusTab[i].style.setProperty('outline', outlineStyle);
  }
};
window.addEventListener('mousedown', detectClick);
}());




// File#: _1_pre-header
// Usage: codyhouse.co/license
(function() {
  var preHeader = document.getElementsByClassName('js-pre-header');
  if(preHeader.length > 0) {
    for(var i = 0; i < preHeader.length; i++) {
      (function(i){ addPreHeaderEvent(preHeader[i]);})(i);
    }

    function addPreHeaderEvent(element) {
      var close = element.getElementsByClassName('js-pre-header__close-btn')[0];
      if(close) {
        close.addEventListener('click', function(event) {
          event.preventDefault();
          Util.addClass(element, 'pre-header--is-hidden');
        });
      }
    }
  }
}());



// File#: _1_swipe-content
(function() {
  var SwipeContent = function(element) {
    this.element = element;
    this.delta = [false, false];
    this.dragging = false;
    this.intervalId = false;
    initSwipeContent(this);
  };

  function initSwipeContent(content) {
    content.element.addEventListener('mousedown', handleEvent.bind(content));
    content.element.addEventListener('touchstart', handleEvent.bind(content));
  };

  function initDragging(content) {
    //add event listeners
    content.element.addEventListener('mousemove', handleEvent.bind(content));
    content.element.addEventListener('touchmove', handleEvent.bind(content));
    content.element.addEventListener('mouseup', handleEvent.bind(content));
    content.element.addEventListener('mouseleave', handleEvent.bind(content));
    content.element.addEventListener('touchend', handleEvent.bind(content));
  };

  function cancelDragging(content) {
    //remove event listeners
    if(content.intervalId) {
      (!window.requestAnimationFrame) ? clearInterval(content.intervalId) : window.cancelAnimationFrame(content.intervalId);
      content.intervalId = false;
    }
    content.element.removeEventListener('mousemove', handleEvent.bind(content));
    content.element.removeEventListener('touchmove', handleEvent.bind(content));
    content.element.removeEventListener('mouseup', handleEvent.bind(content));
    content.element.removeEventListener('mouseleave', handleEvent.bind(content));
    content.element.removeEventListener('touchend', handleEvent.bind(content));
  };

  function handleEvent(event) {
    switch(event.type) {
      case 'mousedown':
      case 'touchstart':
        startDrag(this, event);
        break;
      case 'mousemove':
      case 'touchmove':
        drag(this, event);
        break;
      case 'mouseup':
      case 'mouseleave':
      case 'touchend':
        endDrag(this, event);
        break;
    }
  };

  function startDrag(content, event) {
    content.dragging = true;
    // listen to drag movements
    initDragging(content);
    content.delta = [parseInt(unify(event).clientX), parseInt(unify(event).clientY)];
    // emit drag start event
    emitSwipeEvents(content, 'dragStart', content.delta, event.target);
  };

  function endDrag(content, event) {
    cancelDragging(content);
    // credits: https://css-tricks.com/simple-swipe-with-vanilla-javascript/
    var dx = parseInt(unify(event).clientX), 
      dy = parseInt(unify(event).clientY);
    
    // check if there was a left/right swipe
    if(content.delta && (content.delta[0] || content.delta[0] === 0)) {
      var s = getSign(dx - content.delta[0]);
      
      if(Math.abs(dx - content.delta[0]) > 30) {
        (s < 0) ? emitSwipeEvents(content, 'swipeLeft', [dx, dy]) : emitSwipeEvents(content, 'swipeRight', [dx, dy]);	
      }
      
      content.delta[0] = false;
    }
    // check if there was a top/bottom swipe
    if(content.delta && (content.delta[1] || content.delta[1] === 0)) {
    	var y = getSign(dy - content.delta[1]);

    	if(Math.abs(dy - content.delta[1]) > 30) {
      	(y < 0) ? emitSwipeEvents(content, 'swipeUp', [dx, dy]) : emitSwipeEvents(content, 'swipeDown', [dx, dy]);
      }

      content.delta[1] = false;
    }
    // emit drag end event
    emitSwipeEvents(content, 'dragEnd', [dx, dy]);
    content.dragging = false;
  };

  function drag(content, event) {
    if(!content.dragging) return;
    // emit dragging event with coordinates
    (!window.requestAnimationFrame) 
      ? content.intervalId = setTimeout(function(){emitDrag.bind(content, event);}, 250) 
      : content.intervalId = window.requestAnimationFrame(emitDrag.bind(content, event));
  };

  function emitDrag(event) {
    emitSwipeEvents(this, 'dragging', [parseInt(unify(event).clientX), parseInt(unify(event).clientY)]);
  };

  function unify(event) { 
    // unify mouse and touch events
    return event.changedTouches ? event.changedTouches[0] : event; 
  };

  function emitSwipeEvents(content, eventName, detail, el) {
    var trigger = false;
    if(el) trigger = el;
    // emit event with coordinates
    var event = new CustomEvent(eventName, {detail: {x: detail[0], y: detail[1], origin: trigger}});
    content.element.dispatchEvent(event);
  };

  function getSign(x) {
    if(!Math.sign) {
      return ((x > 0) - (x < 0)) || +x;
    } else {
      return Math.sign(x);
    }
  };

  window.SwipeContent = SwipeContent;
  
  //initialize the SwipeContent objects
  var swipe = document.getElementsByClassName('js-swipe-content');
  if( swipe.length > 0 ) {
    for( var i = 0; i < swipe.length; i++) {
      (function(i){new SwipeContent(swipe[i]);})(i);
    }
  }
}());



// File#: _1_custom-cursor
// Usage: codyhouse.co/license
(function() {
  var CustomCursor = function(element) {
    this.element = element;
    this.targets = document.querySelectorAll('[data-custom-cursor="'+this.element.getAttribute('id')+'"]');
    this.target = false;
    this.moving = false;

    // cursor classes
    this.inClass = 'c-cursor--in';
    this.outClass = 'c-cursor--out';
    this.positionClass = 'c-cursor--';
  
    initCustomCursor(this);
  };

  function initCustomCursor(obj) {
    if(obj.targets.length == 0) return;
    // init events
    for( var i = 0; i < obj.targets.length; i++) {
      (function(i){
        obj.targets[i].addEventListener('mouseenter', handleEvent.bind(obj));
      })(i);
    }
  };

  function handleEvent(event) {
    switch(event.type) {
      case 'mouseenter': {
        initMouseEnter(this, event);
        break;
      }
      case 'mouseleave': {
        initMouseLeave(this, event);
        break;
      }
      case 'mousemove': {
        initMouseMove(this, event);
        break;
      }
    }
  };

  function initMouseEnter(obj, event) {
    removeTargetEvents(obj);
    obj.target = event.currentTarget;
    // listen for move and leave events
    obj.target.addEventListener('mousemove', handleEvent.bind(obj));
    obj.target.addEventListener('mouseleave', handleEvent.bind(obj));
    // show custom cursor
    toggleCursor(obj, true);
  };

  function initMouseLeave(obj, event) {
    removeTargetEvents(obj);
    toggleCursor(obj, false);
    if(obj.moving) {
      window.cancelAnimationFrame(obj.moving);
      obj.moving = false;
    }
  };

  function removeTargetEvents(obj) {
    if(obj.target) {
      obj.target.removeEventListener('mousemove', handleEvent.bind(obj));
      obj.target.removeEventListener('mouseleave', handleEvent.bind(obj));
      obj.target = false;
    }
  };

  function initMouseMove(obj, event) {
    if(obj.moving) return;
    obj.moving = window.requestAnimationFrame(function(){
      moveCursor(obj, event);
    });
  };

  function moveCursor(obj, event) {
    obj.element.style.transform = 'translateX('+event.clientX+'px) translateY('+event.clientY+'px)';
    // set position classes
    updatePositionClasses(obj, event.clientX, event.clientY);
    obj.moving = false;
  };

  function updatePositionClasses(obj, xposition, yposition) {
    if(!obj.target) return;
    var targetBoundingRect = obj.target.getBoundingClientRect();
    var isLeft = xposition < (targetBoundingRect.left + targetBoundingRect.width/2),
      isTop = yposition < (targetBoundingRect.top + targetBoundingRect.height/2);

    // reset classes
    Util.toggleClass(obj.element, obj.positionClass+'left', isLeft);
    Util.toggleClass(obj.element, obj.positionClass+'right', !isLeft);
    Util.toggleClass(obj.element, obj.positionClass+'top', isTop);
    Util.toggleClass(obj.element, obj.positionClass+'bottom', !isTop);
  };

  function toggleCursor(obj, bool) {
    Util.toggleClass(obj.element, obj.outClass, !bool);
    Util.toggleClass(obj.element, obj.inClass, bool);
  };

  window.CustomCursor = CustomCursor;

  var cCursor = document.getElementsByClassName('js-c-cursor');
  if( cCursor.length > 0 && !Util.osHasReducedMotion()) {
    for( var i = 0; i < cCursor.length; i++) {
      (function(i){new CustomCursor(cCursor[i]);})(i);
    }
  }
}());




// File#: _1_tooltip
// Usage: codyhouse.co/license
(function() {
  var Tooltip = function(element) {
    this.element = element;
    this.tooltip = false;
    this.tooltipIntervalId = false;
    this.tooltipContent = this.element.getAttribute('title');
    this.tooltipPosition = (this.element.getAttribute('data-tooltip-position')) ? this.element.getAttribute('data-tooltip-position') : 'top';
    this.tooltipClasses = (this.element.getAttribute('data-tooltip-class')) ? this.element.getAttribute('data-tooltip-class') : false;
    this.tooltipId = 'js-tooltip-element'; // id of the tooltip element -> trigger will have the same aria-describedby attr
    // there are cases where you only need the aria-label -> SR do not need to read the tooltip content (e.g., footnotes)
    this.tooltipDescription = (this.element.getAttribute('data-tooltip-describedby') && this.element.getAttribute('data-tooltip-describedby') == 'false') ? false : true; 

    this.tooltipDelay = 0; // show tooltip after a delay (in ms)
    this.tooltipDelta = 10; // distance beetwen tooltip and trigger element (in px)
    this.tooltipTriggerHover = false;
    // tooltp sticky option
    this.tooltipSticky = (this.tooltipClasses && this.tooltipClasses.indexOf('tooltip--sticky') > -1);
    this.tooltipHover = false;
    if(this.tooltipSticky) {
      this.tooltipHoverInterval = false;
    }
    resetTooltipContent(this);
    initTooltip(this);
  };

  function resetTooltipContent(tooltip) {
    var htmlContent = tooltip.element.getAttribute('data-tooltip-title');
    if(htmlContent) {
      tooltip.tooltipContent = htmlContent;
    }
  };

  function initTooltip(tooltipObj) {
    // reset trigger element
    tooltipObj.element.removeAttribute('title');
    tooltipObj.element.setAttribute('tabindex', '0');
    // add event listeners
    tooltipObj.element.addEventListener('mouseenter', handleEvent.bind(tooltipObj));
    tooltipObj.element.addEventListener('focus', handleEvent.bind(tooltipObj));
  };

  function removeTooltipEvents(tooltipObj) {
    // remove event listeners
    tooltipObj.element.removeEventListener('mouseleave',  handleEvent.bind(tooltipObj));
    tooltipObj.element.removeEventListener('blur',  handleEvent.bind(tooltipObj));
  };

  function handleEvent(event) {
    // handle events
    switch(event.type) {
      case 'mouseenter':
      case 'focus':
        showTooltip(this, event);
        break;
      case 'mouseleave':
      case 'blur':
        checkTooltip(this);
        break;
    }
  };

  function showTooltip(tooltipObj, event) {
    // tooltip has already been triggered
    if(tooltipObj.tooltipIntervalId) return;
    tooltipObj.tooltipTriggerHover = true;
    // listen to close events
    tooltipObj.element.addEventListener('mouseleave', handleEvent.bind(tooltipObj));
    tooltipObj.element.addEventListener('blur', handleEvent.bind(tooltipObj));
    // show tooltip with a delay
    tooltipObj.tooltipIntervalId = setTimeout(function(){
      createTooltip(tooltipObj);
    }, tooltipObj.tooltipDelay);
  };

  function createTooltip(tooltipObj) {
    tooltipObj.tooltip = document.getElementById(tooltipObj.tooltipId);
    
    if( !tooltipObj.tooltip ) { // tooltip element does not yet exist
      tooltipObj.tooltip = document.createElement('div');
      document.body.appendChild(tooltipObj.tooltip);
    } 
    
    // reset tooltip content/position
    Util.setAttributes(tooltipObj.tooltip, {'id': tooltipObj.tooltipId, 'class': 'tooltip tooltip--is-hidden js-tooltip', 'role': 'tooltip'});
    tooltipObj.tooltip.innerHTML = tooltipObj.tooltipContent;
    if(tooltipObj.tooltipDescription) tooltipObj.element.setAttribute('aria-describedby', tooltipObj.tooltipId);
    if(tooltipObj.tooltipClasses) Util.addClass(tooltipObj.tooltip, tooltipObj.tooltipClasses);
    if(tooltipObj.tooltipSticky) Util.addClass(tooltipObj.tooltip, 'tooltip--sticky');
    placeTooltip(tooltipObj);
    Util.removeClass(tooltipObj.tooltip, 'tooltip--is-hidden');

    // if tooltip is sticky, listen to mouse events
    if(!tooltipObj.tooltipSticky) return;
    tooltipObj.tooltip.addEventListener('mouseenter', function cb(){
      tooltipObj.tooltipHover = true;
      if(tooltipObj.tooltipHoverInterval) {
        clearInterval(tooltipObj.tooltipHoverInterval);
        tooltipObj.tooltipHoverInterval = false;
      }
      tooltipObj.tooltip.removeEventListener('mouseenter', cb);
      tooltipLeaveEvent(tooltipObj);
    });
  };

  function tooltipLeaveEvent(tooltipObj) {
    tooltipObj.tooltip.addEventListener('mouseleave', function cb(){
      tooltipObj.tooltipHover = false;
      tooltipObj.tooltip.removeEventListener('mouseleave', cb);
      hideTooltip(tooltipObj);
    });
  };

  function placeTooltip(tooltipObj) {
    // set top and left position of the tooltip according to the data-tooltip-position attr of the trigger
    var dimention = [tooltipObj.tooltip.offsetHeight, tooltipObj.tooltip.offsetWidth],
      positionTrigger = tooltipObj.element.getBoundingClientRect(),
      position = [],
      scrollY = window.scrollY || window.pageYOffset;
    
    position['top'] = [ (positionTrigger.top - dimention[0] - tooltipObj.tooltipDelta + scrollY), (positionTrigger.right/2 + positionTrigger.left/2 - dimention[1]/2)];
    position['bottom'] = [ (positionTrigger.bottom + tooltipObj.tooltipDelta + scrollY), (positionTrigger.right/2 + positionTrigger.left/2 - dimention[1]/2)];
    position['left'] = [(positionTrigger.top/2 + positionTrigger.bottom/2 - dimention[0]/2 + scrollY), positionTrigger.left - dimention[1] - tooltipObj.tooltipDelta];
    position['right'] = [(positionTrigger.top/2 + positionTrigger.bottom/2 - dimention[0]/2 + scrollY), positionTrigger.right + tooltipObj.tooltipDelta];
    
    var direction = tooltipObj.tooltipPosition;
    if( direction == 'top' && position['top'][0] < scrollY) direction = 'bottom';
    else if( direction == 'bottom' && position['bottom'][0] + tooltipObj.tooltipDelta + dimention[0] > scrollY + window.innerHeight) direction = 'top';
    else if( direction == 'left' && position['left'][1] < 0 )  direction = 'right';
    else if( direction == 'right' && position['right'][1] + dimention[1] > window.innerWidth ) direction = 'left';
    
    if(direction == 'top' || direction == 'bottom') {
      if(position[direction][1] < 0 ) position[direction][1] = 0;
      if(position[direction][1] + dimention[1] > window.innerWidth ) position[direction][1] = window.innerWidth - dimention[1];
    }
    tooltipObj.tooltip.style.top = position[direction][0]+'px';
    tooltipObj.tooltip.style.left = position[direction][1]+'px';
    Util.addClass(tooltipObj.tooltip, 'tooltip--'+direction);
  };

  function checkTooltip(tooltipObj) {
    tooltipObj.tooltipTriggerHover = false;
    if(!tooltipObj.tooltipSticky) hideTooltip(tooltipObj);
    else {
      if(tooltipObj.tooltipHover) return;
      if(tooltipObj.tooltipHoverInterval) return;
      tooltipObj.tooltipHoverInterval = setTimeout(function(){
        hideTooltip(tooltipObj); 
        tooltipObj.tooltipHoverInterval = false;
      }, 300);
    }
  };

  function hideTooltip(tooltipObj) {
    if(tooltipObj.tooltipHover || tooltipObj.tooltipTriggerHover) return;
    clearInterval(tooltipObj.tooltipIntervalId);
    if(tooltipObj.tooltipHoverInterval) {
      clearInterval(tooltipObj.tooltipHoverInterval);
      tooltipObj.tooltipHoverInterval = false;
    }
    tooltipObj.tooltipIntervalId = false;
    if(!tooltipObj.tooltip) return;
    // hide tooltip
    removeTooltip(tooltipObj);
    // remove events
    removeTooltipEvents(tooltipObj);
  };

  function removeTooltip(tooltipObj) {
    Util.addClass(tooltipObj.tooltip, 'tooltip--is-hidden');
    if(tooltipObj.tooltipDescription) tooltipObj.element.removeAttribute('aria-describedby');
  };

  window.Tooltip = Tooltip;

  //initialize the Tooltip objects
  var tooltips = document.getElementsByClassName('js-tooltip-trigger');
  if( tooltips.length > 0 ) {
    for( var i = 0; i < tooltips.length; i++) {
      (function(i){new Tooltip(tooltips[i]);})(i);
    }
  }
}());



// File#: _1_popover
// Usage: codyhouse.co/license
(function() {
  var Popover = function(element) {
    this.element = element;
    this.elementId = this.element.getAttribute('id');
    this.trigger = document.querySelectorAll('[aria-controls="'+this.elementId+'"]');
    this.selectedTrigger = false;
    this.popoverVisibleClass = 'popover--is-visible';
    this.selectedTriggerClass = 'popover-control--active';
    this.popoverIsOpen = false;
    // focusable elements
    this.firstFocusable = false;
    this.lastFocusable = false;
    // position target - position tooltip relative to a specified element
    this.positionTarget = getPositionTarget(this);
    // gap between element and viewport - if there's max-height 
    this.viewportGap = parseInt(getComputedStyle(this.element).getPropertyValue('--popover-viewport-gap')) || 20;
    initPopover(this);
    initPopoverEvents(this);
  };

  // public methods
  Popover.prototype.togglePopover = function(bool, moveFocus) {
    togglePopover(this, bool, moveFocus);
  };

  Popover.prototype.checkPopoverClick = function(target) {
    checkPopoverClick(this, target);
  };

  Popover.prototype.checkPopoverFocus = function() {
    checkPopoverFocus(this);
  };

  // private methods
  function getPositionTarget(popover) {
    // position tooltip relative to a specified element - if provided
    var positionTargetSelector = popover.element.getAttribute('data-position-target');
    if(!positionTargetSelector) return false;
    var positionTarget = document.querySelector(positionTargetSelector);
    return positionTarget;
  };

  function initPopover(popover) {
    // init aria-labels
    for(var i = 0; i < popover.trigger.length; i++) {
      Util.setAttributes(popover.trigger[i], {'aria-expanded': 'false', 'aria-haspopup': 'true'});
    }
  };
  
  function initPopoverEvents(popover) {
    for(var i = 0; i < popover.trigger.length; i++) {(function(i){
      popover.trigger[i].addEventListener('click', function(event){
        event.preventDefault();
        // if the popover had been previously opened by another trigger element -> close it first and reopen in the right position
        if(Util.hasClass(popover.element, popover.popoverVisibleClass) && popover.selectedTrigger !=  popover.trigger[i]) {
          togglePopover(popover, false, false); // close menu
        }
        // toggle popover
        popover.selectedTrigger = popover.trigger[i];
        togglePopover(popover, !Util.hasClass(popover.element, popover.popoverVisibleClass), true);
      });
    })(i);}
    
    // trap focus
    popover.element.addEventListener('keydown', function(event){
      if( event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab' ) {
        //trap focus inside popover
        trapFocus(popover, event);
      }
    });
  };
  
  function togglePopover(popover, bool, moveFocus) {
    // toggle popover visibility
    Util.toggleClass(popover.element, popover.popoverVisibleClass, bool);
    popover.popoverIsOpen = bool;
    if(bool) {
      popover.selectedTrigger.setAttribute('aria-expanded', 'true');
      getFocusableElements(popover);
      // move focus
      focusPopover(popover);
      popover.element.addEventListener("transitionend", function(event) {focusPopover(popover);}, {once: true});
      // position the popover element
      positionPopover(popover);
      // add class to popover trigger
      Util.addClass(popover.selectedTrigger, popover.selectedTriggerClass);
    } else if(popover.selectedTrigger) {
      popover.selectedTrigger.setAttribute('aria-expanded', 'false');
      if(moveFocus) Util.moveFocus(popover.selectedTrigger);
      // remove class from menu trigger
      Util.removeClass(popover.selectedTrigger, popover.selectedTriggerClass);
      popover.selectedTrigger = false;
    }
  };
  
  function focusPopover(popover) {
    if(popover.firstFocusable) {
      popover.firstFocusable.focus();
    } else {
      Util.moveFocus(popover.element);
    }
  };

  function positionPopover(popover) {
    // reset popover position
    resetPopoverStyle(popover);
    var selectedTriggerPosition = (popover.positionTarget) ? popover.positionTarget.getBoundingClientRect() : popover.selectedTrigger.getBoundingClientRect();
    
    var menuOnTop = (window.innerHeight - selectedTriggerPosition.bottom) < selectedTriggerPosition.top;
      
    var left = selectedTriggerPosition.left,
      right = (window.innerWidth - selectedTriggerPosition.right),
      isRight = (window.innerWidth < selectedTriggerPosition.left + popover.element.offsetWidth);

    var horizontal = isRight ? 'right: '+right+'px;' : 'left: '+left+'px;',
      vertical = menuOnTop
        ? 'bottom: '+(window.innerHeight - selectedTriggerPosition.top)+'px;'
        : 'top: '+selectedTriggerPosition.bottom+'px;';
    // check right position is correct -> otherwise set left to 0
    if( isRight && (right + popover.element.offsetWidth) > window.innerWidth) horizontal = 'left: '+ parseInt((window.innerWidth - popover.element.offsetWidth)/2)+'px;';
    // check if popover needs a max-height (user will scroll inside the popover)
    var maxHeight = menuOnTop ? selectedTriggerPosition.top - popover.viewportGap : window.innerHeight - selectedTriggerPosition.bottom - popover.viewportGap;

    var initialStyle = popover.element.getAttribute('style');
    if(!initialStyle) initialStyle = '';
    popover.element.setAttribute('style', initialStyle + horizontal + vertical +'max-height:'+Math.floor(maxHeight)+'px;');
  };
  
  function resetPopoverStyle(popover) {
    // remove popover inline style before appling new style
    popover.element.style.maxHeight = '';
    popover.element.style.top = '';
    popover.element.style.bottom = '';
    popover.element.style.left = '';
    popover.element.style.right = '';
  };

  function checkPopoverClick(popover, target) {
    // close popover when clicking outside it
    if(!popover.popoverIsOpen) return;
    if(!popover.element.contains(target) && !target.closest('[aria-controls="'+popover.elementId+'"]')) togglePopover(popover, false);
  };

  function checkPopoverFocus(popover) {
    // on Esc key -> close popover if open and move focus (if focus was inside popover)
    if(!popover.popoverIsOpen) return;
    var popoverParent = document.activeElement.closest('.js-popover');
    togglePopover(popover, false, popoverParent);
  };
  
  function getFocusableElements(popover) {
    //get all focusable elements inside the popover
    var allFocusable = popover.element.querySelectorAll(focusableElString);
    getFirstVisible(popover, allFocusable);
    getLastVisible(popover, allFocusable);
  };

  function getFirstVisible(popover, elements) {
    //get first visible focusable element inside the popover
    for(var i = 0; i < elements.length; i++) {
      if( isVisible(elements[i]) ) {
        popover.firstFocusable = elements[i];
        break;
      }
    }
  };

  function getLastVisible(popover, elements) {
    //get last visible focusable element inside the popover
    for(var i = elements.length - 1; i >= 0; i--) {
      if( isVisible(elements[i]) ) {
        popover.lastFocusable = elements[i];
        break;
      }
    }
  };

  function trapFocus(popover, event) {
    if( popover.firstFocusable == document.activeElement && event.shiftKey) {
      //on Shift+Tab -> focus last focusable element when focus moves out of popover
      event.preventDefault();
      popover.lastFocusable.focus();
    }
    if( popover.lastFocusable == document.activeElement && !event.shiftKey) {
      //on Tab -> focus first focusable element when focus moves out of popover
      event.preventDefault();
      popover.firstFocusable.focus();
    }
  };
  
  function isVisible(element) {
    // check if element is visible
    return element.offsetWidth || element.offsetHeight || element.getClientRects().length;
  };

  window.Popover = Popover;

  //initialize the Popover objects
  var popovers = document.getElementsByClassName('js-popover');
  // generic focusable elements string selector
  var focusableElString = '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary';
  
  if( popovers.length > 0 ) {
    var popoversArray = [];
    var scrollingContainers = [];
    for( var i = 0; i < popovers.length; i++) {
      (function(i){
        popoversArray.push(new Popover(popovers[i]));
        var scrollableElement = popovers[i].getAttribute('data-scrollable-element');
        if(scrollableElement && !scrollingContainers.includes(scrollableElement)) scrollingContainers.push(scrollableElement);
      })(i);
    }

    // listen for key events
    window.addEventListener('keyup', function(event){
      if( event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape' ) {
        // close popover on 'Esc'
        popoversArray.forEach(function(element){
          element.checkPopoverFocus();
        });
      } 
    });
    // close popover when clicking outside it
    window.addEventListener('click', function(event){
      popoversArray.forEach(function(element){
        element.checkPopoverClick(event.target);
      });
    });
    // on resize -> close all popover elements
    window.addEventListener('resize', function(event){
      popoversArray.forEach(function(element){
        element.togglePopover(false, false);
      });
    });
    // on scroll -> close all popover elements
    window.addEventListener('scroll', function(event){
      popoversArray.forEach(function(element){
        if(element.popoverIsOpen) element.togglePopover(false, false);
      });
    });
    // take into account additinal scrollable containers
    for(var j = 0; j < scrollingContainers.length; j++) {
      var scrollingContainer = document.querySelector(scrollingContainers[j]);
      if(scrollingContainer) {
        scrollingContainer.addEventListener('scroll', function(event){
          popoversArray.forEach(function(element){
            if(element.popoverIsOpen) element.togglePopover(false, false);
          });
        });
      }
    }
  }
}());






// File#: _1_rating
// Usage: codyhouse.co/license
(function() {
  var Rating = function(element) {
    this.element = element;
    this.icons = this.element.getElementsByClassName('js-rating__control')[0];
    this.iconCode = this.icons.children[0].parentNode.innerHTML;
    this.initialRating = [];
    this.initialRatingElement = this.element.getElementsByClassName('js-rating__value')[0];
    this.ratingItems;
    this.selectedRatingItem;
    this.readOnly = Util.hasClass(this.element, 'js-rating--read-only');
    this.ratingMaxValue = 5;
    this.getInitialRating();
    this.initRatingHtml();
  };

  Rating.prototype.getInitialRating = function() {
    // get the rating of the product
    if(!this.initialRatingElement || !this.readOnly) {
      this.initialRating = [0, false];
      return;
    }

    var initialValue = Number(this.initialRatingElement.textContent);
    if(isNaN(initialValue)) {
      this.initialRating = [0, false];
      return;
    }

    var floorNumber = Math.floor(initialValue);
    this.initialRating[0] = (floorNumber < initialValue) ? floorNumber + 1 : floorNumber;
    this.initialRating[1] = (floorNumber < initialValue) ? Math.round((initialValue - floorNumber)*100) : false;
  };

  Rating.prototype.initRatingHtml = function() {
    //create the star elements
    var iconsList = this.readOnly ? '<ul>' : '<ul role="radiogroup">';
    
    //if initial rating value is zero -> add a 'zero' item 
    if(this.initialRating[0] == 0 && !this.initialRating[1]) {
      iconsList = iconsList+ '<li class="rating__item--zero rating__item--checked"></li>';
    }

    // create the stars list 
    for(var i = 0; i < this.ratingMaxValue; i++) { 
      iconsList = iconsList + this.getStarHtml(i);
    }
    iconsList = iconsList + '</ul>';

    // --default variation only - improve SR accessibility including a legend element 
    if(!this.readOnly) {
      var labelElement = this.element.getElementsByTagName('label');
      if(labelElement.length > 0) {
        var legendElement = '<legend class="'+labelElement[0].getAttribute('class')+'">'+labelElement[0].textContent+'</legend>';
        iconsList = '<fieldset>'+legendElement+iconsList+'</fieldset>';
        Util.addClass(labelElement[0], 'is-hidden');
      }
    }

    this.icons.innerHTML = iconsList;
    
    //init object properties
    this.ratingItems = this.icons.getElementsByClassName('js-rating__item');
    this.selectedRatingItem = this.icons.getElementsByClassName('rating__item--checked')[0];

    //show the stars
    Util.removeClass(this.icons, 'rating__control--is-hidden');

    //event listener
    !this.readOnly && this.initRatingEvents();// rating vote enabled
  };

  Rating.prototype.getStarHtml = function(index) {
    var listItem = '';
    var checked = (index+1 == this.initialRating[0]) ? true : false,
      itemClass = checked ? ' rating__item--checked' : '',
      tabIndex = (checked || (this.initialRating[0] == 0 && !this.initialRating[1] && index == 0) ) ? 0 : -1,
      showHalf = checked && this.initialRating[1] ? true : false,
      iconWidth = showHalf ? ' rating__item--half': '';
    if(!this.readOnly) {
      listItem = '<li class="js-rating__item'+itemClass+iconWidth+'" role="radio" aria-label="'+(index+1)+'" aria-checked="'+checked+'" tabindex="'+tabIndex+'"><div class="rating__icon">'+this.iconCode+'</div></li>';
    } else {
      var starInner = showHalf ? '<div class="rating__icon">'+this.iconCode+'</div><div class="rating__icon rating__icon--inactive">'+this.iconCode+'</div>': '<div class="rating__icon">'+this.iconCode+'</div>';
      listItem = '<li class="js-rating__item'+itemClass+iconWidth+'">'+starInner+'</li>';
    }
    return listItem;
  };

  Rating.prototype.initRatingEvents = function() {
    var self = this;

    //click on a star
    this.icons.addEventListener('click', function(event){
      var trigger = event.target.closest('.js-rating__item');
      self.resetSelectedIcon(trigger);
    });

    //keyboard navigation -> select new star
    this.icons.addEventListener('keydown', function(event){
      if( event.keyCode && (event.keyCode == 39 || event.keyCode == 40 ) || event.key && (event.key.toLowerCase() == 'arrowright' || event.key.toLowerCase() == 'arrowdown') ) {
        self.selectNewIcon('next'); //select next star on arrow right/down
      } else if(event.keyCode && (event.keyCode == 37 || event.keyCode == 38 ) || event.key && (event.key.toLowerCase() == 'arrowleft' || event.key.toLowerCase() == 'arrowup')) {
        self.selectNewIcon('prev'); //select prev star on arrow left/up
      } else if(event.keyCode && event.keyCode == 32 || event.key && event.key == ' ') {
        self.selectFocusIcon(); // select focused star on Space
      }
    });
  };

  Rating.prototype.selectNewIcon = function(direction) {
    var index = Util.getIndexInArray(this.ratingItems, this.selectedRatingItem);
    index = (direction == 'next') ? index + 1 : index - 1;
    if(index < 0) index = this.ratingItems.length - 1;
    if(index >= this.ratingItems.length) index = 0;	
    this.resetSelectedIcon(this.ratingItems[index]);
    this.ratingItems[index].focus();
  };

  Rating.prototype.selectFocusIcon = function(direction) {
    this.resetSelectedIcon(document.activeElement);
  };

  Rating.prototype.resetSelectedIcon = function(trigger) {
    if(!trigger) return;
    Util.removeClass(this.selectedRatingItem, 'rating__item--checked');
    Util.setAttributes(this.selectedRatingItem, {'aria-checked': false, 'tabindex': -1});
    Util.addClass(trigger, 'rating__item--checked');
    Util.setAttributes(trigger, {'aria-checked': true, 'tabindex': 0});
    this.selectedRatingItem = trigger; 
    // update select input value
    var select = this.element.getElementsByTagName('select');
    if(select.length > 0) {
      select[0].value = trigger.getAttribute('aria-label');
    }
  };
  
  //initialize the Rating objects
  var ratings = document.getElementsByClassName('js-rating');
  if( ratings.length > 0 ) {
    for( var i = 0; i < ratings.length; i++) {
      (function(i){new Rating(ratings[i]);})(i);
    }
  };
}());



// File#: _1_accordion ============================================================================
// Usage: codyhouse.co/license 
(function() {
var Accordion = function(element) {
  this.element = element;
  this.items = Util.getChildrenByClassName(this.element, 'js-accordion__item');
  this.version = this.element.getAttribute('data-version') ? '-'+this.element.getAttribute('data-version') : '';
  this.showClass = 'accordion'+this.version+'__item--is-open';
  this.animateHeight = (this.element.getAttribute('data-animation') == 'on');
  this.multiItems = !(this.element.getAttribute('data-multi-items') == 'off'); 
  this.initAccordion();
};

Accordion.prototype.initAccordion = function() {
  //set initial aria attributes
  for( var i = 0; i < this.items.length; i++) {
    var button = this.items[i].getElementsByTagName('button')[0],
      content = this.items[i].getElementsByClassName('js-accordion__panel')[0],
      isOpen = Util.hasClass(this.items[i], this.showClass) ? 'true' : 'false';
    Util.setAttributes(button, {'aria-expanded': isOpen, 'aria-controls': 'accordion-content-'+i, 'id': 'accordion-header-'+i});
    Util.addClass(button, 'js-accordion__trigger');
    Util.setAttributes(content, {'aria-labelledby': 'accordion-header-'+i, 'id': 'accordion-content-'+i});
  }

  //listen for Accordion events
  this.initAccordionEvents();
};

Accordion.prototype.initAccordionEvents = function() {
  var self = this;

  this.element.addEventListener('click', function(event) {
    var trigger = event.target.closest('.js-accordion__trigger');
    //check index to make sure the click didn't happen inside a children accordion
    if( trigger && Util.getIndexInArray(self.items, trigger.parentElement) >= 0) self.triggerAccordion(trigger);
  });
};

Accordion.prototype.triggerAccordion = function(trigger) {
  var self = this;
  var bool = (trigger.getAttribute('aria-expanded') === 'true');

  this.animateAccordion(trigger, bool);
};

Accordion.prototype.animateAccordion = function(trigger, bool) {
  var self = this;
  var item = trigger.closest('.js-accordion__item'),
    content = item.getElementsByClassName('js-accordion__panel')[0],
    ariaValue = bool ? 'false' : 'true';

  if(!bool) Util.addClass(item, this.showClass);
  trigger.setAttribute('aria-expanded', ariaValue);
  self.resetContentVisibility(item, content, bool);

  if( !this.multiItems && !bool) this.closeSiblings(item);
};

Accordion.prototype.resetContentVisibility = function(item, content, bool) {
  Util.toggleClass(item, this.showClass, !bool);
  content.removeAttribute("style");
  if(bool && !this.multiItems) { // accordion item has been closed -> check if there's one open to move inside viewport 
    this.moveContent();
  }
};

Accordion.prototype.closeSiblings = function(item) {
  //if only one accordion can be open -> search if there's another one open
  var index = Util.getIndexInArray(this.items, item);
  for( var i = 0; i < this.items.length; i++) {
    if(Util.hasClass(this.items[i], this.showClass) && i != index) {
      this.animateAccordion(this.items[i].getElementsByClassName('js-accordion__trigger')[0], true);
      return false;
    }
  }
};

Accordion.prototype.moveContent = function() { // make sure title of the accordion just opened is inside the viewport
  var openAccordion = this.element.getElementsByClassName(this.showClass);
  if(openAccordion.length == 0) return;
  var boundingRect = openAccordion[0].getBoundingClientRect();
  if(boundingRect.top < 0 || boundingRect.top > window.innerHeight) {
    var windowScrollTop = window.scrollY || document.documentElement.scrollTop;
    window.scrollTo(0, boundingRect.top + windowScrollTop);
  }
};

//initialize the Accordion objects
var accordions = document.getElementsByClassName('js-accordion');
if( accordions.length > 0 ) {
  for( var i = 0; i < accordions.length; i++) {
    (function(i){new Accordion(accordions[i]);})(i);
  }
}
}());


// File#: _1_modal-window
// Usage: codyhouse.co/license
(function() {
  var Modal = function(element) {
    this.element = element;
    this.triggers = document.querySelectorAll('[aria-controls="'+this.element.getAttribute('id')+'"]');
    this.firstFocusable = null;
    this.lastFocusable = null;
    this.moveFocusEl = null; // focus will be moved to this element when modal is open
    this.modalFocus = this.element.getAttribute('data-modal-first-focus') ? this.element.querySelector(this.element.getAttribute('data-modal-first-focus')) : null;
    this.selectedTrigger = null;
    this.showClass = "modal--is-visible";
    this.initModal();
  };

  Modal.prototype.initModal = function() {
    var self = this;
    //open modal when clicking on trigger buttons
    if ( this.triggers ) {
      for(var i = 0; i < this.triggers.length; i++) {
        this.triggers[i].addEventListener('click', function(event) {
          event.preventDefault();
          if(Util.hasClass(self.element, self.showClass)) {
            self.closeModal();
            return;
          }
          self.selectedTrigger = event.target;
          self.showModal();
          self.initModalEvents();
        });
      }
    }

    // listen to the openModal event -> open modal without a trigger button
    this.element.addEventListener('openModal', function(event){
      if(event.detail) self.selectedTrigger = event.detail;
      self.showModal();
      self.initModalEvents();
    });

    // listen to the closeModal event -> close modal without a trigger button
    this.element.addEventListener('closeModal', function(event){
      if(event.detail) self.selectedTrigger = event.detail;
      self.closeModal();
    });

    // if modal is open by default -> initialise modal events
    if(Util.hasClass(this.element, this.showClass)) this.initModalEvents();
  };

  Modal.prototype.showModal = function() {
    var self = this;
    Util.addClass(this.element, this.showClass);
    this.getFocusableElements();
    this.moveFocusEl.focus();
    // wait for the end of transitions before moving focus
    this.element.addEventListener("transitionend", function cb(event) {
      self.moveFocusEl.focus();
      self.element.removeEventListener("transitionend", cb);
    });
    this.emitModalEvents('modalIsOpen');
  };

  Modal.prototype.closeModal = function() {
    if(!Util.hasClass(this.element, this.showClass)) return;
    Util.removeClass(this.element, this.showClass);
    this.firstFocusable = null;
    this.lastFocusable = null;
    this.moveFocusEl = null;
    if(this.selectedTrigger) this.selectedTrigger.focus();
    //remove listeners
    this.cancelModalEvents();
    this.emitModalEvents('modalIsClose');
  };

  Modal.prototype.initModalEvents = function() {
    //add event listeners
    this.element.addEventListener('keydown', this);
    this.element.addEventListener('click', this);
  };

  Modal.prototype.cancelModalEvents = function() {
    //remove event listeners
    this.element.removeEventListener('keydown', this);
    this.element.removeEventListener('click', this);
  };

  Modal.prototype.handleEvent = function (event) {
    switch(event.type) {
      case 'click': {
        this.initClick(event);
      }
      case 'keydown': {
        this.initKeyDown(event);
      }
    }
  };

  Modal.prototype.initKeyDown = function(event) {
    if( event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab' ) {
      //trap focus inside modal
      this.trapFocus(event);
    } else if( (event.keyCode && event.keyCode == 13 || event.key && event.key == 'Enter') && event.target.closest('.js-modal__close')) {
      event.preventDefault();
      this.closeModal(); // close modal when pressing Enter on close button
    }	
  };

  Modal.prototype.initClick = function(event) {
    //close modal when clicking on close button or modal bg layer 
    if( !event.target.closest('.js-modal__close') && !Util.hasClass(event.target, 'js-modal') ) return;
    event.preventDefault();
    this.closeModal();
  };

  Modal.prototype.trapFocus = function(event) {
    if( this.firstFocusable == document.activeElement && event.shiftKey) {
      //on Shift+Tab -> focus last focusable element when focus moves out of modal
      event.preventDefault();
      this.lastFocusable.focus();
    }
    if( this.lastFocusable == document.activeElement && !event.shiftKey) {
      //on Tab -> focus first focusable element when focus moves out of modal
      event.preventDefault();
      this.firstFocusable.focus();
    }
  }

  Modal.prototype.getFocusableElements = function() {
    //get all focusable elements inside the modal
    var allFocusable = this.element.querySelectorAll(focusableElString);
    this.getFirstVisible(allFocusable);
    this.getLastVisible(allFocusable);
    this.getFirstFocusable();
  };

  Modal.prototype.getFirstVisible = function(elements) {
    //get first visible focusable element inside the modal
    for(var i = 0; i < elements.length; i++) {
      if( isVisible(elements[i]) ) {
        this.firstFocusable = elements[i];
        break;
      }
    }
  };

  Modal.prototype.getLastVisible = function(elements) {
    //get last visible focusable element inside the modal
    for(var i = elements.length - 1; i >= 0; i--) {
      if( isVisible(elements[i]) ) {
        this.lastFocusable = elements[i];
        break;
      }
    }
  };

  Modal.prototype.getFirstFocusable = function() {
    if(!this.modalFocus || !Element.prototype.matches) {
      this.moveFocusEl = this.firstFocusable;
      return;
    }
    var containerIsFocusable = this.modalFocus.matches(focusableElString);
    if(containerIsFocusable) {
      this.moveFocusEl = this.modalFocus;
    } else {
      this.moveFocusEl = false;
      var elements = this.modalFocus.querySelectorAll(focusableElString);
      for(var i = 0; i < elements.length; i++) {
        if( isVisible(elements[i]) ) {
          this.moveFocusEl = elements[i];
          break;
        }
      }
      if(!this.moveFocusEl) this.moveFocusEl = this.firstFocusable;
    }
  };

  Modal.prototype.emitModalEvents = function(eventName) {
    var event = new CustomEvent(eventName, {detail: this.selectedTrigger});
    this.element.dispatchEvent(event);
  };

  function isVisible(element) {
    return element.offsetWidth || element.offsetHeight || element.getClientRects().length;
  };

  //initialize the Modal objects
  var modals = document.getElementsByClassName('js-modal');
  // generic focusable elements string selector
  var focusableElString = '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary';
  if( modals.length > 0 ) {
    var modalArrays = [];
    for( var i = 0; i < modals.length; i++) {
      (function(i){modalArrays.push(new Modal(modals[i]));})(i);
    }

    window.addEventListener('keydown', function(event){ //close modal window on esc
      if(event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape') {
        for( var i = 0; i < modalArrays.length; i++) {
          (function(i){modalArrays[i].closeModal();})(i);
        };
      }
    });
  }
}());




// File#: _1_adaptive-navigation ============================================================================
// Usage: codyhouse.co/license
(function() {
var AdaptNav = function(element) {
  this.element = element;
  this.list = this.element.getElementsByClassName('js-adapt-nav__list')[0];
  this.items = this.element.getElementsByClassName('js-adapt-nav__item');
  this.moreBtn = this.element.getElementsByClassName('js-adapt-nav__item--more')[0];
  this.dropdown = this.moreBtn.getElementsByTagName('ul')[0];
  this.dropdownItems = this.dropdown.getElementsByTagName('a');
  this.dropdownClass = 'adapt-nav__dropdown--is-visible';
  this.resizing = false;
  // check if items already outrun nav
  this.outrunIndex = this.items.length;
  initAdaptNav(this);
};

function initAdaptNav(nav) {
  nav.resizing = true;
  resetOutrun(nav, '', true); // initially hide all elements
  resetAdaptNav.bind(nav)(); // reset navigation based on available space

  // listen to resize
  window.addEventListener('resize', function(event){
    if(nav.resizing) return;
    nav.resizing = true;
    window.requestAnimationFrame(resetAdaptNav.bind(nav));
  });

  // wait for font to be loaded
  if(document.fonts) {
    document.fonts.ready.then(function() {
      if(nav.resizing) return;
      nav.resizing = true;
      window.requestAnimationFrame(resetAdaptNav.bind(nav));
    });
  }

  /* dropdown behaviour */
  // init aria-labels
  Util.setAttributes(nav.moreBtn, {'aria-expanded': 'false', 'aria-haspopup': 'true', 'aria-controls': nav.dropdown.getAttribute('id')});
  
  // toggle dropdown on click
  nav.moreBtn.addEventListener('click', function(event){
    if( nav.dropdown.contains(event.target) ) return;
    event.preventDefault();
    toggleMoreDropdown(nav, !Util.hasClass(nav.dropdown, nav.dropdownClass), true);
  });

  // keyboard events 
  nav.dropdown.addEventListener('keydown', function(event) {
    // use up/down arrow to navigate list of menu items
    if( (event.keyCode && event.keyCode == 40) || (event.key && event.key.toLowerCase() == 'arrowdown') ) {
      navigateItems(nav, event, 'next');
    } else if( (event.keyCode && event.keyCode == 38) || (event.key && event.key.toLowerCase() == 'arrowup') ) {
      navigateItems(nav, event, 'prev');
    }
  });

  window.addEventListener('keyup', function(event){
    if( event.keyCode && event.keyCode == 9 || event.key && event.key.toLowerCase() == 'tab' ) { //close dropdown if focus is outside dropdown element
      if (!nav.moreBtn.contains(document.activeElement)) toggleMoreDropdown(nav, false, false);
    } else if( event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape' ) {// close menu on 'Esc'
      toggleMoreDropdown(nav, false, false);
    } 
  });
  
  // close menu when clicking outside it
  window.addEventListener('click', function(event){
    if( !nav.moreBtn.contains(event.target)) toggleMoreDropdown(nav, false);
  });
};

function resetAdaptNav() { // reset nav appearance
  var totalWidth = getListWidth(this.list),
    moreWidth = getFullWidth(this.moreBtn),
    maxPosition = totalWidth - moreWidth,
    cloneList = '',
    hideAll = false;

  cloneList = resetOutrun(this, cloneList, false);
  // loop through items -> create clone (if required) and append to dropdown
  for(var i = 0; i < this.outrunIndex; i++) {
    if( Util.hasClass(this.items[i], 'is-hidden')) {
      Util.addClass(this.items[i], 'adapt-nav__item--hidden');
      Util.removeClass(this.items[i], 'is-hidden');
    }
    var right = this.items[i].offsetWidth + this.items[i].offsetLeft + parseFloat(window.getComputedStyle(this.items[i]).getPropertyValue("margin-right"));
    if(right >= maxPosition || hideAll) {
      var clone = this.items[i].cloneNode(true);
      cloneList = cloneList + modifyClone(clone);
      Util.addClass(this.items[i], 'is-hidden');
      hideAll = true;
    } else {
      Util.removeClass(this.items[i], 'is-hidden');
    }
    Util.removeClass(this.items[i], 'adapt-nav__item--hidden');
  }

  Util.toggleClass(this.moreBtn, 'adapt-nav__item--hidden', (cloneList == ''));
  this.dropdown.innerHTML = cloneList;
  Util.addClass(this.element, 'adapt-nav--is-visible');
  this.outrunIndex = this.items.length;
  this.resizing = false;
};

function resetOutrun(nav, cloneList, bool) {
  if(nav.items[0].offsetLeft < 0 || (bool && nav.outrunIndex > 1)) {
    nav.outrunIndex = nav.outrunIndex - 1;
    var clone = nav.items[nav.outrunIndex].cloneNode(true);
    Util.addClass(nav.items[nav.outrunIndex], 'is-hidden');
    cloneList = modifyClone(clone) + cloneList;
    return resetOutrun(nav, cloneList, bool);
  } else {
    if(bool) nav.outrunIndex = nav.items.length;
    return cloneList;
  }
};

function getListWidth(list) { // get total width of container minus right padding
  var style = window.getComputedStyle(list);
  return parseFloat(list.getBoundingClientRect().width) - parseFloat(style.getPropertyValue("padding-right"));
};

function getFullWidth(item) { // get width of 'More Links' button
  return parseFloat(window.getComputedStyle(item).getPropertyValue("width"));
};

function toggleMoreDropdown(nav, bool, moveFocus) { // toggle menu visibility
  Util.toggleClass(nav.dropdown, nav.dropdownClass, bool);
  if(bool) {
    nav.moreBtn.setAttribute('aria-expanded', 'true');
    Util.moveFocus(nav.dropdownItems[0]);
    nav.dropdown.addEventListener("transitionend", function(event) {Util.moveFocus(nav.dropdownItems[0]);}, {once: true});
    placeDropdown(nav);
  } else {
    nav.moreBtn.setAttribute('aria-expanded', 'false');
    if(moveFocus) Util.moveFocus(nav.moreBtn.getElementsByTagName('button')[0]);
    nav.dropdown.style.right = '';
  }
};

function placeDropdown(nav) { // make sure dropdown is visible the viewport
  var dropdownLeft = nav.dropdown.getBoundingClientRect().left;
  if(dropdownLeft < 0) nav.dropdown.style.right = (dropdownLeft - 4)+'px';
};

function navigateItems(nav, event, direction) { // navigate through dropdown items
  event.preventDefault();
  var index = Util.getIndexInArray(nav.dropdownItems, event.target),
    nextIndex = direction == 'next' ? index + 1 : index - 1;
  if(nextIndex < 0) nextIndex = nav.dropdownItems.length - 1;
  if(nextIndex > nav.dropdownItems.length - 1) nextIndex = 0;
  Util.moveFocus(nav.dropdownItems[nextIndex]);
};

function modifyClone(clone) { // assign new classes to cloned elements inside the dropdown
  Util.addClass(clone, 'adapt-nav__dropdown-item');
  Util.removeClass(clone, 'js-adapt-nav__item is-hidden adapt-nav__item--hidden adapt-nav__item');
  var link = clone.getElementsByClassName('adapt-nav__link');
  if(link.length > 0) {
    Util.addClass(link[0], 'adapt-nav__dropdown-link js-tab-focus');
    link[0].style.outline = 'none';
    Util.removeClass(link[0], 'adapt-nav__link');
  }
  return clone.outerHTML;
};

//initialize the AdaptNav objects
var adaptNavs = document.getElementsByClassName('js-adapt-nav'),
  flexSupported = Util.cssSupports('align-items', 'stretch');
if( adaptNavs.length > 0) {
  for( var i = 0; i < adaptNavs.length; i++) {(function(i){
    if(flexSupported) new AdaptNav(adaptNavs[i]);
    else Util.addClass(adaptNavs[i], 'adapt-nav--is-visible');
  })(i);}
}
}());


// File#: _1_reveal-effects ============================================================================
// Usage: codyhouse.co/license
(function() {
var fxElements = document.getElementsByClassName('reveal-fx');
var intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype);
if(fxElements.length > 0) {
  // deactivate effect if Reduced Motion is enabled
  if (Util.osHasReducedMotion() || !intersectionObserverSupported) {
    fxRemoveClasses();
    return;
  }
  //on small devices, do not animate elements -> reveal all
  if( fxDisabled(fxElements[0]) ) {
    fxRevealAll();
    return;
  }

  var fxRevealDelta = 200; // amount (in pixel) the element needs to enter the viewport to be revealed - if not custom value (data-reveal-fx-delta)
  
  var viewportHeight = window.innerHeight,
    fxChecking = false,
    fxRevealedItems = [],
    fxElementDelays = fxGetDelays(), //elements animation delay
    fxElementDeltas = fxGetDeltas(); // amount (in px) the element needs enter the viewport to be revealed (default value is fxRevealDelta) 
  
  
  // add event listeners
  window.addEventListener('load', fxReveal);
  window.addEventListener('resize', fxResize);

  // observe reveal elements
  var observer = [];
  initObserver();

  function initObserver() {
    for(var i = 0; i < fxElements.length; i++) {
      observer[i] = new IntersectionObserver(
        function(entries, observer) { 
          if(entries[0].isIntersecting) {
            fxRevealItemObserver(entries[0].target);
            observer.unobserve(entries[0].target);
          }
        }, 
        {rootMargin: "0px 0px -"+fxElementDeltas[i]+"px 0px"}
      );

      observer[i].observe(fxElements[i]);
    }
  };

  function fxRevealAll() { // reveal all elements - small devices
    for(var i = 0; i < fxElements.length; i++) {
      Util.addClass(fxElements[i], 'reveal-fx--is-visible');
    }
  };

  function fxResize() { // on resize - check new window height and reveal visible elements
    if(fxChecking) return;
    fxChecking = true;
    (!window.requestAnimationFrame) ? setTimeout(function(){fxReset();}, 250) : window.requestAnimationFrame(fxReset);
  };

  function fxReset() {
    viewportHeight = window.innerHeight;
    fxReveal();
  };

  function fxReveal() { // reveal visible elements
    for(var i = 0; i < fxElements.length; i++) {(function(i){
      if(fxRevealedItems.indexOf(i) != -1 ) return; //element has already been revelead
      if(fxElementIsVisible(fxElements[i], i)) {
        fxRevealItem(i);
        fxRevealedItems.push(i);
      }})(i); 
    }
    fxResetEvents(); 
    fxChecking = false;
  };

  function fxRevealItem(index) {
    if(fxElementDelays[index] && fxElementDelays[index] != 0) {
      // wait before revealing element if a delay was added
      setTimeout(function(){
        Util.addClass(fxElements[index], 'reveal-fx--is-visible');
      }, fxElementDelays[index]);
    } else {
      Util.addClass(fxElements[index], 'reveal-fx--is-visible');
    }
  };

  function fxRevealItemObserver(item) {
    var index = Util.getIndexInArray(fxElements, item);
    if(fxRevealedItems.indexOf(index) != -1 ) return; //element has already been revelead
    fxRevealItem(index);
    fxRevealedItems.push(index);
    fxResetEvents(); 
    fxChecking = false;
  };

  function fxGetDelays() { // get anmation delays
    var delays = [];
    for(var i = 0; i < fxElements.length; i++) {
      delays.push( fxElements[i].getAttribute('data-reveal-fx-delay') ? parseInt(fxElements[i].getAttribute('data-reveal-fx-delay')) : 0);
    }
    return delays;
  };

  function fxGetDeltas() { // get reveal delta
    var deltas = [];
    for(var i = 0; i < fxElements.length; i++) {
      deltas.push( fxElements[i].getAttribute('data-reveal-fx-delta') ? parseInt(fxElements[i].getAttribute('data-reveal-fx-delta')) : fxRevealDelta);
    }
    return deltas;
  };

  function fxDisabled(element) { // check if elements need to be animated - no animation on small devices
    return !(window.getComputedStyle(element, '::before').getPropertyValue('content').replace(/'|"/g, "") == 'reveal-fx');
  };

  function fxElementIsVisible(element, i) { // element is inside viewport
    return (fxGetElementPosition(element) <= viewportHeight - fxElementDeltas[i]);
  };

  function fxGetElementPosition(element) { // get top position of element
    return element.getBoundingClientRect().top;
  };

  function fxResetEvents() { 
    if(fxElements.length > fxRevealedItems.length) return;
    // remove event listeners if all elements have been revealed
    window.removeEventListener('load', fxReveal);
    window.removeEventListener('resize', fxResize);
  };

  function fxRemoveClasses() {
    // Reduced Motion on or Intersection Observer not supported
    while(fxElements[0]) {
      // remove all classes starting with 'reveal-fx--'
      var classes = fxElements[0].className.split(" ").filter(function(c) {
        return c.lastIndexOf('reveal-fx--', 0) !== 0;
      });
      fxElements[0].className = classes.join(" ").trim();
      Util.removeClass(fxElements[0], 'reveal-fx');
    }
  };
}
}());


// File#: _1_drawer
// Usage: codyhouse.co/license
(function() {
  var Drawer = function(element) {
    this.element = element;
    this.content = document.getElementsByClassName('js-drawer__body')[0];
    this.triggers = document.querySelectorAll('[aria-controls="'+this.element.getAttribute('id')+'"]');
    this.firstFocusable = null;
    this.lastFocusable = null;
    this.selectedTrigger = null;
    this.isModal = Util.hasClass(this.element, 'js-drawer--modal');
    this.showClass = "drawer--is-visible";
    this.initDrawer();
  };

  Drawer.prototype.initDrawer = function() {
    var self = this;
    //open drawer when clicking on trigger buttons
    if ( this.triggers ) {
      for(var i = 0; i < this.triggers.length; i++) {
        this.triggers[i].addEventListener('click', function(event) {
          event.preventDefault();
          if(Util.hasClass(self.element, self.showClass)) {
            self.closeDrawer(event.target);
            return;
          }
          self.selectedTrigger = event.target;
          self.showDrawer();
          self.initDrawerEvents();
        });
      }
    }

    // if drawer is already open -> we should initialize the drawer events
    if(Util.hasClass(this.element, this.showClass)) this.initDrawerEvents();
  };

  Drawer.prototype.showDrawer = function() {
    var self = this;
    this.content.scrollTop = 0;
    Util.addClass(this.element, this.showClass);
    this.getFocusableElements();
    Util.moveFocus(this.element);
    // wait for the end of transitions before moving focus
    this.element.addEventListener("transitionend", function cb(event) {
      Util.moveFocus(self.element);
      self.element.removeEventListener("transitionend", cb);
    });
    this.emitDrawerEvents('drawerIsOpen', this.selectedTrigger);
  };

  Drawer.prototype.closeDrawer = function(target) {
    Util.removeClass(this.element, this.showClass);
    this.firstFocusable = null;
    this.lastFocusable = null;
    if(this.selectedTrigger) this.selectedTrigger.focus();
    //remove listeners
    this.cancelDrawerEvents();
    this.emitDrawerEvents('drawerIsClose', target);
  };

  Drawer.prototype.initDrawerEvents = function() {
    //add event listeners
    this.element.addEventListener('keydown', this);
    this.element.addEventListener('click', this);
  };

  Drawer.prototype.cancelDrawerEvents = function() {
    //remove event listeners
    this.element.removeEventListener('keydown', this);
    this.element.removeEventListener('click', this);
  };

  Drawer.prototype.handleEvent = function (event) {
    switch(event.type) {
      case 'click': {
        this.initClick(event);
      }
      case 'keydown': {
        this.initKeyDown(event);
      }
    }
  };

  Drawer.prototype.initKeyDown = function(event) {
    if( event.keyCode && event.keyCode == 27 || event.key && event.key == 'Escape' ) {
      //close drawer window on esc
      this.closeDrawer(false);
    } else if( this.isModal && (event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab' )) {
      //trap focus inside drawer
      this.trapFocus(event);
    }
  };

  Drawer.prototype.initClick = function(event) {
    //close drawer when clicking on close button or drawer bg layer 
    if( !event.target.closest('.js-drawer__close') && !Util.hasClass(event.target, 'js-drawer') ) return;
    event.preventDefault();
    this.closeDrawer(event.target);
  };

  Drawer.prototype.trapFocus = function(event) {
    if( this.firstFocusable == document.activeElement && event.shiftKey) {
      //on Shift+Tab -> focus last focusable element when focus moves out of drawer
      event.preventDefault();
      this.lastFocusable.focus();
    }
    if( this.lastFocusable == document.activeElement && !event.shiftKey) {
      //on Tab -> focus first focusable element when focus moves out of drawer
      event.preventDefault();
      this.firstFocusable.focus();
    }
  }

  Drawer.prototype.getFocusableElements = function() {
    //get all focusable elements inside the drawer
    var allFocusable = this.element.querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary');
    this.getFirstVisible(allFocusable);
    this.getLastVisible(allFocusable);
  };

  Drawer.prototype.getFirstVisible = function(elements) {
    //get first visible focusable element inside the drawer
    for(var i = 0; i < elements.length; i++) {
      if( elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length ) {
        this.firstFocusable = elements[i];
        return true;
      }
    }
  };

  Drawer.prototype.getLastVisible = function(elements) {
    //get last visible focusable element inside the drawer
    for(var i = elements.length - 1; i >= 0; i--) {
      if( elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length ) {
        this.lastFocusable = elements[i];
        return true;
      }
    }
  };

  Drawer.prototype.emitDrawerEvents = function(eventName, target) {
    var event = new CustomEvent(eventName, {detail: target});
    this.element.dispatchEvent(event);
  };

  //initialize the Drawer objects
  var drawer = document.getElementsByClassName('js-drawer');
  if( drawer.length > 0 ) {
    for( var i = 0; i < drawer.length; i++) {
      (function(i){new Drawer(drawer[i]);})(i);
    }
  }
}());



// File#: _1_alert
// Usage: codyhouse.co/license
(function() {
  var alertClose = document.getElementsByClassName('js-alert__close-btn');
  if( alertClose.length > 0 ) {
    for( var i = 0; i < alertClose.length; i++) {
      (function(i){initAlertEvent(alertClose[i]);})(i);
    }
  };
}());

function initAlertEvent(element) {
  element.addEventListener('click', function(event){
    event.preventDefault();
    Util.removeClass(element.closest('.js-alert'), 'alert--is-visible');
  });
};



// File#: _1_custom-select
// Usage: codyhouse.co/license
(function() {
  // NOTE: you need the js code only when using the --custom-dropdown variation of the Custom Select component. Default version does nor require JS.
  
  var CustomSelect = function(element) {
    this.element = element;
    this.select = this.element.getElementsByTagName('select')[0];
    this.optGroups = this.select.getElementsByTagName('optgroup');
    this.options = this.select.getElementsByTagName('option');
    this.selectedOption = getSelectedOptionText(this);
    this.selectId = this.select.getAttribute('id');
    this.trigger = false;
    this.dropdown = false;
    this.customOptions = false;
    this.arrowIcon = this.element.getElementsByTagName('svg');
    this.label = document.querySelector('[for="'+this.selectId+'"]');

    this.optionIndex = 0; // used while building the custom dropdown

    initCustomSelect(this); // init markup
    initCustomSelectEvents(this); // init event listeners
  };
  
  function initCustomSelect(select) {
    // create the HTML for the custom dropdown element
    select.element.insertAdjacentHTML('beforeend', initButtonSelect(select) + initListSelect(select));
    
    // save custom elements
    select.dropdown = select.element.getElementsByClassName('js-select__dropdown')[0];
    select.trigger = select.element.getElementsByClassName('js-select__button')[0];
    select.customOptions = select.dropdown.getElementsByClassName('js-select__item');
    
    // hide default select
    Util.addClass(select.select, 'is-hidden');
    if(select.arrowIcon.length > 0 ) select.arrowIcon[0].style.display = 'none';

    // place dropdown
    placeDropdown(select);
  };

  function initCustomSelectEvents(select) {
    // option selection in dropdown
    initSelection(select);

    // click events
    select.trigger.addEventListener('click', function(){
      toggleCustomSelect(select, false);
    });
    if(select.label) {
      // move focus to custom trigger when clicking on <select> label
      select.label.addEventListener('click', function(){
        Util.moveFocus(select.trigger);
      });
    }
    // keyboard navigation
    select.dropdown.addEventListener('keydown', function(event){
      if(event.keyCode && event.keyCode == 38 || event.key && event.key.toLowerCase() == 'arrowup') {
        keyboardCustomSelect(select, 'prev', event);
      } else if(event.keyCode && event.keyCode == 40 || event.key && event.key.toLowerCase() == 'arrowdown') {
        keyboardCustomSelect(select, 'next', event);
      }
    });
    // native <select> element has been updated -> update custom select as well
    select.element.addEventListener('select-updated', function(event){
      resetCustomSelect(select);
    });
  };

  function toggleCustomSelect(select, bool) {
    var ariaExpanded;
    if(bool) {
      ariaExpanded = bool;
    } else {
      ariaExpanded = select.trigger.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
    }
    select.trigger.setAttribute('aria-expanded', ariaExpanded);
    if(ariaExpanded == 'true') {
      var selectedOption = getSelectedOption(select);
      Util.moveFocus(selectedOption); // fallback if transition is not supported
      select.dropdown.addEventListener('transitionend', function cb(){
        Util.moveFocus(selectedOption);
        select.dropdown.removeEventListener('transitionend', cb);
      });
      placeDropdown(select); // place dropdown based on available space
    }
  };

  function placeDropdown(select) {
    // remove placement classes to reset position
    Util.removeClass(select.dropdown, 'select__dropdown--right select__dropdown--up');
    var triggerBoundingRect = select.trigger.getBoundingClientRect();
    Util.toggleClass(select.dropdown, 'select__dropdown--right', (document.documentElement.clientWidth - 5 < triggerBoundingRect.left + select.dropdown.offsetWidth));
    // check if there's enough space up or down
    var moveUp = (window.innerHeight - triggerBoundingRect.bottom - 5) < triggerBoundingRect.top;
    Util.toggleClass(select.dropdown, 'select__dropdown--up', moveUp);
    // check if we need to set a max width
    var maxHeight = moveUp ? triggerBoundingRect.top - 20 : window.innerHeight - triggerBoundingRect.bottom - 20;
    // set max-height based on available space
    select.dropdown.setAttribute('style', 'max-height: '+maxHeight+'px; width: '+triggerBoundingRect.width+'px;');
  };

  function keyboardCustomSelect(select, direction, event) { // navigate custom dropdown with keyboard
    event.preventDefault();
    var index = Util.getIndexInArray(select.customOptions, document.activeElement);
    index = (direction == 'next') ? index + 1 : index - 1;
    if(index < 0) index = select.customOptions.length - 1;
    if(index >= select.customOptions.length) index = 0;
    Util.moveFocus(select.customOptions[index]);
  };

  function initSelection(select) { // option selection
    select.dropdown.addEventListener('click', function(event){
      var option = event.target.closest('.js-select__item');
      if(!option) return;
      selectOption(select, option);
    });
  };
  
  function selectOption(select, option) {
    if(option.hasAttribute('aria-selected') && option.getAttribute('aria-selected') == 'true') {
      // selecting the same option
      select.trigger.setAttribute('aria-expanded', 'false'); // hide dropdown
    } else { 
      var selectedOption = select.dropdown.querySelector('[aria-selected="true"]');
      if(selectedOption) selectedOption.setAttribute('aria-selected', 'false');
      option.setAttribute('aria-selected', 'true');
      select.trigger.getElementsByClassName('js-select__label')[0].textContent = option.textContent;
      select.trigger.setAttribute('aria-expanded', 'false');
      // new option has been selected -> update native <select> element _ arai-label of trigger <button>
      updateNativeSelect(select, option.getAttribute('data-index'));
      updateTriggerAria(select); 
    }
    // move focus back to trigger
    select.trigger.focus();
  };

  function updateNativeSelect(select, index) {
    select.select.selectedIndex = index;
    select.select.dispatchEvent(new CustomEvent('change', {bubbles: true})); // trigger change event
  };

  function updateTriggerAria(select) {
    select.trigger.setAttribute('aria-label', select.options[select.select.selectedIndex].innerHTML+', '+select.label.textContent);
  };

  function getSelectedOptionText(select) {// used to initialize the label of the custom select button
    var label = '';
    if('selectedIndex' in select.select) {
      label = select.options[select.select.selectedIndex].text;
    } else {
      label = select.select.querySelector('option[selected]').text;
    }
    return label;

  };
  
  function initButtonSelect(select) { // create the button element -> custom select trigger
    // check if we need to add custom classes to the button trigger
    var customClasses = select.element.getAttribute('data-trigger-class') ? ' '+select.element.getAttribute('data-trigger-class') : '';

    var label = select.options[select.select.selectedIndex].innerHTML+', '+select.label.textContent;
  
    var button = '<button type="button" class="js-select__button select__button'+customClasses+'" aria-label="'+label+'" aria-expanded="false" aria-controls="'+select.selectId+'-dropdown"><span aria-hidden="true" class="js-select__label select__label">'+select.selectedOption+'</span>';
    if(select.arrowIcon.length > 0 && select.arrowIcon[0].outerHTML) {
      var clone = select.arrowIcon[0].cloneNode(true);
      Util.removeClass(clone, 'select__icon');
      button = button +clone.outerHTML;
    }
    
    return button+'</button>';

  };

  function initListSelect(select) { // create custom select dropdown
    var list = '<div class="js-select__dropdown select__dropdown" aria-describedby="'+select.selectId+'-description" id="'+select.selectId+'-dropdown">';
    list = list + getSelectLabelSR(select);
    if(select.optGroups.length > 0) {
      for(var i = 0; i < select.optGroups.length; i++) {
        var optGroupList = select.optGroups[i].getElementsByTagName('option'),
          optGroupLabel = '<li><span class="select__item select__item--optgroup">'+select.optGroups[i].getAttribute('label')+'</span></li>';
        list = list + '<ul class="select__list" role="listbox">'+optGroupLabel+getOptionsList(select, optGroupList) + '</ul>';
      }
    } else {
      list = list + '<ul class="select__list" role="listbox">'+getOptionsList(select, select.options) + '</ul>';
    }
    return list;
  };

  function getSelectLabelSR(select) {
    if(select.label) {
      return '<p class="sr-only" id="'+select.selectId+'-description">'+select.label.textContent+'</p>'
    } else {
      return '';
    }
  };
  
  function resetCustomSelect(select) {
    // <select> element has been updated (using an external control) - update custom select
    var selectedOption = select.dropdown.querySelector('[aria-selected="true"]');
    if(selectedOption) selectedOption.setAttribute('aria-selected', 'false');
    var option = select.dropdown.querySelector('.js-select__item[data-index="'+select.select.selectedIndex+'"]');
    option.setAttribute('aria-selected', 'true');
    select.trigger.getElementsByClassName('js-select__label')[0].textContent = option.textContent;
    select.trigger.setAttribute('aria-expanded', 'false');
    updateTriggerAria(select); 
  };

  function getOptionsList(select, options) {
    var list = '';
    for(var i = 0; i < options.length; i++) {
      var selected = options[i].hasAttribute('selected') ? ' aria-selected="true"' : ' aria-selected="false"';
      list = list + '<li><button type="button" class="reset js-select__item select__item select__item--option" role="option" data-value="'+options[i].value+'" '+selected+' data-index="'+select.optionIndex+'">'+options[i].text+'</button></li>';
      select.optionIndex = select.optionIndex + 1;
    };
    return list;
  };

  function getSelectedOption(select) {
    var option = select.dropdown.querySelector('[aria-selected="true"]');
    if(option) return option;
    else return select.dropdown.getElementsByClassName('js-select__item')[0];
  };

  function moveFocusToSelectTrigger(select) {
    if(!document.activeElement.closest('.js-select')) return
    select.trigger.focus();
  };
  
  function checkCustomSelectClick(select, target) { // close select when clicking outside it
    if( !select.element.contains(target) ) toggleCustomSelect(select, 'false');
  };
  
  //initialize the CustomSelect objects
  var customSelect = document.getElementsByClassName('js-select');
  if( customSelect.length > 0 ) {
    var selectArray = [];
    for( var i = 0; i < customSelect.length; i++) {
      (function(i){selectArray.push(new CustomSelect(customSelect[i]));})(i);
    }

    // listen for key events
    window.addEventListener('keyup', function(event){
      if( event.keyCode && event.keyCode == 27 || event.key && event.key.toLowerCase() == 'escape' ) {
        // close custom select on 'Esc'
        selectArray.forEach(function(element){
          moveFocusToSelectTrigger(element); // if focus is within dropdown, move it to dropdown trigger
          toggleCustomSelect(element, 'false'); // close dropdown
        });
      } 
    });
    // close custom select when clicking outside it
    window.addEventListener('click', function(event){
      selectArray.forEach(function(element){
        checkCustomSelectClick(element, event.target);
      });
    });
  }
}());



// File#: _1_countup ============================================================================
// Usage: codyhouse.co/license
(function() {	
var CountUp = function(opts) {
  this.options = Util.extend(CountUp.defaults , opts);
  this.element = this.options.element;
  this.initialValue = parseFloat(this.options.initial);
  this.finalValue = parseFloat(this.element.textContent);
  this.intervalId;
  this.animationTriggered = false;
  // animation will run only on browsers supporting IntersectionObserver
  this.canAnimate = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype);
  initCountUp(this);
};

CountUp.prototype.reset = function() { // reset element to its initial value
  if(!this.canAnimate) return;
  window.cancelAnimationFrame(this.intervalId);
  this.element.textContent = this.initialValue;
};  

CountUp.prototype.restart = function() { // restart element animation
  countUpAnimate(this);
};

function initCountUp(countup) {
  if(!countup.canAnimate) { // IntersectionObserver not supported
    countUpShow(countup);
    return;
  }

  // reset countUp for SR
  initCountUpSr(countup);

  // listen for the element to enter the viewport -> start animation
  var observer = new IntersectionObserver(countupObserve.bind(countup), { threshold: [0, 0.1] });
  observer.observe(countup.element);

  // listen to events
  countup.element.addEventListener('countUpReset', function(){countup.reset();});
  countup.element.addEventListener('countUpRestart', function(){countup.restart();});
};

function countUpShow(countup) { // reveal countup after it has been initialized
  Util.addClass(countup.element.closest('.countup'), 'countup--is-visible');
};

function countupObserve(entries, observer) { // observe countup position -> start animation when inside viewport
  if(entries[0].intersectionRatio.toFixed(1) > 0 && !this.animationTriggered) {
    countUpAnimate(this);
  }
};

function countUpAnimate(countup) { // animate countup
  countup.element.textContent = countup.initialValue;
  countUpShow(countup);
  window.cancelAnimationFrame(countup.intervalId);
  var currentTime = null;

  function runCountUp(timestamp) {
    if (!currentTime) currentTime = timestamp;        
    var progress = timestamp - currentTime;
    if(progress > countup.options.duration) progress = countup.options.duration;
    var val = getValEaseOut(progress, countup.initialValue, countup.finalValue - countup.initialValue, countup.options.duration);
    countup.element.textContent = getCountUpValue(val, countup);
    if(progress < countup.options.duration) {
      countup.intervalId = window.requestAnimationFrame(runCountUp);
    } else {
      countUpComplete(countup);
    }
  };

  countup.intervalId = window.requestAnimationFrame(runCountUp);
};

function getCountUpValue(val, countup) { // reset new countup value to proper decimal places+separator
  if(countup.options.decimal) {val = parseFloat(val.toFixed(countup.options.decimal));}
  else {val = parseInt(val);}
  if(countup.options.separator) val = val.toLocaleString('en');
  return val;
}

function countUpComplete(countup) { // emit event when animation is over
  countup.element.dispatchEvent(new CustomEvent('countUpComplete'));
  countup.animationTriggered = true;
};

function initCountUpSr(countup) { // make sure countup is accessible
  // hide elements that will be animated to SR
  countup.element.setAttribute('aria-hidden', 'true');
  // create new element with visible final value - accessible to SR only
  var srValue = document.createElement('span');
  srValue.textContent = countup.finalValue;
  Util.addClass(srValue, 'sr-only');
  countup.element.parentNode.insertBefore(srValue, countup.element.nextSibling);
};

function getValEaseOut(t, b, c, d) { 
  t /= d;
  return -c * t*(t-2) + b;
};

CountUp.defaults = {
  element : '',
  separator : false,
  duration: 3000,
  decimal: false,
  initial: 0
};

window.CountUp = CountUp;

//initialize the CountUp objects
var countUp = document.getElementsByClassName('js-countup');
if( countUp.length > 0 ) {
  for( var i = 0; i < countUp.length; i++) {(function(i){
    var separator = (countUp[i].getAttribute('data-countup-sep')) ? countUp[i].getAttribute('data-countup-sep') : false,
      duration = (countUp[i].getAttribute('data-countup-duration')) ? countUp[i].getAttribute('data-countup-duration') : CountUp.defaults.duration,
      decimal = (countUp[i].getAttribute('data-countup-decimal')) ? countUp[i].getAttribute('data-countup-decimal') : false,
      initial = (countUp[i].getAttribute('data-countup-start')) ? countUp[i].getAttribute('data-countup-start') : 0;
    new CountUp({element: countUp[i], separator : separator, duration: duration, decimal: decimal, initial: initial});
  })(i);}
}
}());



// File#: _1_swipe-content ============================================================================
(function() {
var SwipeContent = function(element) {
  this.element = element;
  this.delta = [false, false];
  this.dragging = false;
  this.intervalId = false;
  initSwipeContent(this);
};

function initSwipeContent(content) {
  content.element.addEventListener('mousedown', handleEvent.bind(content));
  content.element.addEventListener('touchstart', handleEvent.bind(content));
};

function initDragging(content) {
  //add event listeners
  content.element.addEventListener('mousemove', handleEvent.bind(content));
  content.element.addEventListener('touchmove', handleEvent.bind(content));
  content.element.addEventListener('mouseup', handleEvent.bind(content));
  content.element.addEventListener('mouseleave', handleEvent.bind(content));
  content.element.addEventListener('touchend', handleEvent.bind(content));
};

function cancelDragging(content) {
  //remove event listeners
  if(content.intervalId) {
    (!window.requestAnimationFrame) ? clearInterval(content.intervalId) : window.cancelAnimationFrame(content.intervalId);
    content.intervalId = false;
  }
  content.element.removeEventListener('mousemove', handleEvent.bind(content));
  content.element.removeEventListener('touchmove', handleEvent.bind(content));
  content.element.removeEventListener('mouseup', handleEvent.bind(content));
  content.element.removeEventListener('mouseleave', handleEvent.bind(content));
  content.element.removeEventListener('touchend', handleEvent.bind(content));
};

function handleEvent(event) {
  switch(event.type) {
    case 'mousedown':
    case 'touchstart':
      startDrag(this, event);
      break;
    case 'mousemove':
    case 'touchmove':
      drag(this, event);
      break;
    case 'mouseup':
    case 'mouseleave':
    case 'touchend':
      endDrag(this, event);
      break;
  }
};

function startDrag(content, event) {
  content.dragging = true;
  // listen to drag movements
  initDragging(content);
  content.delta = [parseInt(unify(event).clientX), parseInt(unify(event).clientY)];
  // emit drag start event
  emitSwipeEvents(content, 'dragStart', content.delta, event.target);
};

function endDrag(content, event) {
  cancelDragging(content);
  // credits: https://css-tricks.com/simple-swipe-with-vanilla-javascript/
  var dx = parseInt(unify(event).clientX), 
    dy = parseInt(unify(event).clientY);
  
  // check if there was a left/right swipe
  if(content.delta && (content.delta[0] || content.delta[0] === 0)) {
    var s = getSign(dx - content.delta[0]);
    
    if(Math.abs(dx - content.delta[0]) > 30) {
      (s < 0) ? emitSwipeEvents(content, 'swipeLeft', [dx, dy]) : emitSwipeEvents(content, 'swipeRight', [dx, dy]);	
    }
    
    content.delta[0] = false;
  }
  // check if there was a top/bottom swipe
  if(content.delta && (content.delta[1] || content.delta[1] === 0)) {
    var y = getSign(dy - content.delta[1]);

    if(Math.abs(dy - content.delta[1]) > 30) {
      (y < 0) ? emitSwipeEvents(content, 'swipeUp', [dx, dy]) : emitSwipeEvents(content, 'swipeDown', [dx, dy]);
    }

    content.delta[1] = false;
  }
  // emit drag end event
  emitSwipeEvents(content, 'dragEnd', [dx, dy]);
  content.dragging = false;
};

function drag(content, event) {
  if(!content.dragging) return;
  // emit dragging event with coordinates
  (!window.requestAnimationFrame) 
    ? content.intervalId = setTimeout(function(){emitDrag.bind(content, event);}, 250) 
    : content.intervalId = window.requestAnimationFrame(emitDrag.bind(content, event));
};

function emitDrag(event) {
  emitSwipeEvents(this, 'dragging', [parseInt(unify(event).clientX), parseInt(unify(event).clientY)]);
};

function unify(event) { 
  // unify mouse and touch events
  return event.changedTouches ? event.changedTouches[0] : event; 
};

function emitSwipeEvents(content, eventName, detail, el) {
  var trigger = false;
  if(el) trigger = el;
  // emit event with coordinates
  var event = new CustomEvent(eventName, {detail: {x: detail[0], y: detail[1], origin: trigger}});
  content.element.dispatchEvent(event);
};

function getSign(x) {
  if(!Math.sign) {
    return ((x > 0) - (x < 0)) || +x;
  } else {
    return Math.sign(x);
  }
};

window.SwipeContent = SwipeContent;

//initialize the SwipeContent objects
var swipe = document.getElementsByClassName('js-swipe-content');
if( swipe.length > 0 ) {
  for( var i = 0; i < swipe.length; i++) {
    (function(i){new SwipeContent(swipe[i]);})(i);
  }
}
}());




// File#: _1_stacking-cards ============================================================================
// Usage: codyhouse.co/license
(function() {
var StackCards = function(element) {
  this.element = element;
  this.items = this.element.getElementsByClassName('js-stack-cards__item');
  this.scrollingFn = false;
  this.scrolling = false;
  initStackCardsEffect(this); 
  initStackCardsResize(this); 
};

function initStackCardsEffect(element) { // use Intersection Observer to trigger animation
  setStackCards(element); // store cards CSS properties
  var observer = new IntersectionObserver(stackCardsCallback.bind(element), { threshold: [0, 1] });
  observer.observe(element.element);
};

function initStackCardsResize(element) { // detect resize to reset gallery
  element.element.addEventListener('resize-stack-cards', function(){
    setStackCards(element);
    animateStackCards.bind(element);
  });
};

function stackCardsCallback(entries) { // Intersection Observer callback
  if(entries[0].isIntersecting) {
    if(this.scrollingFn) return; // listener for scroll event already added
    stackCardsInitEvent(this);
  } else {
    if(!this.scrollingFn) return; // listener for scroll event already removed
    window.removeEventListener('scroll', this.scrollingFn);
    this.scrollingFn = false;
  }
};

function stackCardsInitEvent(element) {
  element.scrollingFn = stackCardsScrolling.bind(element);
  window.addEventListener('scroll', element.scrollingFn);
};

function stackCardsScrolling() {
  if(this.scrolling) return;
  this.scrolling = true;
  window.requestAnimationFrame(animateStackCards.bind(this));
};

function setStackCards(element) {
  // store wrapper properties
  element.marginY = getComputedStyle(element.element).getPropertyValue('--stack-cards-gap');
  getIntegerFromProperty(element); // convert element.marginY to integer (px value)
  element.elementHeight = element.element.offsetHeight;

  // store card properties
  var cardStyle = getComputedStyle(element.items[0]);
  element.cardTop = Math.floor(parseFloat(cardStyle.getPropertyValue('top')));
  element.cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue('height')));

  // store window property
  element.windowHeight = window.innerHeight;

  // reset margin + translate values
  if(isNaN(element.marginY)) {
    element.element.style.paddingBottom = '0px';
  } else {
    element.element.style.paddingBottom = (element.marginY*(element.items.length - 1))+'px';
  }

  for(var i = 0; i < element.items.length; i++) {
    if(isNaN(element.marginY)) {
      element.items[i].style.transform = 'none;';
    } else {
      element.items[i].style.transform = 'translateY('+element.marginY*i+'px)';
    }
  }
};

function getIntegerFromProperty(element) {
  var node = document.createElement('div');
  node.setAttribute('style', 'opacity:0; visbility: hidden;position: absolute; height:'+element.marginY);
  element.element.appendChild(node);
  element.marginY = parseInt(getComputedStyle(node).getPropertyValue('height'));
  element.element.removeChild(node);
};

function animateStackCards() {
  if(isNaN(this.marginY)) { // --stack-cards-gap not defined - do not trigger the effect
    this.scrolling = false;
    return; 
  }

  var top = this.element.getBoundingClientRect().top;

  if( this.cardTop - top + this.element.windowHeight - this.elementHeight - this.cardHeight + this.marginY + this.marginY*this.items.length > 0) { 
    this.scrolling = false;
    return;
  }

  for(var i = 0; i < this.items.length; i++) { // use only scale
    var scrolling = this.cardTop - top - i*(this.cardHeight+this.marginY);
    if(scrolling > 0) {  
      var scaling = i == this.items.length - 1 ? 1 : (this.cardHeight - scrolling*0.05)/this.cardHeight;
      this.items[i].style.transform = 'translateY('+this.marginY*i+'px) scale('+scaling+')';
    } else {
      this.items[i].style.transform = 'translateY('+this.marginY*i+'px)';
    }
  }

  this.scrolling = false;
};

// initialize StackCards object
var stackCards = document.getElementsByClassName('js-stack-cards'),
  intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
  reducedMotion = Util.osHasReducedMotion();
  
if(stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) { 
  var stackCardsArray = [];
  for(var i = 0; i < stackCards.length; i++) {
    (function(i){
      stackCardsArray.push(new StackCards(stackCards[i]));
    })(i);
  }
  
  var resizingId = false,
    customEvent = new CustomEvent('resize-stack-cards');
  
  window.addEventListener('resize', function() {
    clearTimeout(resizingId);
    resizingId = setTimeout(doneResizing, 500);
  });

  function doneResizing() {
    for( var i = 0; i < stackCardsArray.length; i++) {
      (function(i){stackCardsArray[i].element.dispatchEvent(customEvent)})(i);
    };
  };
}
}());




// File#: _1_countdown ============================================================================
// Usage: codyhouse.co/license
(function() {
var CountDown = function(element) {
  this.element = element;
  this.labels = this.element.getAttribute('data-labels') ? this.element.getAttribute('data-labels').split(',') : [];
  this.intervalId;
  //create countdown HTML
  this.createCountDown();
  //store time elements
  this.days = this.element.getElementsByClassName('js-countdown__value--0')[0];
  this.hours = this.element.getElementsByClassName('js-countdown__value--1')[0];
  this.mins = this.element.getElementsByClassName('js-countdown__value--2')[0];
  this.secs = this.element.getElementsByClassName('js-countdown__value--3')[0];
  this.endTime = this.getEndTime();
  //init counter
  this.initCountDown();
};

CountDown.prototype.createCountDown = function() {
  var wrapper = document.createElement("div");
  Util.setAttributes(wrapper, {'aria-hidden': 'true', 'class': 'countdown__timer'});

  for(var i = 0; i < 4; i++) {
    var timeItem = document.createElement("span"),
      timeValue = document.createElement("span"),
      timeLabel = document.createElement('span');
    
    timeItem.setAttribute('class', 'countdown__item');
    timeValue.setAttribute('class', 'countdown__value countdown__value--'+i+' js-countdown__value--'+i);
    timeItem.appendChild(timeValue);

    if( this.labels && this.labels.length > 0 ) {
      timeLabel.textContent = this.labels[i].trim();
      timeLabel.setAttribute('class', 'countdown__label');
      timeItem.appendChild(timeLabel);
    }
    
    wrapper.appendChild(timeItem);
  }
  // append new content to countdown element
  this.element.insertBefore(wrapper, this.element.firstChild);
  // this.element.appendChild(wrapper);
};

CountDown.prototype.getEndTime = function() {
  // get number of remaining seconds 
  if(this.element.getAttribute('data-timer')) return Number(this.element.getAttribute('data-timer'))*1000 + new Date().getTime();
  else if(this.element.getAttribute('data-countdown')) return Number(new Date(this.element.getAttribute('data-countdown')).getTime());
};

CountDown.prototype.initCountDown = function() {
  var self = this;
  this.intervalId = setInterval(function(){
    self.updateCountDown(false);
  }, 1000);
  this.updateCountDown(true);
};

CountDown.prototype.updateCountDown = function(bool) {
  // original countdown function
  // https://gist.github.com/adriennetacke/f5a25c304f1b7b4a6fa42db70415bad2
  var time = parseInt( (this.endTime - new Date().getTime())/1000 ),
    days = 0,
    hours = 0,
    mins = 0,
    seconds = 0;

  if(isNaN(time) || time < 0) {
    clearInterval(this.intervalId);
    this.emitEndEvent();
  } else {
    days = parseInt(time / 86400);
    time = (time % 86400);
    hours = parseInt(time / 3600);
    time = (time % 3600);
    mins = parseInt(time / 60);
    time = (time % 60);
    seconds = parseInt(time);
  }
  
  // hide days/hours/mins if not available 
  if(bool && days == 0) this.days.parentElement.style.display = "none";
  if(bool && days == 0 && hours == 0) this.hours.parentElement.style.display = "none";
  if(bool && days == 0 && hours == 0 && mins == 0) this.mins.parentElement.style.display = "none";
  
  this.days.textContent = days;
  this.hours.textContent = this.getTimeFormat(hours);
  this.mins.textContent = this.getTimeFormat(mins);
  this.secs.textContent = this.getTimeFormat(seconds);
};

CountDown.prototype.getTimeFormat = function(time) {
  return ('0'+ time).slice(-2);
};

CountDown.prototype.emitEndEvent = function(time) {
  var event = new CustomEvent('countDownFinished');
  this.element.dispatchEvent(event);
};

//initialize the CountDown objects
var countDown = document.getElementsByClassName('js-countdown');
if( countDown.length > 0 ) {
  for( var i = 0; i < countDown.length; i++) {
    (function(i){new CountDown(countDown[i]);})(i);
  }
}
}());


// File#: _1_sub-navigation
// Usage: codyhouse.co/license
(function() {
  var SideNav = function(element) {
    this.element = element;
    this.control = this.element.getElementsByClassName('js-subnav__control');
    this.navList = this.element.getElementsByClassName('js-subnav__wrapper');
    this.closeBtn = this.element.getElementsByClassName('js-subnav__close-btn');
    this.firstFocusable = getFirstFocusable(this);
    this.showClass = 'subnav__wrapper--is-visible';
    this.collapsedLayoutClass = 'subnav--collapsed';
    initSideNav(this);
  };

  function getFirstFocusable(sidenav) { // get first focusable element inside the subnav
    if(sidenav.navList.length == 0) return;
    var focusableEle = sidenav.navList[0].querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'),
        firstFocusable = false;
    for(var i = 0; i < focusableEle.length; i++) {
      if( focusableEle[i].offsetWidth || focusableEle[i].offsetHeight || focusableEle[i].getClientRects().length ) {
        firstFocusable = focusableEle[i];
        break;
      }
    }

    return firstFocusable;
  };

  function initSideNav(sidenav) {
    checkSideNavLayout(sidenav); // switch from --compressed to --expanded layout
    initSideNavToggle(sidenav); // mobile behavior + layout update on resize
  };

  function initSideNavToggle(sidenav) { 
    // custom event emitted when window is resized
    sidenav.element.addEventListener('update-sidenav', function(event){
      checkSideNavLayout(sidenav);
    });

    // mobile only
    if(sidenav.control.length == 0 || sidenav.navList.length == 0) return;
    sidenav.control[0].addEventListener('click', function(event){ // open sidenav
      openSideNav(sidenav, event);
    });
    sidenav.element.addEventListener('click', function(event) { // close sidenav when clicking on close button/bg layer
      if(event.target.closest('.js-subnav__close-btn') || Util.hasClass(event.target, 'js-subnav__wrapper')) {
        closeSideNav(sidenav, event);
      }
    });
  };

  function openSideNav(sidenav, event) { // open side nav - mobile only
    event.preventDefault();
    sidenav.selectedTrigger = event.target;
    event.target.setAttribute('aria-expanded', 'true');
    Util.addClass(sidenav.navList[0], sidenav.showClass);
    sidenav.navList[0].addEventListener('transitionend', function cb(event){
      sidenav.navList[0].removeEventListener('transitionend', cb);
      sidenav.firstFocusable.focus();
    });
  };

  function closeSideNav(sidenav, event, bool) { // close side sidenav - mobile only
    if( !Util.hasClass(sidenav.navList[0], sidenav.showClass) ) return;
    if(event) event.preventDefault();
    Util.removeClass(sidenav.navList[0], sidenav.showClass);
    if(!sidenav.selectedTrigger) return;
    sidenav.selectedTrigger.setAttribute('aria-expanded', 'false');
    if(!bool) sidenav.selectedTrigger.focus();
    sidenav.selectedTrigger = false; 
  };

  function checkSideNavLayout(sidenav) { // switch from --compressed to --expanded layout
    var layout = getComputedStyle(sidenav.element, ':before').getPropertyValue('content').replace(/\'|"/g, '');
    if(layout != 'expanded' && layout != 'collapsed') return;
    Util.toggleClass(sidenav.element, sidenav.collapsedLayoutClass, layout != 'expanded');
  };
  
  var sideNav = document.getElementsByClassName('js-subnav'),
    SideNavArray = [],
    j = 0;
  if( sideNav.length > 0) {
    for(var i = 0; i < sideNav.length; i++) {
      var beforeContent = getComputedStyle(sideNav[i], ':before').getPropertyValue('content');
      if(beforeContent && beforeContent !='' && beforeContent !='none') {
        j = j + 1;
      }
      (function(i){SideNavArray.push(new SideNav(sideNav[i]));})(i);
    }

    if(j > 0) { // on resize - update sidenav layout
      var resizingId = false,
        customEvent = new CustomEvent('update-sidenav');
      window.addEventListener('resize', function(event){
        clearTimeout(resizingId);
        resizingId = setTimeout(doneResizing, 300);
      });

      function doneResizing() {
        for( var i = 0; i < SideNavArray.length; i++) {
          (function(i){SideNavArray[i].element.dispatchEvent(customEvent)})(i);
        };
      };

      (window.requestAnimationFrame) // init table layout
        ? window.requestAnimationFrame(doneResizing)
        : doneResizing();
    }

    // listen for key events
    window.addEventListener('keyup', function(event){
      if( (event.keyCode && event.keyCode == 27) || (event.key && event.key.toLowerCase() == 'escape' )) {// listen for esc key - close navigation on mobile if open
        for(var i = 0; i < SideNavArray.length; i++) {
          (function(i){closeSideNav(SideNavArray[i], event);})(i);
        };
      }
      if( (event.keyCode && event.keyCode == 9) || (event.key && event.key.toLowerCase() == 'tab' )) { // listen for tab key - close navigation on mobile if open when nav loses focus
        if( document.activeElement.closest('.js-subnav__wrapper')) return;
        for(var i = 0; i < SideNavArray.length; i++) {
          (function(i){closeSideNav(SideNavArray[i], event, true);})(i);
        };
      }
    });
  }
}());

// File#: _1_revealing-section
// Usage: codyhouse.co/license
(function() {
  var RevealingSection = function(element) {
    this.element = element;
    this.scrollingFn = false;
    this.scrolling = false;
    this.resetOpacity = false;
    initRevealingSection(this);
  };

  function initRevealingSection(element) {
    // set position of sticky element
    setBottom(element);
    // create a new node - to be inserted before the sticky element
    createPrevElement(element);
    // on resize -> reset element bottom position
    element.element.addEventListener('update-reveal-section', function(){
      setBottom(element);
      setPrevElementTop(element);
    });
    animateRevealingSection.bind(element)(); // set initial status
    // change opacity of layer
    var observer = new IntersectionObserver(revealingSectionCallback.bind(element));
    observer.observe(element.prevElement);
  };

  function createPrevElement(element) {
    var newElement = document.createElement("div"); 
    newElement.setAttribute('aria-hidden', 'true');
    element.element.parentElement.insertBefore(newElement, element.element);
    element.prevElement =  element.element.previousElementSibling;
    element.prevElement.style.opacity = '0';
    setPrevElementTop(element);
  };

  function setPrevElementTop(element) {
    element.prevElementTop = element.prevElement.getBoundingClientRect().top + window.scrollY;
  };

  function revealingSectionCallback(entries, observer) {
    if(entries[0].isIntersecting) {
      if(this.scrollingFn) return; // listener for scroll event already added
      revealingSectionInitEvent(this);
    } else {
      if(!this.scrollingFn) return; // listener for scroll event already removed
      window.removeEventListener('scroll', this.scrollingFn);
      updateOpacityValue(this, 0);
      this.scrollingFn = false;
    }
  };
  
  function revealingSectionInitEvent(element) {
    element.scrollingFn = revealingSectionScrolling.bind(element);
    window.addEventListener('scroll', element.scrollingFn);
  };

  function revealingSectionScrolling() {
    if(this.scrolling) return;
    this.scrolling = true;
    window.requestAnimationFrame(animateRevealingSection.bind(this));
  };

  function animateRevealingSection() {
    if(this.prevElementTop - window.scrollY < window.innerHeight) {
      var opacity = (1 - (window.innerHeight + window.scrollY - this.prevElementTop)/window.innerHeight).toFixed(2);
      if(opacity > 0 ) {
        this.resetOpacity = false;
        updateOpacityValue(this, opacity);
      } else if(!this.resetOpacity) {
        this.resetOpacity = true;
        updateOpacityValue(this, 0);
      } 
    }
    this.scrolling = false;
  };

  function updateOpacityValue(element, value) {
    element.element.style.setProperty('--reavealing-section-overlay-opacity', value);
  };

  function setBottom(element) {
    var translateValue = window.innerHeight - element.element.offsetHeight;
    if(translateValue > 0) translateValue = 0;
    element.element.style.bottom = ''+translateValue+'px';
  };

  //initialize the Revealing Section objects
  var revealingSection = document.getElementsByClassName('js-revealing-section');
  var stickySupported = Util.cssSupports('position', 'sticky') || Util.cssSupports('position', '-webkit-sticky');
  if( revealingSection.length > 0 && stickySupported) {
    var revealingSectionArray = [];
    for( var i = 0; i < revealingSection.length; i++) {
      (function(i){revealingSectionArray.push(new RevealingSection(revealingSection[i]));})(i);
    }
    
    var resizingId = false,
      customEvent = new CustomEvent('update-reveal-section');

    window.addEventListener('resize', function() {
      clearTimeout(resizingId);
      resizingId = setTimeout(doneResizing, 100);
    });

    // wait for font to be loaded
    document.fonts.onloadingdone = function (fontFaceSetEvent) {
      doneResizing();
    };

    function doneResizing() {
      for( var i = 0; i < revealingSectionArray.length; i++) {
        (function(i){revealingSectionArray[i].element.dispatchEvent(customEvent)})(i);
      };
    };
  }
}());

// File#: _1_smooth-scrolling
// Usage: codyhouse.co/license
(function() {
  var SmoothScroll = function(element) {
    if(!('CSS' in window) || !CSS.supports('color', 'var(--color-var)')) return;
    this.element = element;
    this.scrollDuration = parseInt(this.element.getAttribute('data-duration')) || 300;
    this.dataElementY = this.element.getAttribute('data-scrollable-element-y') || this.element.getAttribute('data-scrollable-element') || this.element.getAttribute('data-element');
    this.scrollElementY = this.dataElementY ? document.querySelector(this.dataElementY) : window;
    this.dataElementX = this.element.getAttribute('data-scrollable-element-x');
    this.scrollElementX = this.dataElementY ? document.querySelector(this.dataElementX) : window;
    this.initScroll();
  };

  SmoothScroll.prototype.initScroll = function() {
    var self = this;

    //detect click on link
    this.element.addEventListener('click', function(event){
      event.preventDefault();
      var targetId = event.target.closest('.js-smooth-scroll').getAttribute('href').replace('#', ''),
        target = document.getElementById(targetId),
        targetTabIndex = target.getAttribute('tabindex'),
        windowScrollTop = self.scrollElementY.scrollTop || document.documentElement.scrollTop;

      // scroll vertically
      if(!self.dataElementY) windowScrollTop = window.scrollY || document.documentElement.scrollTop;

      var scrollElementY = self.dataElementY ? self.scrollElementY : false;

      var fixedHeight = self.getFixedElementHeight(); // check if there's a fixed element on the page
      Util.scrollTo(target.getBoundingClientRect().top + windowScrollTop - fixedHeight, self.scrollDuration, function() {
        // scroll horizontally
        self.scrollHorizontally(target, fixedHeight);
        //move the focus to the target element - don't break keyboard navigation
        Util.moveFocus(target);
        history.pushState(false, false, '#'+targetId);
        self.resetTarget(target, targetTabIndex);
      }, scrollElementY);
    });
  };

  SmoothScroll.prototype.scrollHorizontally = function(target, delta) {
    var scrollEl = this.dataElementX ? this.scrollElementX : false;
    var windowScrollLeft = this.scrollElementX ? this.scrollElementX.scrollLeft : document.documentElement.scrollLeft;
    var final = target.getBoundingClientRect().left + windowScrollLeft - delta,
      duration = this.scrollDuration;

    var element = scrollEl || window;
    var start = element.scrollLeft || document.documentElement.scrollLeft,
      currentTime = null;

    if(!scrollEl) start = window.scrollX || document.documentElement.scrollLeft;
    // return if there's no need to scroll
    if(Math.abs(start - final) < 5) return;
        
    var animateScroll = function(timestamp){
      if (!currentTime) currentTime = timestamp;        
      var progress = timestamp - currentTime;
      if(progress > duration) progress = duration;
      var val = Math.easeInOutQuad(progress, start, final-start, duration);
      element.scrollTo({
        left: val,
      });
      if(progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  SmoothScroll.prototype.resetTarget = function(target, tabindex) {
    if( parseInt(target.getAttribute('tabindex')) < 0) {
      target.style.outline = 'none';
      !tabindex && target.removeAttribute('tabindex');
    }	
  };

  SmoothScroll.prototype.getFixedElementHeight = function() {
    var scrollElementY = this.dataElementY ? this.scrollElementY : document.documentElement;
    var fixedElementDelta = parseInt(getComputedStyle(scrollElementY).getPropertyValue('scroll-padding'));
    if(isNaN(fixedElementDelta) ) { // scroll-padding not supported
      fixedElementDelta = 0;
      var fixedElement = document.querySelector(this.element.getAttribute('data-fixed-element'));
      if(fixedElement) fixedElementDelta = parseInt(fixedElement.getBoundingClientRect().height);
    }
    return fixedElementDelta;
  };
  
  //initialize the Smooth Scroll objects
  var smoothScrollLinks = document.getElementsByClassName('js-smooth-scroll');
  if( smoothScrollLinks.length > 0 && !Util.cssSupports('scroll-behavior', 'smooth') && window.requestAnimationFrame) {
    // you need javascript only if css scroll-behavior is not supported
    for( var i = 0; i < smoothScrollLinks.length; i++) {
      (function(i){new SmoothScroll(smoothScrollLinks[i]);})(i);
    }
  }
}());





// File#: _2_full-screen-select
(function() {
  var CustomSelect = function(element) {
    this.element = element;
    this.items = this.element.children;
    initCustomSelect(this);
  };

  function initCustomSelect(select) {
    // arrow navigation
    select.element.addEventListener('keydown', function(event){
      if( event.keyCode && event.keyCode == 40 || event.key && event.key.toLowerCase() == 'arrowdown' ) {
        selectOption(select, 1); // go to next option
      } else if( event.keyCode && event.keyCode == 38 || event.key && event.key.toLowerCase() == 'arrowup' ) {
        selectOption(select, -1); // go to prev option
      }
    });
  };

  function selectOption(select, direction) {
    var focusElement = document.activeElement,
      index = Util.getIndexInArray(select.items, focusElement.closest('li'));
    if(index < 0) return;
    index = index + direction;
    if( index < 0 ) index = select.items.length - 1;
    if( index >= select.items.length) index = 0;
    Util.moveFocus(select.items[index].getElementsByTagName(focusElement.tagName)[0]);
  };

  //initialize the CustomSelect objects
  var customSelect = document.getElementsByClassName('js-full-screen-select');
  if( customSelect.length > 0 ) {
    for( var i = 0; i < customSelect.length; i++) {
      (function(i){new CustomSelect(customSelect[i]);})(i);
    }
  }
}());




// File#: _2_carousel
// Usage: codyhouse.co/license
(function() {
  var Carousel = function(opts) {
    this.options = Util.extend(Carousel.defaults , opts);
    this.element = this.options.element;
    this.listWrapper = this.element.getElementsByClassName('carousel__wrapper')[0];
    this.list = this.element.getElementsByClassName('carousel__list')[0];
    this.items = this.element.getElementsByClassName('carousel__item');
    this.initItems = []; // store only the original elements - will need this for cloning
    this.itemsNb = this.items.length; //original number of items
    this.visibItemsNb = 1; // tot number of visible items
    this.itemsWidth = 1; // this will be updated with the right width of items
    this.itemOriginalWidth = false; // store the initial width to use it on resize
    this.selectedItem = 0; // index of first visible item 
    this.translateContainer = 0; // this will be the amount the container has to be translated each time a new group has to be shown (negative)
    this.containerWidth = 0; // this will be used to store the total width of the carousel (including the overflowing part)
    this.ariaLive = false;
    // navigation
    this.controls = this.element.getElementsByClassName('js-carousel__control');
    this.animating = false;
    // autoplay
    this.autoplayId = false;
    this.autoplayPaused = false;
    //drag
    this.dragStart = false;
    // resize
    this.resizeId = false;
    // used to re-initialize js
    this.cloneList = [];
    // store items min-width
    this.itemAutoSize = false;
    // store translate value (loop = off)
    this.totTranslate = 0;
    // modify loop option if navigation is on
    if(this.options.nav) this.options.loop = false;
    // store counter elements (if present)
    this.counter = this.element.getElementsByClassName('js-carousel__counter');
    this.counterTor = this.element.getElementsByClassName('js-carousel__counter-tot');
    initCarouselLayout(this); // get number visible items + width items
    setItemsWidth(this, true); 
    insertBefore(this, this.visibItemsNb); // insert clones before visible elements
    updateCarouselClones(this); // insert clones after visible elements
    resetItemsTabIndex(this); // make sure not visible items are not focusable
    initAriaLive(this); // set aria-live region for SR
    initCarouselEvents(this); // listen to events
    initCarouselCounter(this);
    Util.addClass(this.element, 'carousel--loaded');
  };
  
  //public carousel functions
  Carousel.prototype.showNext = function() {
    showNextItems(this);
  };

  Carousel.prototype.showPrev = function() {
    showPrevItems(this);
  };

  Carousel.prototype.startAutoplay = function() {
    startAutoplay(this);
  };

  Carousel.prototype.pauseAutoplay = function() {
    pauseAutoplay(this);
  };
  
  //private carousel functions
  function initCarouselLayout(carousel) {
    // evaluate size of single elements + number of visible elements
    var itemStyle = window.getComputedStyle(carousel.items[0]),
      containerStyle = window.getComputedStyle(carousel.listWrapper),
      itemWidth = parseFloat(itemStyle.getPropertyValue('width')),
      itemMargin = parseFloat(itemStyle.getPropertyValue('margin-right')),
      containerPadding = parseFloat(containerStyle.getPropertyValue('padding-left')),
      containerWidth = parseFloat(containerStyle.getPropertyValue('width'));

    if(!carousel.itemAutoSize) {
      carousel.itemAutoSize = itemWidth;
    }

    // if carousel.listWrapper is hidden -> make sure to retrieve the proper width
    containerWidth = getCarouselWidth(carousel, containerWidth);

    if( !carousel.itemOriginalWidth) { // on resize -> use initial width of items to recalculate 
      carousel.itemOriginalWidth = itemWidth;
    } else {
      itemWidth = carousel.itemOriginalWidth;
    }

    if(carousel.itemAutoSize) {
      carousel.itemOriginalWidth = parseInt(carousel.itemAutoSize);
      itemWidth = carousel.itemOriginalWidth;
    }
    // make sure itemWidth is smaller than container width
    if(containerWidth < itemWidth) {
      carousel.itemOriginalWidth = containerWidth
      itemWidth = carousel.itemOriginalWidth;
    }
    // get proper width of elements
    carousel.visibItemsNb = parseInt((containerWidth - 2*containerPadding + itemMargin)/(itemWidth+itemMargin));
    carousel.itemsWidth = parseFloat( (((containerWidth - 2*containerPadding + itemMargin)/carousel.visibItemsNb) - itemMargin).toFixed(1));
    carousel.containerWidth = (carousel.itemsWidth+itemMargin)* carousel.items.length;
    carousel.translateContainer = 0 - ((carousel.itemsWidth+itemMargin)* carousel.visibItemsNb);
    // flexbox fallback
    if(!flexSupported) carousel.list.style.width = (carousel.itemsWidth + itemMargin)*carousel.visibItemsNb*3+'px';
    
    // this is used when loop == off
    carousel.totTranslate = 0 - carousel.selectedItem*(carousel.itemsWidth+itemMargin);
    if(carousel.items.length <= carousel.visibItemsNb) carousel.totTranslate = 0;

    centerItems(carousel); // center items if carousel.items.length < visibItemsNb
    alignControls(carousel); // check if controls need to be aligned to a different element
  };

  function setItemsWidth(carousel, bool) {
    for(var i = 0; i < carousel.items.length; i++) {
      carousel.items[i].style.width = carousel.itemsWidth+"px";
      if(bool) carousel.initItems.push(carousel.items[i]);
    }
  };

  function updateCarouselClones(carousel) { 
    if(!carousel.options.loop) return;
    // take care of clones after visible items (needs to run after the update of clones before visible items)
    if(carousel.items.length < carousel.visibItemsNb*3) {
      insertAfter(carousel, carousel.visibItemsNb*3 - carousel.items.length, carousel.items.length - carousel.visibItemsNb*2);
    } else if(carousel.items.length > carousel.visibItemsNb*3 ) {
      removeClones(carousel, carousel.visibItemsNb*3, carousel.items.length - carousel.visibItemsNb*3);
    }
    // set proper translate value for the container
    setTranslate(carousel, 'translateX('+carousel.translateContainer+'px)');
  };

  function initCarouselEvents(carousel) {
    // listen for click on previous/next arrow
    // dots navigation
    if(carousel.options.nav) {
      carouselCreateNavigation(carousel);
      carouselInitNavigationEvents(carousel);
    }

    if(carousel.controls.length > 0) {
      carousel.controls[0].addEventListener('click', function(event){
        event.preventDefault();
        showPrevItems(carousel);
        updateAriaLive(carousel);
      });
      carousel.controls[1].addEventListener('click', function(event){
        event.preventDefault();
        showNextItems(carousel);
        updateAriaLive(carousel);
      });

      // update arrow visility -> loop == off only
      resetCarouselControls(carousel);
      // emit custom event - items visible
      emitCarouselActiveItemsEvent(carousel)
    }
    // autoplay
    if(carousel.options.autoplay) {
      startAutoplay(carousel);
      // pause autoplay if user is interacting with the carousel
      carousel.element.addEventListener('mouseenter', function(event){
        pauseAutoplay(carousel);
        carousel.autoplayPaused = true;
      });
      carousel.element.addEventListener('focusin', function(event){
        pauseAutoplay(carousel);
        carousel.autoplayPaused = true;
      });
      carousel.element.addEventListener('mouseleave', function(event){
        carousel.autoplayPaused = false;
        startAutoplay(carousel);
      });
      carousel.element.addEventListener('focusout', function(event){
        carousel.autoplayPaused = false;
        startAutoplay(carousel);
      });
    }
    // drag events
    if(carousel.options.drag && window.requestAnimationFrame) {
      //init dragging
      new SwipeContent(carousel.element);
      carousel.element.addEventListener('dragStart', function(event){
        if(event.detail.origin && event.detail.origin.closest('.js-carousel__control')) return;
        if(event.detail.origin && event.detail.origin.closest('.js-carousel__navigation')) return;
        if(event.detail.origin && !event.detail.origin.closest('.carousel__wrapper')) return;
        Util.addClass(carousel.element, 'carousel--is-dragging');
        pauseAutoplay(carousel);
        carousel.dragStart = event.detail.x;
        animateDragEnd(carousel);
      });
      carousel.element.addEventListener('dragging', function(event){
        if(!carousel.dragStart) return;
        if(carousel.animating || Math.abs(event.detail.x - carousel.dragStart) < 10) return;
        var translate = event.detail.x - carousel.dragStart + carousel.translateContainer;
        if(!carousel.options.loop) {
          translate = event.detail.x - carousel.dragStart + carousel.totTranslate; 
        }
        setTranslate(carousel, 'translateX('+translate+'px)');
      });
    }
    // reset on resize
    window.addEventListener('resize', function(event){
      pauseAutoplay(carousel);
      clearTimeout(carousel.resizeId);
      carousel.resizeId = setTimeout(function(){
        resetCarouselResize(carousel);
        // reset dots navigation
        resetDotsNavigation(carousel);
        resetCarouselControls(carousel);
        setCounterItem(carousel);
        startAutoplay(carousel);
        centerItems(carousel); // center items if carousel.items.length < visibItemsNb
        alignControls(carousel);
        // emit custom event - items visible
        emitCarouselActiveItemsEvent(carousel)
      }, 250)
    });
  };

  function showPrevItems(carousel) {
    if(carousel.animating) return;
    carousel.animating = true;
    carousel.selectedItem = getIndex(carousel, carousel.selectedItem - carousel.visibItemsNb);
    animateList(carousel, '0', 'prev');
  };

  function showNextItems(carousel) {
    if(carousel.animating) return;
    carousel.animating = true;
    carousel.selectedItem = getIndex(carousel, carousel.selectedItem + carousel.visibItemsNb);
    animateList(carousel, carousel.translateContainer*2+'px', 'next');
  };

  function animateDragEnd(carousel) { // end-of-dragging animation
    carousel.element.addEventListener('dragEnd', function cb(event){
      carousel.element.removeEventListener('dragEnd', cb);
      Util.removeClass(carousel.element, 'carousel--is-dragging');
      if(event.detail.x - carousel.dragStart < -40) {
        carousel.animating = false;
        showNextItems(carousel);
      } else if(event.detail.x - carousel.dragStart > 40) {
        carousel.animating = false;
        showPrevItems(carousel);
      } else if(event.detail.x - carousel.dragStart == 0) { // this is just a click -> no dragging
        return;
      } else { // not dragged enought -> do not update carousel, just reset
        carousel.animating = true;
        animateList(carousel, carousel.translateContainer+'px', false);
      }
      carousel.dragStart = false;
    });
  };

  function animateList(carousel, translate, direction) { // takes care of changing visible items
    pauseAutoplay(carousel);
    Util.addClass(carousel.list, 'carousel__list--animating');
    var initTranslate = carousel.totTranslate;
    if(!carousel.options.loop) {
      translate = noLoopTranslateValue(carousel, direction);
    }
    setTimeout(function() {setTranslate(carousel, 'translateX('+translate+')');});
    if(transitionSupported) {
      carousel.list.addEventListener('transitionend', function cb(event){
        if(event.propertyName && event.propertyName != 'transform') return;
        Util.removeClass(carousel.list, 'carousel__list--animating');
        carousel.list.removeEventListener('transitionend', cb);
        animateListCb(carousel, direction);
      });
    } else {
      animateListCb(carousel, direction);
    }
    if(!carousel.options.loop && (initTranslate == carousel.totTranslate)) {
      // translate value was not updated -> trigger transitionend event to restart carousel
      carousel.list.dispatchEvent(new CustomEvent('transitionend'));
    }
    resetCarouselControls(carousel);
    setCounterItem(carousel);
    // emit custom event - items visible
    emitCarouselActiveItemsEvent(carousel)
  };

  function noLoopTranslateValue(carousel, direction) {
    var translate = carousel.totTranslate;
    if(direction == 'next') {
      translate = carousel.totTranslate + carousel.translateContainer;
    } else if(direction == 'prev') {
      translate = carousel.totTranslate - carousel.translateContainer;
    } else if(direction == 'click') {
      translate = carousel.selectedDotIndex*carousel.translateContainer;
    }
    if(translate > 0)  {
      translate = 0;
      carousel.selectedItem = 0;
    }
    if(translate < - carousel.translateContainer - carousel.containerWidth) {
      translate = - carousel.translateContainer - carousel.containerWidth;
      carousel.selectedItem = carousel.items.length - carousel.visibItemsNb;
    }
    if(carousel.visibItemsNb > carousel.items.length) translate = 0;
    carousel.totTranslate = translate;
    return translate + 'px';
  };

  function animateListCb(carousel, direction) { // reset actions after carousel has been updated
    if(direction) updateClones(carousel, direction);
    carousel.animating = false;
    // reset autoplay
    startAutoplay(carousel);
    // reset tab index
    resetItemsTabIndex(carousel);
  };

  function updateClones(carousel, direction) {
    if(!carousel.options.loop) return;
    // at the end of each animation, we need to update the clones before and after the visible items
    var index = (direction == 'next') ? 0 : carousel.items.length - carousel.visibItemsNb;
    // remove clones you do not need anymore
    removeClones(carousel, index, false);
    // add new clones 
    (direction == 'next') ? insertAfter(carousel, carousel.visibItemsNb, 0) : insertBefore(carousel, carousel.visibItemsNb);
    //reset transform
    setTranslate(carousel, 'translateX('+carousel.translateContainer+'px)');
  };

  function insertBefore(carousel, nb, delta) {
    if(!carousel.options.loop) return;
    var clones = document.createDocumentFragment();
    var start = 0;
    if(delta) start = delta;
    for(var i = start; i < nb; i++) {
      var index = getIndex(carousel, carousel.selectedItem - i - 1),
        clone = carousel.initItems[index].cloneNode(true);
      Util.addClass(clone, 'js-clone');
      clones.insertBefore(clone, clones.firstChild);
    }
    carousel.list.insertBefore(clones, carousel.list.firstChild);
    emitCarouselUpdateEvent(carousel);
  };

  function insertAfter(carousel, nb, init) {
    if(!carousel.options.loop) return;
    var clones = document.createDocumentFragment();
    for(var i = init; i < nb + init; i++) {
      var index = getIndex(carousel, carousel.selectedItem + carousel.visibItemsNb + i),
        clone = carousel.initItems[index].cloneNode(true);
      Util.addClass(clone, 'js-clone');
      clones.appendChild(clone);
    }
    carousel.list.appendChild(clones);
    emitCarouselUpdateEvent(carousel);
  };

  function removeClones(carousel, index, bool) {
    if(!carousel.options.loop) return;
    if( !bool) {
      bool = carousel.visibItemsNb;
    }
    for(var i = 0; i < bool; i++) {
      if(carousel.items[index]) carousel.list.removeChild(carousel.items[index]);
    }
  };

  function resetCarouselResize(carousel) { // reset carousel on resize
    var visibleItems = carousel.visibItemsNb;
    // get new items min-width value
    resetItemAutoSize(carousel);
    initCarouselLayout(carousel); 
    setItemsWidth(carousel, false);
    resetItemsWidth(carousel); // update the array of original items -> array used to create clones
    if(carousel.options.loop) {
      if(visibleItems > carousel.visibItemsNb) {
        removeClones(carousel, 0, visibleItems - carousel.visibItemsNb);
      } else if(visibleItems < carousel.visibItemsNb) {
        insertBefore(carousel, carousel.visibItemsNb, visibleItems);
      }
      updateCarouselClones(carousel); // this will take care of translate + after elements
    } else {
      // reset default translate to a multiple value of (itemWidth + margin)
      var translate = noLoopTranslateValue(carousel);
      setTranslate(carousel, 'translateX('+translate+')');
    }
    resetItemsTabIndex(carousel); // reset focusable elements
  };

  function resetItemAutoSize(carousel) {
    if(!cssPropertiesSupported) return;
    // remove inline style
    carousel.items[0].removeAttribute('style');
    // get original item width 
    carousel.itemAutoSize = getComputedStyle(carousel.items[0]).getPropertyValue('width');
  };

  function resetItemsWidth(carousel) {
    for(var i = 0; i < carousel.initItems.length; i++) {
      carousel.initItems[i].style.width = carousel.itemsWidth+"px";
    }
  };

  function resetItemsTabIndex(carousel) {
    var carouselActive = carousel.items.length > carousel.visibItemsNb;
    var j = carousel.items.length;
    for(var i = 0; i < carousel.items.length; i++) {
      if(carousel.options.loop) {
        if(i < carousel.visibItemsNb || i >= 2*carousel.visibItemsNb ) {
          carousel.items[i].setAttribute('tabindex', '-1');
        } else {
          if(i < j) j = i;
          carousel.items[i].removeAttribute('tabindex');
        }
      } else {
        if( (i < carousel.selectedItem || i >= carousel.selectedItem + carousel.visibItemsNb) && carouselActive) {
          carousel.items[i].setAttribute('tabindex', '-1');
        } else {
          if(i < j) j = i;
          carousel.items[i].removeAttribute('tabindex');
        }
      }
    }
    resetVisibilityOverflowItems(carousel, j);
  };

  function startAutoplay(carousel) {
    if(carousel.options.autoplay && !carousel.autoplayId && !carousel.autoplayPaused) {
      carousel.autoplayId = setInterval(function(){
        showNextItems(carousel);
      }, carousel.options.autoplayInterval);
    }
  };

  function pauseAutoplay(carousel) {
    if(carousel.options.autoplay) {
      clearInterval(carousel.autoplayId);
      carousel.autoplayId = false;
    }
  };

  function initAriaLive(carousel) { // create an aria-live region for SR
    if(!carousel.options.ariaLive) return;
    // create an element that will be used to announce the new visible slide to SR
    var srLiveArea = document.createElement('div');
    Util.setAttributes(srLiveArea, {'class': 'sr-only js-carousel__aria-live', 'aria-live': 'polite', 'aria-atomic': 'true'});
    carousel.element.appendChild(srLiveArea);
    carousel.ariaLive = srLiveArea;
  };

  function updateAriaLive(carousel) { // announce to SR which items are now visible
    if(!carousel.options.ariaLive) return;
    carousel.ariaLive.innerHTML = 'Item '+(carousel.selectedItem + 1)+' selected. '+carousel.visibItemsNb+' items of '+carousel.initItems.length+' visible';
  };

  function getIndex(carousel, index) {
    if(index < 0) index = getPositiveValue(index, carousel.itemsNb);
    if(index >= carousel.itemsNb) index = index % carousel.itemsNb;
    return index;
  };

  function getPositiveValue(value, add) {
    value = value + add;
    if(value > 0) return value;
    else return getPositiveValue(value, add);
  };

  function setTranslate(carousel, translate) {
    carousel.list.style.transform = translate;
    carousel.list.style.msTransform = translate;
  };

  function getCarouselWidth(carousel, computedWidth) { // retrieve carousel width if carousel is initially hidden
    var closestHidden = carousel.listWrapper.closest('.sr-only');
    if(closestHidden) { // carousel is inside an .sr-only (visually hidden) element
      Util.removeClass(closestHidden, 'sr-only');
      computedWidth = carousel.listWrapper.offsetWidth;
      Util.addClass(closestHidden, 'sr-only');
    } else if(isNaN(computedWidth)){
      computedWidth = getHiddenParentWidth(carousel.element, carousel);
    }
    return computedWidth;
  };

  function getHiddenParentWidth(element, carousel) {
    var parent = element.parentElement;
    if(parent.tagName.toLowerCase() == 'html') return 0;
    var style = window.getComputedStyle(parent);
    if(style.display == 'none' || style.visibility == 'hidden') {
      parent.setAttribute('style', 'display: block!important; visibility: visible!important;');
      var computedWidth = carousel.listWrapper.offsetWidth;
      parent.style.display = '';
      parent.style.visibility = '';
      return computedWidth;
    } else {
      return getHiddenParentWidth(parent, carousel);
    }
  };

  function resetCarouselControls(carousel) {
    if(carousel.options.loop) return;
    // update arrows status
    if(carousel.controls.length > 0) {
      (carousel.totTranslate == 0) 
        ? carousel.controls[0].setAttribute('disabled', true) 
        : carousel.controls[0].removeAttribute('disabled');
      (carousel.totTranslate == (- carousel.translateContainer - carousel.containerWidth) || carousel.items.length <= carousel.visibItemsNb) 
        ? carousel.controls[1].setAttribute('disabled', true) 
        : carousel.controls[1].removeAttribute('disabled');
    }
    // update carousel dots
    if(carousel.options.nav) {
      var selectedDot = carousel.navigation.getElementsByClassName(carousel.options.navigationItemClass+'--selected');
      if(selectedDot.length > 0) Util.removeClass(selectedDot[0], carousel.options.navigationItemClass+'--selected');

      var newSelectedIndex = getSelectedDot(carousel);
      if(carousel.totTranslate == (- carousel.translateContainer - carousel.containerWidth)) {
        newSelectedIndex = carousel.navDots.length - 1;
      }
      Util.addClass(carousel.navDots[newSelectedIndex], carousel.options.navigationItemClass+'--selected');
    }

    (carousel.totTranslate == 0 && (carousel.totTranslate == (- carousel.translateContainer - carousel.containerWidth) || carousel.items.length <= carousel.visibItemsNb))
        ? Util.addClass(carousel.element, 'carousel--hide-controls')
        : Util.removeClass(carousel.element, 'carousel--hide-controls');
  };

  function emitCarouselUpdateEvent(carousel) {
    carousel.cloneList = [];
    var clones = carousel.element.querySelectorAll('.js-clone');
    for(var i = 0; i < clones.length; i++) {
      Util.removeClass(clones[i], 'js-clone');
      carousel.cloneList.push(clones[i]);
    }
    emitCarouselEvents(carousel, 'carousel-updated', carousel.cloneList);
  };

  function carouselCreateNavigation(carousel) {
    if(carousel.element.getElementsByClassName('js-carousel__navigation').length > 0) return;
  
    var navigation = document.createElement('ol'),
      navChildren = '';

    var navClasses = carousel.options.navigationClass+' js-carousel__navigation';
    if(carousel.items.length <= carousel.visibItemsNb) {
      navClasses = navClasses + ' is-hidden';
    }
    navigation.setAttribute('class', navClasses);

    var dotsNr = Math.ceil(carousel.items.length/carousel.visibItemsNb),
      selectedDot = getSelectedDot(carousel),
      indexClass = carousel.options.navigationPagination ? '' : 'sr-only'
    for(var i = 0; i < dotsNr; i++) {
      var className = (i == selectedDot) ? 'class="'+carousel.options.navigationItemClass+' '+carousel.options.navigationItemClass+'--selected js-carousel__nav-item"' :  'class="'+carousel.options.navigationItemClass+' js-carousel__nav-item"';
      navChildren = navChildren + '<li '+className+'><button class="reset js-tab-focus" style="outline: none;"><span class="'+indexClass+'">'+ (i+1) + '</span></button></li>';
    }
    navigation.innerHTML = navChildren;
    carousel.element.appendChild(navigation);
  };

  function carouselInitNavigationEvents(carousel) {
    carousel.navigation = carousel.element.getElementsByClassName('js-carousel__navigation')[0];
    carousel.navDots = carousel.element.getElementsByClassName('js-carousel__nav-item');
    carousel.navIdEvent = carouselNavigationClick.bind(carousel);
    carousel.navigation.addEventListener('click', carousel.navIdEvent);
  };

  function carouselRemoveNavigation(carousel) {
    if(carousel.navigation) carousel.element.removeChild(carousel.navigation);
    if(carousel.navIdEvent) carousel.navigation.removeEventListener('click', carousel.navIdEvent);
  };

  function resetDotsNavigation(carousel) {
    if(!carousel.options.nav) return;
    carouselRemoveNavigation(carousel);
    carouselCreateNavigation(carousel);
    carouselInitNavigationEvents(carousel);
  };

  function carouselNavigationClick(event) {
    var dot = event.target.closest('.js-carousel__nav-item');
    if(!dot) return;
    if(this.animating) return;
    this.animating = true;
    var index = Util.getIndexInArray(this.navDots, dot);
    this.selectedDotIndex = index;
    this.selectedItem = index*this.visibItemsNb;
    animateList(this, false, 'click');
  };

  function getSelectedDot(carousel) {
    return Math.ceil(carousel.selectedItem/carousel.visibItemsNb);
  };

  function initCarouselCounter(carousel) {
    if(carousel.counterTor.length > 0) carousel.counterTor[0].textContent = carousel.itemsNb;
    setCounterItem(carousel);
  };

  function setCounterItem(carousel) {
    if(carousel.counter.length == 0) return;
    var totalItems = carousel.selectedItem + carousel.visibItemsNb;
    if(totalItems > carousel.items.length) totalItems = carousel.items.length;
    carousel.counter[0].textContent = totalItems;
  };

  function centerItems(carousel) {
    if(!carousel.options.justifyContent) return;
    Util.toggleClass(carousel.list, 'justify-center', carousel.items.length < carousel.visibItemsNb);
  };

  function alignControls(carousel) {
    if(carousel.controls.length < 1 || !carousel.options.alignControls) return;
    if(!carousel.controlsAlignEl) {
      carousel.controlsAlignEl = carousel.element.querySelector(carousel.options.alignControls);
    }
    if(!carousel.controlsAlignEl) return;
    var translate = (carousel.element.offsetHeight - carousel.controlsAlignEl.offsetHeight);
    for(var i = 0; i < carousel.controls.length; i++) {
      carousel.controls[i].style.marginBottom = translate + 'px';
    }
  };

  function emitCarouselActiveItemsEvent(carousel) {
    emitCarouselEvents(carousel, 'carousel-active-items', {firstSelectedItem: carousel.selectedItem, visibleItemsNb: carousel.visibItemsNb});
  };

  function emitCarouselEvents(carousel, eventName, eventDetail) {
    var event = new CustomEvent(eventName, {detail: eventDetail});
    carousel.element.dispatchEvent(event);
  };

  function resetVisibilityOverflowItems(carousel, j) {
    if(!carousel.options.overflowItems) return;
    var itemWidth = carousel.containerWidth/carousel.items.length,
      delta = (window.innerWidth - itemWidth*carousel.visibItemsNb)/2,
      overflowItems = Math.ceil(delta/itemWidth);

    for(var i = 0; i < overflowItems; i++) {
      var indexPrev = j - 1 - i; // prev element
      if(indexPrev >= 0 ) carousel.items[indexPrev].removeAttribute('tabindex');
      var indexNext = j + carousel.visibItemsNb + i; // next element
      if(indexNext < carousel.items.length) carousel.items[indexNext].removeAttribute('tabindex');
    }
  };

  Carousel.defaults = {
    element : '',
    autoplay : false,
    autoplayInterval: 5000,
    loop: true,
    nav: false,
    navigationItemClass: 'carousel__nav-item',
    navigationClass: 'carousel__navigation',
    navigationPagination: false,
    drag: false,
    justifyContent: false,
    alignControls: false,
    overflowItems: false
  };

  window.Carousel = Carousel;

  //initialize the Carousel objects
  var carousels = document.getElementsByClassName('js-carousel'),
    flexSupported = Util.cssSupports('align-items', 'stretch'),
    transitionSupported = Util.cssSupports('transition'),
    cssPropertiesSupported = ('CSS' in window && CSS.supports('color', 'var(--color-var)'));

  if( carousels.length > 0) {
    for( var i = 0; i < carousels.length; i++) {
      (function(i){
        var autoplay = (carousels[i].getAttribute('data-autoplay') && carousels[i].getAttribute('data-autoplay') == 'on') ? true : false,
          autoplayInterval = (carousels[i].getAttribute('data-autoplay-interval')) ? carousels[i].getAttribute('data-autoplay-interval') : 5000,
          drag = (carousels[i].getAttribute('data-drag') && carousels[i].getAttribute('data-drag') == 'on') ? true : false,
          loop = (carousels[i].getAttribute('data-loop') && carousels[i].getAttribute('data-loop') == 'off') ? false : true,
          nav = (carousels[i].getAttribute('data-navigation') && carousels[i].getAttribute('data-navigation') == 'on') ? true : false,
          navigationItemClass = carousels[i].getAttribute('data-navigation-item-class') ? carousels[i].getAttribute('data-navigation-item-class') : 'carousel__nav-item',
          navigationClass = carousels[i].getAttribute('data-navigation-class') ? carousels[i].getAttribute('data-navigation-class') : 'carousel__navigation',
          navigationPagination = (carousels[i].getAttribute('data-navigation-pagination') && carousels[i].getAttribute('data-navigation-pagination') == 'on') ? true : false,
          overflowItems = (carousels[i].getAttribute('data-overflow-items') && carousels[i].getAttribute('data-overflow-items') == 'on') ? true : false,
          alignControls = carousels[i].getAttribute('data-align-controls') ? carousels[i].getAttribute('data-align-controls') : false,
          justifyContent = (carousels[i].getAttribute('data-justify-content') && carousels[i].getAttribute('data-justify-content') == 'on') ? true : false;
        new Carousel({element: carousels[i], autoplay : autoplay, autoplayInterval : autoplayInterval, drag: drag, ariaLive: true, loop: loop, nav: nav, navigationItemClass: navigationItemClass, navigationPagination: navigationPagination, navigationClass: navigationClass, overflowItems: overflowItems, justifyContent: justifyContent, alignControls: alignControls});
      })(i);
    }
  };
}());



// File#: _1_masonry
// Usage: codyhouse.co/license

(function() {
  var Masonry = function(element) {
    this.element = element;
    this.list = this.element.getElementsByClassName('js-masonry__list')[0];
    this.items = this.element.getElementsByClassName('js-masonry__item');
    this.activeColumns = 0;
    this.colStartWidth = 0; // col min-width (defined in CSS using --masonry-col-auto-size variable)
    this.colWidth = 0; // effective column width
    this.colGap = 0;
    // store col heights and items
    this.colHeights = [];
    this.colItems = [];
    // flex full support
    this.flexSupported = checkFlexSupported(this.items[0]);
    getGridLayout(this); // get initial grid params
    setGridLayout(this); // set grid params (width of elements)
    initMasonryLayout(this); // init gallery layout
  };

  function checkFlexSupported(item) {
    var itemStyle = window.getComputedStyle(item);
    return itemStyle.getPropertyValue('flex-basis') != 'auto';
  };

  function getGridLayout(grid) { // this is used to get initial grid details (width/grid gap)
    var itemStyle = window.getComputedStyle(grid.items[0]);
    if( grid.colStartWidth == 0) {
      grid.colStartWidth = parseFloat(itemStyle.getPropertyValue('width'));
    }
    grid.colGap = parseFloat(itemStyle.getPropertyValue('margin-right'));
  };

  function setGridLayout(grid) { // set width of items in the grid
    var containerWidth = parseFloat(window.getComputedStyle(grid.element).getPropertyValue('width'));
    grid.activeColumns = parseInt((containerWidth + grid.colGap)/(grid.colStartWidth+grid.colGap));
    if(grid.activeColumns == 0) grid.activeColumns = 1;
    grid.colWidth = parseFloat((containerWidth - (grid.activeColumns - 1)*grid.colGap)/grid.activeColumns);
    for(var i = 0; i < grid.items.length; i++) {
      grid.items[i].style.width = grid.colWidth+'px'; // reset items width
    }
  };

  function initMasonryLayout(grid) {
    if(grid.flexSupported) {
      checkImgLoaded(grid); // reset layout when images are loaded
    } else {
      Util.addClass(grid.element, 'masonry--loaded'); // make sure the gallery is visible
    }

    grid.element.addEventListener('masonry-resize', function(){ // window has been resized -> reset masonry layout
      getGridLayout(grid);
      setGridLayout(grid);
      if(grid.flexSupported) layItems(grid); 
    });

    grid.element.addEventListener('masonry-reset', function(event){ // reset layout (e.g., new items added to the gallery)
      if(grid.flexSupported) checkImgLoaded(grid); 
    });
  };

  function layItems(grid) {
    Util.addClass(grid.element, 'masonry--loaded'); // make sure the gallery is visible
    grid.colHeights = [];
    grid.colItems = [];

    // grid layout has already been set -> update container height and order of items
    for(var j = 0; j < grid.activeColumns; j++) {
      grid.colHeights.push(0); // reset col heights
      grid.colItems[j] = []; // reset items order
    }
    
    for(var i = 0; i < grid.items.length; i++) {
      var minHeight = Math.min.apply( Math, grid.colHeights ),
        index = grid.colHeights.indexOf(minHeight);
      if(grid.colItems[index]) grid.colItems[index].push(i);
      grid.items[i].style.flexBasis = 0; // reset flex basis before getting height
      var itemHeight = grid.items[i].getBoundingClientRect().height || grid.items[i].offsetHeight || 1;
      grid.colHeights[index] = grid.colHeights[index] + grid.colGap + itemHeight;
    }

    // reset height of container
    var masonryHeight = Math.max.apply( Math, grid.colHeights ) + 5;
    grid.list.style.cssText = 'height: '+ masonryHeight + 'px;';

    // go through elements and set flex order
    var order = 0;
    for(var i = 0; i < grid.colItems.length; i++) {
      for(var j = 0; j < grid.colItems[i].length; j++) {
        grid.items[grid.colItems[i][j]].style.order = order;
        order = order + 1;
      }
      // change flex-basis of last element of each column, so that next element shifts to next col
      var lastItemCol = grid.items[grid.colItems[i][grid.colItems[i].length - 1]];
      lastItemCol.style.flexBasis = masonryHeight - grid.colHeights[i] + lastItemCol.getBoundingClientRect().height - 5 + 'px';
    }

    // emit custom event when grid has been reset
    grid.element.dispatchEvent(new CustomEvent('masonry-laid'));
  };

  function checkImgLoaded(grid) {
    var imgs = grid.list.getElementsByTagName('img');

    function countLoaded() {
      var setTimeoutOn = false;
      for(var i = 0; i < imgs.length; i++) {
        if(!imgs[i].complete) {
          setTimeoutOn = true;
          break;
        } else if (typeof imgs[i].naturalHeight !== "undefined" && imgs[i].naturalHeight == 0) {
          setTimeoutOn = true;
          break;
        }
      }

      if(!setTimeoutOn) {
        layItems(grid);
      } else {
        setTimeout(function(){
          countLoaded();
        }, 100);
      }
    };

    if(imgs.length == 0) {
      layItems(grid); // no need to wait -> no img available
    } else {
      countLoaded();
    }
  };

  //initialize the Masonry objects
  var masonries = document.getElementsByClassName('js-masonry'), 
    flexSupported = Util.cssSupports('flex-basis', 'auto'),
    masonriesArray = [];

  if( masonries.length > 0) {
    for( var i = 0; i < masonries.length; i++) {
      if(!flexSupported) {
        Util.addClass(masonries[i], 'masonry--loaded'); // reveal gallery
      } else {
        (function(i){masonriesArray.push(new Masonry(masonries[i]));})(i); // init Masonry Layout
      }
    }

    if(!flexSupported) return;

    // listen to window resize -> reorganize items in gallery
    var resizingId = false,
      customEvent = new CustomEvent('masonry-resize');
      
    window.addEventListener('resize', function() {
      clearTimeout(resizingId);
      resizingId = setTimeout(doneResizing, 500);
    });

    function doneResizing() {
      for( var i = 0; i < masonriesArray.length; i++) {
        (function(i){masonriesArray[i].element.dispatchEvent(customEvent)})(i);
      };
    };
  };
}());


// File#: _2_image-zoom
// Usage: codyhouse.co/license

(function() {
  var ImageZoom = function(element, index) {
    this.element = element;
    this.lightBoxId = 'img-zoom-lightbox--'+index;
    this.imgPreview = this.element.getElementsByClassName('js-image-zoom__preview')[0];
    
    initImageZoomHtml(this); // init markup
    
    this.lightbox = document.getElementById(this.lightBoxId);
    this.imgEnlg = this.lightbox.getElementsByClassName('js-image-zoom__fw')[0];
    this.input = this.element.getElementsByClassName('js-image-zoom__input')[0];
    this.animate = this.element.getAttribute('data-morph') != 'off';
    
    initImageZoomEvents(this); //init events
  };

  function initImageZoomHtml(imageZoom) {
    // get zoomed image url
    var url = imageZoom.element.getAttribute('data-img');
    if(!url) url = imageZoom.imgPreview.getAttribute('src');

    var lightBox = document.createElement('div');
    Util.setAttributes(lightBox, {class: 'image-zoom__lightbox js-image-zoom__lightbox', id: imageZoom.lightBoxId, 'aria-hidden': 'true'});
    lightBox.innerHTML = '<img src="'+url+'" class="js-image-zoom__fw"></img>';
    document.body.appendChild(lightBox);
    
    var keyboardInput = '<input aria-hidden="true" type="checkbox" class="image-zoom__input js-image-zoom__input"></input>';
    imageZoom.element.insertAdjacentHTML('afterbegin', keyboardInput);

  };

  function initImageZoomEvents(imageZoom) {
    // toggle lightbox on click
    imageZoom.imgPreview.addEventListener('click', function(event){
      toggleFullWidth(imageZoom, true);
      imageZoom.input.checked = true;
    });
    imageZoom.lightbox.addEventListener('click', function(event){
      toggleFullWidth(imageZoom, false);
      imageZoom.input.checked = false;
    });
    // detect swipe down to close lightbox
    new SwipeContent(imageZoom.lightbox);
    imageZoom.lightbox.addEventListener('swipeDown', function(event){
      toggleFullWidth(imageZoom, false);
      imageZoom.input.checked = false;
    });
    // keyboard accessibility
    imageZoom.input.addEventListener('change', function(event){
      toggleFullWidth(imageZoom, imageZoom.input.checked);
    });
    imageZoom.input.addEventListener('keydown', function(event){
      if( (event.keyCode && event.keyCode == 13) || (event.key && event.key.toLowerCase() == 'enter') ) {
        imageZoom.input.checked = !imageZoom.input.checked;
        toggleFullWidth(imageZoom, imageZoom.input.checked);
      }
    });
  };

  function toggleFullWidth(imageZoom, bool) {
    if(animationSupported && imageZoom.animate) { // start expanding animation
      window.requestAnimationFrame(function(){
        animateZoomImage(imageZoom, bool);
      });
    } else { // show lightbox without animation
      Util.toggleClass(imageZoom.lightbox, 'image-zoom__lightbox--is-visible', bool);
    }
  };

  function animateZoomImage(imageZoom, bool) {
    // get img preview position and dimension for the morphing effect
    var rect = imageZoom.imgPreview.getBoundingClientRect(),
      finalWidth = imageZoom.lightbox.getBoundingClientRect().width;
    var init = (bool) ? [rect.top, rect.left, rect.width] : [0, 0, finalWidth],
      final = (bool) ? [-rect.top, -rect.left, parseFloat(finalWidth/rect.width)] : [rect.top + imageZoom.lightbox.scrollTop, rect.left, parseFloat(rect.width/finalWidth)];
    
    if(bool) {
      imageZoom.imgEnlg.setAttribute('style', 'top: '+init[0]+'px; left:'+init[1]+'px; width:'+init[2]+'px;');
    }
    
    // show modal
    Util.removeClass(imageZoom.lightbox, 'image-zoom__lightbox--no-transition');
    Util.addClass(imageZoom.lightbox, 'image-zoom__lightbox--is-visible');

    imageZoom.imgEnlg.addEventListener('transitionend', function cb(event){ // reset elements once animation is over
      if(!bool) Util.removeClass(imageZoom.lightbox, 'image-zoom__lightbox--is-visible');
      Util.addClass(imageZoom.lightbox, 'image-zoom__lightbox--no-transition');
      imageZoom.imgEnlg.removeAttribute('style');
      imageZoom.imgEnlg.removeEventListener('transitionend', cb);
    });
    
    // animate image and bg
    imageZoom.imgEnlg.style.transform = 'translateX('+final[1]+'px) translateY('+final[0]+'px) scale('+final[2]+')';
    Util.toggleClass(imageZoom.lightbox, 'image-zoom__lightbox--animate-bg', bool);
  };

  // init ImageZoom object
  var imageZoom = document.getElementsByClassName('js-image-zoom'),
    animationSupported = window.requestAnimationFrame && !Util.osHasReducedMotion();
  if( imageZoom.length > 0 ) {
    var imageZoomArray = [];
    for( var i = 0; i < imageZoom.length; i++) {
      imageZoomArray.push(new ImageZoom(imageZoom[i], i));
    }

    // close Zoom Image lightbox on Esc
    window.addEventListener('keydown', function(event){
      if((event.keyCode && event.keyCode == 27) || (event.key && event.key.toLowerCase() == 'esc')) {
        for( var i = 0; i < imageZoomArray.length; i++) {
          imageZoomArray[i].input.checked = false;
          if(Util.hasClass(imageZoomArray[i].lightbox, 'image-zoom__lightbox--is-visible')) toggleFullWidth(imageZoomArray[i], false);
        }
      }
    });
  }
}());

// File#: _2_chart
// Usage: codyhouse.co/license
(function() {
  var Chart = function(opts) {
    this.options = Util.extend(Chart.defaults , opts);
    this.element = this.options.element.getElementsByClassName('js-chart__area')[0];
    this.svgPadding = this.options.padding;
    this.topDelta = this.svgPadding;
    this.bottomDelta = 0;
    this.leftDelta = 0;
    this.rightDelta = 0;
    this.legendHeight = 0;
    this.yChartMaxWidth = 0;
    this.yAxisHeight = 0;
    this.xAxisWidth = 0;
    this.yAxisInterval = []; // used to store min and max value on y axis
    this.xAxisInterval = []; // used to store min and max value on x axis
    this.datasetScaled = []; // used to store set data converted to chart coordinates
    this.datasetScaledFlat = []; // used to store set data converted to chart coordinates for animation
    this.datasetAreaScaled = []; // used to store set data (area part) converted to chart coordinates
    this.datasetAreaScaledFlat = []; // used to store set data (area part)  converted to chart coordinates for animation
    // columns chart - store if x axis label where rotated
    this.xAxisLabelRotation = false;
    // tooltip
    this.interLine = false;
    this.markers = false;
    this.tooltipOn = this.options.tooltip && this.options.tooltip.enabled;
    this.tooltipClasses = (this.tooltipOn && this.options.tooltip.classes) ? this.options.tooltip.classes : '';
    this.tooltipPosition = (this.tooltipOn && this.options.tooltip.position) ? this.options.tooltip.position : false;
    this.tooltipDelta = 10;
    this.selectedMarker = false;
    this.selectedMarkerClass = 'chart__marker--selected';
    this.selectedBarClass = 'chart__data-bar--selected';
    this.hoverId = false;
    this.hovering = false;
    // events id
    this.eventIds = []; // will use to store event ids
    // accessibility
    this.categories = this.options.element.getElementsByClassName('js-chart__category');
    this.loaded = false;
    // init chart
    initChartInfo(this);
    initChart(this);
    // if externalDate == true
    initExternalData(this);
  };

  function initChartInfo(chart) {
    // we may need to store store some initial config details before setting up the chart
    if(chart.options.type == 'column') {
      setChartColumnSize(chart);
    }
  };

  function initChart(chart) {
    if(chart.options.datasets.length == 0) return; // no data where provided
    if(!intObservSupported) chart.options.animate = false; // do not animate if intersectionObserver is not supported
    // init event ids variables
    intEventIds(chart);
    setChartSize(chart);
    createChartSvg(chart);
    createSrTables(chart); // chart accessibility
    animateChart(chart); // if animate option is true
    resizeChart(chart);
    chart.loaded = true;
  };

  function intEventIds(chart) {
    chart.eventIds['resize'] = false;
  };

  function setChartSize(chart) {
    chart.height = chart.element.clientHeight;
    chart.width = chart.element.clientWidth;
  };

  function createChartSvg(chart) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="'+chart.width+'" height="'+chart.height+'" class="chart__svg js-chart__svg"></svg>';
    chart.element.innerHTML = svg;
    chart.svg = chart.element.getElementsByClassName('js-chart__svg')[0];

    // create chart content
    switch (chart.options.type) {
      case 'pie':
        getPieSvgCode(chart);
        break;
      case 'doughnut':
        getDoughnutSvgCode(chart);
        break;
      case 'column':
        getColumnSvgCode(chart);
        break;
      default:
        getLinearSvgCode(chart);
    }
  };

  function getLinearSvgCode(chart) { // svg for linear + area charts
    setYAxis(chart);
    setXAxis(chart);
    updateChartWidth(chart);
    placexAxisLabels(chart);
    placeyAxisLabels(chart);
    setChartDatasets(chart);
    initTooltips(chart);
  };

  function getColumnSvgCode(chart) { // svg for column charts
    setYAxis(chart);
    setXAxis(chart);
    updateChartWidth(chart);
    placexAxisLabels(chart);
    placeyAxisLabels(chart);
    resetColumnChart(chart);
    setColumnChartDatasets(chart);
    initTooltips(chart);
  };

  function setXAxis(chart) {
    // set legend of axis if available
    if( chart.options.xAxis && chart.options.xAxis.legend) {
      var textLegend = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textLegend.textContent = chart.options.xAxis.legend;
      Util.setAttributes(textLegend, {class: 'chart__axis-legend chart__axis-legend--x js-chart__axis-legend--x'});
      chart.svg.appendChild(textLegend);

      var xLegend = chart.element.getElementsByClassName('js-chart__axis-legend--x')[0];

      if(isVisible(xLegend)) {
        var size = xLegend.getBBox(),
          xPosition = chart.width/2 - size.width/2,
          yPosition = chart.height - chart.bottomDelta;

        Util.setAttributes(xLegend, {x: xPosition, y: yPosition});
        chart.bottomDelta = chart.bottomDelta + size.height +chart.svgPadding;
      }
    }

    // get interval and create scale
    var xLabels;
    if(chart.options.xAxis && chart.options.xAxis.labels && chart.options.xAxis.labels.length > 1) {
      xLabels = chart.options.xAxis.labels;
      chart.xAxisInterval = [0, chart.options.xAxis.labels.length - 1];
    } else {
      xLabels = getChartXLabels(chart); // this function is used to set chart.xAxisInterval as well
    }
    // modify axis labels
    if(chart.options.xAxis && chart.options.xAxis.labelModifier) {
      xLabels = modifyAxisLabel(xLabels, chart.options.xAxis.labelModifier);
    } 

    var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    Util.setAttributes(gEl, {class: 'chart__axis-labels chart__axis-labels--x js-chart__axis-labels--x'});

    for(var i = 0; i < xLabels.length; i++) {
      var textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      var labelClasses = (chart.options.xAxis && chart.options.xAxis.labels) ? 'chart__axis-label chart__axis-label--x js-chart__axis-label' : 'is-hidden js-chart__axis-label';
      Util.setAttributes(textEl, {class: labelClasses, 'alignment-baseline': 'middle'});
      textEl.textContent = xLabels[i];
      gEl.appendChild(textEl);
    }
    
    if(chart.options.xAxis && chart.options.xAxis.line) {
      var lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      Util.setAttributes(lineEl, {class: 'chart__axis chart__axis--x js-chart__axis--x', 'stroke-linecap': 'square'});
      gEl.appendChild(lineEl);
    }

    var ticksLength = xLabels.length;
    if(chart.options.type == 'column') ticksLength = ticksLength + 1;
    
    for(var i = 0; i < ticksLength; i++) {
      var tickEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      var classTicks = (chart.options.xAxis && chart.options.xAxis.ticks) ? 'chart__tick chart__tick-x js-chart__tick-x' : 'js-chart__tick-x';
      Util.setAttributes(tickEl, {class: classTicks, 'stroke-linecap': 'square'});
      gEl.appendChild(tickEl);
    }

    chart.svg.appendChild(gEl);
  };

  function setYAxis(chart) {
    // set legend of axis if available
    if( chart.options.yAxis && chart.options.yAxis.legend) {
      var textLegend = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textLegend.textContent = chart.options.yAxis.legend;
      textLegend.setAttribute('class', 'chart__axis-legend chart__axis-legend--y js-chart__axis-legend--y');
      chart.svg.appendChild(textLegend);

      var yLegend = chart.element.getElementsByClassName('js-chart__axis-legend--y')[0];
      if(isVisible(yLegend)) {
        var height = yLegend.getBBox().height,
          xPosition = chart.leftDelta + height/2,
          yPosition = chart.topDelta;
    
        Util.setAttributes(yLegend, {x: xPosition, y: yPosition});
        chart.leftDelta = chart.leftDelta + height + chart.svgPadding;
      }
    }
    // get interval and create scale
    var yLabels;
    if(chart.options.yAxis && chart.options.yAxis.labels && chart.options.yAxis.labels.length > 1) {
      yLabels = chart.options.yAxis.labels;
      chart.yAxisInterval = [0, chart.options.yAxis.labels.length - 1];
    } else {
      yLabels = getChartYLabels(chart); // this function is used to set chart.yAxisInterval as well
    }

    // modify axis labels
    if(chart.options.yAxis && chart.options.yAxis.labelModifier) {
      yLabels = modifyAxisLabel(yLabels, chart.options.yAxis.labelModifier);
    } 

    var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    Util.setAttributes(gEl, {class: 'chart__axis-labels chart__axis-labels--y js-chart__axis-labels--y'});

    for(var i = yLabels.length - 1; i >= 0; i--) {
      var textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      var labelClasses = (chart.options.yAxis && chart.options.yAxis.labels) ? 'chart__axis-label chart__axis-label--y js-chart__axis-label' : 'is-hidden js-chart__axis-label';
      Util.setAttributes(textEl, {class: labelClasses, 'alignment-baseline': 'middle'});
      textEl.textContent = yLabels[i];
      gEl.appendChild(textEl);
    }

    if(chart.options.yAxis && chart.options.yAxis.line) {
      var lineEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      Util.setAttributes(lineEl, {class: 'chart__axis chart__axis--y js-chart__axis--y', 'stroke-linecap': 'square'});
      gEl.appendChild(lineEl);
    }

    var hideGuides = chart.options.xAxis && chart.options.xAxis.hasOwnProperty('guides') && !chart.options.xAxis.guides;
    for(var i = 1; i < yLabels.length; i++ ) {
      var rectEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      Util.setAttributes(rectEl, {class: 'chart__guides js-chart__guides'});
      if(hideGuides) {
        Util.setAttributes(rectEl, {class: 'chart__guides js-chart__guides opacity-0'});
      }
      gEl.appendChild(rectEl);
    }
    chart.svg.appendChild(gEl);
  };

  function updateChartWidth(chart) {
    var labels = chart.element.getElementsByClassName('js-chart__axis-labels--y')[0].querySelectorAll('.js-chart__axis-label');

    if(isVisible(labels[0])) {
      chart.yChartMaxWidth = getLabelMaxSize(labels, 'width');
      chart.leftDelta = chart.leftDelta + chart.svgPadding + chart.yChartMaxWidth + chart.svgPadding;
    } else {
      chart.leftDelta = chart.leftDelta + chart.svgPadding;
    }

    var xLabels = chart.element.getElementsByClassName('js-chart__axis-labels--x')[0].querySelectorAll('.js-chart__axis-label');
    if(isVisible(xLabels[0]) && !isVisible(labels[0])) {
      chart.leftDelta = chart.leftDelta + xLabels[0].getBBox().width*0.5;
    }
  };

  function placeyAxisLabels(chart) {
    var labels = chart.element.getElementsByClassName('js-chart__axis-labels--y')[0].querySelectorAll('.js-chart__axis-label');

    var labelsVisible = isVisible(labels[0]);
    var height = 0;
    if(labelsVisible) height = labels[0].getBBox().height*0.5;
    
    // update topDelta and set chart height
    chart.topDelta = chart.topDelta + height + chart.svgPadding;
    chart.yAxisHeight = chart.height - chart.topDelta - chart.bottomDelta;

    var yDelta = chart.yAxisHeight/(labels.length - 1);

    var gridRect = chart.element.getElementsByClassName('js-chart__guides'),
      dasharray = ""+chart.xAxisWidth+" "+(2*(chart.xAxisWidth + yDelta))+"";

    for(var i = 0; i < labels.length; i++) {
      var labelWidth = 0;
      if(labelsVisible) labelWidth = labels[i].getBBox().width;
      // chart.leftDelta has already been updated in updateChartWidth() function
      Util.setAttributes(labels[i], {x: chart.leftDelta - labelWidth - 2*chart.svgPadding, y: chart.topDelta + yDelta*i });
      // place grid rectangles
      if(gridRect[i]) Util.setAttributes(gridRect[i], {x: chart.leftDelta, y: chart.topDelta + yDelta*i, height: yDelta, width: chart.xAxisWidth, 'stroke-dasharray': dasharray});
    }

    // place the y axis
    var yAxis = chart.element.getElementsByClassName('js-chart__axis--y');
    if(yAxis.length > 0) {
      Util.setAttributes(yAxis[0], {x1: chart.leftDelta, x2: chart.leftDelta, y1: chart.topDelta, y2: chart.topDelta + chart.yAxisHeight})
    }
    // center y axis label
    var yLegend = chart.element.getElementsByClassName('js-chart__axis-legend--y');
    if(yLegend.length > 0 && isVisible(yLegend[0]) ) {
      var position = yLegend[0].getBBox(),
        height = position.height,
        yPosition = position.y + 0.5*(chart.yAxisHeight + position.width),
        xPosition = position.x + height/4;
      
      Util.setAttributes(yLegend[0], {y: yPosition, x: xPosition, transform: 'rotate(-90 '+(position.x + height)+' '+(yPosition + height/2)+')'});
    }
  };

  function placexAxisLabels(chart) {
    var labels = chart.element.getElementsByClassName('js-chart__axis-labels--x')[0].querySelectorAll('.js-chart__axis-label');
    var ticks = chart.element.getElementsByClassName('js-chart__tick-x');

    // increase rightDelta value
    var labelWidth = 0,
      labelsVisible = isVisible(labels[labels.length - 1]);
    if(labelsVisible) labelWidth = labels[labels.length - 1].getBBox().width;
    if(chart.options.type != 'column') {
      chart.rightDelta = chart.rightDelta + labelWidth*0.5 + chart.svgPadding;
    } else {
      chart.rightDelta = chart.rightDelta + 4;
    }
    chart.xAxisWidth = chart.width - chart.leftDelta - chart.rightDelta;
    

    var maxHeight = getLabelMaxSize(labels, 'height'),
      maxWidth = getLabelMaxSize(labels, 'width'),
      xDelta = chart.xAxisWidth/(labels.length - 1);

    if(chart.options.type == 'column') xDelta = chart.xAxisWidth/labels.length;

    var totWidth = 0,
      height = 0;
    if(labelsVisible)  height = labels[0].getBBox().height;

    for(var i = 0; i < labels.length; i++) {
      var width = 0;
      if(labelsVisible) width = labels[i].getBBox().width;
      // label
      Util.setAttributes(labels[i], {y: chart.height - chart.bottomDelta - height/2, x: chart.leftDelta + xDelta*i - width/2});
      // tick
      Util.setAttributes(ticks[i], {y1: chart.height - chart.bottomDelta - maxHeight - chart.svgPadding, y2: chart.height - chart.bottomDelta - maxHeight - chart.svgPadding + 5, x1: chart.leftDelta + xDelta*i, x2: chart.leftDelta + xDelta*i});
      totWidth = totWidth + width + 4;
    }
    // for columns chart -> there's an additional tick element
    if(chart.options.type == 'column' && ticks[labels.length]) {
      Util.setAttributes(ticks[labels.length], {y1: chart.height - chart.bottomDelta - maxHeight - chart.svgPadding, y2: chart.height - chart.bottomDelta - maxHeight - chart.svgPadding + 5, x1: chart.leftDelta + xDelta*labels.length, x2: chart.leftDelta + xDelta*labels.length});
    }
    //check if we need to rotate chart label -> not enough space
    if(totWidth >= chart.xAxisWidth) {
      chart.xAxisLabelRotation = true;
      rotatexAxisLabels(chart, labels, ticks, maxWidth - maxHeight);
      maxHeight = maxWidth;
    } else {
      chart.xAxisLabelRotation = false;
    }

    chart.bottomDelta = chart.bottomDelta + chart.svgPadding + maxHeight;

    // place the x axis
    var xAxis = chart.element.getElementsByClassName('js-chart__axis--x');
    if(xAxis.length > 0) {
      Util.setAttributes(xAxis[0], {x1: chart.leftDelta, x2: chart.width - chart.rightDelta, y1: chart.height - chart.bottomDelta, y2: chart.height - chart.bottomDelta})
    }

    // center x-axis label
    var xLegend = chart.element.getElementsByClassName('js-chart__axis-legend--x');
    if(xLegend.length > 0 && isVisible(xLegend[0])) {
      xLegend[0].setAttribute('x', chart.leftDelta + 0.5*(chart.xAxisWidth - xLegend[0].getBBox().width));
    }
  };

  function rotatexAxisLabels(chart, labels, ticks, delta) {
    // there's not enough horiziontal space -> we need to rotate the x axis labels
    for(var i = 0; i < labels.length; i++) {
      var dimensions = labels[i].getBBox(),
        xCenter = parseFloat(labels[i].getAttribute('x')) + dimensions.width/2,
        yCenter = parseFloat(labels[i].getAttribute('y'))  - delta;

      Util.setAttributes(labels[i], {y: parseFloat(labels[i].getAttribute('y')) - delta, transform: 'rotate(-45 '+xCenter+' '+yCenter+')'});

      ticks[i].setAttribute('transform', 'translate(0 -'+delta+')');
    }
    if(ticks[labels.length]) ticks[labels.length].setAttribute('transform', 'translate(0 -'+delta+')');
  };

  function setChartDatasets(chart) {
    var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    gEl.setAttribute('class', 'chart__dataset js-chart__dataset');
    chart.datasetScaled = [];
    for(var i = 0; i < chart.options.datasets.length; i++) {
      var gSet = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      gSet.setAttribute('class', 'chart__set chart__set--'+(i+1)+' js-chart__set');
      chart.datasetScaled[i] = JSON.parse(JSON.stringify(chart.options.datasets[i].data));
      chart.datasetScaled[i] = getChartData(chart, chart.datasetScaled[i]);
      chart.datasetScaledFlat[i] = JSON.parse(JSON.stringify(chart.datasetScaled[i]));
      if(chart.options.type == 'area') {
        chart.datasetAreaScaled[i] = getAreaPointsFromLine(chart, chart.datasetScaled[i]);
        chart.datasetAreaScaledFlat[i] = JSON.parse(JSON.stringify(chart.datasetAreaScaled[i]));
      }
      if(!chart.loaded && chart.options.animate) {
        flatDatasets(chart, i);
      }
      gSet.appendChild(getPath(chart, chart.datasetScaledFlat[i], chart.datasetAreaScaledFlat[i], i));
      gSet.appendChild(getMarkers(chart, chart.datasetScaled[i], i));
      gEl.appendChild(gSet);
    }
    
    chart.svg.appendChild(gEl);
  };

  function getChartData(chart, data) {
    var multiSet = data[0].length > 1;
    var points = multiSet ? data : addXData(data); // addXData is used for one-dimension dataset; e.g. [2, 4, 6] rather than [[2, 4], [4, 7]]
    
    // xOffsetChart used for column chart type onlymodified
    var xOffsetChart = chart.xAxisWidth/(points.length-1) - chart.xAxisWidth/points.length;
    // now modify the points to coordinate relative to the svg 
    for(var i = 0; i < points.length; i++) {
      var xNewCoordinate = chart.leftDelta + chart.xAxisWidth*(points[i][0] - chart.xAxisInterval[0])/(chart.xAxisInterval[1] - chart.xAxisInterval[0]),
        yNewCoordinate = chart.height - chart.bottomDelta - chart.yAxisHeight*(points[i][1] - chart.yAxisInterval[0])/(chart.yAxisInterval[1] - chart.yAxisInterval[0]);
      if(chart.options.type == 'column') {
        xNewCoordinate = xNewCoordinate - i*xOffsetChart;
      }
      points[i] = [xNewCoordinate, yNewCoordinate];
    }
    return points;
  };

  function getPath(chart, points, areaPoints, index) {
    var pathCode = chart.options.smooth ? getSmoothLine(points, false) : getStraightLine(points);
    
    var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
      pathL = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      
    Util.setAttributes(pathL, {d: pathCode, class: 'chart__data-line chart__data-line--'+(index+1)+' js-chart__data-line--'+(index+1)});

    if(chart.options.type == 'area') {
      var areaCode = chart.options.smooth ? getSmoothLine(areaPoints, true) : getStraightLine(areaPoints);
      var pathA = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      Util.setAttributes(pathA, {d: areaCode, class: 'chart__data-fill chart__data-fill--'+(index+1)+' js-chart__data-fill--'+(index+1)});
      gEl.appendChild(pathA);
    }
   
    gEl.appendChild(pathL);
    return gEl;
  };

  function getStraightLine(points) {
    var dCode = '';
    for(var i = 0; i < points.length; i++) {
      dCode = (i == 0) ? 'M '+points[0][0]+','+points[0][1] : dCode+ ' L '+points[i][0]+','+points[i][1];
    }
    return dCode;
  };

  function flatDatasets(chart, index) {
    var bottomY = getBottomFlatDatasets(chart);
    for(var i = 0; i < chart.datasetScaledFlat[index].length; i++) {
      chart.datasetScaledFlat[index][i] = [chart.datasetScaled[index][i][0], bottomY];
    }
    if(chart.options.type == 'area') {
      chart.datasetAreaScaledFlat[index] = getAreaPointsFromLine(chart, chart.datasetScaledFlat[index]);
    }
  };

  // https://medium.com/@francoisromain/smooth-a-svg-path-with-cubic-bezier-curves-e37b49d46c74
  function getSmoothLine(points, bool) {
    var dCode = '';
    var maxVal = points.length;
    var pointsLoop = JSON.parse(JSON.stringify(points));
    if(bool) {
      maxVal = maxVal - 3;
      pointsLoop.splice(-3, 3);
    }
    for(var i = 0; i < maxVal; i++) {
      if(i == 0) dCode = 'M '+points[0][0]+','+points[0][1];
      else dCode = dCode + ' '+bezierCommand(points[i], i, pointsLoop);
    }
    if(bool) {
      for(var j = maxVal; j < points.length; j++) {
        dCode = dCode + ' L '+points[j][0]+','+points[j][1];
      }
    }
    return dCode;
  };  
  
  function pathLine(pointA, pointB) {
    var lengthX = pointB[0] - pointA[0];
    var lengthY = pointB[1] - pointA[1];

    return {
      length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
      angle: Math.atan2(lengthY, lengthX)
    };
  };

  function pathControlPoint(current, previous, next, reverse) {
    var p = previous || current;
    var n = next || current;
    var smoothing = 0.2;
    var o = pathLine(p, n);

    var angle = o.angle + (reverse ? Math.PI : 0);
    var length = o.length * smoothing;

    var x = current[0] + Math.cos(angle) * length;
    var y = current[1] + Math.sin(angle) * length;
    return [x, y];
  };

  function bezierCommand(point, i, a) {
    var cps =  pathControlPoint(a[i - 1], a[i - 2], point);
    var cpe = pathControlPoint(point, a[i - 1], a[i + 1], true);
    return "C "+cps[0]+','+cps[1]+' '+cpe[0]+','+cpe[1]+' '+point[0]+','+point[1];
  };

  function getAreaPointsFromLine(chart, array) {
    var points = JSON.parse(JSON.stringify(array)),
      firstPoint = points[0],
      lastPoint = points[points.length -1];

    var boottomY = getBottomFlatDatasets(chart); 
    points.push([lastPoint[0], boottomY]);
    points.push([chart.leftDelta, boottomY]);
    points.push([chart.leftDelta, firstPoint[1]]);
    return points;
  };

  function getBottomFlatDatasets(chart) {
    var bottom = chart.height - chart.bottomDelta;
    if(chart.options.fillOrigin ) {
      bottom = chart.height - chart.bottomDelta - chart.yAxisHeight*(0 - chart.yAxisInterval[0])/(chart.yAxisInterval[1] - chart.yAxisInterval[0]);
    }
    if(chart.options.type && chart.options.type == 'column') {
      bottom = chart.yZero; 
    }
    return bottom;
  };

  function getMarkers(chart, points, index) {
    // see if we need to show tooltips 
    var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    var xOffset = 0;
    if(chart.options.type == 'column') {
      xOffset = 0.5*chart.xAxisWidth/points.length;
    }
    for(var i = 0; i < points.length; i++) {
      var marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      Util.setAttributes(marker, {class: 'chart__marker js-chart__marker chart__marker--'+(index+1), cx: points[i][0] + xOffset, cy: points[i][1], r: 2, 'data-set': index, 'data-index': i});
      gEl.appendChild(marker);
    }
    return gEl;
  };

  function addXData(data) {
    var multiData = [];
    for(var i = 0; i < data.length; i++) {
      multiData.push([i, data[i]]);
    }
    return multiData;
  };

  function createSrTables(chart) {
    // create a table element for accessibility reasons
    var table = '<div class="chart__sr-table sr-only">';
    for(var i = 0; i < chart.options.datasets.length; i++) {
      table = table + createDataTable(chart, i);
    }
    table = table + '</div>';
    chart.element.insertAdjacentHTML('afterend', table);
  };

  function createDataTable(chart, index) {
    var tableTitle = (chart.categories.length > index ) ? 'aria-label="'+chart.categories.length[index].textContent+'"': '';
    var table = '<table '+tableTitle+'><thead><tr>';
    table = (chart.options.xAxis && chart.options.xAxis.legend) 
      ? table + '<th scope="col">'+chart.options.xAxis.legend+'</th>'
      : table + '<th scope="col"></th>';
      
    table = (chart.options.yAxis && chart.options.yAxis.legend) 
      ? table + '<th scope="col">'+chart.options.yAxis.legend+'</th>'
      : table + '<th scope="col"></th>';

    table = table + '</thead><tbody>';
    var multiset = chart.options.datasets[index].data[0].length > 1,
      xAxisLabels = chart.options.xAxis && chart.options.xAxis.labels && chart.options.xAxis.labels.length > 1;
    for(var i = 0; i < chart.options.datasets[index].data.length; i++) {
      table = table + '<tr>';
      if(multiset) {
        table = table + '<td role="cell">'+chart.options.datasets[index].data[i][0]+'</td><td role="cell">'+chart.options.datasets[index].data[i][1]+'</td>';
      } else {
        var xValue = xAxisLabels ? chart.options.xAxis.labels[i]: (i + 1);
        table = table + '<td role="cell">'+xValue+'</td><td role="cell">'+chart.options.datasets[index].data[i]+'</td>';
      }
      table = table + '</tr>';
    }
    table = table + '</tbody></table>';
    return table;
  }

  function getChartYLabels(chart) {
    var labels = [],
      intervals = 0;
    if(chart.options.yAxis && chart.options.yAxis.range && chart.options.yAxis.step) {
      intervals = Math.ceil((chart.options.yAxis.range[1] - chart.options.yAxis.range[0])/chart.options.yAxis.step);
      for(var i = 0; i <= intervals; i++) {
        labels.push(chart.options.yAxis.range[0] + chart.options.yAxis.step*i);
      }
      chart.yAxisInterval = [chart.options.yAxis.range[0], chart.options.yAxis.range[1]];
    } else {
      var columnChartStacked = (chart.options.type && chart.options.type == 'column' && chart.options.stacked);
      if(columnChartStacked) setDatasetsSum(chart);
      var min = columnChartStacked ? getColStackedMinDataValue(chart) : getMinDataValue(chart, true);
      var max = columnChartStacked ? getColStackedMaxDataValue(chart) : getMaxDataValue(chart, true);
      var niceScale = new NiceScale(min, max, 5);
      var intervals = Math.ceil((niceScale.getNiceUpperBound() - niceScale.getNiceLowerBound()) /niceScale.getTickSpacing());

      for(var i = 0; i <= intervals; i++) {
        labels.push(niceScale.getNiceLowerBound() + niceScale.getTickSpacing()*i);
      }
      chart.yAxisInterval = [niceScale.getNiceLowerBound(), niceScale.getNiceUpperBound()];
    }
    return labels;
  };

  function getChartXLabels(chart) {
    var labels = [],
      intervals = 0;
    if(chart.options.xAxis && chart.options.xAxis.range && chart.options.xAxis.step) {
      intervals = Math.ceil((chart.options.xAxis.range[1] - chart.options.xAxis.range[0])/chart.options.xAxis.step);
      for(var i = 0; i <= intervals; i++) {
        labels.push(chart.options.xAxis.range[0] + chart.options.xAxis.step*i);
      }
      chart.xAxisInterval = [chart.options.xAxis.range[0], chart.options.xAxis.range[1]];
    } else if(!chart.options.datasets[0].data[0].length || chart.options.datasets[0].data[0].length < 2) {
      // data sets are passed with a single value (y axis only)
      chart.xAxisInterval = [0, chart.options.datasets[0].data.length - 1];
      for(var i = 0; i < chart.options.datasets[0].data.length; i++) {
        labels.push(i);
      }
    } else {
      var min = getMinDataValue(chart, false);
      var max = getMaxDataValue(chart, false);
      var niceScale = new NiceScale(min, max, 5);
      var intervals = Math.ceil((niceScale.getNiceUpperBound() - niceScale.getNiceLowerBound()) /niceScale.getTickSpacing());

      for(var i = 0; i <= intervals; i++) {
        labels.push(niceScale.getNiceLowerBound() + niceScale.getTickSpacing()*i);
      }
      chart.xAxisInterval = [niceScale.getNiceLowerBound(), niceScale.getNiceUpperBound()];
    }
    return labels;
  };

  function modifyAxisLabel(labels, fnModifier) {
    for(var i = 0; i < labels.length; i++) {
      labels[i] = fnModifier(labels[i]);
    }

    return labels;
  };

  function getLabelMaxSize(labels, dimesion) {
    if(!isVisible(labels[0])) return 0;
    var size = 0;
    for(var i = 0; i < labels.length; i++) {
      var labelSize = labels[i].getBBox()[dimesion];
      if(labelSize > size) size = labelSize;
    };  
    return size;
  };

  function getMinDataValue(chart, bool) { // bool = true for y axis
    var minArray = [];
    for(var i = 0; i < chart.options.datasets.length; i++) {
      minArray.push(getMin(chart.options.datasets[i].data, bool));
    }
    return Math.min.apply(null, minArray);
  };

  function getMaxDataValue(chart, bool) { // bool = true for y axis
    var maxArray = [];
    for(var i = 0; i < chart.options.datasets.length; i++) {
      maxArray.push(getMax(chart.options.datasets[i].data, bool));
    }
    return Math.max.apply(null, maxArray);
  };

  function setDatasetsSum(chart) {
    // sum all datasets -> this is used for column and bar charts
    chart.datasetsSum = [];
    for(var i = 0; i < chart.options.datasets.length; i++) {
      for(var j = 0; j < chart.options.datasets[i].data.length; j++) {
        chart.datasetsSum[j] = (i == 0) ? chart.options.datasets[i].data[j] : chart.datasetsSum[j] + chart.options.datasets[i].data[j];
      }
    } 
  };

  function getColStackedMinDataValue(chart) {
    var min = Math.min.apply(null, chart.datasetsSum);
    if(min > 0) min = 0;
    return min;
  };

  function getColStackedMaxDataValue(chart) {
    var max = Math.max.apply(null, chart.datasetsSum);
    if(max < 0) max = 0;
    return max;
  };

  function getMin(array, bool) {
    var min;
    var multiSet = array[0].length > 1;
    for(var i = 0; i < array.length; i++) {
      var value;
      if(multiSet) {
        value = bool ? array[i][1] : array[i][0];
      } else {
        value = array[i];
      }
      if(i == 0) {min = value;}
      else if(value < min) {min = value;}
    }
    return min;
  };

  function getMax(array, bool) {
    var max;
    var multiSet = array[0].length > 1;
    for(var i = 0; i < array.length; i++) {
      var value;
      if(multiSet) {
        value = bool ? array[i][1] : array[i][0];
      } else {
        value = array[i];
      }
      if(i == 0) {max = value;}
      else if(value > max) {max = value;}
    }
    return max;
  };

  // https://gist.github.com/igodorogea/4f42a95ea31414c3a755a8b202676dfd
  function NiceScale (lowerBound, upperBound, _maxTicks) {
    var maxTicks = _maxTicks || 10;
    var tickSpacing;
    var range;
    var niceLowerBound;
    var niceUpperBound;
  
    calculate();
  
    this.setMaxTicks = function (_maxTicks) {
      maxTicks = _maxTicks;
      calculate();
    };
  
    this.getNiceUpperBound = function() {
      return niceUpperBound;
    };
  
    this.getNiceLowerBound = function() {
      return niceLowerBound;
    };
  
    this.getTickSpacing = function() {
      return tickSpacing;
    };
  
    function setMinMaxPoints (min, max) {
      lowerBound = min;
      upperBound = max;
      calculate();
    }
  
    function calculate () {
      range = niceNum(upperBound - lowerBound, false);
      tickSpacing = niceNum(range / (maxTicks - 1), true);
      niceLowerBound = Math.floor(lowerBound / tickSpacing) * tickSpacing;
      niceUpperBound = Math.ceil(upperBound / tickSpacing) * tickSpacing;
    }
  
    function niceNum (range, round) {
      // var exponent = Math.floor(Math.log10(range));
      var exponent = Math.floor(Math.log(range) * Math.LOG10E);
      var fraction = range / Math.pow(10, exponent);
      var niceFraction;
  
      if (round) {
        if (fraction < 1.5) niceFraction = 1;
        else if (fraction < 3) niceFraction = 2;
        else if (fraction < 7) niceFraction = 5;
        else niceFraction = 10;
      } else {
        if (fraction <= 1) niceFraction = 1;
        else if (fraction <= 2) niceFraction = 2;
        else if (fraction <= 5) niceFraction = 5;
        else niceFraction = 10;
      }
  
      return niceFraction * Math.pow(10, exponent);
    }
  };

  function initTooltips(chart) {
    if(!intObservSupported) return;

    chart.markers = [];
    chart.bars = []; // this is for column/bar charts only
    var chartSets = chart.element.getElementsByClassName('js-chart__set');
    for(var i = 0; i < chartSets.length; i++) {
      chart.markers[i] = chartSets[i].querySelectorAll('.js-chart__marker');
      if(chart.options.type && chart.options.type == 'column') {
        chart.bars[i] = chartSets[i].querySelectorAll('.js-chart__data-bar');
      }
    }
    
    // create tooltip line
    if(chart.options.yIndicator) {
      var tooltipLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      Util.setAttributes(tooltipLine, {x1: 0, y1: chart.topDelta, x2: 0, y2: chart.topDelta + chart.yAxisHeight, transform: 'translate('+chart.leftDelta+' '+chart.topDelta+')', class: 'chart__y-indicator js-chart__y-indicator is-hidden'});
      chart.svg.insertBefore(tooltipLine, chart.element.getElementsByClassName('js-chart__dataset')[0]);
      chart.interLine = chart.element.getElementsByClassName('js-chart__y-indicator')[0];
    }
    
    // create tooltip
    if(chart.tooltipOn) {
      var tooltip = document.createElement('div');
      tooltip.setAttribute('class', 'chart__tooltip js-chart__tooltip is-hidden '+chart.tooltipClasses);
      chart.element.appendChild(tooltip);
      chart.tooltip = chart.element.getElementsByClassName('js-chart__tooltip')[0];
    }
    initChartHover(chart);
  };

  function initChartHover(chart) {
    if(!chart.options.yIndicator && !chart.tooltipOn) return;
    // init hover effect
    chart.chartArea = chart.element.getElementsByClassName('js-chart__axis-labels--y')[0];
    chart.eventIds['hover'] = handleEvent.bind(chart);
    chart.chartArea.addEventListener('mouseenter', chart.eventIds['hover']);
    chart.chartArea.addEventListener('mousemove', chart.eventIds['hover']);
    chart.chartArea.addEventListener('mouseleave', chart.eventIds['hover']);
    if(!SwipeContent) return;
    new SwipeContent(chart.element);
    chart.element.addEventListener('dragStart', chart.eventIds['hover']);
    chart.element.addEventListener('dragging', chart.eventIds['hover']);
    chart.element.addEventListener('dragEnd', chart.eventIds['hover']);
  };

  function hoverChart(chart, event) {
    if(chart.hovering) return;
    if(!chart.options.yIndicator && !chart.tooltipOn) return;
    chart.hovering = true;
    var selectedMarker = getSelectedMarker(chart, event);
    if(selectedMarker === false) return;
    if(selectedMarker !== chart.selectedMarker) {
      resetMarkers(chart, false);
      resetBars(chart, false);

      chart.selectedMarker = selectedMarker;
      resetMarkers(chart, true);
      resetBars(chart, true);
      var markerSize = chart.markers[0][chart.selectedMarker].getBBox();
      
      if(chart.options.yIndicator) {
        Util.removeClass(chart.interLine, 'is-hidden');
        chart.interLine.setAttribute('transform', 'translate('+(markerSize.x + markerSize.width/2)+' 0)');
      }
      
      if(chart.tooltipOn) {
        Util.removeClass(chart.tooltip, 'is-hidden');
        setTooltipHTML(chart);
        placeTooltip(chart);
      }
    }
    updateExternalData(chart);
    chart.hovering = false;
  };

  function getSelectedMarker(chart, event) {
    if(chart.markers[0].length < 1) return false;
    var clientX = event.detail.x ? event.detail.x : event.clientX;
    var xposition =  clientX - chart.svg.getBoundingClientRect().left;
    var marker = 0,
      deltaX = Math.abs(chart.markers[0][0].getBBox().x - xposition);
    for(var i = 1; i < chart.markers[0].length; i++) {
      var newDeltaX = Math.abs(chart.markers[0][i].getBBox().x - xposition);
      if(newDeltaX < deltaX) {
        deltaX = newDeltaX;
        marker = i;
      }
    }
    return marker;
  };

  function resetTooltip(chart) {
    if(chart.hoverId) {
      (window.requestAnimationFrame) ? window.cancelAnimationFrame(chart.hoverId) : clearTimeout(chart.hoverId);
      chart.hoverId = false;
    }
    if(chart.tooltipOn) Util.addClass(chart.tooltip, 'is-hidden');
    if(chart.options.yIndicator)Util.addClass(chart.interLine, 'is-hidden');
    resetMarkers(chart, false);
    resetBars(chart, false);
    chart.selectedMarker = false;
    resetExternalData(chart);
    chart.hovering = false;
  };

  function resetMarkers(chart, bool) {
    for(var i = 0; i < chart.markers.length; i++) {
      if(chart.markers[i] && chart.markers[i][chart.selectedMarker]) Util.toggleClass(chart.markers[i][chart.selectedMarker], chart.selectedMarkerClass, bool);
    }
  };

  function resetBars(chart, bool) {
    // for column/bar chart -> change opacity on hover
    if(!chart.options.type || chart.options.type != 'column') return;
    for(var i = 0; i < chart.bars.length; i++) {
      if(chart.bars[i] && chart.bars[i][chart.selectedMarker]) Util.toggleClass(chart.bars[i][chart.selectedMarker], chart.selectedBarClass, bool);
    }
  };

  function setTooltipHTML(chart) {
    var selectedMarker = chart.markers[0][chart.selectedMarker];
    chart.tooltip.innerHTML = getTooltipHTML(chart, selectedMarker.getAttribute('data-index'), selectedMarker.getAttribute('data-set'));
  };

  function getTooltipHTML(chart, index, setIndex) {
    var htmlContent = '';
    if(chart.options.tooltip.customHTML) {
      htmlContent = chart.options.tooltip.customHTML(index, chart.options, setIndex);
    } else {
      var multiVal = chart.options.datasets[setIndex].data[index].length > 1;
      if(chart.options.xAxis && chart.options.xAxis.labels && chart.options.xAxis.labels.length > 1) {
        htmlContent = chart.options.xAxis.labels[index] +' - ';
      } else if(multiVal) {
        htmlContent = chart.options.datasets[setIndex].data[index][0] +' - ';
      }
      htmlContent = (multiVal) 
        ? htmlContent + chart.options.datasets[setIndex].data[index][1] 
        : htmlContent + chart.options.datasets[setIndex].data[index];
    }   
    return htmlContent;
  };

  function placeTooltip(chart) {
    var selectedMarker = chart.markers[0][chart.selectedMarker];
    var markerPosition = selectedMarker.getBoundingClientRect();
    var markerPositionSVG = selectedMarker.getBBox();
    var svgPosition = chart.svg.getBoundingClientRect();

    if(chart.options.type == 'column') {
      tooltipPositionColumnChart(chart, selectedMarker, markerPosition, markerPositionSVG);
    } else {
      tooltipPositionChart(chart, markerPosition, markerPositionSVG, svgPosition.left, svgPosition.width);
    }
  };

  function tooltipPositionChart(chart, markerPosition, markerPositionSVG, svgPositionLeft, svgPositionWidth) {
    // set top/left/transform of the tooltip for line/area charts
    // horizontal position
    if(markerPosition.left - svgPositionLeft <= svgPositionWidth/2) {
      chart.tooltip.style.left = (markerPositionSVG.x + markerPositionSVG.width + 2)+'px';
      chart.tooltip.style.right = 'auto';
      chart.tooltip.style.transform = 'translateY(-100%)';
    } else {
      chart.tooltip.style.left = 'auto';
      chart.tooltip.style.right = (svgPositionWidth - markerPositionSVG.x + 2)+'px';
      chart.tooltip.style.transform = 'translateY(-100%)'; 
    }
    // vertical position
    if(!chart.tooltipPosition) {
      chart.tooltip.style.top = markerPositionSVG.y +'px';
    } else if(chart.tooltipPosition == 'top') {
      chart.tooltip.style.top = (chart.topDelta + chart.tooltip.getBoundingClientRect().height + 5) +'px';
      chart.tooltip.style.bottom = 'auto';
    } else {
      chart.tooltip.style.top = 'auto';
      chart.tooltip.style.bottom = (chart.bottomDelta + 5)+'px';
      chart.tooltip.style.transform = ''; 
    }
  };

  function tooltipPositionColumnChart(chart, marker, markerPosition, markerPositionSVG) {
    // set top/left/transform of the tooltip for column charts
    chart.tooltip.style.left = (markerPositionSVG.x + markerPosition.width/2)+'px';
    chart.tooltip.style.right = 'auto';
    chart.tooltip.style.transform = 'translateX(-50%) translateY(-100%)';
    if(!chart.tooltipPosition) {
      if(parseInt(marker.getAttribute('cy')) > chart.yZero) {
        // negative value -> move tooltip below the bar
        chart.tooltip.style.top = (markerPositionSVG.y + markerPositionSVG.height + 6) +'px';
        chart.tooltip.style.transform = 'translateX(-50%)';
      } else {
        chart.tooltip.style.top = (markerPositionSVG.y - 6) +'px';
      }
    } else if(chart.tooltipPosition == 'top') {
      chart.tooltip.style.top = (chart.topDelta + chart.tooltip.getBoundingClientRect().height + 5) +'px';
      chart.tooltip.style.bottom = 'auto';
    } else {
      chart.tooltip.style.bottom = (chart.bottomDelta + 5)+'px';
      chart.tooltip.style.top = 'auto';
      chart.tooltip.style.transform = 'translateX(-50%)';
    }
  };

  function animateChart(chart) {
    if(!chart.options.animate) return;
    var observer = new IntersectionObserver(chartObserve.bind(chart), {rootMargin: "0px 0px -200px 0px"});
    observer.observe(chart.element);
  };

  function chartObserve(entries, observer) { // observe chart position -> start animation when inside viewport
    if(entries[0].isIntersecting) {
      triggerChartAnimation(this);
      observer.unobserve(this.element);
    }
  };

  function triggerChartAnimation(chart) {
    if(chart.options.type == 'line' || chart.options.type == 'area') {
      animatePath(chart, 'line');
      if(chart.options.type == 'area') animatePath(chart, 'fill');
    } else if(chart.options.type == 'column') {
      animateRectPath(chart, 'column');
    }
  };

  function animatePath(chart, type) {
    var currentTime = null,
      duration = 600;

    var startArray = chart.datasetScaledFlat,
      finalArray = chart.datasetScaled;

    if(type == 'fill') {
      startArray = chart.datasetAreaScaledFlat;
      finalArray = chart.datasetAreaScaled;
    }
        
    var animateSinglePath = function(timestamp){
      if (!currentTime) currentTime = timestamp;        
      var progress = timestamp - currentTime;
      if(progress > duration) progress = duration;
      for(var i = 0; i < finalArray.length; i++) {
        var points = [];
        var path = chart.element.getElementsByClassName('js-chart__data-'+type+'--'+(i+1))[0];
        for(var j = 0; j < finalArray[i].length; j++) {
          var val = Math.easeOutQuart(progress, startArray[i][j][1], finalArray[i][j][1]-startArray[i][j][1], duration);
          points[j] = [finalArray[i][j][0], val];
        }
        // get path and animate
        var pathCode = chart.options.smooth ? getSmoothLine(points, type == 'fill') : getStraightLine(points);
        path.setAttribute('d', pathCode);
      }
      if(progress < duration) {
        window.requestAnimationFrame(animateSinglePath);
      }
    };

    window.requestAnimationFrame(animateSinglePath);
  };

  function resizeChart(chart) {
    window.addEventListener('resize', function() {
      clearTimeout(chart.eventIds['resize']);
      chart.eventIds['resize'] = setTimeout(doneResizing, 300);
    });

    function doneResizing() {
      resetChartResize(chart);
      initChart(chart);
    };
  };

  function resetChartResize(chart) {
    chart.topDelta = 0;
    chart.bottomDelta = 0;
    chart.leftDelta = 0;
    chart.rightDelta = 0;
    chart.dragging = false;
    // reset event listeners
    if( chart.eventIds && chart.eventIds['hover']) {
      chart.chartArea.removeEventListener('mouseenter', chart.eventIds['hover']);
      chart.chartArea.removeEventListener('mousemove', chart.eventIds['hover']);
      chart.chartArea.removeEventListener('mouseleave', chart.eventIds['hover']);
      chart.element.removeEventListener('dragStart', chart.eventIds['hover']);
      chart.element.removeEventListener('dragging', chart.eventIds['hover']);
      chart.element.removeEventListener('dragEnd', chart.eventIds['hover']);
    }
  };

  function handleEvent(event) {
    switch(event.type) {
      case 'mouseenter':
        hoverChart(this, event);
        break;
      case 'mousemove':
      case 'dragging':   
        var self = this;
        self.hoverId  = window.requestAnimationFrame 
          ? window.requestAnimationFrame(function(){hoverChart(self, event)})
          : setTimeout(function(){hoverChart(self, event);});
        break;
      case 'mouseleave':
      case 'dragEnd':
        resetTooltip(this);
        break;
    }
  };

  function isVisible(item) {
    return (item && item.getClientRects().length > 0);
  };

  function initExternalData(chart) {
    if(!chart.options.externalData) return;
    var chartId = chart.options.element.getAttribute('id');
    if(!chartId) return;
    chart.extDataX = [];
    chart.extDataXInit = [];
    chart.extDataY = [];
    chart.extDataYInit = [];
    if(chart.options.datasets.length > 1) {
      for(var i = 0; i < chart.options.datasets.length; i++) {
        chart.extDataX[i] = document.querySelectorAll('.js-ext-chart-data-x--'+(i+1)+'[data-chart="'+chartId+'"]');
        chart.extDataY[i] = document.querySelectorAll('.js-ext-chart-data-y--'+(i+1)+'[data-chart="'+chartId+'"]');
      }
    } else {
      chart.extDataX[0] = document.querySelectorAll('.js-ext-chart-data-x[data-chart="'+chartId+'"]');
      chart.extDataY[0] = document.querySelectorAll('.js-ext-chart-data-y[data-chart="'+chartId+'"]');
    }
    // store initial HTML contentent
    storeExternalDataContent(chart, chart.extDataX, chart.extDataXInit);
    storeExternalDataContent(chart, chart.extDataY, chart.extDataYInit);
  };

  function storeExternalDataContent(chart, elements, array) {
    for(var i = 0; i < elements.length; i++) {
      array[i] = [];
      if(elements[i][0]) array[i][0] = elements[i][0].innerHTML;
    }
  };

  function updateExternalData(chart) {
    if(!chart.extDataX || !chart.extDataY) return;
    var marker = chart.markers[0][chart.selectedMarker];
    if(!marker) return;
    var dataIndex = marker.getAttribute('data-index');
    var multiVal = chart.options.datasets[0].data[0].length > 1;
    for(var i = 0; i < chart.options.datasets.length; i++) {
      updateExternalDataX(chart, dataIndex, i, multiVal);
      updateExternalDataY(chart, dataIndex, i, multiVal);
    }
  };

  function updateExternalDataX(chart, dataIndex, setIndex, multiVal) {
    if( !chart.extDataX[setIndex] || !chart.extDataX[setIndex][0]) return;
    var value = '';
    if(chart.options.externalData.customXHTML) {
      value = chart.options.externalData.customXHTML(dataIndex, chart.options, setIndex);
    } else {
      if(chart.options.xAxis && chart.options.xAxis.labels && chart.options.xAxis.labels.length > 1) {
        value = chart.options.xAxis.labels[dataIndex];
      } else if(multiVal) {
        htmlContent = chart.options.datasets[setIndex].data[dataIndex][0];
      }
    }
    chart.extDataX[setIndex][0].innerHTML = value;
  };

  function updateExternalDataY(chart, dataIndex, setIndex, multiVal) {
    if( !chart.extDataY[setIndex] || !chart.extDataY[setIndex][0]) return;
    var value = '';
    if(chart.options.externalData.customYHTML) {
      value = chart.options.externalData.customYHTML(dataIndex, chart.options, setIndex);
    } else {
      if(multiVal) {
        value = chart.options.datasets[setIndex].data[dataIndex][1];
      } else {
        value = chart.options.datasets[setIndex].data[dataIndex];
      }
    }
    chart.extDataY[setIndex][0].innerHTML = value;
  };

  function resetExternalData(chart) {
    if(!chart.options.externalData) return;
    for(var i = 0; i < chart.options.datasets.length; i++) {
      if(chart.extDataX[i][0]) chart.extDataX[i][0].innerHTML = chart.extDataXInit[i][0];
      if(chart.extDataY[i][0]) chart.extDataY[i][0].innerHTML = chart.extDataYInit[i][0];
    }
  };

  function setChartColumnSize(chart) {
    chart.columnWidthPerc = 100;
    chart.columnGap = 0;
    if(chart.options.column && chart.options.column.width) {
      chart.columnWidthPerc = parseInt(chart.options.column.width);
    }
    if(chart.options.column && chart.options.column.gap) {
      chart.columnGap = parseInt(chart.options.column.gap);
    } 
  };

  function resetColumnChart(chart) {
    var labels = chart.element.getElementsByClassName('js-chart__axis-labels--x')[0].querySelectorAll('.js-chart__axis-label'),
      labelsVisible = isVisible(labels[labels.length - 1]),
      xDelta = chart.xAxisWidth/labels.length;
    
    // translate x axis labels
    if(labelsVisible) {
      moveXAxisLabels(chart, labels, 0.5*xDelta);
    }
    // set column width + separation gap between columns
    var columnsSpace = xDelta*chart.columnWidthPerc/100;
    if(chart.options.stacked) {
      chart.columnWidth = columnsSpace;
    } else {
      chart.columnWidth = (columnsSpace - chart.columnGap*(chart.options.datasets.length - 1) )/chart.options.datasets.length;
    }

    chart.columnDelta = (xDelta - columnsSpace)/2;
  };

  function moveXAxisLabels(chart, labels, delta) { 
    // this applies to column charts only
    // translate the xlabels to center them 
    if(chart.xAxisLabelRotation) return; // labels were rotated - no need to translate
    for(var i = 0; i < labels.length; i++) {
      Util.setAttributes(labels[i], {x: labels[i].getBBox().x + delta});
    }
  };

  function setColumnChartDatasets(chart) {
    var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    gEl.setAttribute('class', 'chart__dataset js-chart__dataset');
    chart.datasetScaled = [];

    setColumnChartYZero(chart);
    
    for(var i = 0; i < chart.options.datasets.length; i++) {
      var gSet = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      gSet.setAttribute('class', 'chart__set chart__set--'+(i+1)+' js-chart__set');
      chart.datasetScaled[i] = JSON.parse(JSON.stringify(chart.options.datasets[i].data));
      chart.datasetScaled[i] = getChartData(chart, chart.datasetScaled[i]);
      chart.datasetScaledFlat[i] = JSON.parse(JSON.stringify(chart.datasetScaled[i]));
      if(!chart.loaded && chart.options.animate) {
        flatDatasets(chart, i);
      }
      gSet.appendChild(getSvgColumns(chart, chart.datasetScaledFlat[i], i));
      gEl.appendChild(gSet);
      gSet.appendChild(getMarkers(chart, chart.datasetScaled[i], i));
    }
    
    chart.svg.appendChild(gEl);
  };

  function setColumnChartYZero(chart) {
    // if there are negative values -> make sre columns start from zero
    chart.yZero = chart.height - chart.bottomDelta;
    if(chart.yAxisInterval[0] < 0) {
      chart.yZero = chart.height - chart.bottomDelta + chart.yAxisHeight*(chart.yAxisInterval[0])/(chart.yAxisInterval[1] - chart.yAxisInterval[0]);
    }
  };

  function getSvgColumns(chart, dataset, index) {
    var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    for(var i = 0; i < dataset.length; i++) {
      var pathL = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      var points = getColumnPoints(chart, dataset[i], index, i, chart.datasetScaledFlat);
      var lineType =  chart.options.column && chart.options.column.radius ? 'round' : 'square';
      if(lineType == 'round' && chart.options.stacked && index < chart.options.datasets.length - 1) lineType = 'square';
      var dPath = (lineType == 'round') ? getRoundedColumnRect(chart, points) : getStraightLine(points);
      Util.setAttributes(pathL, {d: dPath, class: 'chart__data-bar chart__data-bar--'+(index+1)+' js-chart__data-bar js-chart__data-bar--'+(index+1)});
      gEl.appendChild(pathL);
    }
    return gEl;
  };

  function getColumnPoints(chart, point, index, pointIndex, dataSetsAll) {
    var xOffset = chart.columnDelta + index*(chart.columnWidth + chart.columnGap),
      yOffset = 0;

    if(chart.options.stacked) {
      xOffset = chart.columnDelta;
      yOffset = getyOffsetColChart(chart, dataSetsAll, index, pointIndex);
    }

    return [ 
      [point[0] + xOffset, chart.yZero - yOffset],
      [point[0] + xOffset, point[1] - yOffset], 
      [point[0] + xOffset + chart.columnWidth, point[1] - yOffset],
      [point[0] + xOffset + chart.columnWidth, chart.yZero - yOffset]
    ];
  };

  function getyOffsetColChart(chart, dataSetsAll, index, pointIndex) {
    var offset = 0;
    for(var i = 0; i < index; i++) {
      if(dataSetsAll[i] && dataSetsAll[i][pointIndex]) offset = offset + (chart.height - chart.bottomDelta - dataSetsAll[i][pointIndex][1]);
    }
    return offset;
  };

  function getRoundedColumnRect(chart, points) {
    var radius = parseInt(chart.options.column.radius);
    var arcType = '0,0,1',
      deltaArc1 = '-',
      deltaArc2 = ',',
      rectHeight = points[1][1] + radius;
    if(chart.yAxisInterval[0] < 0 && points[1][1] > chart.yZero) {
      arcType = '0,0,0';
      deltaArc1 = ',';
      deltaArc2 = '-';
      rectHeight = points[1][1] - radius;
    }
    var dpath = 'M '+points[0][0]+' '+points[0][1];
    dpath = dpath + ' V '+rectHeight;
    dpath = dpath + ' a '+radius+','+radius+','+arcType+','+radius+deltaArc1+radius;
    dpath = dpath + ' H '+(points[2][0] - radius);
    dpath = dpath + ' a '+radius+','+radius+','+arcType+','+radius+deltaArc2+radius;
    dpath = dpath + ' V '+points[3][1];
    return dpath;
  };

  function animateRectPath(chart, type) {
    var currentTime = null,
      duration = 600;

    var startArray = chart.datasetScaledFlat,
      finalArray = chart.datasetScaled;
        
    var animateSingleRectPath = function(timestamp){
      if (!currentTime) currentTime = timestamp;        
      var progress = timestamp - currentTime;
      if(progress > duration) progress = duration;
      var multiSetPoint = [];
      for(var i = 0; i < finalArray.length; i++) {
        // multi sets
        var points = [];
        var paths = chart.element.getElementsByClassName('js-chart__data-bar--'+(i+1));
        var rectLine = chart.options.column && chart.options.column.radius ? 'round' : 'square';
        if(chart.options.stacked && rectLine == 'round' && i < finalArray.length - 1) rectLine = 'square'; 
        for(var j = 0; j < finalArray[i].length; j++) {
          var val = Math.easeOutQuart(progress, startArray[i][j][1], finalArray[i][j][1]-startArray[i][j][1], duration);
          points[j] = [finalArray[i][j][0], val];
          // get path and animate
          var rectPoints = getColumnPoints(chart, points[j], i, j, multiSetPoint);
          var dPath = (rectLine == 'round') ? getRoundedColumnRect(chart, rectPoints) : getStraightLine(rectPoints);
          paths[j].setAttribute('d', dPath);
        }

        multiSetPoint[i] = points;
      }
      if(progress < duration) {
        window.requestAnimationFrame(animateSingleRectPath);
      }
    };

    window.requestAnimationFrame(animateSingleRectPath);
  };

  function getPieSvgCode(chart) {

  };

  function getDoughnutSvgCode(chart) {

  };

  Chart.defaults = {
    element : '',
    type: 'line', // can be line, area, bar
    xAxis: {},
    yAxis: {},
    datasets: [],
    tooltip: {
      enabled: false,
      classes: false,
      customHTM: false
    },
    yIndicator: true,
    padding: 10
  };

  window.Chart = Chart;

  var intObservSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype);
}());

// File#: _2_modal-video
// Usage: codyhouse.co/license
(function() {
  var ModalVideo = function(element) {
    this.element = element;
    this.modalContent = this.element.getElementsByClassName('js-modal-video__content')[0];
    this.media = this.element.getElementsByClassName('js-modal-video__media')[0];
    this.contentIsIframe = this.media.tagName.toLowerCase() == 'iframe';
    this.modalIsOpen = false;
    this.initModalVideo();
  };

  ModalVideo.prototype.initModalVideo = function() {
    var self = this;
    // reveal modal content when iframe is ready
    this.addLoadListener();
    // listen for the modal element to be open -> set new iframe src attribute
    this.element.addEventListener('modalIsOpen', function(event){
      self.modalIsOpen = true;
      self.media.setAttribute('src', event.detail.closest('[aria-controls]').getAttribute('data-url'));
    });
    // listen for the modal element to be close -> reset iframe and hide modal content
    this.element.addEventListener('modalIsClose', function(event){
      self.modalIsOpen = false;
      Util.addClass(self.element, 'modal--is-loading');
      self.media.setAttribute('src', '');
    });
  };

  ModalVideo.prototype.addLoadListener = function() {
    var self = this;
    if(this.contentIsIframe) {
      this.media.onload = function () {
        self.revealContent();
      };
    } else {
      this.media.addEventListener('loadedmetadata', function(){
        self.revealContent();
      });
    }
    
  };

  ModalVideo.prototype.revealContent = function() {
    if( !this.modalIsOpen ) return;
    Util.removeClass(this.element, 'modal--is-loading');
    this.contentIsIframe ? this.media.contentWindow.focus() : this.media.focus();
  };

  //initialize the ModalVideo objects
  var modalVideos = document.getElementsByClassName('js-modal-video__media');
  if( modalVideos.length > 0 ) {
    for( var i = 0; i < modalVideos.length; i++) {
      (function(i){new ModalVideo(modalVideos[i].closest('.js-modal'));})(i);
    }
  }
}());


// File#: _2_image-comparison-slider ============================================================================
// Usage: codyhouse.co/license
(function() {
var ComparisonSlider = function(element) {
  this.element = element;
  this.modifiedImg = this.element.getElementsByClassName('js-compare-slider__img--modified')[0];
  this.handle = this.element.getElementsByClassName('js-compare-slider__handle')[0];
  this.keyboardHandle = this.element.getElementsByClassName('js-compare-slider__input-handle')[0];
  this.captions = this.element.getElementsByClassName('js-compare-slider__caption');
  // drag
  this.dragStart = false;
  this.animating = false;
  this.leftPosition = 50;
  // store container width
  this.sliderWidth = getSliderWidth(this);
  initComparisonSlider(this);
};

function getSliderWidth(slider) {
  return slider.element.offsetWidth;
};

function initComparisonSlider(slider) {
  // initial animation
  if(reducedMotion) { // do not animate slider elements
    Util.addClass(slider.element, 'compare-slider--reduced-motion compare-slider--in-viewport');
  } else if(intersectionObserverSupported) { // reveal slider elements when it enters the viewport
    var observer = new IntersectionObserver(sliderObserve.bind(slider), { threshold: [0, 0.3] });
    observer.observe(slider.element);
  } else { // reveal slider elements right away
    Util.addClass(slider.element, 'compare-slider--in-viewport');
  }
  // init drag functionality
  new SwipeContent(slider.element);
  slider.element.addEventListener('dragStart', function(event){
    if(!event.detail.origin.closest('.js-compare-slider__handle')) return;
    Util.addClass(slider.element, 'compare-slider--is-dragging');
    if(!slider.dragStart) {
      slider.dragStart = event.detail.x;
      detectDragEnd(slider);
    }
  });
  // slider.element.addEventListener('dragging', function(event){
  slider.element.addEventListener('mousemove', function(event){
    sliderDragging(slider, event)
  });
  slider.element.addEventListener('touchmove', function(event){
    sliderDragging(slider, event)
  });

  // detect mouse leave
  slider.element.addEventListener('mouseleave', function(event){
    sliderResetDragging(slider, event);
  });
  slider.element.addEventListener('touchend', function(event){
    sliderResetDragging(slider, event);
  });

  // on resize -> update slider width
  window.addEventListener('resize', function(){
    slider.sliderWidth = getSliderWidth(slider);
  });

  // detect change in keyboardHandle input -> allow keyboard navigation
  slider.keyboardHandle.addEventListener('change', function(event){
    slider.leftPosition = Number(slider.keyboardHandle.value);
    updateCompareSlider(slider, 0);
  });
};

function sliderDragging(slider, event) {
  if(!slider.dragStart) return;
  var pageX = event.pageX || event.touches[0].pageX;
  if(slider.animating || Math.abs(pageX - slider.dragStart) < 5) return;
  slider.animating = true;
  updateCompareSlider(slider, pageX - slider.dragStart);
  slider.dragStart = pageX;
};

function sliderResetDragging(slider, event) {
  if(!slider.dragStart) return;
  if(event.pageX < slider.element.offsetLeft) {
    slider.leftPosition = 0;
    updateCompareSlider(slider, 0);
  }
  if(event.pageX > slider.element.offsetLeft + slider.element.offsetWidth) {
    slider.leftPosition = 100;
    updateCompareSlider(slider, 0);
  }
};

function sliderObserve(entries, observer) {
  if(entries[0].intersectionRatio.toFixed(1) > 0) { // reveal slider elements when in viewport
    Util.addClass(this.element, 'compare-slider--in-viewport');
    observer.unobserve(this.element);
  }
};

function detectDragEnd(slider) {
  document.addEventListener('click', function cb(event){
    document.removeEventListener('click', cb);
    Util.removeClass(slider.element, 'compare-slider--is-dragging');
    updateCompareSlider(slider, event.detail.x - slider.dragStart);
    slider.dragStart = false;
  });
};

function updateCompareSlider(slider, delta) {
  var percentage = (delta*100/slider.sliderWidth);
  if(isNaN(percentage)) return;
  slider.leftPosition = Number((slider.leftPosition + percentage).toFixed(2));
  if(slider.leftPosition < 0) slider.leftPosition = 0;
  if(slider.leftPosition > 100) slider.leftPosition = 100; 
  // update slider elements -> modified img width + handle position + input element (keyboard accessibility)
  slider.keyboardHandle.value = slider.leftPosition;
  slider.handle.style.left = slider.leftPosition + '%';
  slider.modifiedImg.style.width = slider.leftPosition + '%'; 
  updateCompareLabels(slider);
  slider.animating = false;
};

function updateCompareLabels(slider) { // update captions visibility
  for(var i = 0; i < slider.captions.length; i++) {
    var delta = ( i == 0 ) 
      ? slider.captions[i].offsetLeft - slider.modifiedImg.offsetLeft - slider.modifiedImg.offsetWidth
      : slider.modifiedImg.offsetLeft + slider.modifiedImg.offsetWidth - slider.captions[i].offsetLeft - slider.captions[i].offsetWidth;
    Util.toggleClass(slider.captions[i], 'compare-slider__caption--is-hidden', delta < 10);
  }
};

//initialize the ComparisonSlider objects
var comparisonSliders = document.getElementsByClassName('js-compare-slider'),
  intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
  reducedMotion = Util.osHasReducedMotion();
if( comparisonSliders.length > 0 ) {
  for( var i = 0; i < comparisonSliders.length; i++) {
    (function(i){
      new ComparisonSlider(comparisonSliders[i]);
    })(i);
  }
}
}());



// File#: _1_reading-progressbar
// Usage: codyhouse.co/license
(function() {
var readingIndicator = document.getElementsByClassName('js-reading-progressbar')[0],
  readingIndicatorContent = document.getElementsByClassName('js-reading-content')[0];

if( readingIndicator && readingIndicatorContent) {
  var progressInfo = [],
    progressEvent = false,
    progressFallback = readingIndicator.getElementsByClassName('js-reading-progressbar__fallback')[0],
    progressIsSupported = 'value' in readingIndicator;

  progressInfo['height'] = readingIndicatorContent.offsetHeight;
  progressInfo['top'] = readingIndicatorContent.getBoundingClientRect().top;
  progressInfo['window'] = window.innerHeight;
  progressInfo['class'] = 'reading-progressbar--is-active';
  
  //init indicator
  setProgressIndicator();
  // wait for font to be loaded - reset progress bar
  if(document.fonts) {
    document.fonts.ready.then(function() {
      triggerReset();
    });
  }
  // listen to window resize - update progress
  window.addEventListener('resize', function(event){
    triggerReset();
  });

  //listen to the window scroll event - update progress
  window.addEventListener('scroll', function(event){
    if(progressEvent) return;
    progressEvent = true;
    (!window.requestAnimationFrame) ? setTimeout(function(){setProgressIndicator();}, 250) : window.requestAnimationFrame(setProgressIndicator);
  });
  
  function setProgressIndicator() {
    progressInfo['top'] = readingIndicatorContent.getBoundingClientRect().top;
    if(progressInfo['height'] <= progressInfo['window']) {
      // short content - hide progress indicator
      Util.removeClass(readingIndicator, progressInfo['class']);
      progressEvent = false;
      return;
    }
    // get new progress and update element
    Util.addClass(readingIndicator, progressInfo['class']);
    var value = (progressInfo['top'] >= 0) ? 0 : 100*(0 - progressInfo['top'])/(progressInfo['height'] - progressInfo['window']);
    readingIndicator.setAttribute('value', value);
    if(!progressIsSupported && progressFallback) progressFallback.style.width = value+'%';
    progressEvent = false;
  };

  function triggerReset() {
    if(progressEvent) return;
    progressEvent = true;
    (!window.requestAnimationFrame) ? setTimeout(function(){resetProgressIndicator();}, 250) : window.requestAnimationFrame(resetProgressIndicator);
  };

  function resetProgressIndicator() {
    progressInfo['height'] = readingIndicatorContent.offsetHeight;
    progressInfo['window'] = window.innerHeight;
    setProgressIndicator();
  };
}
}());



// File#: _1_sticky-hero ============================================================================
// Usage: codyhouse.co/license
(function() {
var StickyBackground = function(element) {
  this.element = element;
  this.scrollingElement = this.element.getElementsByClassName('sticky-hero__content')[0];
  this.nextElement = this.element.nextElementSibling;
  this.scrollingTreshold = 0;
  this.nextTreshold = 0;
  initStickyEffect(this);
};

function initStickyEffect(element) {
  var observer = new IntersectionObserver(stickyCallback.bind(element), { threshold: [0, 0.1, 1] });
  observer.observe(element.scrollingElement);
  if(element.nextElement) observer.observe(element.nextElement);
};

function stickyCallback(entries, observer) {
  var threshold = entries[0].intersectionRatio.toFixed(1);
  (entries[0].target ==  this.scrollingElement)
    ? this.scrollingTreshold = threshold
    : this.nextTreshold = threshold;

  Util.toggleClass(this.element, 'sticky-hero--media-is-fixed', (this.nextTreshold > 0 || this.scrollingTreshold > 0));
};


var stickyBackground = document.getElementsByClassName('js-sticky-hero'),
  intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype);
if(stickyBackground.length > 0 && intersectionObserverSupported) { // if IntersectionObserver is not supported, animations won't be triggeres
  for(var i = 0; i < stickyBackground.length; i++) {
    (function(i){ // if animations are enabled -> init the StickyBackground object
      if( Util.hasClass(stickyBackground[i], 'sticky-hero--overlay-layer') || Util.hasClass(stickyBackground[i], 'sticky-hero--scale')) new StickyBackground(stickyBackground[i]);
    })(i);
  }
}
}());



// File#: _1_diagonal-movement ============================================================================
// Usage: codyhouse.co/license
/*
Modified version of the jQuery-menu-aim plugin
https://github.com/kamens/jQuery-menu-aim
- Replaced jQuery with Vanilla JS
- Minor changes
*/
(function() {
var menuAim = function(opts) {
  init(opts);
};

window.menuAim = menuAim;

function init(opts) {
  var activeRow = null,
    mouseLocs = [],
    lastDelayLoc = null,
    timeoutId = null,
    options = Util.extend({
      menu: '',
      rows: false, //if false, get direct children - otherwise pass nodes list 
      submenuSelector: "*",
      submenuDirection: "right",
      tolerance: 75,  // bigger = more forgivey when entering submenu
      enter: function(){},
      exit: function(){},
      activate: function(){},
      deactivate: function(){},
      exitMenu: function(){}
    }, opts),
    menu = options.menu;

  var MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
    DELAY = 300;  // ms delay when user appears to be entering submenu

  /**
   * Keep track of the last few locations of the mouse.
   */
  var mousemoveDocument = function(e) {
    mouseLocs.push({x: e.pageX, y: e.pageY});

    if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
      mouseLocs.shift();
    }
  };

  /**
   * Cancel possible row activations when leaving the menu entirely
   */
  var mouseleaveMenu = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // If exitMenu is supplied and returns true, deactivate the
    // currently active row on menu exit.
    if (options.exitMenu(this)) {
      if (activeRow) {
        options.deactivate(activeRow);
      }

      activeRow = null;
    }
  };

  /**
   * Trigger a possible row activation whenever entering a new row.
   */
  var mouseenterRow = function() {
    if (timeoutId) {
      // Cancel any previous activation delays
      clearTimeout(timeoutId);
    }

    options.enter(this);
    possiblyActivate(this);
  },
  mouseleaveRow = function() {
    options.exit(this);
  };

  /*
   * Immediately activate a row if the user clicks on it.
   */
  var clickRow = function() {
    activate(this);
  };  

  /**
   * Activate a menu row.
   */
  var activate = function(row) {
    if (row == activeRow) {
      return;
    }

    if (activeRow) {
      options.deactivate(activeRow);
    }

    options.activate(row);
    activeRow = row;
  };

  /**
   * Possibly activate a menu row. If mouse movement indicates that we
   * shouldn't activate yet because user may be trying to enter
   * a submenu's content, then delay and check again later.
   */
  var possiblyActivate = function(row) {
    var delay = activationDelay();

    if (delay) {
      timeoutId = setTimeout(function() {
        possiblyActivate(row);
      }, delay);
    } else {
      activate(row);
    }
  };

  /**
   * Return the amount of time that should be used as a delay before the
   * currently hovered row is activated.
   *
   * Returns 0 if the activation should happen immediately. Otherwise,
   * returns the number of milliseconds that should be delayed before
   * checking again to see if the row should be activated.
   */
  var activationDelay = function() {
    if (!activeRow || !Util.is(activeRow, options.submenuSelector)) {
      // If there is no other submenu row already active, then
      // go ahead and activate immediately.
      return 0;
    }

    function getOffset(element) {
      var rect = element.getBoundingClientRect();
      return { top: rect.top + window.pageYOffset, left: rect.left + window.pageXOffset };
    };

    var offset = getOffset(menu),
        upperLeft = {
            x: offset.left,
            y: offset.top - options.tolerance
        },
        upperRight = {
            x: offset.left + menu.offsetWidth,
            y: upperLeft.y
        },
        lowerLeft = {
            x: offset.left,
            y: offset.top + menu.offsetHeight + options.tolerance
        },
        lowerRight = {
            x: offset.left + menu.offsetWidth,
            y: lowerLeft.y
        },
        loc = mouseLocs[mouseLocs.length - 1],
        prevLoc = mouseLocs[0];

    if (!loc) {
      return 0;
    }

    if (!prevLoc) {
      prevLoc = loc;
    }

    if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x || prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {
      // If the previous mouse location was outside of the entire
      // menu's bounds, immediately activate.
      return 0;
    }

    if (lastDelayLoc && loc.x == lastDelayLoc.x && loc.y == lastDelayLoc.y) {
      // If the mouse hasn't moved since the last time we checked
      // for activation status, immediately activate.
      return 0;
    }

    // Detect if the user is moving towards the currently activated
    // submenu.
    //
    // If the mouse is heading relatively clearly towards
    // the submenu's content, we should wait and give the user more
    // time before activating a new row. If the mouse is heading
    // elsewhere, we can immediately activate a new row.
    //
    // We detect this by calculating the slope formed between the
    // current mouse location and the upper/lower right points of
    // the menu. We do the same for the previous mouse location.
    // If the current mouse location's slopes are
    // increasing/decreasing appropriately compared to the
    // previous's, we know the user is moving toward the submenu.
    //
    // Note that since the y-axis increases as the cursor moves
    // down the screen, we are looking for the slope between the
    // cursor and the upper right corner to decrease over time, not
    // increase (somewhat counterintuitively).
    function slope(a, b) {
      return (b.y - a.y) / (b.x - a.x);
    };

    var decreasingCorner = upperRight,
      increasingCorner = lowerRight;

    // Our expectations for decreasing or increasing slope values
    // depends on which direction the submenu opens relative to the
    // main menu. By default, if the menu opens on the right, we
    // expect the slope between the cursor and the upper right
    // corner to decrease over time, as explained above. If the
    // submenu opens in a different direction, we change our slope
    // expectations.
    if (options.submenuDirection == "left") {
      decreasingCorner = lowerLeft;
      increasingCorner = upperLeft;
    } else if (options.submenuDirection == "below") {
      decreasingCorner = lowerRight;
      increasingCorner = lowerLeft;
    } else if (options.submenuDirection == "above") {
      decreasingCorner = upperLeft;
      increasingCorner = upperRight;
    }

    var decreasingSlope = slope(loc, decreasingCorner),
      increasingSlope = slope(loc, increasingCorner),
      prevDecreasingSlope = slope(prevLoc, decreasingCorner),
      prevIncreasingSlope = slope(prevLoc, increasingCorner);

    if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
      // Mouse is moving from previous location towards the
      // currently activated submenu. Delay before activating a
      // new menu row, because user may be moving into submenu.
      lastDelayLoc = loc;
      return DELAY;
    }

    lastDelayLoc = null;
    return 0;
  };

  /**
   * Hook up initial menu events
   */
  menu.addEventListener('mouseleave', mouseleaveMenu);  
  var rows = (options.rows) ? options.rows : menu.children;
  if(rows.length > 0) {
    for(var i = 0; i < rows.length; i++) {(function(i){
      rows[i].addEventListener('mouseenter', mouseenterRow);  
      rows[i].addEventListener('mouseleave', mouseleaveRow);
      rows[i].addEventListener('click', clickRow);  
    })(i);}
  }

  document.addEventListener('mousemove', function(event){
  (!window.requestAnimationFrame) ? mousemoveDocument(event) : window.requestAnimationFrame(function(){mousemoveDocument(event);});
  });
};
}());


// File#: _1_tabs
// Usage: codyhouse.co/license
(function() {
var Tab = function(element) {
  this.element = element;
  this.tabList = this.element.getElementsByClassName('js-tabs__controls')[0];
  this.listItems = this.tabList.getElementsByTagName('li');
  this.triggers = this.tabList.getElementsByTagName('a');
  this.panelsList = this.element.getElementsByClassName('js-tabs__panels')[0];
  this.panels = Util.getChildrenByClassName(this.panelsList, 'js-tabs__panel');
  this.hideClass = 'is-hidden';
  this.customShowClass = this.element.getAttribute('data-show-panel-class') ? this.element.getAttribute('data-show-panel-class') : false;
  this.initTab();
};

Tab.prototype.initTab = function() {
  //set initial aria attributes
  this.tabList.setAttribute('role', 'tablist');
  for( var i = 0; i < this.triggers.length; i++) {
    var bool = (i == 0),
      panelId = this.panels[i].getAttribute('id');
    this.listItems[i].setAttribute('role', 'presentation');
    Util.setAttributes(this.triggers[i], {'role': 'tab', 'aria-selected': bool, 'aria-controls': panelId, 'id': 'tab-'+panelId});
    Util.addClass(this.triggers[i], 'js-tabs__trigger'); 
    Util.setAttributes(this.panels[i], {'role': 'tabpanel', 'aria-labelledby': 'tab-'+panelId});
    Util.toggleClass(this.panels[i], this.hideClass, !bool);

    if(!bool) this.triggers[i].setAttribute('tabindex', '-1'); 
  }

  //listen for Tab events
  this.initTabEvents();
};

Tab.prototype.initTabEvents = function() {
  var self = this;
  //click on a new tab -> select content
  this.tabList.addEventListener('click', function(event) {
    if( event.target.closest('.js-tabs__trigger') ) self.triggerTab(event.target.closest('.js-tabs__trigger'), event);
  });
  //arrow keys to navigate through tabs 
  this.tabList.addEventListener('keydown', function(event) {
    if( !event.target.closest('.js-tabs__trigger') ) return;
    if( event.keyCode && event.keyCode == 39 || event.key && event.key == 'ArrowRight' ) {
      self.selectNewTab('next');
    } else if( event.keyCode && event.keyCode == 37 || event.key && event.key == 'ArrowLeft' ) {
      self.selectNewTab('prev');
    }
  });
};

Tab.prototype.selectNewTab = function(direction) {
  var selectedTab = this.tabList.querySelector('[aria-selected="true"]'),
    index = Util.getIndexInArray(this.triggers, selectedTab);
  index = (direction == 'next') ? index + 1 : index - 1;
  //make sure index is in the correct interval 
  //-> from last element go to first using the right arrow, from first element go to last using the left arrow
  if(index < 0) index = this.listItems.length - 1;
  if(index >= this.listItems.length) index = 0;	
  this.triggerTab(this.triggers[index]);
  this.triggers[index].focus();
};

Tab.prototype.triggerTab = function(tabTrigger, event) {
  var self = this;
  event && event.preventDefault();	
  var index = Util.getIndexInArray(this.triggers, tabTrigger);
  //no need to do anything if tab was already selected
  if(this.triggers[index].getAttribute('aria-selected') == 'true') return;
  
  for( var i = 0; i < this.triggers.length; i++) {
    var bool = (i == index);
    Util.toggleClass(this.panels[i], this.hideClass, !bool);
    if(this.customShowClass) Util.toggleClass(this.panels[i], this.customShowClass, bool);
    this.triggers[i].setAttribute('aria-selected', bool);
    bool ? this.triggers[i].setAttribute('tabindex', '0') : this.triggers[i].setAttribute('tabindex', '-1');
  }
};

//initialize the Tab objects
var tabs = document.getElementsByClassName('js-tabs');
if( tabs.length > 0 ) {
  for( var i = 0; i < tabs.length; i++) {
    (function(i){new Tab(tabs[i]);})(i);
  }
}
}());


// File#: _1_looping_tabs ============================================================================
// Usage: codyhouse.co/license
(function() { 
var LoopTab = function(opts) {
  this.options = Util.extend(LoopTab.defaults , opts);
  this.element = this.options.element;
  this.tabList = this.element.getElementsByClassName('js-loop-tabs__controls')[0];
  this.listItems = this.tabList.getElementsByTagName('li');
  this.triggers = this.tabList.getElementsByTagName('a');
  this.panelsList = this.element.getElementsByClassName('js-loop-tabs__panels')[0];
  this.panels = Util.getChildrenByClassName(this.panelsList, 'js-loop-tabs__panel');
  this.assetsList = this.element.getElementsByClassName('js-loop-tabs__assets')[0];
  this.assets = this.assetsList.getElementsByTagName('li');
  this.videos = getVideoElements(this);
  this.panelShowClass = 'loop-tabs__panel--selected';
  this.assetShowClass = 'loop-tabs__asset--selected';
  this.assetExitClass = 'loop-tabs__asset--exit';
  this.controlActiveClass = 'loop-tabs__control--selected';
  // autoplay
  this.autoplayPaused = false;
  this.loopTabAutoId = false;
  this.loopFillAutoId = false;
  this.loopFill = 0;
  initLoopTab(this);
};

function getVideoElements(tab) {
  var videos = [];
  for(var i = 0; i < tab.assets.length; i++) {
    var video = tab.assets[i].getElementsByTagName('video');
    videos[i] = video.length > 0 ? video[0] : false;
  }
  return videos;
};

function initLoopTab(tab) {
  //set initial aria attributes
  tab.tabList.setAttribute('role', 'tablist');
  for( var i = 0; i < tab.triggers.length; i++) {
    var bool = Util.hasClass(tab.triggers[i], tab.controlActiveClass),
      panelId = tab.panels[i].getAttribute('id');
    tab.listItems[i].setAttribute('role', 'presentation');
    Util.setAttributes(tab.triggers[i], {'role': 'tab', 'aria-selected': bool, 'aria-controls': panelId, 'id': 'tab-'+panelId});
    Util.addClass(tab.triggers[i], 'js-loop-tabs__trigger'); 
    Util.setAttributes(tab.panels[i], {'role': 'tabpanel', 'aria-labelledby': 'tab-'+panelId});
    Util.toggleClass(tab.panels[i], tab.panelShowClass, bool);
    Util.toggleClass(tab.assets[i], tab.assetShowClass, bool);
    
    resetVideo(tab, i, bool); // play/pause video if available

    if(!bool) tab.triggers[i].setAttribute('tabindex', '-1'); 
  }
  // add autoplay-off class if needed
  !tab.options.autoplay && Util.addClass(tab.element, 'loop-tabs--autoplay-off');
  //listen for Tab events
  initLoopTabEvents(tab);
};

function initLoopTabEvents(tab) {
  if(tab.options.autoplay) { 
    initLoopTabAutoplay(tab); // init autoplay
    // pause autoplay if user is interacting with the tabs
    tab.element.addEventListener('focusin', function(event){
      pauseLoopTabAutoplay(tab);
      tab.autoplayPaused = true;
    });
    tab.element.addEventListener('focusout', function(event){
      tab.autoplayPaused = false;
      initLoopTabAutoplay(tab);
    });
  }

  //click on a new tab -> select content
  tab.tabList.addEventListener('click', function(event) {
    if( event.target.closest('.js-loop-tabs__trigger') ) triggerLoopTab(tab, event.target.closest('.js-loop-tabs__trigger'), event);
  });
  
  //arrow keys to navigate through tabs 
  tab.tabList.addEventListener('keydown', function(event) {
    if( !event.target.closest('.js-loop-tabs__trigger') ) return;
    if( event.keyCode && event.keyCode == 39 || event.key && event.key.toLowerCase() == 'arrowright' ) {
      pauseLoopTabAutoplay(tab);
      selectNewLoopTab(tab, 'next', true);
    } else if( event.keyCode && event.keyCode == 37 || event.key && event.key.toLowerCase() == 'arrowleft' ) {
      pauseLoopTabAutoplay(tab);
      selectNewLoopTab(tab, 'prev', true);
    }
  });
};

function initLoopTabAutoplay(tab) {
  if(!tab.options.autoplay || tab.autoplayPaused) return;
  tab.loopFill = 0;
  var selectedTab = tab.tabList.getElementsByClassName(tab.controlActiveClass)[0];
  // reset css variables
  for(var i = 0; i < tab.triggers.length; i++) {
    if(cssVariableSupport) tab.triggers[i].style.setProperty('--loop-tabs-filling', 0);
  }
  
  tab.loopTabAutoId = setTimeout(function(){
    selectNewLoopTab(tab, 'next', false);
  }, tab.options.autoplayInterval);
  
  if(cssVariableSupport) { // tab fill effect
    tab.loopFillAutoId = setInterval(function(){
      tab.loopFill = tab.loopFill + 0.005;
      selectedTab.style.setProperty('--loop-tabs-filling', tab.loopFill);
    }, tab.options.autoplayInterval/200);
  }
};

function pauseLoopTabAutoplay(tab) { // pause autoplay
  if(tab.loopTabAutoId) {
    clearTimeout(tab.loopTabAutoId);
    tab.loopTabAutoId = false;
    clearInterval(tab.loopFillAutoId);
    tab.loopFillAutoId = false;
    // make sure the filling line is scaled up
    var selectedTab = tab.tabList.getElementsByClassName(tab.controlActiveClass);
    if(selectedTab.length > 0) selectedTab[0].style.setProperty('--loop-tabs-filling', 1);
  }
};

function selectNewLoopTab(tab, direction, bool) {
  var selectedTab = tab.tabList.getElementsByClassName(tab.controlActiveClass)[0],
    index = Util.getIndexInArray(tab.triggers, selectedTab);
  index = (direction == 'next') ? index + 1 : index - 1;
  //make sure index is in the correct interval 
  //-> from last element go to first using the right arrow, from first element go to last using the left arrow
  if(index < 0) index = tab.listItems.length - 1;
  if(index >= tab.listItems.length) index = 0;	
  triggerLoopTab(tab, tab.triggers[index]);
  bool && tab.triggers[index].focus();
};

function triggerLoopTab(tab, tabTrigger, event) {
  pauseLoopTabAutoplay(tab);
  event && event.preventDefault();	
  var index = Util.getIndexInArray(tab.triggers, tabTrigger);
  //no need to do anything if tab was already selected
  if(Util.hasClass(tab.triggers[index], tab.controlActiveClass)) return;
  
  for( var i = 0; i < tab.triggers.length; i++) {
    var bool = (i == index),
      exit = Util.hasClass(tab.triggers[i], tab.controlActiveClass);
    Util.toggleClass(tab.triggers[i], tab.controlActiveClass, bool);
    Util.toggleClass(tab.panels[i], tab.panelShowClass, bool);
    Util.toggleClass(tab.assets[i], tab.assetShowClass, bool);
    Util.toggleClass(tab.assets[i], tab.assetExitClass, exit);
    tab.triggers[i].setAttribute('aria-selected', bool);
    bool ? tab.triggers[i].setAttribute('tabindex', '0') : tab.triggers[i].setAttribute('tabindex', '-1');

    resetVideo(tab, i, bool); // play/pause video if available

    // listen for the end of animation on asset element and remove exit class
    if(exit) {(function(i){
      tab.assets[i].addEventListener('transitionend', function cb(event){
        tab.assets[i].removeEventListener('transitionend', cb);
        Util.removeClass(tab.assets[i], tab.assetExitClass);
      });
    })(i);}
  }
  
  // restart tab autoplay
  initLoopTabAutoplay(tab);
};

function resetVideo(tab, i, bool) {
  if(tab.videos[i]) {
    if(bool) {
      tab.videos[i].play();
    } else {
      tab.videos[i].pause();
      tab.videos[i].currentTime = 0;
    } 
  }
};

LoopTab.defaults = {
  element : '',
  autoplay : true,
  autoplayInterval: 5000
};

//initialize the Tab objects
var loopTabs = document.getElementsByClassName('js-loop-tabs');
if( loopTabs.length > 0 ) {
  var reducedMotion = Util.osHasReducedMotion(),
    cssVariableSupport = ('CSS' in window) && Util.cssSupports('color', 'var(--var)');
  for( var i = 0; i < loopTabs.length; i++) {
    (function(i){
      var autoplay = (loopTabs[i].getAttribute('data-autoplay') && loopTabs[i].getAttribute('data-autoplay') == 'off' || reducedMotion) ? false : true,
      autoplayInterval = (loopTabs[i].getAttribute('data-autoplay-interval')) ? loopTabs[i].getAttribute('data-autoplay-interval') : 5000;
      new LoopTab({element: loopTabs[i], autoplay : autoplay, autoplayInterval : autoplayInterval});
    })(i);
  }
}
}());

 
// File#: _1_pie-chart
// Usage: codyhouse.co/license
(function() {
  var PieChart = function(opts) {
    this.options = Util.extend(PieChart.defaults , opts);
    this.element = this.options.element;
    this.chartArea = this.element.getElementsByClassName('js-pie-chart__area')[0];
    this.dataValues = this.element.getElementsByClassName('js-pie-chart__value');
    this.chartPaths;
    // used to convert data values to percentages
    this.percentageTot = 0; 
    this.percentageReset = getPercentageMultiplier(this);
    this.percentageStart = []; // store the start angle for each item in the chart
    this.percentageDelta = []; // store the end angle for each item in the chart
    // tooltip element
    this.tooltip = this.element.getElementsByClassName('js-pie-chart__tooltip');
    this.eventIds = [];
    this.hoverId = false;
    this.hovering = false;
    this.selectedIndex = false; // will be used for tooltip 
    this.chartLoaded = false; // used when chart is initially animated
    initPieChart(this);
    initTooltip(this);
  };

  function getPercentageMultiplier(chart) {
    var tot = 0;
    for(var i = 0; i < chart.dataValues.length; i++) {
      tot = tot + parseFloat(chart.dataValues[i].textContent);
    }
    return 100/tot;
  };

  function initPieChart(chart) {
    createChart(chart);
    animateChart(chart);
    // reset chart on resize (if required)
    resizeChart(chart);
  };

  function createChart(chart) {
    setChartSize(chart);
    // create svg element
    createChartSvg(chart);
    // visually hide svg element
    chart.chartArea.setAttribute('aria-hidden', true);
  };

  function setChartSize(chart) {
    chart.height = chart.chartArea.clientHeight;
    chart.width = chart.chartArea.clientWidth;
    // donut charts only
    if(chart.options.type == 'donut') {
      chart.donutSize = parseInt(getComputedStyle(chart.element).getPropertyValue('--pie-chart-donut-width'));
      if(chart.donutSize <= 0 || isNaN(chart.donutSize)) chart.donutSize = chart.width/4; 
    }
  };

  function createChartSvg(chart) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="'+chart.width+'" height="'+chart.height+'" class="pie-chart__svg js-pie-chart__svg"></svg>';
    chart.chartArea.innerHTML = chart.chartArea.innerHTML + svg;
    chart.svg = chart.chartArea.getElementsByClassName('js-pie-chart__svg')[0];
    // create chart content
    getPieSvgCode(chart);
  };

  function getPieSvgCode(chart) {
    var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    gEl.setAttribute('class', 'pie-chart__dataset js-pie-chart__dataset');
    for(var i = 0; i < chart.dataValues.length; i++) {
      var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      Util.setAttributes(pathEl, {d: getPiePath(chart, i), class: 'pie-chart__data-path pie-chart__data-path--'+(i+1)+' js-pie-chart__data-path js-pie-chart__data-path--'+(i+1), 'data-index': i, 'stroke-linejoin': 'round'});
      var customStyle = chart.dataValues[i].getAttribute('data-pie-chart-style');
      if(customStyle) pathEl.setAttribute('style', customStyle);
      gEl.appendChild(pathEl);
    }

    chart.svg.appendChild(gEl);
    chart.chartPaths = chart.svg.querySelectorAll('.js-pie-chart__data-path');
  };

  function getPiePath(chart, index) {
    var startAngle = chart.percentageTot*chart.percentageReset*3.6; //convert from percentage to angles
    var dataValue = parseFloat(chart.dataValues[index].textContent);
    // update percentage start
    chart.percentageStart.push(startAngle);
    chart.percentageDelta.push(dataValue*chart.percentageReset*3.6);
    chart.percentageTot = chart.percentageTot + dataValue;
    var endAngle = chart.percentageTot*chart.percentageReset*3.6;
    return getPathCode(chart, startAngle, endAngle);
  };

  function getPathCode(chart, startAngle, endAngle) {
    // if we still need to animate the chart -> reset endAngle
    if(!chart.chartLoaded && chart.options.animate && intersectionObserver && ! reducedMotion) {
      endAngle = startAngle;
    }
    if(chart.options.type == 'pie') {
      return getPieArc(chart.width/2, chart.width/2, chart.width/2, startAngle, endAngle);
    } else { //donut
      return getDonutArc(chart.width/2, chart.width/2, chart.width/2, chart.donutSize, startAngle, endAngle);
    }
  };

  function initTooltip(chart) {
    if(chart.tooltip.length < 1) return;
    // init mouse events
    chart.eventIds['hover'] = handleEvent.bind(chart);
    chart.chartArea.addEventListener('mouseenter', chart.eventIds['hover']);
    chart.chartArea.addEventListener('mousedown', chart.eventIds['hover']);
    chart.chartArea.addEventListener('mousemove', chart.eventIds['hover']);
    chart.chartArea.addEventListener('mouseleave', chart.eventIds['hover']);
  };

  function handleEvent(event) {
    switch(event.type) {
      case 'mouseenter':
      case 'mousedown':
        hoverChart(this, event);
        break;
      case 'mousemove': 
        var self = this;
        self.hoverId  = window.requestAnimationFrame 
          ? window.requestAnimationFrame(function(){hoverChart(self, event)})
          : setTimeout(function(){hoverChart(self, event);});
        break;
      case 'mouseleave':
        resetTooltip(this);
        break;
    }
  };

  function hoverChart(chart, event) {
    if(chart.hovering) return;
    chart.hovering = true;
    var selectedIndex = getSelectedIndex(event);
    if(selectedIndex !== false && selectedIndex !== chart.selectedIndex) {
      chart.selectedIndex = selectedIndex;
      setTooltipContent(chart);
      placeTooltip(chart);
      Util.removeClass(chart.tooltip[0], 'is-hidden');
    }
    chart.hovering = false;
  };

  function resetTooltip(chart) {
    if(chart.hoverId) {
      (window.requestAnimationFrame) ? window.cancelAnimationFrame(chart.hoverId) : clearTimeout(chart.hoverId);
      chart.hoverId = false;
    }
    Util.addClass(chart.tooltip[0], 'is-hidden');
    chart.hovering = false;
    chart.selectedIndex = false;
  };

  function placeTooltip(chart) {
    var tooltipRadialPosition = (chart.options.type == 'donut') ? (chart.width - chart.donutSize)/2 : chart.width/4;
    var pathCenter = polarToCartesian(chart.width/2, chart.width/2, tooltipRadialPosition, chart.percentageStart[chart.selectedIndex] + chart.percentageDelta[chart.selectedIndex]/2);

    chart.tooltip[0].setAttribute('style', 'left: '+pathCenter.x+'px; top: '+pathCenter.y+'px');
  };

  function setTooltipContent(chart) {
    chart.tooltip[0].textContent = chart.dataValues[chart.selectedIndex].textContent;
  };

  function getSelectedIndex(event) {
    if(event.target.tagName.toLowerCase() == 'path') {
      return parseInt(event.target.getAttribute('data-index'));
    }
    return false;
  };

  function resizeChart(chart) {
    window.addEventListener('resize', function() {
      clearTimeout(chart.eventIds['resize']);
      chart.eventIds['resize'] = setTimeout(doneResizing, 300);
    });

    function doneResizing() {
      resetChartResize(chart);
      removeChart(chart);
      createChart(chart);
      initTooltip(chart);
    };
  };

  function resetChartResize(chart) {
    chart.hovering = false;
    // reset event listeners
    if( chart.eventIds && chart.eventIds['hover']) {
      chart.chartArea.removeEventListener('mouseenter', chart.eventIds['hover']);
      chart.chartArea.removeEventListener('mousedown', chart.eventIds['hover']);
      chart.chartArea.removeEventListener('mousemove', chart.eventIds['hover']);
      chart.chartArea.removeEventListener('mouseleave', chart.eventIds['hover']);
    }
  };

  function removeChart(chart) {
    // on resize -> remove svg and create a new one
    chart.svg.remove();
  };

  function animateChart(chart) {
    if(!chart.options.animate || chart.chartLoaded || reducedMotion || !intersectionObserver) return;
    var observer = new IntersectionObserver(chartObserve.bind(chart), {rootMargin: "0px 0px -200px 0px"});
    observer.observe(chart.element);
  };

  function chartObserve(entries, observer) { // observe chart position -> start animation when inside viewport
    if(entries[0].isIntersecting) {
      this.chartLoaded = true;
      animatePath(this);
      observer.unobserve(this.element);
    }
  };

  function animatePath(chart, type) {
    var currentTime = null,
      duration = 400/chart.dataValues.length;
        
    var animateSinglePath = function(index, timestamp) {
      if (!currentTime) currentTime = timestamp;        
      var progress = timestamp - currentTime;
      if(progress > duration) progress = duration;

      var startAngle = chart.percentageStart[index];
      var endAngle =  startAngle + chart.percentageDelta[index]*(progress/duration);

      var path = chart.element.getElementsByClassName('js-pie-chart__data-path--'+(index+1))[0];
      var pathCode = getPathCode(chart, startAngle, endAngle);;
      path.setAttribute('d', pathCode);
      
      if(progress < duration) {
        window.requestAnimationFrame(function(timestamp) {animateSinglePath(index, timestamp);});
      } else if(index < chart.dataValues.length - 1) {
        currentTime = null;
        window.requestAnimationFrame(function(timestamp) {animateSinglePath(index + 1, timestamp);});
      }
    };

    window.requestAnimationFrame(function(timestamp) {animateSinglePath(0, timestamp);});
  };

  // util functions - get paths d values
  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };
  
  function getPieArc(x, y, radius, startAngle, endAngle){
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
        "L", x,y,
        "L", start.x, start.y
    ].join(" ");

    return d;       
  };

  function getDonutArc(x, y, radius, radiusDelta, startAngle, endAngle){
    var s1 = polarToCartesian(x, y, (radius - radiusDelta), endAngle),
      s2 = polarToCartesian(x, y, radius, endAngle),
      s3 = polarToCartesian(x, y, radius, startAngle),
      s4 = polarToCartesian(x, y, (radius - radiusDelta), startAngle);


    var arcSweep = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        "M", s1.x, s1.y,
        "L", s2.x, s2.y, 
        "A", radius, radius, 0, arcSweep, 0, s3.x, s3.y, 
        "L", s4.x, s4.y, 
        "A", (radius - radiusDelta), (radius - radiusDelta), 0, arcSweep, 1, s1.x, s1.y
    ].join(" ");

    return d;       
  };

  PieChart.defaults = {
    element : '',
    type: 'pie', // can be pie or donut
    animate: false
  };

  window.PieChart = PieChart;

  //initialize the PieChart objects
  var pieCharts = document.getElementsByClassName('js-pie-chart');
  var intersectionObserver = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
    reducedMotion = Util.osHasReducedMotion();
  
  if( pieCharts.length > 0 ) {
    for( var i = 0; i < pieCharts.length; i++) {
      (function(i){
        var chartType = pieCharts[i].getAttribute('data-pie-chart-type') ? pieCharts[i].getAttribute('data-pie-chart-type') : 'pie';
        var animate = pieCharts[i].getAttribute('data-pie-chart-animation') && pieCharts[i].getAttribute('data-pie-chart-animation') == 'on' ? true : false;
        new PieChart({
          element: pieCharts[i],
          type: chartType,
          animate: animate
        });
      })(i);
    }
  }
}());



// File#: _1_vertical-timeline
// Usage: codyhouse.co/license
(function() {
  var VTimeline = function(element) {
    this.element = element;
    this.sections = this.element.getElementsByClassName('js-v-timeline__section');
    this.animate = this.element.getAttribute('data-animation') && this.element.getAttribute('data-animation') == 'on' ? true : false;
    this.animationClass = 'v-timeline__section--animate';
    this.animationDelta = '-150px';
    initVTimeline(this);
  };

  function initVTimeline(element) {
    if(!element.animate) return;
    for(var i = 0; i < element.sections.length; i++) {
      var observer = new IntersectionObserver(vTimelineCallback.bind(element, i),
      {rootMargin: "0px 0px "+element.animationDelta+" 0px"});
      observer.observe(element.sections[i]);
    }
  };

  function vTimelineCallback(index, entries, observer) {
    if(entries[0].isIntersecting) {
      Util.addClass(this.sections[index], this.animationClass);
      observer.unobserve(this.sections[index]);
    } 
  };

  //initialize the VTimeline objects
  var timelines = document.querySelectorAll('.js-v-timeline'),
    intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
    reducedMotion = Util.osHasReducedMotion();
  if( timelines.length > 0) {
    for( var i = 0; i < timelines.length; i++) {
      if(intersectionObserverSupported && !reducedMotion) (function(i){new VTimeline(timelines[i]);})(i);
      else timelines[i].removeAttribute('data-animation');
    }
  }
}());



  // File#: _1_radial-bar-chart
// Usage: codyhouse.co/license
(function() {
  var RadialBar = function(opts) {
    this.options = Util.extend(RadialBar.defaults , opts);
    this.element = this.options.element;
    this.chartArea = this.element.getElementsByClassName('js-radial-bar__area')[0];
    this.percentages = this.element.getElementsByClassName('js-radial-bar__value');
    this.chartDashStroke = [];
    this.tooltip = this.chartArea.getElementsByClassName('js-radial-bar__tooltip');
    this.eventIds = [];
    this.hoverId = false;
    this.hovering = false;
    this.selectedIndex = false; // will be used for tooltip 
    this.chartLoaded = false; // used when chart is initially animated
    initRadialBar(this);
  };

  function initRadialBar(chart) {
    createChart(chart);
    animateChart(chart);
    resizeChart(chart);
  };

  function createChart(chart) {
    setChartSize(chart);
    getChartVariables(chart); // get radius + gap values
    // create svg element
    createChartSvg(chart);
    // tooltip
    initTooltip(chart);
  };

  function setChartSize(chart) {
    chart.height = chart.chartArea.clientHeight;
    chart.width = chart.chartArea.clientWidth;
  };

  function getChartVariables(chart) {
    chart.circleGap = parseInt(getComputedStyle(chart.element).getPropertyValue('--radial-bar-gap'));
    if(isNaN(chart.circleGap)) chart.circleGap = 4;

    chart.circleStroke = parseInt(getComputedStyle(chart.element).getPropertyValue('--radial-bar-bar-stroke'));
    if(isNaN(chart.circleStroke)) chart.circleStroke = 10;
  };

  function createChartSvg(chart) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="'+chart.width+'" height="'+chart.height+'" class="radial-bar__svg js-radial-bar__svg"></svg>';
    chart.chartArea.innerHTML = chart.chartArea.innerHTML + svg;
    chart.svg = chart.chartArea.getElementsByClassName('js-radial-bar__svg')[0];
    // create chart content
    getRadialBarCode(chart);
  };

  function getRadialBarCode(chart) {
    for(var i = 0; i < chart.percentages.length; i++) {
      // for each percentage value, we'll create: a <g> wrapper + 2 <circle> elements (bg + fill)
      var gEl = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        circleFill = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
        circleBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

      var customClass = chart.percentages[i].getAttribute('data-radial-bar-color');
      if(!customClass) customClass = '';
        
      var radius = chart.height/2 - (chart.circleStroke + chart.circleGap)* i - chart.circleStroke;

      var circunference = 2*Math.PI*radius,
        percentage = parseInt(chart.percentages[i].textContent);

      chart.chartDashStroke.push([circunference*(percentage*7)/100, circunference*(100-(percentage*7))/100, circunference]);

      Util.setAttributes(circleBg, {cx: chart.height/2, cy: chart.width/2, r: radius, class: 'radial-bar__circle radial-bar__circle__bg', 'data-index': i});

      var dashArray = chart.chartDashStroke[i][0]+' '+chart.chartDashStroke[i][1];
      
      if(!chart.chartLoaded && chart.options.animate && intersectionObserver && ! reducedMotion) {
        // if chart has to be animated - start with empty circles
        dashArray = '0 '+2*circunference;
      }
      
      Util.setAttributes(circleFill, {cx: chart.height/2, cy: chart.width/2, r: radius, class: 'radial-bar__circle radial-bar__circle__fill js-radial-bar__circle__fill '+customClass, 'stroke-dasharray': dashArray, 'stroke-dashoffset': circunference/4, 'data-index': i});

      gEl.setAttribute('class', 'radial-bar__group');

      gEl.appendChild(circleBg);
      gEl.appendChild(circleFill);
      chart.svg.appendChild(gEl);
    }
  };

  function initTooltip(chart) {
    if(chart.tooltip.length < 1) return;
    // init mouse events
    chart.eventIds['hover'] = handleEvent.bind(chart);
    chart.chartArea.addEventListener('mouseenter', chart.eventIds['hover']);
    chart.chartArea.addEventListener('mousedown', chart.eventIds['hover']);
    chart.chartArea.addEventListener('mousemove', chart.eventIds['hover']);
    chart.chartArea.addEventListener('mouseleave', chart.eventIds['hover']);
  };

  function handleEvent(event) {
    // show tooltip on hover
    switch(event.type) {
      case 'mouseenter':
      case 'mousedown':
        hoverChart(this, event);
        break;
      case 'mousemove': 
        var self = this;
        self.hoverId  = window.requestAnimationFrame 
          ? window.requestAnimationFrame(function(){hoverChart(self, event)})
          : setTimeout(function(){hoverChart(self, event);});
        break;
      case 'mouseleave':
        resetTooltip(this);
        break;
    }
  };

  function hoverChart(chart, event) {
    if(chart.hovering) return;
    chart.hovering = true;
    var selectedIndex = getSelectedIndex(event);
    if(selectedIndex !== false && selectedIndex !== chart.selectedIndex) {
      chart.selectedIndex = selectedIndex;
      setTooltipContent(chart);
      Util.removeClass(chart.tooltip[0], 'is-hidden');
    } else if(selectedIndex === false) {
      resetTooltip(chart);
    }
    chart.hovering = false;
  };

  function resetTooltip(chart) {
    // hide tooltip
    if(chart.hoverId) {
      (window.requestAnimationFrame) ? window.cancelAnimationFrame(chart.hoverId) : clearTimeout(chart.hoverId);
      chart.hoverId = false;
    }
    Util.addClass(chart.tooltip[0], 'is-hidden');
    chart.hovering = false;
    chart.selectedIndex = false;
  };

  function setTooltipContent(chart) {
    chart.tooltip[0].textContent = chart.percentages[chart.selectedIndex].textContent;
  };

  function getSelectedIndex(event) {
    if(event.target.tagName.toLowerCase() == 'circle') {
      return parseInt(event.target.getAttribute('data-index'));
    }
    return false;
  };

  function resizeChart(chart) {
    // reset chart on resize
    window.addEventListener('resize', function() {
      clearTimeout(chart.eventIds['resize']);
      chart.eventIds['resize'] = setTimeout(doneResizing, 300);
    });

    function doneResizing() {
      resetChartResize(chart);
      removeChart(chart);
      createChart(chart);
      initTooltip(chart);
    };
  };

  function resetChartResize(chart) {
    chart.hovering = false;
    // reset event listeners
    if( chart.eventIds && chart.eventIds['hover']) {
      chart.chartArea.removeEventListener('mouseenter', chart.eventIds['hover']);
      chart.chartArea.removeEventListener('mousedown', chart.eventIds['hover']);
      chart.chartArea.removeEventListener('mousemove', chart.eventIds['hover']);
      chart.chartArea.removeEventListener('mouseleave', chart.eventIds['hover']);
    }
  };

  function removeChart(chart) {
    // on resize -> remove svg and create a new one
    chart.svg.remove();
  };

  function animateChart(chart) {
    // reveal chart when it enters the viewport
    if(!chart.options.animate || chart.chartLoaded || reducedMotion || !intersectionObserver) return;
    var observer = new IntersectionObserver(chartObserve.bind(chart), {rootMargin: "0px 0px -200px 0px"});
    observer.observe(chart.element);
  };

  function chartObserve(entries, observer) { // observe chart position -> start animation when inside viewport
    if(entries[0].isIntersecting) {
      this.chartLoaded = true;
      animatePath(this);
      observer.unobserve(this.element);
    }
  };

  function animatePath(chart) {
    var currentTime = null,
      duration = 600;
    var circles = chart.element.getElementsByClassName('js-radial-bar__circle__fill');
        
    var animateSinglePath = function(timestamp) {
      if (!currentTime) currentTime = timestamp;        
      var progress = timestamp - currentTime;
      if(progress > duration) progress = duration;

      for(var i = 0; i < chart.percentages.length; i++) {
        var fill = Math.easeOutQuart(progress, 0, chart.chartDashStroke[i][0], duration),
          empty = chart.chartDashStroke[i][2] - fill;

        circles[i].setAttribute('stroke-dasharray', fill+' '+empty);
      }
      
      if(progress < duration) {
        window.requestAnimationFrame(animateSinglePath);
      }
    };

    window.requestAnimationFrame(animateSinglePath);
  };

  RadialBar.defaults = {
    element : '',
    animate: false
  };

  window.RadialBar = RadialBar;

  // initialize the RadialBar objects
  var radialBar = document.getElementsByClassName('js-radial-bar');
  var intersectionObserver = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
    reducedMotion = Util.osHasReducedMotion();

  if( radialBar.length > 0 ) {
    for( var i = 0; i < radialBar.length; i++) {
      (function(i){
        var animate = radialBar[i].getAttribute('data-radial-bar-animation') && radialBar[i].getAttribute('data-radial-bar-animation') == 'on' ? true : false;
        new RadialBar({element: radialBar[i], animate: animate});
      })(i);
    }
  }
}());



// File#: _2_slideshow ============================================================================
// Usage: codyhouse.co/license
(function() {
var Slideshow = function(opts) {
  this.options = slideshowAssignOptions(Slideshow.defaults , opts);
  this.element = this.options.element;
  this.items = this.element.getElementsByClassName('js-slideshow__item');
  this.controls = this.element.getElementsByClassName('js-slideshow__control'); 
  this.selectedSlide = 0;
  this.autoplayId = false;
  this.autoplayPaused = false;
  this.navigation = false;
  this.navCurrentLabel = false;
  this.ariaLive = false;
  this.moveFocus = false;
  this.animating = false;
  this.supportAnimation = Util.cssSupports('transition');
  this.animationOff = (!Util.hasClass(this.element, 'slideshow--transition-fade') && !Util.hasClass(this.element, 'slideshow--transition-slide') && !Util.hasClass(this.element, 'slideshow--transition-prx'));
  this.animationType = Util.hasClass(this.element, 'slideshow--transition-prx') ? 'prx' : 'slide';
  this.animatingClass = 'slideshow--is-animating';
  initSlideshow(this);
  initSlideshowEvents(this);
  initAnimationEndEvents(this);
};

Slideshow.prototype.showNext = function() {
  showNewItem(this, this.selectedSlide + 1, 'next');
};

Slideshow.prototype.showPrev = function() {
  showNewItem(this, this.selectedSlide - 1, 'prev');
};

Slideshow.prototype.showItem = function(index) {
  showNewItem(this, index, false);
};

Slideshow.prototype.startAutoplay = function() {
  var self = this;
  if(this.options.autoplay && !this.autoplayId && !this.autoplayPaused) {
    self.autoplayId = setInterval(function(){
      self.showNext();
    }, self.options.autoplayInterval);
  }
};

Slideshow.prototype.pauseAutoplay = function() {
  var self = this;
  if(this.options.autoplay) {
    clearInterval(self.autoplayId);
    self.autoplayId = false;
  }
};

function slideshowAssignOptions(defaults, opts) {
  // initialize the object options
  var mergeOpts = {};
  mergeOpts.element = (typeof opts.element !== "undefined") ? opts.element : defaults.element;
  mergeOpts.navigation = (typeof opts.navigation !== "undefined") ? opts.navigation : defaults.navigation;
  mergeOpts.autoplay = (typeof opts.autoplay !== "undefined") ? opts.autoplay : defaults.autoplay;
  mergeOpts.autoplayInterval = (typeof opts.autoplayInterval !== "undefined") ? opts.autoplayInterval : defaults.autoplayInterval;
  mergeOpts.swipe = (typeof opts.swipe !== "undefined") ? opts.swipe : defaults.swipe;
  return mergeOpts;
};

function initSlideshow(slideshow) { // basic slideshow settings
  // if no slide has been selected -> select the first one
  if(slideshow.element.getElementsByClassName('slideshow__item--selected').length < 1) Util.addClass(slideshow.items[0], 'slideshow__item--selected');
  slideshow.selectedSlide = Util.getIndexInArray(slideshow.items, slideshow.element.getElementsByClassName('slideshow__item--selected')[0]);
  // create an element that will be used to announce the new visible slide to SR
  var srLiveArea = document.createElement('div');
  Util.setAttributes(srLiveArea, {'class': 'sr-only js-slideshow__aria-live', 'aria-live': 'polite', 'aria-atomic': 'true'});
  slideshow.element.appendChild(srLiveArea);
  slideshow.ariaLive = srLiveArea;
};

function initSlideshowEvents(slideshow) {
  // if slideshow navigation is on -> create navigation HTML and add event listeners
  if(slideshow.options.navigation) {
    // check if navigation has already been included
    if(slideshow.element.getElementsByClassName('js-slideshow__navigation').length == 0) {
      var navigation = document.createElement('ol'),
        navChildren = '';

      var navClasses = 'slideshow__navigation js-slideshow__navigation';
      if(slideshow.items.length <= 1) {
        navClasses = navClasses + ' is-hidden';
      } 
      
      navigation.setAttribute('class', navClasses);
      for(var i = 0; i < slideshow.items.length; i++) {
        var className = (i == slideshow.selectedSlide) ? 'class="slideshow__nav-item slideshow__nav-item--selected js-slideshow__nav-item"' :  'class="slideshow__nav-item js-slideshow__nav-item"',
          navCurrentLabel = (i == slideshow.selectedSlide) ? '<span class="sr-only js-slideshow__nav-current-label">Current Item</span>' : '';
        navChildren = navChildren + '<li '+className+'><button class="reset"><span class="sr-only">'+ (i+1) + '</span>'+navCurrentLabel+'</button></li>';
      }
      navigation.innerHTML = navChildren;
      slideshow.element.appendChild(navigation);
    }
    
    slideshow.navCurrentLabel = slideshow.element.getElementsByClassName('js-slideshow__nav-current-label')[0]; 
    slideshow.navigation = slideshow.element.getElementsByClassName('js-slideshow__nav-item');

    var dotsNavigation = slideshow.element.getElementsByClassName('js-slideshow__navigation')[0];

    dotsNavigation.addEventListener('click', function(event){
      navigateSlide(slideshow, event, true);
    });
    dotsNavigation.addEventListener('keyup', function(event){
      navigateSlide(slideshow, event, (event.key.toLowerCase() == 'enter'));
    });
  }
  // slideshow arrow controls
  if(slideshow.controls.length > 0) {
    // hide controls if one item available
    if(slideshow.items.length <= 1) {
      Util.addClass(slideshow.controls[0], 'is-hidden');
      Util.addClass(slideshow.controls[1], 'is-hidden');
    }
    slideshow.controls[0].addEventListener('click', function(event){
      event.preventDefault();
      slideshow.showPrev();
      updateAriaLive(slideshow);
    });
    slideshow.controls[1].addEventListener('click', function(event){
      event.preventDefault();
      slideshow.showNext();
      updateAriaLive(slideshow);
    });
  }
  // swipe events
  if(slideshow.options.swipe) {
    //init swipe
    new SwipeContent(slideshow.element);
    slideshow.element.addEventListener('swipeLeft', function(event){
      slideshow.showNext();
    });
    slideshow.element.addEventListener('swipeRight', function(event){
      slideshow.showPrev();
    });
  }
  // autoplay
  if(slideshow.options.autoplay) {
    slideshow.startAutoplay();
    // pause autoplay if user is interacting with the slideshow
    slideshow.element.addEventListener('mouseenter', function(event){
      slideshow.pauseAutoplay();
      slideshow.autoplayPaused = true;
    });
    slideshow.element.addEventListener('focusin', function(event){
      slideshow.pauseAutoplay();
      slideshow.autoplayPaused = true;
    });
    slideshow.element.addEventListener('mouseleave', function(event){
      slideshow.autoplayPaused = false;
      slideshow.startAutoplay();
    });
    slideshow.element.addEventListener('focusout', function(event){
      slideshow.autoplayPaused = false;
      slideshow.startAutoplay();
    });
  }
  // detect if external buttons control the slideshow
  var slideshowId = slideshow.element.getAttribute('id');
  if(slideshowId) {
    var externalControls = document.querySelectorAll('[data-controls="'+slideshowId+'"]');
    for(var i = 0; i < externalControls.length; i++) {
      (function(i){externalControlSlide(slideshow, externalControls[i]);})(i);
    }
  }
  // custom event to trigger selection of a new slide element
  slideshow.element.addEventListener('selectNewItem', function(event){
    // check if slide is already selected
    if(event.detail) {
      if(event.detail - 1 == slideshow.selectedSlide) return;
      showNewItem(slideshow, event.detail - 1, false);
    }
  });
};

function navigateSlide(slideshow, event, keyNav) { 
  // user has interacted with the slideshow navigation -> update visible slide
  var target = ( Util.hasClass(event.target, 'js-slideshow__nav-item') ) ? event.target : event.target.closest('.js-slideshow__nav-item');
  if(keyNav && target && !Util.hasClass(target, 'slideshow__nav-item--selected')) {
    slideshow.showItem(Util.getIndexInArray(slideshow.navigation, target));
    slideshow.moveFocus = true;
    updateAriaLive(slideshow);
  }
};

function initAnimationEndEvents(slideshow) {
  // remove animation classes at the end of a slide transition
  for( var i = 0; i < slideshow.items.length; i++) {
    (function(i){
      slideshow.items[i].addEventListener('animationend', function(){resetAnimationEnd(slideshow, slideshow.items[i]);});
      slideshow.items[i].addEventListener('transitionend', function(){resetAnimationEnd(slideshow, slideshow.items[i]);});
    })(i);
  }
};

function resetAnimationEnd(slideshow, item) {
  setTimeout(function(){ // add a delay between the end of animation and slideshow reset - improve animation performance
    if(Util.hasClass(item,'slideshow__item--selected')) {
      if(slideshow.moveFocus) Util.moveFocus(item);
      emitSlideshowEvent(slideshow, 'newItemVisible', slideshow.selectedSlide);
      slideshow.moveFocus = false;
    }
    Util.removeClass(item, 'slideshow__item--'+slideshow.animationType+'-out-left slideshow__item--'+slideshow.animationType+'-out-right slideshow__item--'+slideshow.animationType+'-in-left slideshow__item--'+slideshow.animationType+'-in-right');
    item.removeAttribute('aria-hidden');
    slideshow.animating = false;
    Util.removeClass(slideshow.element, slideshow.animatingClass); 
  }, 100);
};

function showNewItem(slideshow, index, bool) {
  if(slideshow.items.length <= 1) return;
  if(slideshow.animating && slideshow.supportAnimation) return;
  slideshow.animating = true;
  Util.addClass(slideshow.element, slideshow.animatingClass); 
  if(index < 0) index = slideshow.items.length - 1;
  else if(index >= slideshow.items.length) index = 0;
  var exitItemClass = getExitItemClass(slideshow, bool, slideshow.selectedSlide, index);
  var enterItemClass = getEnterItemClass(slideshow, bool, slideshow.selectedSlide, index);
  // transition between slides
  if(!slideshow.animationOff) Util.addClass(slideshow.items[slideshow.selectedSlide], exitItemClass);
  Util.removeClass(slideshow.items[slideshow.selectedSlide], 'slideshow__item--selected');
  slideshow.items[slideshow.selectedSlide].setAttribute('aria-hidden', 'true'); //hide to sr element that is exiting the viewport
  if(slideshow.animationOff) {
    Util.addClass(slideshow.items[index], 'slideshow__item--selected');
  } else {
    Util.addClass(slideshow.items[index], enterItemClass+' slideshow__item--selected');
  }
  // reset slider navigation appearance
  resetSlideshowNav(slideshow, index, slideshow.selectedSlide);
  slideshow.selectedSlide = index;
  // reset autoplay
  slideshow.pauseAutoplay();
  slideshow.startAutoplay();
  // reset controls/navigation color themes
  resetSlideshowTheme(slideshow, index);
  // emit event
  emitSlideshowEvent(slideshow, 'newItemSelected', slideshow.selectedSlide);
  if(slideshow.animationOff) {
    slideshow.animating = false;
    Util.removeClass(slideshow.element, slideshow.animatingClass);
  }
};

function getExitItemClass(slideshow, bool, oldIndex, newIndex) {
  var className = '';
  if(bool) {
    className = (bool == 'next') ? 'slideshow__item--'+slideshow.animationType+'-out-right' : 'slideshow__item--'+slideshow.animationType+'-out-left'; 
  } else {
    className = (newIndex < oldIndex) ? 'slideshow__item--'+slideshow.animationType+'-out-left' : 'slideshow__item--'+slideshow.animationType+'-out-right';
  }
  return className;
};

function getEnterItemClass(slideshow, bool, oldIndex, newIndex) {
  var className = '';
  if(bool) {
    className = (bool == 'next') ? 'slideshow__item--'+slideshow.animationType+'-in-right' : 'slideshow__item--'+slideshow.animationType+'-in-left'; 
  } else {
    className = (newIndex < oldIndex) ? 'slideshow__item--'+slideshow.animationType+'-in-left' : 'slideshow__item--'+slideshow.animationType+'-in-right';
  }
  return className;
};

function resetSlideshowNav(slideshow, newIndex, oldIndex) {
  if(slideshow.navigation) {
    Util.removeClass(slideshow.navigation[oldIndex], 'slideshow__nav-item--selected');
    Util.addClass(slideshow.navigation[newIndex], 'slideshow__nav-item--selected');
    slideshow.navCurrentLabel.parentElement.removeChild(slideshow.navCurrentLabel);
    slideshow.navigation[newIndex].getElementsByTagName('button')[0].appendChild(slideshow.navCurrentLabel);
  }
};

function resetSlideshowTheme(slideshow, newIndex) {
  var dataTheme = slideshow.items[newIndex].getAttribute('data-theme');
  if(dataTheme) {
    if(slideshow.navigation) slideshow.navigation[0].parentElement.setAttribute('data-theme', dataTheme);
    if(slideshow.controls[0]) slideshow.controls[0].parentElement.setAttribute('data-theme', dataTheme);
  } else {
    if(slideshow.navigation) slideshow.navigation[0].parentElement.removeAttribute('data-theme');
    if(slideshow.controls[0]) slideshow.controls[0].parentElement.removeAttribute('data-theme');
  }
};

function emitSlideshowEvent(slideshow, eventName, detail) {
  var event = new CustomEvent(eventName, {detail: detail});
  slideshow.element.dispatchEvent(event);
};

function updateAriaLive(slideshow) {
  slideshow.ariaLive.innerHTML = 'Item '+(slideshow.selectedSlide + 1)+' of '+slideshow.items.length;
};

function externalControlSlide(slideshow, button) { // control slideshow using external element
  button.addEventListener('click', function(event){
    var index = button.getAttribute('data-index');
    if(!index || index == slideshow.selectedSlide + 1) return;
    event.preventDefault();
    showNewItem(slideshow, index - 1, false);
  });
};

Slideshow.defaults = {
  element : '',
  navigation : true,
  autoplay : false,
  autoplayInterval: 5000,
  swipe: false
};

window.Slideshow = Slideshow;

//initialize the Slideshow objects
var slideshows = document.getElementsByClassName('js-slideshow');
if( slideshows.length > 0 ) {
  for( var i = 0; i < slideshows.length; i++) {
    (function(i){
      var navigation = (slideshows[i].getAttribute('data-navigation') && slideshows[i].getAttribute('data-navigation') == 'off') ? false : true,
        autoplay = (slideshows[i].getAttribute('data-autoplay') && slideshows[i].getAttribute('data-autoplay') == 'on') ? true : false,
        autoplayInterval = (slideshows[i].getAttribute('data-autoplay-interval')) ? slideshows[i].getAttribute('data-autoplay-interval') : 5000,
        swipe = (slideshows[i].getAttribute('data-swipe') && slideshows[i].getAttribute('data-swipe') == 'on') ? true : false;
      new Slideshow({element: slideshows[i], navigation: navigation, autoplay : autoplay, autoplayInterval : autoplayInterval, swipe : swipe});
    })(i);
  }
}
}());


// File#: _2_slideshow-preview-mode ============================================================================
// Usage: codyhouse.co/license
(function() {
var SlideshowPrew = function(opts) {
  this.options = Util.extend(SlideshowPrew.defaults , opts);
  this.element = this.options.element;
  this.list = this.element.getElementsByClassName('js-slideshow-pm__list')[0];
  this.items = this.list.getElementsByClassName('js-slideshow-pm__item');
  this.controls = this.element.getElementsByClassName('js-slideshow-pm__control'); 
  this.selectedSlide = 0;
  this.autoplayId = false;
  this.autoplayPaused = false;
  this.navigation = false;
  this.navCurrentLabel = false;
  this.ariaLive = false;
  this.moveFocus = false;
  this.animating = false;
  this.supportAnimation = Util.cssSupports('transition');
  this.itemWidth = false;
  this.itemMargin = false;
  this.containerWidth = false;
  this.resizeId = false;
  // we will need this to implement keyboard nav
  this.firstFocusable = false;
  this.lastFocusable = false;
  // fallback for browsers not supporting flexbox
  initSlideshow(this);
  initSlideshowEvents(this);
  initAnimationEndEvents(this);
  Util.addClass(this.element, 'slideshow-pm--js-loaded');
};

SlideshowPrew.prototype.showNext = function(autoplay) {
  showNewItem(this, this.selectedSlide + 1, 'next', autoplay);
};

SlideshowPrew.prototype.showPrev = function() {
  showNewItem(this, this.selectedSlide - 1, 'prev');
};

SlideshowPrew.prototype.showItem = function(index) {
  showNewItem(this, index, false);
};

SlideshowPrew.prototype.startAutoplay = function() {
  var self = this;
  if(this.options.autoplay && !this.autoplayId && !this.autoplayPaused) {
    self.autoplayId = setInterval(function(){
      self.showNext(true);
    }, self.options.autoplayInterval);
  }
};

SlideshowPrew.prototype.pauseAutoplay = function() {
  var self = this;
  if(this.options.autoplay) {
    clearInterval(self.autoplayId);
    self.autoplayId = false;
  }
};

function initSlideshow(slideshow) { // basic slideshow settings
  // if no slide has been selected -> select the first one
  if(slideshow.element.getElementsByClassName('slideshow-pm__item--selected').length < 1) Util.addClass(slideshow.items[0], 'slideshow-pm__item--selected');
  slideshow.selectedSlide = Util.getIndexInArray(slideshow.items, slideshow.element.getElementsByClassName('slideshow-pm__item--selected')[0]);
  // now set translate value to the container element
  setTranslateValue(slideshow);
  setTranslate(slideshow);
  resetSlideshowNav(slideshow, 0, slideshow.selectedSlide);
  setFocusableElements(slideshow);
  // if flexbox is not supported, set a width for the list element
  if(!flexSupported) resetSlideshowFlexFallback(slideshow);
  // now add class to animate while translating
  setTimeout(function(){Util.addClass(slideshow.list, 'slideshow-pm__list--has-transition');}, 50);
  // add arai-hidden to not selected slides
  for(var i = 0; i < slideshow.items.length; i++) {
    (i == slideshow.selectedSlide) ? slideshow.items[i].removeAttribute('aria-hidden') : slideshow.items[i].setAttribute('aria-hidden', 'true');
  }
  // create an element that will be used to announce the new visible slide to SR
  var srLiveArea = document.createElement('div');
  Util.setAttributes(srLiveArea, {'class': 'sr-only js-slideshow-pm__aria-live', 'aria-live': 'polite', 'aria-atomic': 'true'});
  slideshow.element.appendChild(srLiveArea);
  slideshow.ariaLive = srLiveArea;
};

function initSlideshowEvents(slideshow) {
  // if slideshow navigation is on -> create navigation HTML and add event listeners
  if(slideshow.options.navigation) {
    var navigation = document.createElement('ol'),
      navChildren = '';
    
    navigation.setAttribute('class', 'slideshow-pm__navigation');
    for(var i = 0; i < slideshow.items.length; i++) {
      var className = (i == slideshow.selectedSlide) ? 'class="slideshow-pm__nav-item slideshow-pm__nav-item--selected js-slideshow-pm__nav-item"' :  'class="slideshow-pm__nav-item js-slideshow-pm__nav-item"',
        navCurrentLabel = (i == slideshow.selectedSlide) ? '<span class="sr-only js-slideshow-pm__nav-current-label">Current Item</span>' : '';
      navChildren = navChildren + '<li '+className+'><button class="reset"><span class="sr-only">'+ (i+1) + '</span>'+navCurrentLabel+'</button></li>';
    }

    navigation.innerHTML = navChildren;
    slideshow.navCurrentLabel = navigation.getElementsByClassName('js-slideshow-pm__nav-current-label')[0]; 
    slideshow.element.appendChild(navigation);
    slideshow.navigation = slideshow.element.getElementsByClassName('js-slideshow-pm__nav-item');

    navigation.addEventListener('click', function(event){
      navigateSlide(slideshow, event, true);
    });
    navigation.addEventListener('keyup', function(event){
      navigateSlide(slideshow, event, (event.key.toLowerCase() == 'enter'));
    });
  }
  // slideshow arrow controls
  if(slideshow.controls.length > 0) {
    slideshow.controls[0].addEventListener('click', function(event){
      event.preventDefault();
      slideshow.showPrev();
      updateAriaLive(slideshow);
    });
    slideshow.controls[1].addEventListener('click', function(event){
      event.preventDefault();
      slideshow.showNext(false);
      updateAriaLive(slideshow);
    });
  }
  // navigate slideshow when clicking on preview
  if(slideshow.options.prewNav) {
    slideshow.element.addEventListener('click', function(event){
      var item = event.target.closest('.js-slideshow-pm__item');
      if(item && !Util.hasClass(item, 'slideshow-pm__item--selected')) {
        slideshow.showItem(Util.getIndexInArray(slideshow.items, item));
      }
    });
  }
  // swipe events
  if(slideshow.options.swipe) {
    //init swipe
    new SwipeContent(slideshow.element);
    slideshow.element.addEventListener('swipeLeft', function(event){
      slideshow.showNext(false);
    });
    slideshow.element.addEventListener('swipeRight', function(event){
      slideshow.showPrev();
    });
  }
  // autoplay
  if(slideshow.options.autoplay) {
    slideshow.startAutoplay();
    // pause autoplay if user is interacting with the slideshow
    slideshow.element.addEventListener('mouseenter', function(event){
      slideshow.pauseAutoplay();
      slideshow.autoplayPaused = true;
    });
    slideshow.element.addEventListener('focusin', function(event){
      slideshow.pauseAutoplay();
      slideshow.autoplayPaused = true;
    });
    slideshow.element.addEventListener('mouseleave', function(event){
      slideshow.autoplayPaused = false;
      slideshow.startAutoplay();
    });
    slideshow.element.addEventListener('focusout', function(event){
      slideshow.autoplayPaused = false;
      slideshow.startAutoplay();
    });
  }
  // keyboard navigation
  initKeyboardEvents(slideshow);
  // reset on resize
  window.addEventListener('resize', function(event){
    slideshow.pauseAutoplay();
    clearTimeout(slideshow.resizeId);
    slideshow.resizeId = setTimeout(function(){
      resetSlideshowResize(slideshow);
      setTimeout(function(){slideshow.startAutoplay();}, 60);
    }, 250)
  });
};

function initKeyboardEvents(slideshow) {
  // tab on selected slide -> if last focusable -> move to prev or next arrow
  // tab + shift selected slide -> if first focusable -> move to container
  if(slideshow.controls.length > 0) {
    // tab+shift on prev arrow -> move focus to last focusable element inside the selected slide (or to the slider container)
    slideshow.controls[0].addEventListener('keydown', function(event){
      if( (event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab') && event.shiftKey ) moveFocusToLast(slideshow);
    });
    // tab+shift on next arrow -> if first slide selectes -> move focus to last focusable element inside the selected slide (or to the slider container)
    slideshow.controls[1].addEventListener('keydown', function(event){
      if( (event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab') && event.shiftKey && (slideshow.selectedSlide == 0)) moveFocusToLast(slideshow);
    });
  }
  // check tab is pressed when focus is inside selected slide
  slideshow.element.addEventListener('keydown', function(event){
    if( event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab' ) {
      var target = event.target.closest('.js-slideshow-pm__item');
      if(target && Util.hasClass(target, 'slideshow-pm__item--selected')) moveFocusOutsideSlide(slideshow, event);
      else if(target || Util.hasClass(event.target, 'js-slideshow-pm') && !event.shiftKey) moveFocusToSelectedSlide(slideshow);
    } 
  });

  // detect tab moves to slideshow 
  window.addEventListener('keyup', function(event){
    if( event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab') {
      var target = event.target.closest('.js-slideshow-prew__item');
      if(target || Util.hasClass(event.target, 'js-slideshow-prew') && !event.shiftKey) moveFocusToSelectedSlide(slideshow);
    }
  });
};

function moveFocusToLast(slideshow) {
  event.preventDefault();
  if(slideshow.lastFocusable)	{
    slideshow.lastFocusable.focus();
  } else {
    Util.moveFocus(slideshow.element);
  }
};

function moveFocusToSelectedSlide(slideshow) { // focus is inside a slide that is not selected
  event.preventDefault();
  if(slideshow.firstFocusable)	{
    slideshow.firstFocusable.focus();
  } else if(slideshow.controls.length > 0) {
    (slideshow.selectedSlide == 0) ? slideshow.controls[1].getElementsByTagName('button')[0].focus() : slideshow.controls[0].getElementsByTagName('button')[0].focus();
  } else if(slideshow.options.navigation) {
    slideshow.navigation.getElementsByClassName('js-slideshow-pm__nav-item')[0].getElementsByTagName('button')[0].focus();
  }
};

function moveFocusOutsideSlide(slideshow, event) {
  if(event.shiftKey && slideshow.firstFocusable && event.target == slideshow.firstFocusable) {
    // shift+tab -> focus was on first foucusable element inside selected slide -> move to container
    event.preventDefault();
    Util.moveFocus(slideshow.element);
  } else if( !event.shiftKey && slideshow.lastFocusable && event.target == slideshow.lastFocusable) {
    event.preventDefault();
    
    if(slideshow.selectedSlide != 0) slideshow.controls[0].getElementsByTagName('button')[0].focus();
    else slideshow.controls[1].getElementsByTagName('button')[0].focus();
  }
};

function initAnimationEndEvents(slideshow) {
  slideshow.list.addEventListener('transitionend', function(){
    setTimeout(function(){ // add a delay between the end of animation and slideshow reset - improve animation performance
      resetAnimationEnd(slideshow);
    }, 100);
  });
};

function resetAnimationEnd(slideshow) {
  if(slideshow.moveFocus) Util.moveFocus(slideshow.items[slideshow.selectedSlide]);
  slideshow.items[slideshow.selectedSlide].removeAttribute('aria-hidden');
  slideshow.animating = false;
  slideshow.moveFocus = false;
  slideshow.startAutoplay();
};

function navigateSlide(slideshow, event, keyNav) { 
  // user has interacted with the slideshow navigation -> update visible slide
  var target = event.target.closest('.js-slideshow-pm__nav-item');
  if(keyNav && target && !Util.hasClass(target, 'slideshow-pm__nav-item--selected')) {
    slideshow.showItem(Util.getIndexInArray(slideshow.navigation, target));
    slideshow.moveFocus = true;
    updateAriaLive(slideshow);
  }
};

function showNewItem(slideshow, index, bool, autoplay) {
  if(slideshow.animating && slideshow.supportAnimation) return;
  if(autoplay) {
    if(index < 0) index = slideshow.items.length - 1;
    else if(index >= slideshow.items.length) index = 0;
  }
  if(index < 0 || index >= slideshow.items.length) return;
  slideshow.animating = true;
  Util.removeClass(slideshow.items[slideshow.selectedSlide], 'slideshow-pm__item--selected');
  slideshow.items[slideshow.selectedSlide].setAttribute('aria-hidden', 'true'); //hide to sr element that is exiting the viewport
  Util.addClass(slideshow.items[index], 'slideshow-pm__item--selected');
  resetSlideshowNav(slideshow, index, slideshow.selectedSlide);
  slideshow.selectedSlide = index;
  setTranslate(slideshow);
  slideshow.pauseAutoplay();
  setFocusableElements(slideshow);
  if(!transitionSupported) resetAnimationEnd(slideshow);
};

function updateAriaLive(slideshow) {
  slideshow.ariaLive.innerHTML = 'Item '+(slideshow.selectedSlide + 1)+' of '+slideshow.items.length;
};

function resetSlideshowResize(slideshow) {
  Util.removeClass(slideshow.list, 'slideshow-pm__list--has-transition');
  setTimeout(function(){
    setTranslateValue(slideshow);
    setTranslate(slideshow);
    Util.addClass(slideshow.list, 'slideshow-pm__list--has-transition');
  }, 30)
};

function setTranslateValue(slideshow) {
  var itemStyle = window.getComputedStyle(slideshow.items[slideshow.selectedSlide]);

  slideshow.itemWidth = parseFloat(itemStyle.getPropertyValue('width'));
  slideshow.itemMargin = parseFloat(itemStyle.getPropertyValue('margin-right'));
  slideshow.containerWidth = parseFloat(window.getComputedStyle(slideshow.element).getPropertyValue('width'));
};

function setTranslate(slideshow) {
  var translate = parseInt(((slideshow.itemWidth + slideshow.itemMargin) * slideshow.selectedSlide * (-1)) + ((slideshow.containerWidth - slideshow.itemWidth)*0.5));
  slideshow.list.style.transform = 'translateX('+translate+'px)';
  slideshow.list.style.msTransform = 'translateX('+translate+'px)';
};

function resetSlideshowNav(slideshow, newIndex, oldIndex) {
  if(slideshow.navigation) {
    Util.removeClass(slideshow.navigation[oldIndex], 'slideshow-pm__nav-item--selected');
    Util.addClass(slideshow.navigation[newIndex], 'slideshow-pm__nav-item--selected');
    slideshow.navCurrentLabel.parentElement.removeChild(slideshow.navCurrentLabel);
    slideshow.navigation[newIndex].getElementsByTagName('button')[0].appendChild(slideshow.navCurrentLabel);
  }
  if(slideshow.controls.length > 0) {
    Util.toggleClass(slideshow.controls[0], 'slideshow-pm__control--active', newIndex != 0);
    Util.toggleClass(slideshow.controls[1], 'slideshow-pm__control--active', newIndex != (slideshow.items.length - 1));
  }
};

function setFocusableElements(slideshow) {
  //get all focusable elements inside the selected slide
  var allFocusable = slideshow.items[slideshow.selectedSlide].querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary');
  getFirstVisible(slideshow, allFocusable);
  getLastVisible(slideshow, allFocusable);
};

function getFirstVisible(slideshow, elements) {
  slideshow.firstFocusable = false;
  //get first visible focusable element inside the selected slide
  for(var i = 0; i < elements.length; i++) {
    if( elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length ) {
      slideshow.firstFocusable = elements[i];
      return true;
    }
  }
};

function getLastVisible(slideshow, elements) {
  //get last visible focusable element inside the selected slide
  slideshow.lastFocusable = false;
  for(var i = elements.length - 1; i >= 0; i--) {
    if( elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length ) {
      slideshow.lastFocusable = elements[i];
      return true;
    }
  }
};

function resetSlideshowFlexFallback(slideshow) {
  slideshow.list.style.width = ((slideshow.items.length+1)*(slideshow.itemMargin+slideshow.itemWidth))+'px';
  for(var i = 0; i < slideshow.items.length; i++) {slideshow.items[i].style.width = slideshow.itemWidth+'px';}
};

SlideshowPrew.defaults = {
  element : '',
  navigation : true,
  autoplay : false,
  autoplayInterval: 5000,
  prewNav: false,
  swipe: false
};

window.SlideshowPrew = SlideshowPrew;

// initialize the slideshowsPrew objects
var slideshowsPrew = document.getElementsByClassName('js-slideshow-pm'),
  flexSupported = Util.cssSupports('align-items', 'stretch'),
  transitionSupported = Util.cssSupports('transition');
if( slideshowsPrew.length > 0 ) {
  for( var i = 0; i < slideshowsPrew.length; i++) {
    (function(i){
      var navigation = (slideshowsPrew[i].getAttribute('data-navigation') && slideshowsPrew[i].getAttribute('data-navigation') == 'off') ? false : true,
        autoplay = (slideshowsPrew[i].getAttribute('data-autoplay') && slideshowsPrew[i].getAttribute('data-autoplay') == 'on') ? true : false,
        autoplayInterval = (slideshowsPrew[i].getAttribute('data-autoplay-interval')) ? slideshowsPrew[i].getAttribute('data-autoplay-interval') : 5000,
        prewNav = (slideshowsPrew[i].getAttribute('data-pm-nav') && slideshowsPrew[i].getAttribute('data-pm-nav') == 'on' ) ? true : false, 
        swipe = (slideshowsPrew[i].getAttribute('data-swipe') && slideshowsPrew[i].getAttribute('data-swipe') == 'on') ? true : false;
      new SlideshowPrew({element: slideshowsPrew[i], navigation: navigation, autoplay : autoplay, autoplayInterval : autoplayInterval, swipe : swipe, prewNav: prewNav});
    })(i);
  }
}

}());

// File#: _2_dropdown ============================================================================
// Usage: codyhouse.co/license
(function() {
var Dropdown = function(element) {
  this.element = element;
  this.trigger = this.element.getElementsByClassName('js-dropdown__trigger')[0];
  this.dropdown = this.element.getElementsByClassName('js-dropdown__menu')[0];
  this.triggerFocus = false;
  this.dropdownFocus = false;
  this.hideInterval = false;
  // sublevels
  this.dropdownSubElements = this.element.getElementsByClassName('js-dropdown__sub-wrapper');
  this.prevFocus = false; // store element that was in focus before focus changed
  this.addDropdownEvents();
};

Dropdown.prototype.addDropdownEvents = function(){
  //place dropdown
  var self = this;
  this.placeElement();
  this.element.addEventListener('placeDropdown', function(event){
    self.placeElement();
  });
  // init dropdown
  this.initElementEvents(this.trigger, this.triggerFocus); // this is used to trigger the primary dropdown
  this.initElementEvents(this.dropdown, this.dropdownFocus); // this is used to trigger the primary dropdown
  // init sublevels
  this.initSublevels(); // if there are additional sublevels -> bind hover/focus events
};

Dropdown.prototype.placeElement = function() {
  var triggerPosition = this.trigger.getBoundingClientRect(),
    isRight = (window.innerWidth < triggerPosition.left + parseInt(getComputedStyle(this.dropdown).getPropertyValue('width')));

  var xPosition = isRight ? 'right: 0px; left: auto;' : 'left: 0px; right: auto;';
  this.dropdown.setAttribute('style', xPosition);
};

Dropdown.prototype.initElementEvents = function(element, bool) {
  var self = this;
  element.addEventListener('mouseenter', function(){
    bool = true;
    self.showDropdown();
  });
  element.addEventListener('focus', function(){
    self.showDropdown();
  });
  element.addEventListener('mouseleave', function(){
    bool = false;
    self.hideDropdown();
  });
  element.addEventListener('focusout', function(){
    self.hideDropdown();
  });
};

Dropdown.prototype.showDropdown = function(){
  if(this.hideInterval) clearInterval(this.hideInterval);
  this.showLevel(this.dropdown, true);
};

Dropdown.prototype.hideDropdown = function(){
  var self = this;
  if(this.hideInterval) clearInterval(this.hideInterval);
  this.hideInterval = setTimeout(function(){
    var dropDownFocus = document.activeElement.closest('.js-dropdown'),
      inFocus = dropDownFocus && (dropDownFocus == self.element);
    // if not in focus and not hover -> hide
    if(!self.triggerFocus && !self.dropdownFocus && !inFocus) {
      self.hideLevel(self.dropdown);
      // make sure to hide sub/dropdown
      self.hideSubLevels();
      self.prevFocus = false;
    }
  }, 300);
};

Dropdown.prototype.initSublevels = function(){
  var self = this;
  var dropdownMenu = this.element.getElementsByClassName('js-dropdown__menu');
  for(var i = 0; i < dropdownMenu.length; i++) {
    var listItems = dropdownMenu[i].children;
    // bind hover
    new menuAim({
      menu: dropdownMenu[i],
      activate: function(row) {
        var subList = row.getElementsByClassName('js-dropdown__menu')[0];
        if(!subList) return;
        Util.addClass(row.querySelector('a'), 'dropdown__item--hover');
        self.showLevel(subList);
      },
      deactivate: function(row) {
        var subList = row.getElementsByClassName('dropdown__menu')[0];
        if(!subList) return;
        Util.removeClass(row.querySelector('a'), 'dropdown__item--hover');
        self.hideLevel(subList);
      },
      submenuSelector: '.js-dropdown__sub-wrapper',
    });
  }
  // store focus element before change in focus
  this.element.addEventListener('keydown', function(event) { 
    if( event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab' ) {
      self.prevFocus = document.activeElement;
    }
  });
  // make sure that sublevel are visible when their items are in focus
  this.element.addEventListener('keyup', function(event) {
    if( event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab' ) {
      // focus has been moved -> make sure the proper classes are added to subnavigation
      var focusElement = document.activeElement,
        focusElementParent = focusElement.closest('.js-dropdown__menu'),
        focusElementSibling = focusElement.nextElementSibling;

      // if item in focus is inside submenu -> make sure it is visible
      if(focusElementParent && !Util.hasClass(focusElementParent, 'dropdown__menu--is-visible')) {
        self.showLevel(focusElementParent);
      }
      // if item in focus triggers a submenu -> make sure it is visible
      if(focusElementSibling && !Util.hasClass(focusElementSibling, 'dropdown__menu--is-visible')) {
        self.showLevel(focusElementSibling);
      }

      // check previous element in focus -> hide sublevel if required 
      if( !self.prevFocus) return;
      var prevFocusElementParent = self.prevFocus.closest('.js-dropdown__menu'),
        prevFocusElementSibling = self.prevFocus.nextElementSibling;
      
      if( !prevFocusElementParent ) return;
      
      // element in focus and element prev in focus are siblings
      if( focusElementParent && focusElementParent == prevFocusElementParent) {
        if(prevFocusElementSibling) self.hideLevel(prevFocusElementSibling);
        return;
      }

      // element in focus is inside submenu triggered by element prev in focus
      if( prevFocusElementSibling && focusElementParent && focusElementParent == prevFocusElementSibling) return;
      
      // shift tab -> element in focus triggers the submenu of the element prev in focus
      if( focusElementSibling && prevFocusElementParent && focusElementSibling == prevFocusElementParent) return;
      
      var focusElementParentParent = focusElementParent.parentNode.closest('.js-dropdown__menu');
      
      // shift tab -> element in focus is inside the dropdown triggered by a siblings of the element prev in focus
      if(focusElementParentParent && focusElementParentParent == prevFocusElementParent) {
        if(prevFocusElementSibling) self.hideLevel(prevFocusElementSibling);
        return;
      }
      
      if(prevFocusElementParent && Util.hasClass(prevFocusElementParent, 'dropdown__menu--is-visible')) {
        self.hideLevel(prevFocusElementParent);
      }
    }
  });
};

Dropdown.prototype.hideSubLevels = function(){
  var visibleSubLevels = this.dropdown.getElementsByClassName('dropdown__menu--is-visible');
  if(visibleSubLevels.length == 0) return;
  while (visibleSubLevels[0]) {
    this.hideLevel(visibleSubLevels[0]);
   }
   var hoveredItems = this.dropdown.getElementsByClassName('dropdown__item--hover');
   while (hoveredItems[0]) {
    Util.removeClass(hoveredItems[0], 'dropdown__item--hover');
   }
};

Dropdown.prototype.showLevel = function(level, bool){
  if(bool == undefined) {
    //check if the sublevel needs to be open to the left
    Util.removeClass(level, 'dropdown__menu--left');
    var boundingRect = level.getBoundingClientRect();
    if(window.innerWidth - boundingRect.right < 5 && boundingRect.left + window.scrollX > 2*boundingRect.width) Util.addClass(level, 'dropdown__menu--left');
  }
  Util.addClass(level, 'dropdown__menu--is-visible');
  Util.removeClass(level, 'dropdown__menu--is-hidden');
};

Dropdown.prototype.hideLevel = function(level){
  if(!Util.hasClass(level, 'dropdown__menu--is-visible')) return;
  Util.removeClass(level, 'dropdown__menu--is-visible');
  Util.addClass(level, 'dropdown__menu--is-hidden');
  
  level.addEventListener('animationend', function cb(){
    level.removeEventListener('animationend', cb);
    Util.removeClass(level, 'dropdown__menu--is-hidden dropdown__menu--left');
  });
};

window.Dropdown = Dropdown;

var dropdown = document.getElementsByClassName('js-dropdown');
if( dropdown.length > 0 ) { // init Dropdown objects
  for( var i = 0; i < dropdown.length; i++) {
    (function(i){new Dropdown(dropdown[i]);})(i);
  }
}
}());



// File#: _3_looping-slideshow
// Usage: codyhouse.co/license
(function() {
  var LoopSlideshow = function(element) {
    this.element = element;
    this.slideshowObj = false;
    this.navItems = this.element.getElementsByClassName('js-slideshow__nav-item');
    this.autoplayInterval = 5000;
    this.autoplayPaused = false;
    this.fillingCSS = '--loop-slideshow-filling';
    this.pauseBtnClass = 'js-loop-slideshow__pause-btn';
    this.pauseBtn = this.element.getElementsByClassName(this.pauseBtnClass);
    this.animating = false;
    this.currentTime = false;

    initLoopSlideshow(this);
    initEvents(this);
  };

  function initLoopSlideshow(obj) {
    var autoplay = true,
      autoplayInterval = (obj.element.getAttribute('data-autoplay-interval')) ? obj.element.getAttribute('data-autoplay-interval') : obj.autoplayInterval,
      swipe = (obj.element.getAttribute('data-swipe') && obj.element.getAttribute('data-swipe') == 'on') ? true : false;
    obj.slideshowObj = new Slideshow({element: obj.element, navigation: true, autoplay : autoplay, autoplayInterval : autoplayInterval, swipe : swipe, navigationClass: 'loop-slideshow__navigation', navigationItemClass: 'loop-slideshow__nav-item', autoplayOnHover: true, autoplayOnFocus: true});
    // update autoplay interval
    obj.autoplayInterval = autoplayInterval;
    // filling effect for first item
    initFilling(obj, obj.slideshowObj.selectedSlide);
  };

  function initEvents(obj) {
    obj.element.addEventListener('newItemSelected', function(event){
      // new slide has been selected
      initFilling(obj, event.detail);
      toggleAutoplay(obj, false);
    });

    // custom click on image -> animate slideshow
    obj.element.addEventListener('click', function(event){
      if(event.target.closest('.js-loop-slideshow__pause-btn')) {
        toggleAutoplay(obj, !obj.autoplayPaused); // pause/play autoplay
      } else if(event.target.closest('.js-slideshow__item')) {
        showNewSlide(obj, event);
      }
    });
  };

  function initFilling(obj, index) {
    cancelFilling(obj);

    for(var i = 0; i < obj.navItems.length; i++) {
      setFilling(obj.navItems[i], obj.fillingCSS, 0);
    }
    // trigger animation
    obj.currentTime = false;
    animateFilling(obj, index);
  };

  function cancelFilling(obj) {
    if(obj.animating) { // clear previous animation
      window.cancelAnimationFrame(obj.animating);
      obj.animating = false;
    }
  };

  function animateFilling(obj, index) {
    obj.animating = window.requestAnimationFrame(function(timestamp){
      if(!obj.currentTime) obj.currentTime = timestamp;
      var progress = timestamp - obj.currentTime;
      if(progress > obj.autoplayInterval) progress = obj.autoplayInterval;
      setFilling(obj.navItems[index], obj.fillingCSS, (progress/obj.autoplayInterval).toFixed(3));
      
      if(progress < obj.autoplayInterval) {
        animateFilling(obj, index);
      } else {
        // animation is over
        obj.animating = false;
        obj.currentTime = false;
      }
    });
  };

  function setFilling(element, property, value) {
    element.style.setProperty(property, value);
  };

  function showNewSlide(obj, event) {
    // check if we should go next or prev
    var boundingRect = obj.element.getBoundingClientRect(),
      isNext = event.clientX > boundingRect.left + boundingRect.width/2;

    isNext ? obj.slideshowObj.showNext() : obj.slideshowObj.showPrev();
  };

  function toggleAutoplay(obj, bool) {
    obj.autoplayPaused = bool;
    if(obj.autoplayPaused) {
      cancelFilling(obj);
      obj.slideshowObj.pauseAutoplay();
    } else {
      obj.slideshowObj.startAutoplay();
      initFilling(obj, obj.slideshowObj.selectedSlide);
    }
    if(obj.pauseBtn.length > 0) {
      // update btn appearance
      Util.toggleClass(obj.pauseBtn[0], 'btn-states--state-b', obj.autoplayPaused);
      // update pressed status 
      obj.autoplayPaused ? obj.pauseBtn[0].setAttribute('aria-pressed', 'true'): obj.pauseBtn[0].setAttribute('aria-pressed', 'false');
    }
  };

  //initialize the ThumbSlideshow objects
  var slideshow = document.getElementsByClassName('js-loop-slideshow');
  if( slideshow.length > 0 ) {
    for( var i = 0; i < slideshow.length; i++) {
      (function(i){
        new LoopSlideshow(slideshow[i]);
      })(i);
    }
  }
}());



// File#: _3_hiding-nav
// Usage: codyhouse.co/license
(function() {
  var hidingNav = document.getElementsByClassName('js-hide-nav');
  if(hidingNav.length > 0 && window.requestAnimationFrame) {
    var mainNav = Array.prototype.filter.call(hidingNav, function(element) {
      return Util.hasClass(element, 'js-hide-nav--main');
    }),
    subNav = Array.prototype.filter.call(hidingNav, function(element) {
      return Util.hasClass(element, 'js-hide-nav--sub');
    });
    
    var scrolling = false,
      previousTop = window.scrollY,
      currentTop = window.scrollY,
      scrollDelta = 10,
      scrollOffset = 150, // scrollY needs to be bigger than scrollOffset to hide navigation
      headerHeight = 0; 

    var navIsFixed = false; // check if main navigation is fixed
    if(mainNav.length > 0 && Util.hasClass(mainNav[0], 'hide-nav--fixed')) navIsFixed = true;

    // store button that triggers navigation on mobile
    var triggerMobile = getTriggerMobileMenu();
    var prevElement = createPrevElement();
    var mainNavTop = 0;
    // list of classes the hide-nav has when it is expanded -> do not hide if it has those classes
    var navOpenClasses = hidingNav[0].getAttribute('data-nav-target-class'),
      navOpenArrayClasses = [];
    if(navOpenClasses) navOpenArrayClasses = navOpenClasses.split(' ');
    getMainNavTop();
    if(mainNavTop > 0) {
      scrollOffset = scrollOffset + mainNavTop;
    }
    
    // init navigation and listen to window scroll event
    getHeaderHeight();
    initSecondaryNav();
    initFixedNav();
    resetHideNav();
    window.addEventListener('scroll', function(event){
      if(scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(resetHideNav);
    });

    window.addEventListener('resize', function(event){
      if(scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(function(){
        if(headerHeight > 0) {
          getMainNavTop();
          getHeaderHeight();
          initSecondaryNav();
          initFixedNav();
        }
        // reset both navigation
        hideNavScrollUp();

        scrolling = false;
      });
    });

    function getHeaderHeight() {
      headerHeight = mainNav[0].offsetHeight;
    };

    function initSecondaryNav() { // if there's a secondary nav, set its top equal to the header height
      if(subNav.length < 1 || mainNav.length < 1) return;
      subNav[0].style.top = (headerHeight - 1)+'px';
    };

    function initFixedNav() {
      if(!navIsFixed || mainNav.length < 1) return;
      mainNav[0].style.marginBottom = '-'+headerHeight+'px';
    };

    function resetHideNav() { // check if navs need to be hidden/revealed
      currentTop = window.scrollY;
      if(currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        hideNavScrollDown();
      } else if( previousTop - currentTop > scrollDelta || (previousTop - currentTop > 0 && currentTop < scrollOffset) ) {
        hideNavScrollUp();
      } else if( previousTop - currentTop > 0 && subNav.length > 0 && subNav[0].getBoundingClientRect().top > 0) {
        setTranslate(subNav[0], '0%');
      }
      // if primary nav is fixed -> toggle bg class
      if(navIsFixed) {
        var scrollTop = window.scrollY || window.pageYOffset;
        Util.toggleClass(mainNav[0], 'hide-nav--has-bg', (scrollTop > headerHeight + mainNavTop));
      }
      previousTop = currentTop;
      scrolling = false;
    };

    function hideNavScrollDown() {
      // if there's a secondary nav -> it has to reach the top before hiding nav
      if( subNav.length  > 0 && subNav[0].getBoundingClientRect().top > headerHeight) return;
      // on mobile -> hide navigation only if dropdown is not open
      if(triggerMobile && triggerMobile.getAttribute('aria-expanded') == "true") return;
      // check if main nav has one of the following classes
      if( mainNav.length > 0 && (!navOpenClasses || !checkNavExpanded())) {
        setTranslate(mainNav[0], '-100%'); 
        mainNav[0].addEventListener('transitionend', addOffCanvasClass);
      }
      if( subNav.length  > 0 ) setTranslate(subNav[0], '-'+headerHeight+'px');
    };

    function hideNavScrollUp() {
      if( mainNav.length > 0 ) {setTranslate(mainNav[0], '0%'); Util.removeClass(mainNav[0], 'hide-nav--off-canvas');mainNav[0].removeEventListener('transitionend', addOffCanvasClass);}
      if( subNav.length  > 0 ) setTranslate(subNav[0], '0%');
    };

    function addOffCanvasClass() {
      mainNav[0].removeEventListener('transitionend', addOffCanvasClass);
      Util.addClass(mainNav[0], 'hide-nav--off-canvas');
    };

    function setTranslate(element, val) {
      element.style.transform = 'translateY('+val+')';
    };

    function getTriggerMobileMenu() {
      // store trigger that toggle mobile navigation dropdown
      var triggerMobileClass = hidingNav[0].getAttribute('data-mobile-trigger');
      if(!triggerMobileClass) return false;
      if(triggerMobileClass.indexOf('#') == 0) { // get trigger by ID
        var trigger = document.getElementById(triggerMobileClass.replace('#', ''));
        if(trigger) return trigger;
      } else { // get trigger by class name
        var trigger = hidingNav[0].getElementsByClassName(triggerMobileClass);
        if(trigger.length > 0) return trigger[0];
      }
      
      return false;
    };

    function createPrevElement() {
      // create element to be inserted right before the mainNav to get its top value
      if( mainNav.length < 1) return false;
      var newElement = document.createElement("div"); 
      newElement.setAttribute('aria-hidden', 'true');
      mainNav[0].parentElement.insertBefore(newElement, mainNav[0]);
      var prevElement =  mainNav[0].previousElementSibling;
      prevElement.style.opacity = '0';
      return prevElement;
    };

    function getMainNavTop() {
      if(!prevElement) return;
      mainNavTop = prevElement.getBoundingClientRect().top + window.scrollY;
    };

    function checkNavExpanded() {
      var navIsOpen = false;
      for(var i = 0; i < navOpenArrayClasses.length; i++){
        if(Util.hasClass(mainNav[0], navOpenArrayClasses[i].trim())) {
          navIsOpen = true;
          break;
        }
      }
      return navIsOpen;
    };
    
  } else {
    // if window requestAnimationFrame is not supported -> add bg class to fixed header
    var mainNav = document.getElementsByClassName('js-hide-nav--main');
    if(mainNav.length < 1) return;
    if(Util.hasClass(mainNav[0], 'hide-nav--fixed')) Util.addClass(mainNav[0], 'hide-nav--has-bg');
  }
}());


// File#: _3_mega-site-navigation ============================================================================
// Usage: codyhouse.co/license
(function() {
var MegaNav = function(element) {
  this.element = element;
  this.search = this.element.getElementsByClassName('js-mega-nav__search');
  this.searchActiveController = false;
  this.menu = this.element.getElementsByClassName('js-mega-nav__nav');
  this.menuItems = this.menu[0].getElementsByClassName('js-mega-nav__item');
  this.menuActiveController = false;
  this.itemExpClass = 'mega-nav__item--expanded';
  this.classIconBtn = 'mega-nav__icon-btn--state-b';
  this.classSearchVisible = 'mega-nav__search--is-visible';
  this.classNavVisible = 'mega-nav__nav--is-visible';
  this.classMobileLayout = 'mega-nav--mobile';
  this.classDesktopLayout = 'mega-nav--desktop';
  this.layout = 'mobile';
  // store dropdown elements (if present)
  this.dropdown = this.element.getElementsByClassName('js-dropdown');
  // expanded class - added to header when subnav is open
  this.expandedClass = 'mega-nav--expanded';
  initMegaNav(this);
};

function initMegaNav(megaNav) {
  setMegaNavLayout(megaNav); // switch between mobile/desktop layout
  initSearch(megaNav); // controll search navigation
  initMenu(megaNav); // control main menu nav - mobile only
  initSubNav(megaNav); // toggle sub navigation visibility
  
  megaNav.element.addEventListener('update-menu-layout', function(event){
    setMegaNavLayout(megaNav); // window resize - update layout
  });
};

function setMegaNavLayout(megaNav) {
  var layout = getComputedStyle(megaNav.element, ':before').getPropertyValue('content').replace(/\'|"/g, '');
  if(layout == megaNav.layout) return;
  megaNav.layout = layout;
  Util.toggleClass(megaNav.element, megaNav.classDesktopLayout, megaNav.layout == 'desktop');
  Util.toggleClass(megaNav.element, megaNav.classMobileLayout, megaNav.layout != 'desktop');
  if(megaNav.layout == 'desktop') {
    closeSubNav(megaNav, false);
    // if the mega navigation has dropdown elements -> make sure they are in the right position (viewport awareness)
    triggerDropdownPosition(megaNav);
  } 
  closeSearch(megaNav, false);
  resetMegaNavOffset(megaNav); // reset header offset top value
  resetNavAppearance(megaNav); // reset nav expanded appearance
};

function resetMegaNavOffset(megaNav) {
  document.documentElement.style.setProperty('--mega-nav-offset-y', megaNav.element.getBoundingClientRect().top+'px');
};

function closeNavigation(megaNav) { // triggered by Esc key press
  // close search
  closeSearch(megaNav);
  // close nav
  if(Util.hasClass(megaNav.menu[0], megaNav.classNavVisible)) {
    toggleMenu(megaNav, megaNav.menu[0], 'menuActiveController', megaNav.classNavVisible, megaNav.menuActiveController, true);
  }
  //close subnav 
  closeSubNav(megaNav, false);
  resetNavAppearance(megaNav); // reset nav expanded appearance
};

function closeFocusNavigation(megaNav) { // triggered by Tab key pressed
  // close search when focus is lost
  if(Util.hasClass(megaNav.search[0], megaNav.classSearchVisible) && !document.activeElement.closest('.js-mega-nav__search')) {
    toggleMenu(megaNav, megaNav.search[0], 'searchActiveController', megaNav.classSearchVisible, megaNav.searchActiveController, true);
  }
  // close nav when focus is lost
  if(Util.hasClass(megaNav.menu[0], megaNav.classNavVisible) && !document.activeElement.closest('.js-mega-nav__nav')) {
    toggleMenu(megaNav, megaNav.menu[0], 'menuActiveController', megaNav.classNavVisible, megaNav.menuActiveController, true);
  }
  // close subnav when focus is lost
  for(var i = 0; i < megaNav.menuItems.length; i++) {
    if(!Util.hasClass(megaNav.menuItems[i], megaNav.itemExpClass)) continue;
    var parentItem = document.activeElement.closest('.js-mega-nav__item');
    if(parentItem && parentItem == megaNav.menuItems[i]) continue;
    closeSingleSubnav(megaNav, i);
  }
  resetNavAppearance(megaNav); // reset nav expanded appearance
};

function closeSearch(megaNav, bool) {
  if(megaNav.search.length < 1) return;
  if(Util.hasClass(megaNav.search[0], megaNav.classSearchVisible)) {
    toggleMenu(megaNav, megaNav.search[0], 'searchActiveController', megaNav.classSearchVisible, megaNav.searchActiveController, bool);
  }
} ;

function initSearch(megaNav) {
  if(megaNav.search.length == 0) return;
  // toggle search
  megaNav.searchToggles = document.querySelectorAll('[aria-controls="'+megaNav.search[0].getAttribute('id')+'"]');
  for(var i = 0; i < megaNav.searchToggles.length; i++) {(function(i){
    megaNav.searchToggles[i].addEventListener('click', function(event){
      // toggle search
      toggleMenu(megaNav, megaNav.search[0], 'searchActiveController', megaNav.classSearchVisible, megaNav.searchToggles[i], true);
      // close nav if it was open
      if(Util.hasClass(megaNav.menu[0], megaNav.classNavVisible)) {
        toggleMenu(megaNav, megaNav.menu[0], 'menuActiveController', megaNav.classNavVisible, megaNav.menuActiveController, false);
      }
      // close subnavigation if open
      closeSubNav(megaNav, false);
      resetNavAppearance(megaNav); // reset nav expanded appearance
    });
  })(i);}
};

function initMenu(megaNav) {
  if(megaNav.menu.length == 0) return;
  // toggle nav
  megaNav.menuToggles = document.querySelectorAll('[aria-controls="'+megaNav.menu[0].getAttribute('id')+'"]');
  for(var i = 0; i < megaNav.menuToggles.length; i++) {(function(i){
    megaNav.menuToggles[i].addEventListener('click', function(event){
      // toggle nav
      toggleMenu(megaNav, megaNav.menu[0], 'menuActiveController', megaNav.classNavVisible, megaNav.menuToggles[i], true);
      // close search if it was open
      if(Util.hasClass(megaNav.search[0], megaNav.classSearchVisible)) {
        toggleMenu(megaNav, megaNav.search[0], 'searchActiveController', megaNav.classSearchVisible, megaNav.searchActiveController, false);
      }
      resetNavAppearance(megaNav); // reset nav expanded appearance
    });
  })(i);}
};

function toggleMenu(megaNav, element, controller, visibleClass, toggle, moveFocus) {
  var menuIsVisible = Util.hasClass(element, visibleClass);
  Util.toggleClass(element, visibleClass, !menuIsVisible);
  Util.toggleClass(toggle, megaNav.classIconBtn, !menuIsVisible);
  menuIsVisible ? toggle.removeAttribute('aria-expanded') : toggle.setAttribute('aria-expanded', 'true');
  if(menuIsVisible) {
    if(toggle && moveFocus) toggle.focus();
    megaNav[controller] = false;
  } else {
    if(toggle) megaNav[controller] = toggle;
    getFirstFocusable(element).focus(); // move focus to first focusable element
  }
};

function getFirstFocusable(element) {
  var focusableEle = element.querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'),
    firstFocusable = false;
  for(var i = 0; i < focusableEle.length; i++) {
    if( focusableEle[i].offsetWidth || focusableEle[i].offsetHeight || focusableEle[i].getClientRects().length ) {
      firstFocusable = focusableEle[i];
      break;
    }
  }
  return firstFocusable;
};

function initSubNav(megaNav) {
  // toggle subnavigation visibility
  megaNav.element.addEventListener('click', function(event){
    var triggerBtn = event.target.closest('.js-mega-nav__control');
    if(!triggerBtn) return;
    var mainItem = triggerBtn.closest('.js-mega-nav__item');
    if(!mainItem) return;
    var itemExpanded = Util.hasClass(mainItem, megaNav.itemExpClass);
    Util.toggleClass(mainItem, megaNav.itemExpClass, !itemExpanded);
    itemExpanded ? triggerBtn.removeAttribute('aria-expanded') : triggerBtn.setAttribute('aria-expanded', 'true');
    if(megaNav.layout == 'desktop' && !itemExpanded) closeSubNav(megaNav, mainItem);
    // close search if open
    closeSearch(megaNav, false);
    resetNavAppearance(megaNav); // reset nav expanded appearance
  });
};

function closeSubNav(megaNav, selectedItem) {
  // close subnav when a new sub nav element is open
  if(megaNav.menuItems.length == 0 ) return;
  for(var i = 0; i < megaNav.menuItems.length; i++) {
    if(megaNav.menuItems[i] != selectedItem) closeSingleSubnav(megaNav, i);
  }
};

function closeSingleSubnav(megaNav, index) {
  Util.removeClass(megaNav.menuItems[index], megaNav.itemExpClass);
  var triggerBtn = megaNav.menuItems[index].getElementsByClassName('js-mega-nav__control');
  if(triggerBtn.length > 0) triggerBtn[0].removeAttribute('aria-expanded');
};

function triggerDropdownPosition(megaNav) {
  // emit custom event to properly place dropdown elements - viewport awarness
  if(megaNav.dropdown.length == 0) return;
  for(var i = 0; i < megaNav.dropdown.length; i++) {
    megaNav.dropdown[i].dispatchEvent(new CustomEvent('placeDropdown'));
  }
};

function resetNavAppearance(megaNav) {
  ( (megaNav.element.getElementsByClassName(megaNav.itemExpClass).length > 0 && megaNav.layout == 'desktop') || megaNav.element.getElementsByClassName(megaNav.classSearchVisible).length > 0 ||(megaNav.element.getElementsByClassName(megaNav.classNavVisible).length > 0 && megaNav.layout == 'mobile'))
    ? Util.addClass(megaNav.element, megaNav.expandedClass)
    : Util.removeClass(megaNav.element, megaNav.expandedClass);
};

//initialize the MegaNav objects
var megaNav = document.getElementsByClassName('js-mega-nav');
if(megaNav.length > 0) {
  var megaNavArray = [];
  for(var i = 0; i < megaNav.length; i++) {
    (function(i){megaNavArray.push(new MegaNav(megaNav[i]));})(i);
  }

  // key events
  window.addEventListener('keyup', function(event){
    if( (event.keyCode && event.keyCode == 27) || (event.key && event.key.toLowerCase() == 'escape' )) { // listen for esc key events
      for(var i = 0; i < megaNavArray.length; i++) {(function(i){
        closeNavigation(megaNavArray[i]);
      })(i);}
    }
    // listen for tab key
    if( (event.keyCode && event.keyCode == 9) || (event.key && event.key.toLowerCase() == 'tab' )) { // close search or nav if it looses focus
      for(var i = 0; i < megaNavArray.length; i++) {(function(i){
        closeFocusNavigation(megaNavArray[i]);
      })(i);}
    }
  });

  window.addEventListener('click', function(event){
    if(!event.target.closest('.js-mega-nav')) closeNavigation(megaNavArray[0]);
  });
  
  // resize - update menu layout
  var resizingId = false,
    customEvent = new CustomEvent('update-menu-layout');
  window.addEventListener('resize', function(event){
    clearTimeout(resizingId);
    resizingId = setTimeout(doneResizing, 200);
  });

  function doneResizing() {
    for( var i = 0; i < megaNavArray.length; i++) {
      (function(i){megaNavArray[i].element.dispatchEvent(customEvent)})(i);
    };
  };
}
}());