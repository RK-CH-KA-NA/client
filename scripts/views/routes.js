'use strict'

page('/', (ctx) => app.Channels.fetchAll(app.channelView.initIndexPage));

page('/channel/:channel_id'
  , (ctx, next) => app.Playlists.fetchById(ctx, next)
  , ctx => app.playlistView.initPlaylistView(ctx)
);

page('/playlists/:playlist_id'
  , (ctx, next) => app.Playlists.fetchPlaylist(ctx, next)
  , ctx => app.iframeView.initIframeView(ctx)
);

page('/about', (ctx, next) => app.channelView.initAboutPage(ctx, next));

page();