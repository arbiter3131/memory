import chai from 'chai'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'
import createChaiEnzyme from 'chai-enzyme'
import chaiJestSnapshot from 'chai-jest-snapshot'
import Adapter from 'enzyme-adapter-react-16'
import createChaiJestDiff from 'chai-jest-diff'
import enzymeToJSON from 'enzyme-to-json/serializer'
import { configure as configureEnzyme } from 'enzyme'

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(createChaiEnzyme())
  .use(chaiJestSnapshot)
  .use(sinonChai);

expect.addSnapshotSerializer(enzymeToJSON)

configureEnzyme({ adapter: new Adapter() })
