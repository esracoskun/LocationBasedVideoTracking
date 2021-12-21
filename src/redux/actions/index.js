import * as mapActions from './mapActions';
import * as apiYoutubeActions from './apiYoutubeActions';

const actions = {
  ...mapActions,
  ...apiYoutubeActions,
};

export { actions };
