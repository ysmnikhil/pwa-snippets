/**
* Webkul Software.
*
* @category Webkul, Uvdesk
* @package Webkul_PWA
* @author Nikhil
* @copyright Copyright (c) 2010-2016 Webkul Software Private Limited (https://webkul.com)
* @license https://store.webkul.com/license.html
*/

// Few listener for PWA/service worker with registering service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('app/sw.js').then(function(reg) {
        //our service worker code
        if (reg.waiting) {
            reg.waiting.postMessage({action: 'skipWaiting'});
            
        }else if (reg.installing) {

        } else if (reg.active) {

        }

        reg.addEventListener('updatefound', function() {

        });
    }).catch(function(err) {
        console.log("Service Worker Failed to Register. Reason: ", err);
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