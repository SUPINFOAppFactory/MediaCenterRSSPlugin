'use strict';

(function (angular) {
  angular.module('mediaCenterRSSPluginContent')

  /**************
   *    ENUMs   *
   **************/

  /**
   * TAG_NAMES will be used to give an alias name for user's data object for buildfire.datastore CURD operations
   */
    .constant('TAG_NAMES', {
      RSS_FEED_INFO: 'RssFeedInfo'
    })

  /**
   * STATUS_CODE will be used for custom errors
   */
    .constant('STATUS_CODE', {
      UNDEFINED_DATA: 'UNDEFINED_DATA',
      UNDEFINED_ID: 'UNDEFINED_ID',
      ITEM_ARRAY_FOUND: 'ITEM_ARRAY_FOUND'
    })

  /**
   * STATUS_MESSAGES will be used for custom errors
   */
    .constant('STATUS_MESSAGES', {
      UNDEFINED_DATA: 'Undefined data provided',
      UNDEFINED_ID: 'Undefined id provided',
      ITEM_ARRAY_FOUND: 'Array of Items provided'
    })

  /**
   * LAYOUTS will be used to set item list layout and item details layout.
   */
    .constant('LAYOUTS', {
      itemListLayouts: [
        {name: "List_Layout_1"},
        {name: "List_Layout_2"},
        {name: "List_Layout_3"},
        {name: "List_Layout_4"}
      ],
      itemDetailsLayouts: [
        {name: "Feed_Layout_1"},
        {name: "Feed_Layout_2"}
      ]
    });
})(window.angular);