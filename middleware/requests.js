export default async function({ store, route }) {
  store.getters['blocks/blocks'].length < 1
    ? await store.dispatch('blocks/fetchBlocks')
    : null;

  if (route.path === '/') {
    store.getters['instagram/instagram'].length < 1
      ? await store.dispatch('instagram/fetchInstagram')
      : null;
    store.getters['video/video'].length < 1
      ? await store.dispatch('video/fetchVideo')
      : null;
    store.getters['statistics/statistics'].length < 1
      ? await store.dispatch('statistics/fetchStatistics')
      : null;
    store.getters['stories/stories'].length < 1
      ? await store.dispatch('stories/fetchStories')
      : null;
  }
  if (route.path === '/stories') {
    store.getters['stories/stories'].length < 1
      ? await store.dispatch('stories/fetchStories')
      : null;
  }
}
