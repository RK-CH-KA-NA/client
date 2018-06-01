'use strict'

page('/', (ctx) => app.Channels.fetchAll(app.channelView.initIndexPage));

page('/channel/:channel_id'
  , (ctx, next) => app.Playlists.fetchById(ctx, next)
  , ctx => app.playlistView.initPlaylistView(ctx)
);

page('/playlists/:playlist_id', (ctx, next) => app.iframeView.initIframeView(ctx));

page('/about', (ctx, next) => app.channelView.initAboutPage(ctx, next));

page('/admin', (ctx) => app.adminView.initAdminPage(ctx));

page(`/addNew/:playlist_id`
  , (ctx, next) => app.Playlists.addNew(ctx, next)
  , (ctx) => app.Channels.fetchAll(app.channelView.initIndexPage));

page('/delete/:playlist_id'
  , (ctx, next) => app.Playlists.removePlaylist(ctx, next)
  , (ctx) => app.Channels.fetchAll(app.channelView.initIndexPage));


page();