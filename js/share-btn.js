$(document).ready(function () {
  window.openShareOptions = function (button) {
      const $shareButton = $(button);
      const $card = $shareButton.closest('.media-card-buttons');
      const $shareOptions = $card.find('.share-options');
      const $mainBtn = $card.find('.main-btn');
      const $videoBtn = $card.find('.media-video-button');

      // Hide share button itself
      $shareButton.addClass("hidden");

      // Show share options
      $shareOptions.addClass("active");

      // Hide read more
      $mainBtn.addClass("hidden");

      // Hide video button
      $videoBtn.addClass("hidden");
  };

  window.closeShareOptions = function (button) {
      const $closeButton = $(button);
      const $card = $closeButton.closest('.media-card-buttons');
      const $shareOptions = $card.find('.share-options');
      const $mainBtn = $card.find('.main-btn');
      const $shareButton = $card.find('.media-share-button');
      const $videoBtn = $card.find('.media-video-button');

      // Show share button again
      $shareButton.removeClass("hidden");

      // Hide share options
      $shareOptions.removeClass("active");

      // Show read more
      $mainBtn.removeClass("hidden");

      // Show video button
      $videoBtn.removeClass("hidden");
  };
});