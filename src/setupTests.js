import chai from 'chai'
import dirtyChai from 'dirty-chai'
import Adapter from 'enzyme-adapter-react-16'
import createChaiJestDiff from 'chai-jest-diff'
import createChaiEnzyme from 'chai-enzyme'
import { configure as configureEnzyme } from 'enzyme'

chai.use(dirtyChai).use(createChaiJestDiff()).use(createChaiEnzyme());

configureEnzyme({ adapter: new Adapter() })
