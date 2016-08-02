describe('Unit: pluginPluginMediaCenterRSS design filters', function () {
  beforeEach(module('mediaCenterRSSPluginDesign'));
  var filter;
  beforeEach(inject(
    function (_$filter_) {
      filter = _$filter_;
    }));

  describe('Unit: resizeImage filter', function () {
    it('resizeImage filter should returns an empty string if image url not provided', function () {
      var result;
      result = filter('resizeImage')(null, 88, 124);
      expect(result).toEqual('');
    });
    it('resizeImage filter should returns resized image url', function () {
      var result;
      result = filter('resizeImage')('https://imagelibserver.s3.amazonaws.com/25935164-2add-11e5-9d04-02f7ca55c361/950a50c0-400a-11e5-9af5-3f5e0d725ccb.jpg', 88, 124);
      expect(result).toEqual("http://s7obnu.cloudimage.io/s/resizenp/88x124/https://imagelibserver.s3.amazonaws.com/25935164-2add-11e5-9d04-02f7ca55c361/950a50c0-400a-11e5-9af5-3f5e0d725ccb.jpg");
    });
  });

  describe('Unit: cropImage filter', function () {
    it('cropImage filter should returns an empty string if image url not provided', function () {
      var result;
      result = filter('cropImage')(null, 88, 124);
      expect(result).toEqual('');
    });
    it('cropImage filter should returns cropped image url', function () {
      var result;
      result = filter('cropImage')('https://imagelibserver.s3.amazonaws.com/25935164-2add-11e5-9d04-02f7ca55c361/950a50c0-400a-11e5-9af5-3f5e0d725ccb.jpg', 88, 124);
      expect(result).toEqual('http://s7obnu.cloudimage.io/s/crop/88x124/https://imagelibserver.s3.amazonaws.com/25935164-2add-11e5-9d04-02f7ca55c361/950a50c0-400a-11e5-9af5-3f5e0d725ccb.jpg');
    });
  });
});