import {Register} from './Register';
import renderer from 'react-test-renderer';

it('render correctly Register component', () => {  
    const RegisterComponent = renderer.create(<Register />).toJSON();
    expect(RegisterComponent).toMatchSnapshot();
});