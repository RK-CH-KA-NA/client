'use strict'


page('/'
  , (ctx) => app.Channels.fetchAll(() => app.channelView.initIndexPage(ctx))
);

page('/playlists/:channel_id',
      (ctx, next) => app.Playlists.fetchById(ctx, next),
      ctx => app.playlistView.initPlaylistView()
    )
   
page('/playlists/videos/:playlist_id',
    (ctx, next) => app.Playlists.fetchByPlayListId(ctx,next),
    ctx => app.iframeview.initIframeView()
   )

    

page();