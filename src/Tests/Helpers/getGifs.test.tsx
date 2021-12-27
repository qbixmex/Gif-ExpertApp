import { getGifs } from '../../Helpers/getGifs';

// @ts-ignore
describe('Tests on getGifs Helpers', () => {
  test('Should load 6 items', async () => {
    const gifs = await getGifs("Dragon Ball Super");
    expect(gifs.length).toBe( 6 );
  });

  test('Should not load any items', async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe( 0 );
  });
});
