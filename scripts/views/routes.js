'use strict'


page('/'
  , (ctx, next) => app.Channels.fetchAll(() => app.channelView.initIndexPage(ctx, next))
);

  page();