/*
Name: Flat Forms Pack
Creator: Denis Saidov
Version: 0.1
Website: www.dsaidov.com
2014 © All rights reserved! Selling and distributing exclusively via Envato Marketplaces.
*/

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory;
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	$.fn.flatFormsPackModal = function (options) {
		var defaults = {
			width: 610, // max = 640
			height: 350, // max = 350
			showClose: true,
			showCloseText: '',
			closeByEscape: true,
			closeByDocument: true,
			holderClass: '',
			overlayClass: '',
			enableStackAnimation: false,
			onBlurContainer: '',
			openOnEvent: true,
			setEvent: 'click',
			onLoad: false,
			onUnload: false,
			template: '<p>This is test popin content!</p>'
		};

		options = $.extend(defaults, options);

		return this.each(function() {
			var self = $(this),
				body = $('body'),
				maxWidth = options.width > 640 ? 640 : options.width,
				maxHeight = options.height > 350 ? 350 : options.height,
				template = typeof options.template === 'function' ? options.template(self) : options.template;

			body.addClass('flatFormsPackModal-ready');

			if ($('.flatFormsPackModal-overlay').length === 0) {
				body.append('<div class="flatFormsPackModal-overlay ' + options.overlayClass + '"></div>');
			}

			if (options.onBlurContainer !== '') {
				$(options.onBlurContainer).addClass('flatFormsPackModal-blur');
			}

			function onDocumentKeyup (e) {
				if (options.closeByEscape) {
					if (e.keyCode === 27) {
						deactivate();
					}
				}
			}

			function onDocumentClick (e) {
				if (options.closeByDocument) {
					if ($(e.target).is('.flatFormsPackModal-overlay, .flatFormsPackModal-close')) {
						e.preventDefault();
						deactivate();
					}
				} else if ($(e.target).is('.flatFormsPackModal-close')) {
						e.preventDefault();
						deactivate();
				}
			}

			function activate () {
				if (typeof options.onLoad === 'function') {
					options.onLoad(self);
				}

				setTimeout(function() {
					body.addClass('flatFormsPackModal-active');
				}, 100);

				var $popin = $('<div class="flatFormsPackModal-popin ' + options.holderClass + '"></div>');
				$popin.append(template);
				body.append($popin);

				$('.flatFormsPackModal-popin').css({
					'width': maxWidth + 'px',
					'height': maxHeight + 'px',
					'margin-left': '-' + (maxWidth / 2 + 10) + 'px',
					'margin-top': '-' + (maxHeight / 2 + 10) + 'px'
				});

				if (options.showClose) {
					$('.flatFormsPackModal-popin').append('<a href="#" class="flatFormsPackModal-close">' + options.showCloseText + '</a>');
				}

				if (options.enableStackAnimation) {
					$('.flatFormsPackModal-popin').addClass('stack');
				}

				body.bind('keyup', onDocumentKeyup)
					.bind('click', onDocumentClick);
			}

			function deactivate () {
				body.unbind('keyup', onDocumentKeyup)
					.unbind('click', onDocumentClick)
					.removeClass('flatFormsPackModal-active');

				setTimeout(function() {
					$('.flatFormsPackModal-popin').remove();
				}, 500);

				if (typeof options.onUnload === 'function') {
					options.onUnload(self);
				}
			}

			if (options.openOnEvent) {
				self.bind(options.setEvent, function (e) {
					e.stopPropagation();

					if ($(e.target).is('a')) {
						e.preventDefault();
					}

					activate();
				});
			} else {
				activate();
			}
		});
	};
}));
