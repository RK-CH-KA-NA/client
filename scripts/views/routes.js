'use strict'

page('/', (ctx) => app.Channels.fetchAll(app.channelView.initIndexPage));

page('/playlists/:channel_id'
  , (ctx, next) => app.Playlists.fetchById(ctx, next)
  , ctx => app.playlistView.initPlaylistView(ctx)
);

page();