'use strict'

page('/', (ctx) => app.Channels.fetchAll(app.channelView.initIndexPage));

page('/channel/:channel_id'
  , (ctx, next) => app.Playlists.fetchById(ctx, next)
  , ctx => app.playlistView.initPlaylistView(ctx)
);

page('/playlists/:playlist_id'
  , (ctx, next) => app.iframeView.initIframeView(ctx));

page();