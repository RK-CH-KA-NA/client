'use strict'
page('/'
  , (ctx, next) => app.Channel.fetchChannels(() => app.ChannelsView.initIndexPage(ctx, next))

);

page('/channels'
  , (ctx, next) => app.Playlist.fetchPlaylists(() => app.PlaylistView.initIndexPage(ctx, next))

);
page('/channels/:playlist_id'
  , 
);



page('/admin'
  , () => app.adminView.initAdminPage()
);
page();


page();