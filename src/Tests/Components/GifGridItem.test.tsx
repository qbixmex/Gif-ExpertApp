import { shallow } from "enzyme";
import { GifGridItem } from '../../Components/GifGridItem';
import { Gif } from "../../Interfaces";

const gif: Gif = {
  id: "1234",
  title: "Dragon Ball Super",
  url: "https://giphy.com/api/dragon-ball-super.gif"
};

const wrapper = shallow(
  <GifGridItem
    key={ gif.id }
    { ...gif }
  />
);

// @ts-ignore
describe("Test on GifGridItem", (): void => {
  test("Should load correctly", (): void => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Should match with title in component', (): void => {
    const title = wrapper.find("#title").text().trim();
    expect( title ).toBe( gif.title );
  });

  test('should to match image properties', (): void => {
    const image = wrapper.find("img");
    expect(image.props().id).toBe(gif.id);
    expect(image.props().alt).toBe(gif.title);
    expect(image.prop("src")).toBe(gif.url);
  });

  test('Should has "animate__animated animate__fadeIn" css classes', (): void => {
    const div = wrapper.find(".card");
    const className = div.prop("className");
    expect(className?.includes("animate__animated animate__fadeIn")).toBe( true );
  }) 
});
