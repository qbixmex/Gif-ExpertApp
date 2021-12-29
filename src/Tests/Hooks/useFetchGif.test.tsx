import useFetchGif from '../../Hooks/useFetchGif';
import { renderHook } from '@testing-library/react-hooks';

// @ts-ignore
describe("Test on useFetchGif Custom Hook", (): void => {
  test('Should return initial state', async (): Promise<void> => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGif( "Dragon Ball Super" ));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect( data ).toEqual( [] );
    expect( loading ).toBeTruthy();
  });

  test('Should return images array and change loading to false', async (): Promise<void> => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGif( "Dragon Ball Super" ) );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect( data.length ).toBe( 6 );
    expect( loading ).toBeFalsy();
  });
});
