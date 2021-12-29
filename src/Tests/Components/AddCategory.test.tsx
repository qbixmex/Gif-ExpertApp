import { shallow, ShallowWrapper } from 'enzyme';
import AddCategory from '../../Components/AddCategory';

// @ts-ignore
describe("Tests on AddCategory component", () => {

  const setCategories = jest.fn();
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  const text = "Dragon Ball";

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
  });

  test("Should match with snapshot", () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test("Should change textbox", () => {
    let input = wrapper.find("input");
    
    input.simulate("change", { target: { value: text } });
    input = wrapper.find("input");;

    expect( input.prop("value") ).toBe( text );
  });

  test("Should call setCategory and clean textbox", () => {
    wrapper.find( "input" ).simulate( "change", { target: { value: text } } );
    wrapper.find( "form" ).simulate( "submit", { preventDefault(){} } );
    expect( setCategories ).toHaveBeenCalledTimes( 1 );
    expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );
    expect( wrapper.find( "input" ).prop( "value" ) ).toBe( "" );
  });

  test("Should not post on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect( setCategories ).not.toHaveBeenCalled();
  });
});
