/* global wx, WP_Weixin */
/* jshint ignore:start */
jQuery(function($) {
/* jshint ignore:end */
    window.wpWeixinShareTimelineSuccessTrigger = function(data) {
        window.wpWeixinShareTimelineSuccess = new CustomEvent('wpWeixinShareTimelineSuccess', {'detail' : data});
        window.dispatchEvent(window.wpWeixinShareTimelineSuccess);
    };
  
    window.wpWeixinShareTimelineFailureTrigger = function(data) {
        window.wpWeixinShareTimelineFailure = new CustomEvent('wpWeixinShareTimelineFailure', {'detail' : data});
        window.dispatchEvent(window.wpWeixinShareTimelineFailure);
    };
  
    window.wpWeixinShareAppMessageSuccessTrigger = function(data) {
        window.wpWeixinShareAppMessageSuccess = new CustomEvent('wpWeixinShareAppMessageSuccess', {'detail' : data});
        window.dispatchEvent(window.wpWeixinShareAppMessageSuccess);
    };
  
    window.wpWeixinShareAppMessageFailureTrigger = function(data) {
        window.wpWeixinShareAppMessageFailure = new CustomEvent('wpWeixinShareAppMessageFailure', {'detail' : data});
        window.dispatchEvent(window.wpWeixinShareAppMessageFailure);
    };

    window.wpWeixinShareTimelineSuccessListener = function(callback) {
        window.addEventListener('wpWeixinShareTimelineSuccess', function (e) {

            if (typeof callback === 'function') {
                callback(e.detail);
            }
        });
    };

    window.wpWeixinShareTimelineFailureListener = function(callback) {
        window.addEventListener('wpWeixinShareTimelineFailure', function (e) {

            if (typeof callback === 'function') {
                callback(e.detail);
            }
        });
    };

    window.wpWeixinShareAppMessageSuccessListener = function(callback) {
        window.addEventListener('wpWeixinShareAppMessageSuccess', function (e) {

            if (typeof callback === 'function') {
                callback(e.detail);
            }
        });
    };

    window.wpWeixinShareAppMessageFailureListener = function(callback) {
        window.addEventListener('wpWeixinShareAppMessageFailure', function (e) {

            if (typeof callback === 'function') {
                callback(e.detail);
            }
        });
    };

    wx.config({
        debug:      WP_Weixin.debug,
        appId:      WP_Weixin.weixin.appid,
        timestamp:  WP_Weixin.weixin.timestamp,
        nonceStr:   WP_Weixin.weixin.nonceStr,
        signature:  WP_Weixin.weixin.signature,
        jsApiList:  [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'startRecord',
            'stopRecord',
            'onVoiceRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'onVoicePlayEnd',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'translateVoice',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'closeWindow',
            'scanQRCode',
            'addCard',
            'chooseCard',
            'openCard'
        ]
    });

    wx.ready(function() {

        if (WP_Weixin.share) {
            wx.onMenuShareTimeline({
                title: WP_Weixin.share.title,
                link: WP_Weixin.share.link,
                imgUrl: WP_Weixin.share.imgUrl,
                success: function () {
                    window.wpWeixinShareTimelineSuccessTrigger(WP_Weixin.share);
                },
                cancel: function () {
                    window.wpWeixinShareTimelineFailureTrigger(WP_Weixin.share);
                }
            });

            wx.onMenuShareAppMessage({
                title: WP_Weixin.share.title,
                desc: WP_Weixin.share.desc,
                link: WP_Weixin.share.link,
                imgUrl: WP_Weixin.share.imgUrl,
                success: function () {
                    window.wpWeixinShareAppMessageSuccessTrigger(WP_Weixin.share);
                },
                cancel: function () {
                    window.wpWeixinShareAppMessageFailureTrigger(WP_Weixin.share);
                }
            });
        }
    });
/* jshint ignore:start */
});
/* jshint ignore:end */