/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function () {

    function init() {

        var overlay = document.querySelector('.md-overlay');
        $('body').on('click', '.md-trigger', function () {
            var el = this;
            var elem = $(this);
            var modal = document.querySelector('#' + elem.attr('data-modal')),
                    close = modal.querySelector('.md-close'),
                    onclose = modal.getAttribute('md-onclose');

            classie.add(modal, 'md-show');

            var overlay = $('#' + elem.attr('data-modal')).next();

            overlay.off('click', removeModalHandler);
            overlay.on('click', removeModalHandler);

            if (elem.hasClass('md-setperspective')) {
                setTimeout(function () {
                    classie.add(document.documentElement, 'md-perspective');
                }, 25);
            }
            $("html,body").css("overflow","hidden");
            function removeModal(hasPerspective) {
                classie.remove(modal, 'md-show');
                if (typeof onclose == 'string') {
                    var fn = window[onclose];
                    if (typeof fn === 'function')
                        fn.apply(window);
                }
                if (hasPerspective) {
                    classie.remove(document.documentElement, 'md-perspective');
                }
                $("html,body").css("overflow","visible");
            }

            function removeModalHandler() {
                removeModal(classie.has(el, 'md-setperspective'));
            }
            close.addEventListener('click', function (ev) {
                ev.stopPropagation();
                removeModalHandler();
            });

            return false;
        });
    }

    init();
})();