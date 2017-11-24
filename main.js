/**
* Webkul Software.
*
* @category Webkul, Uvdesk
* @package Webkul_UVdesk_PWA
* @author Nikhil
* @copyright Copyright (c) 2010-2016 Webkul Software Private Limited (https://webkul.com)
* @license https://store.webkul.com/license.html
*/

//https://mdn.mozillademos.org/files/12636/sw-lifecycle.png
//https://mdn.mozillademos.org/files/12632/sw-events.png

// Few listener for PWA/service worker with registering service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
        //our service worker code

        if (reg.waiting) {


        }else if (reg.installing) {


        } else if (reg.active) {

        
        }

        reg.addEventListener('updatefound', function() {

        });
    })

    navigator.serviceWorker.addEventListener('controllerchange', function() {

    });

    navigator.serviceWorker.addEventListener('statechange', function() {
        
    });

    //for message passing
    navigator.serviceWorker.addEventListener('message', function() {
        
    });

    //our other service worker code
}