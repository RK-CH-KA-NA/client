'use strict'


page('/'
  , (ctx, next) => app.Channels.fetchAll(() => app.channelView.initIndexPage(ctx, next))
);

page('/about', (ctx, next) => app.channelView.initAboutPage(ctx, next));

  page();