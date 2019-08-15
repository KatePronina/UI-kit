import requireAll from '../requireAll';
import '../../components/kit/map/map-init';

requireAll(require.context('../../', true, /\.scss$/));
