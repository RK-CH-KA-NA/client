'use strict'


page('/'
  , (ctx) => app.Channels.fetchAll(() => app.channelView.initIndexPage(ctx))
);

page('/playlists/:channel_id', (ctx) => app.Playlists.fetchById((ctx) => app.playListView.initPlaylistView()));

page();