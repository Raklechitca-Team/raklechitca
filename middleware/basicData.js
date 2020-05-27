export default async function({ store }) {
  await store.dispatch('video/fetchVideo');
  await store.dispatch('statistics/fetchStatistics');
  await store.dispatch('blocks/fetchBlocks');
}
