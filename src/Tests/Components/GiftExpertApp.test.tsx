import { shallow } from 'enzyme';
import GiftExpertApp from '../../Components/GiftExpertApp';

// @ts-ignore
describe("Test on GifExpertApp", () => {
  const wrapper = shallow( <GiftExpertApp /> );

  test("Should match with snapshot", () => {
    expect( wrapper ).toMatchSnapshot();
  });
  
  test("Should have a title inside <h1> tag", () => {
    const text = "Gif Expert App";
    expect( wrapper.find("#title").text() ).toBe( text );
  });

  test("Should has <AddCategory /> Component", () => {
    expect( wrapper.find("AddCategory").length ).toBe( 1 );
  });

  test('Should show categories list', () => {
    const categories: string[] = ["Dagon ball", "Shingeki no kyojin"];
    const wrapper = shallow( <GiftExpertApp defaultCategories={ categories } /> );
    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find("GifGrid").length ).toBe( categories.length );
  });
});

