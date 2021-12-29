import { shallow } from 'enzyme';
import "@testing-library/jest-dom"
import { GifGrid } from '../../Components/GifGrid';
import useFetchGif from '../../Hooks/useFetchGif';
import { Gif } from "../../Interfaces";

jest.mock("../../Hooks/useFetchGif");

// @ts-ignore
describe('Tests on GifGrid', () => {
  test('Should match with snapshot', () => {
    // @ts-ignore
    useFetchGif.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow( <GifGrid category="Dragon Ball" /> );
    const loading = wrapper.find("#loading");

    expect( loading.exists() ).toBe( true );
    expect( loading.text() ).toBe("Loading")
    expect( wrapper ).toMatchSnapshot();
  });

  test('Should show items when fetch is loaded', () => {
    const gifs: Gif[] = [
      {
        id: "1",
        title: "Dragon Ball Super",
        url: "https://domain.com/apy_key/456747"
      },
      {
        id: "2",
        title: "Dragon Ball Super Brolly",
        url: "https://domain.com/apy_key/546578"
      }
    ];

    // @ts-ignore
    useFetchGif.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow( <GifGrid category="Dragon Ball" /> );
    expect( wrapper.find("#loading").exists() ).toBe( false );
    expect( wrapper.find("GifGridItem").length ).toBe( gifs.length );
  });
});
